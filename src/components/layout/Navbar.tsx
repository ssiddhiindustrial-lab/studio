"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { servicesData } from "@/lib/services-data"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "Safety", href: "/safety" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  // Direct permanent link for logo
  const logoUrl = "https://lh3.googleusercontent.com/d/1FoiTdu48Dr-5jonDN_rkLsh_s15F8bBn"

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48 md:h-20 md:w-72 overflow-hidden">
              <Image 
                src={logoUrl} 
                alt="Siddhi Industrial Services Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-bold transition-colors uppercase tracking-tight whitespace-nowrap outline-none",
                      pathname.startsWith("/services")
                        ? "text-accent"
                        : "text-foreground/80 hover:text-accent hover:bg-accent/5"
                    )}>
                      {link.name} <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64 p-2">
                      <DropdownMenuItem asChild>
                        <Link href="/services" className="font-bold text-primary mb-1">
                          All Services
                        </Link>
                      </DropdownMenuItem>
                      <div className="h-px bg-border my-1" />
                      {servicesData.map((service) => (
                        <DropdownMenuItem key={service.slug} asChild>
                          <Link 
                            href={`/services/${service.slug}`}
                            className={cn(
                              "cursor-pointer py-2 text-xs",
                              pathname === `/services/${service.slug}` ? "text-accent font-bold" : ""
                            )}
                          >
                            {service.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-bold transition-colors uppercase tracking-tight whitespace-nowrap",
                    pathname === link.href
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent hover:bg-accent/5"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent/10 hover:text-accent focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden animate-in slide-in-from-top duration-300">
          <div className="space-y-1 px-2 pb-6 pt-2 bg-background border-b shadow-lg flex flex-col">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "w-full rounded-md px-3 py-4 text-lg font-bold uppercase tracking-widest",
                    pathname === link.href
                      ? "text-accent bg-accent/5"
                      : "text-foreground/70 hover:bg-accent/10 hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-6 pb-4 flex flex-col space-y-3">
                    {servicesData.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-sm font-medium border-l-2 pl-4",
                          pathname === `/services/${service.slug}`
                            ? "border-accent text-accent"
                            : "border-border text-muted-foreground hover:text-accent hover:border-accent"
                        )}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
