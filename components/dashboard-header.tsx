import { ArrowLeft, User, Settings, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-primary/5 backdrop-blur-sm lg:bg-transparent lg:p-6">
      <div className="flex items-center gap-3">
        <div className="lg:hidden flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Back</span>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Manage your invoices and track earnings</p>
        </div>
      </div>

      <h1 className="text-lg font-semibold text-foreground lg:hidden">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500"></Badge>
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
          <AvatarImage src="/professional-woman-avatar.png" />
          <AvatarFallback>
            <User className="w-4 h-4 lg:w-5 lg:h-5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
