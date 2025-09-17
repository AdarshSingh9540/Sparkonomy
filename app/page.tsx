import { CreateInvoiceCard } from "@/components/create-invoice-card"
import { TimePeriodSelector } from "@/components/time-period-selector"
import { EarningsOverview } from "@/components/earnings-overview"
import { IncomeChart } from "@/components/income-chart"
import { InvoiceList } from "@/components/invoice-list"
import { InvoiceProvider } from "@/contexts/invoice-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Dashboard() {
  return (
    <InvoiceProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <Navbar />

        <main className="flex-1">
          {/* Mobile Layout */}
          <div className="lg:hidden max-w-md mx-auto bg-background/80 backdrop-blur-sm min-h-full">
            <div className="px-4 py-6 space-y-6">
              <CreateInvoiceCard />
              <TimePeriodSelector />
              <EarningsOverview />
              <IncomeChart />
              <InvoiceList />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="xl:col-span-4 space-y-6">
                <CreateInvoiceCard />
                <TimePeriodSelector />
                <EarningsOverview />
              </div>

              {/* Right Column */}
              <div className="xl:col-span-8 space-y-6">
                <IncomeChart />
                <InvoiceList />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </InvoiceProvider>
  )
}
