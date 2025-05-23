"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Mail, MapPin, Phone, Database } from "lucide-react"
import { useTheme } from "next-themes"
import GoogleMapComponent from "./google-map"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold mb-4">
              <Database className="h-5 w-5" />
              <span>Youngmin Ju | Data Scientist</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Transforming complex data into actionable insights to solve business problems and drive decision-making.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/youngminju-phd" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/youngminju" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-muted-foreground hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contactme@youngminju.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1-213-378-8372</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>3855 W 7th St, Los Angeles, CA 90005</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <div className="w-full h-40 rounded-lg overflow-hidden">
              <GoogleMapComponent height="160px" isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Subscribe to Newsletter</h3>
              <div className="flex gap-2">
                <Input placeholder="Email address" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="flex items-center justify-start md:justify-end text-sm text-muted-foreground">
              <p>© 2023 Youngmin Ju. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
