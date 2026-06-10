import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const logoUrl = "https://lh3.googleusercontent.com/d/1GbtvzMhx-j2GeBUmANvJOua_oByeyvhc"

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-md bg-white p-1">
                <Image 
                  src={logoUrl} 
                  alt="Siddhi Build Logo" 
                  fill 
                  unoptimized
                  className="object-contain p-1"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight font-headline">
                SIDDHI <span className="text-accent">BUILD</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Industrial & Infrastructure Contractors building excellence with engineering precision. Over 13 years of expertise in turnkey industrial solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors">Projects Portfolio</Link></li>
              <li><Link href="/safety" className="hover:text-accent transition-colors">Safety & Compliance</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-headline">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Industrial Construction</li>
              <li>Structural Steel Works</li>
              <li>RCC Construction</li>
              <li>Warehousing Solutions</li>
              <li>Infrastructure Development</li>
              <li>Turnkey Projects</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-headline">Contact Info</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>K-403 Radhe Sky Line, Opp SBI Bank, 80ft TP Road, Sanand, Ahmedabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 91571 87484</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>s.d.patel.qw@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Siddhi Industrial Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
