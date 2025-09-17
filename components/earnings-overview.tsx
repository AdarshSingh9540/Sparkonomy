export function EarningsOverview() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm text-muted-foreground mb-1">Total Earnings</h3>
        <p className="text-2xl font-bold text-primary">$1,25,000</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm text-muted-foreground mb-1">Payment Awaited</h4>
          <p className="text-lg font-semibold text-chart-5">$25,000</p>
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground mb-1">Payment Overdue</h4>
          <p className="text-lg font-semibold text-destructive">$25,000</p>
        </div>
      </div>
    </div>
  )
}
