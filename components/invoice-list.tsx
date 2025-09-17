"use client"

import { useState } from "react"
import { Bell, Edit3, MoreHorizontal, Eye, Download, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useInvoices } from "@/contexts/invoice-context"

const statusConfig = {
  paid: { label: "Paid", className: "bg-green-100 text-green-800 hover:bg-green-100" },
  "partially-paid": { label: "Partially Paid", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
  overdue: { label: "Overdue", className: "bg-red-100 text-red-800 hover:bg-red-100" },
  awaited: { label: "Awaited", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
  draft: { label: "Draft", className: "bg-gray-100 text-gray-800 hover:bg-gray-100" },
}

export function InvoiceList() {
  const { invoices, updateInvoiceStatus } = useInvoices()
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const filteredInvoices =
    filterStatus === "all" ? invoices : invoices.filter((invoice) => invoice.status === filterStatus)

  const handleStatusUpdate = (invoiceId: string, newStatus: string) => {
    updateInvoiceStatus(invoiceId, newStatus as any)
  }

  const handleBulkAction = (action: string) => {
    console.log("[v0] Bulk action:", { action, selectedInvoices })
    // Here you would handle bulk actions
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">Your Invoices</h3>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full sm:w-32">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="awaited">Awaited</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>

          {selectedInvoices.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="whitespace-nowrap bg-transparent">
                  Bulk Actions ({selectedInvoices.length})
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleBulkAction("send")}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Reminders
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleBulkAction("download")}>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDFs
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {filteredInvoices.map((invoice) => (
          <Card key={invoice.id} className="bg-card hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 flex-shrink-0"
                    checked={selectedInvoices.includes(invoice.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedInvoices([...selectedInvoices, invoice.id])
                      } else {
                        setSelectedInvoices(selectedInvoices.filter((id) => id !== invoice.id))
                      }
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-card-foreground truncate">{invoice.title}</h4>
                    <p className="text-sm text-muted-foreground truncate">
                      {invoice.client} • ₹{invoice.amount.toLocaleString()} • Due: {invoice.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Badge
                    variant="secondary"
                    className={`${statusConfig[invoice.status].className} hidden sm:inline-flex`}
                  >
                    {statusConfig[invoice.status].label}
                  </Badge>

                  <Badge variant="secondary" className={`${statusConfig[invoice.status].className} sm:hidden text-xs`}>
                    {statusConfig[invoice.status].label.split(" ")[0]}
                  </Badge>

                  {invoice.hasNotification && <Bell className="w-4 h-4 text-amber-500" />}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Invoice
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit Invoice
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusUpdate(invoice.id, "paid")}>
                        Mark as Paid
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Send className="w-4 h-4 mr-2" />
                        Send Reminder
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredInvoices.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>No invoices found for the selected filter.</p>
        </div>
      )}
    </div>
  )
}
