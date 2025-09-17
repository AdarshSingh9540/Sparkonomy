"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TimePeriodSelector() {
  const [selectedPeriod, setSelectedPeriod] = useState("3Months")

  const periods = [
    { id: "1Month", label: "1Month" },
    { id: "3Months", label: "3Months" },
    { id: "1Year", label: "1Year" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Time Period</span>
        <span>dd:mm:yyyy - dd:mm:yyyy</span>
      </div>

      <div className="flex gap-2">
        {periods.map((period) => (
          <Button
            key={period.id}
            variant={selectedPeriod === period.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod(period.id)}
            className={selectedPeriod === period.id ? "bg-primary text-primary-foreground" : ""}
          >
            {period.label}
          </Button>
        ))}
      </div>

      <Button variant="outline" size="sm" className="w-full bg-transparent">
        <Calendar className="w-4 h-4 mr-2" />
        Custom
      </Button>
    </div>
  )
}
