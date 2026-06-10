"use client"

import * as React from "react"
import { Phone, Mail, MapPin, Send, MessageSquare, Calculator, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { aiProjectScopeAndEstimate } from "@/ai/flows/ai-project-scope-and-estimate"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [aiLoading, setAiLoading] = React.useState(false)
  const [aiResult, setAiResult] = React.useState<any>(null)
  const [requirements, setRequirements] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate Firestore write
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    toast({
      title: "Inquiry Sent Successfully",
      description: "Our engineering team will get back to you within 24 hours.",
    })
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const handleAiEstimate = async () => {
    if (!requirements) {
      toast({
        variant: "destructive",
        title: "Requirements Missing",
        description: "Please describe your project requirements first."
      })
      return
    }
    setAiLoading(true)
    try {
      const result = await aiProjectScopeAndEstimate({ clientRequirements: requirements })
      setAiResult(result)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Advisor Offline",
        description: "Could not generate estimate at this moment."
      })
    } finally {
      setAiLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Contact Our Experts</h1>
            <p className="text-xl text-white/70">Let's build your next industrial project with engineering precision and cost-effective solutions.</p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
            {/* Left Col: Form */}
            <div className="space-y-12">
              <div className="bg-white p-10 rounded-3xl shadow-xl border relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
                <h2 className="text-3xl font-bold text-primary font-headline mb-8 flex items-center gap-3">
                  <MessageSquare className="h-7 w-7 text-accent" /> Inquiry Hub
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Example Industries" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 91571 87484" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Project Type</Label>
                    <select id="type" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>Industrial Building</option>
                      <option>Factory Development</option>
                      <option>Warehousing</option>
                      <option>Structural Steel Works</option>
                      <option>RCC Works</option>
                      <option>Turnkey Project</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..." 
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg bg-primary hover:bg-accent font-bold">
                    {isSubmitting ? (
                      <> <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing... </>
                    ) : (
                      <> <Send className="mr-2 h-5 w-5" /> Send Inquiry </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Project Advisor Tool */}
              <div className="bg-secondary/50 p-10 rounded-3xl border border-accent/20 space-y-8 flex flex-col items-center text-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary font-headline flex items-center justify-center gap-2">
                    <Calculator className="h-6 w-6 text-accent" /> AI Project Advisor
                  </h3>
                  <p className="text-sm text-muted-foreground">Get an instant high-level scope and preliminary estimate powered by AI.</p>
                </div>
                
                <div className="space-y-4 w-full">
                  <Textarea 
                    placeholder="Example: I want to build a 20,000 sq ft industrial shed in Sanand for a heavy machinery plant with specialized RCC foundations."
                    className="bg-white text-center"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                  />
                  <Button onClick={handleAiEstimate} disabled={aiLoading} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    {aiLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Generate High-Level Estimate"}
                  </Button>
                </div>

                {aiResult && (
                  <div className="bg-white p-6 rounded-2xl border border-accent/30 animate-in fade-in slide-in-from-bottom-4 space-y-4 w-full">
                    <div className="space-y-1">
                      <p className="text-[10px] text-accent font-bold uppercase tracking-widest">Estimated Cost Range</p>
                      <p className="text-2xl font-bold text-primary font-headline">{aiResult.preliminaryCostEstimate}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-accent font-bold uppercase tracking-widest">High-Level Scope</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{aiResult.highLevelScope}</p>
                    </div>
                    <p className="text-[10px] text-muted-foreground italic">*This is an AI-generated preliminary estimate. Final costs may vary based on detailed engineering drawings.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Col: Info */}
            <div className="space-y-12">
              <div className="space-y-8 text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold text-primary font-headline">Office Information</h2>
                
                <div className="space-y-10 w-full flex flex-col items-center">
                  <div className="flex flex-col gap-4 items-center group max-w-sm">
                    <div className="bg-primary text-white p-4 rounded-2xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors shadow-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-primary font-headline mb-2">Main Office</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        K-403 Radhe Sky Line, Opp SBI Bank,<br />
                        80ft TP Road, Sanand, Ahmedabad,<br />
                        Gujarat - 382110
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 items-center group">
                    <div className="bg-primary text-white p-4 rounded-2xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors shadow-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-primary font-headline mb-2">Call Us</h4>
                      <p className="text-muted-foreground font-bold text-lg">+91 91571 87484</p>
                      <p className="text-sm text-muted-foreground">Mon - Sat, 9:00 AM to 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 items-center group">
                    <div className="bg-primary text-white p-4 rounded-2xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors shadow-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-primary font-headline mb-2">Email Us</h4>
                      <p className="text-muted-foreground font-bold text-lg">s.d.patel.qw@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Direct response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.69238318235!2d72.3789434!3d22.999039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959664555555555%3A0x1c8b3e8e8e8e8e8e!2sSanand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
