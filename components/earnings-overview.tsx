export function EarningsOverview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-4 flex flex-col items-start shadow-sm">
        <h3 className="text-xs font-medium text-primary mb-1 tracking-wide">
          Total Earnings
        </h3>
        <p className="text-2xl font-bold text-[var(--color-primary)]">
          $1,25,000
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-4 flex flex-col items-start shadow-sm">
          <h4 className="text-xs font-medium text-primary mb-1 tracking-wide">
            Payment Awaited
          </h4>
          <p className="text-lg font-semibold text-[var(--color-accent)]">
            $25,000
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-4 flex flex-col items-start shadow-sm">
          <h4 className="text-xs font-medium text-primary mb-1 tracking-wide">
            Payment Overdue
          </h4>
          <p className="text-lg font-semibold text-[var(--color-destructive)]">
            $25,000
          </p>
        </div>
      </div>
    </div>
  );
}
