
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Safety", href: "/safety" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const logoUrl = "https://lh3.googleusercontent.com/d/1FoiTdu48Dr-5jonDN_rkLsh_s15F8bBn"

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between gap-4">
          {/* Logo - Left Side */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative h-24 w-[250px] md:w-[320px] overflow-hidden transition-all">
                <Image 
                  src={logoUrl} 
                  alt="Siddhi Industrial Services Logo" 
                  fill 
                  unoptimized
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Links - Centered */}
          <div className="hidden lg:flex flex-grow justify-center">
            <div className="flex items-baseline space-x-1 xl:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-base font-bold transition-colors uppercase tracking-tight whitespace-nowrap",
                    pathname === link.href
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent hover:bg-accent/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Empty spacer for balancing on desktop, or Mobile menu button */}
          <div className="flex lg:w-[320px] justify-end shrink-0">
            <div className="lg:hidden">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden animate-in slide-in-from-top duration-300">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-background border-b shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-4 text-lg font-bold uppercase tracking-widest text-center",
                  pathname === link.href
                    ? "text-accent bg-accent/5"
                    : "text-foreground/70 hover:bg-accent/10 hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
