"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Invoice {
  id: string
  title: string
  client: string
  clientEmail: string
  amount: number
  date: string
  status: "paid" | "partially-paid" | "overdue" | "awaited" | "draft"
  hasNotification?: boolean
  items: InvoiceItem[]
}

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
}

interface InvoiceContextType {
  invoices: Invoice[]
  addInvoice: (invoice: Omit<Invoice, "id">) => void
  updateInvoiceStatus: (id: string, status: Invoice["status"]) => void
  deleteInvoice: (id: string) => void
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined)

const initialInvoices: Invoice[] = [
  {
    id: "1",
    title: "Website Development",
    client: "Tech Corp",
    clientEmail: "contact@techcorp.com",
    amount: 125000,
    date: "2024-06-15",
    status: "paid",
    items: [{ id: "1", description: "Website Development", quantity: 1, rate: 125000 }],
  },
  {
    id: "2",
    title: "Mobile App Design",
    client: "StartupXYZ",
    clientEmail: "hello@startupxyz.com",
    amount: 85000,
    date: "2024-06-15",
    status: "partially-paid",
    items: [{ id: "1", description: "Mobile App Design", quantity: 1, rate: 85000 }],
  },
  {
    id: "3",
    title: "Brand Identity",
    client: "Fashion Brand",
    clientEmail: "info@fashionbrand.com",
    amount: 65000,
    date: "2024-06-15",
    status: "paid",
    items: [{ id: "1", description: "Brand Identity", quantity: 1, rate: 65000 }],
  },
  {
    id: "4",
    title: "E-commerce Platform",
    client: "Retail Store",
    clientEmail: "admin@retailstore.com",
    amount: 250000,
    date: "2024-06-15",
    status: "overdue",
    hasNotification: true,
    items: [{ id: "1", description: "E-commerce Platform", quantity: 1, rate: 250000 }],
  },
  {
    id: "5",
    title: "Marketing Campaign",
    client: "Local Business",
    clientEmail: "owner@localbiz.com",
    amount: 45000,
    date: "2024-06-15",
    status: "awaited",
    hasNotification: true,
    items: [{ id: "1", description: "Marketing Campaign", quantity: 1, rate: 45000 }],
  },
  {
    id: "6",
    title: "Logo Design",
    client: "New Startup",
    clientEmail: "founder@newstartup.com",
    amount: 25000,
    date: "2024-06-15",
    status: "draft",
    items: [{ id: "1", description: "Logo Design", quantity: 1, rate: 25000 }],
  },
  {
    id: "7",
    title: "Web Maintenance",
    client: "Tech Corp",
    clientEmail: "contact@techcorp.com",
    amount: 35000,
    date: "2024-06-15",
    status: "paid",
    items: [{ id: "1", description: "Web Maintenance", quantity: 1, rate: 35000 }],
  },
]

export function InvoiceProvider({ children }: { children: ReactNode }) {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices)

  const addInvoice = (newInvoice: Omit<Invoice, "id">) => {
    const invoice: Invoice = {
      ...newInvoice,
      id: Date.now().toString(),
    }
    setInvoices((prev) => [invoice, ...prev])
  }

  const updateInvoiceStatus = (id: string, status: Invoice["status"]) => {
    setInvoices((prev) => prev.map((invoice) => (invoice.id === id ? { ...invoice, status } : invoice)))
  }

  const deleteInvoice = (id: string) => {
    setInvoices((prev) => prev.filter((invoice) => invoice.id !== id))
  }

  return (
    <InvoiceContext.Provider value={{ invoices, addInvoice, updateInvoiceStatus, deleteInvoice }}>
      {children}
    </InvoiceContext.Provider>
  )
}

export function useInvoices() {
  const context = useContext(InvoiceContext)
  if (context === undefined) {
    throw new Error("useInvoices must be used within an InvoiceProvider")
  }
  return context
}
