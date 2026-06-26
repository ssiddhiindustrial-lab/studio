
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getPageContent } from "@/services/cmsService"
import { servicesData } from "@/lib/services-data"

export default async function ServicesPage() {
  const content = await getPageContent("services") || {}

  const header = content.header || {
    title: "Industrial Expertise",
    description: "World-class construction services tailored for the most demanding industrial requirements."
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">{header.title}</h1>
            <p className="text-xl text-white/70">{header.description}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service) => (
              <div key={service.slug} className="bg-white rounded-2xl border shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="p-10 flex-grow space-y-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary font-headline">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">{service.shortDesc}</p>
                  </div>
                  <div className="space-y-3 w-full">
                    <p className="font-bold text-sm uppercase text-accent tracking-widest">Key Benefits</p>
                    <ul className="flex flex-col items-center space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-primary/80">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-8 border-t bg-secondary/30 rounded-b-2xl">
                  <Button asChild className="w-full bg-primary hover:bg-accent hover:text-accent-foreground group/btn h-12">
                    <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-accent font-bold uppercase tracking-wider text-sm">The Siddhi Approach</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-headline text-primary">Uncompromising Quality Management</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Every project follows our rigorous 4-step execution framework: Precise Planning, High-Grade Material Sourcing, Skilled Engineering, and Continuous Safety Audits.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {['Planning', 'Sourcing', 'Building', 'HSE Audit'].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-accent/20 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                  <span className="text-5xl font-black text-accent font-headline mb-2">{i+1}</span>
                  <span className="font-bold text-primary text-lg">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
