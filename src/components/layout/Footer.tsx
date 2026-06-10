import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const logoUrl = "https://lh3.googleusercontent.com/d/1FoiTdu48Dr-5jonDN_rkLsh_s15F8bBn"

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="relative h-20 w-[300px] md:w-[350px] overflow-hidden transition-all bg-white rounded-lg p-2 shadow-lg">
                <Image 
                  src={logoUrl} 
                  alt="Siddhi Industrial Services" 
                  fill 
                  unoptimized
                  className="object-contain object-left px-2"
                />
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Industrial & Infrastructure Contractors building excellence with engineering precision. Over 13 years of expertise in turnkey industrial solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-headline text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors">Projects Portfolio</Link></li>
              <li><Link href="/safety" className="hover:text-accent transition-colors">Safety & Compliance</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-headline text-white">Services</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Industrial Construction</li>
              <li>Structural Steel Works</li>
              <li>RCC Construction</li>
              <li>Warehousing Solutions</li>
              <li>Infrastructure Development</li>
              <li>Turnkey Projects</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-headline text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="leading-relaxed">K-403 Radhe Sky Line, Opp SBI Bank, 80ft TP Road, Sanand, Ahmedabad</span>
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

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Siddhi Industrial Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
