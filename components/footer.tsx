import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sparkonomy
                </h3>
                <p className="text-xs text-muted-foreground -mt-1">Creator Economy</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering creators with smart invoice management and financial tools to grow their business.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Invoices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© 2024 Sparkonomy. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for creators worldwide.</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Version 1.0.0</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Status: All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
