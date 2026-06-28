
"use client"

import * as React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2, MessageSquare, Send, Loader2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { servicesData } from "@/lib/services-data"
import { sendInquiryEmail } from "@/actions/emailActions"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ServiceDetailClientProps {
  slug: string
}

export default function ServiceDetailClient({ slug }: ServiceDetailClientProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Find the service data client-side to avoid serialization issues with icons
  const service = servicesData.find(s => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  const otherServices = servicesData.filter(s => s.slug !== service.slug).slice(0, 4)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      projectType: service.title,
      sourcePage: `Service: ${service.title}`
    }

    try {
      const result = await sendInquiryEmail(data)
      if (result.success) {
        toast({
          title: "Inquiry Received",
          description: `Our team will contact you regarding ${service.title} shortly.`,
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed")
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send inquiry. Please try again or contact us via WhatsApp.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col w-full items-center">
      {/* Header */}
      <section className="bg-primary py-24 text-white w-full text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" /> Back to All Services
          </Link>
          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs">{service.label}</p>
            <div className="w-20 h-20 bg-accent text-accent-foreground rounded-3xl flex items-center justify-center shadow-2xl">
              <service.icon className="h-10 w-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold font-headline mb-6 tracking-tight">{service.title}</h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed italic">{service.shortDesc}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background w-full">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 max-w-6xl">
          
          {/* Main Content Area */}
          <div className="flex-grow space-y-24">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-accent" />
                <h2 className="text-3xl font-bold text-primary font-headline">Detailed Overview</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {service.fullDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8 bg-white p-10 rounded-3xl border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary font-headline flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent" /> Key Benefits
                </h3>
                <ul className="space-y-5">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 group-hover:scale-150 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8 bg-white p-10 rounded-3xl border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary font-headline flex items-center gap-3">
                  <SettingsIcon className="h-6 w-6 text-primary" /> Technical Features
                </h3>
                <ul className="space-y-5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-accent" />
                <h2 className="text-3xl font-bold text-primary font-headline">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {service.faq.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-primary/10">
                    <AccordionTrigger className="text-left font-bold text-primary font-headline hover:text-accent py-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Other Services Linkage */}
            <div className="pt-24 border-t">
              <h3 className="text-2xl font-bold text-primary font-headline mb-10 flex items-center gap-3">
                Explore Other Industrial Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherServices.map((other) => (
                  <Link 
                    key={other.slug} 
                    href={`/services/${other.slug}`}
                    className="flex items-center p-6 bg-white rounded-2xl border shadow-sm hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all group"
                  >
                    <div className="p-3 bg-secondary rounded-xl text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors mr-4">
                      <other.icon className="h-6 w-6" />
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
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-t-4 border-t-accent sticky top-32">
              <div className="text-center space-y-3 mb-10">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-headline">Inquire Now</h3>
                <p className="text-sm text-muted-foreground px-4">Request a technically detailed proposal for your upcoming project.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Full Name</Label>
                  <Input name="name" id="name" placeholder="Engineering Head / Manager" required className="h-12 bg-secondary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Corporate Email</Label>
                  <Input name="email" id="email" type="email" placeholder="email@company.com" required className="h-12 bg-secondary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Direct Number</Label>
                  <Input name="phone" id="phone" type="tel" placeholder="+91" required className="h-12 bg-secondary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Requirement Details</Label>
                  <Textarea 
                    name="message"
                    id="message" 
                    placeholder={`Tell us about your ${service.title} needs...`} 
                    className="min-h-[120px] bg-secondary/30"
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-primary hover:bg-accent text-lg font-bold shadow-lg">
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                  ) : (
                    <><Send className="mr-2 h-5 w-5" /> Submit Inquiry</>
                  )}
                </Button>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-wider">Response within 24 business hours</p>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* Strong Final CTA */}
      <section className="py-24 bg-primary w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-headline">Ready to Engineer Your Industrial Vision?</h2>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Partner with the leading industrial civil contractors in Ahmedabad for a technically sound and cost-effective execution of your {service.title} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-16 px-12 text-xl font-bold rounded-2xl shadow-xl flex-grow">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 h-16 px-12 text-xl font-bold rounded-2xl flex-grow">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
