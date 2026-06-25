
"use client"

import * as React from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, MessageSquare, Send, Loader2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { servicesData } from "@/lib/services-data"

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const service = servicesData.find(s => s.slug === slug)

  if (!service) {
    notFound()
  }

  const otherServices = servicesData.filter(s => s.slug !== slug).slice(0, 4)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    toast({
      title: "Inquiry Received",
      description: `Our team will contact you regarding ${service.title} shortly.`,
    })
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="flex flex-col w-full items-center">
      {/* Header */}
      <section className="bg-primary py-24 text-white w-full text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" /> Back to All Services
          </Link>
          <div className="w-20 h-20 bg-accent text-accent-foreground rounded-3xl flex items-center justify-center mb-8 shadow-xl">
            <service.icon className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">{service.title}</h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">{service.shortDesc}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background w-full">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 max-w-6xl">
          
          {/* Main Content Area */}
          <div className="flex-grow space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary font-headline">Detailed Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 bg-white p-8 rounded-3xl border shadow-sm">
                <h3 className="text-xl font-bold text-primary font-headline flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" /> Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 bg-white p-8 rounded-3xl border shadow-sm">
                <h3 className="text-xl font-bold text-primary font-headline flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" /> Technical Features
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Other Services Linkage */}
            <div className="pt-12 border-t">
              <h3 className="text-2xl font-bold text-primary font-headline mb-8">Explore Other Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherServices.map((other) => (
                  <Link 
                    key={other.slug} 
                    href={`/services/${other.slug}`}
                    className="flex items-center p-6 bg-white rounded-2xl border shadow-sm hover:border-accent hover:shadow-md transition-all group"
                  >
                    <div className="p-3 bg-secondary rounded-xl text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors mr-4">
                      <other.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-primary font-headline group-hover:text-accent transition-colors">{other.title}</h4>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Form */}
          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white p-8 rounded-3xl shadow-xl border sticky top-32">
              <div className="text-center space-y-2 mb-8">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary font-headline">Inquire Now</h3>
                <p className="text-xs text-muted-foreground">Get a custom quote for this service.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 00000 00000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder={`Interested in ${service.title}...`} 
                    className="min-h-[100px]"
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary hover:bg-accent font-bold">
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Enquiry</>
                  )}
                </Button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
