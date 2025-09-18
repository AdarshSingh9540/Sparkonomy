"use client"

import { Bar, XAxis, YAxis, Line, ComposedChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", income: 3000, growth: 20 },
  { month: "Feb", income: 4500, growth: 50 },
  { month: "Mar", income: 6000, growth: 33 },
  { month: "Apr", income: 3500, growth: -42 },
  { month: "May", income: 5500, growth: 57 },
  { month: "Jun", income: 4000, growth: -27 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--primary))",
  },
  growth: {
    label: "Growth",
    color: "hsl(var(--destructive))",
  },
}

export function IncomeChart() {
  return (
    <div className="bg-card rounded-lg p-4 border">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Income Trend</h3>
        <p className="text-sm text-muted-foreground">Your monthly income and growth for the last 6 months.</p>
      </div>

      <ChartContainer config={chartConfig} className="h-48 w-full">
        <ComposedChart data={data}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis
            yAxisId="left"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            tickFormatter={(value) => `${value}%`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar yAxisId="left" dataKey="income" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
          <Line yAxisId="right" type="monotone" dataKey="growth" stroke="var(--color-growth)" strokeWidth={2} />
        </ComposedChart>
      </ChartContainer>

      <div className="flex items-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded"></div>
          <span>Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-1 bg-destructive rounded"></div>
          <span>Growth</span>
        </div>
      </div>
    </div>
  )
}
