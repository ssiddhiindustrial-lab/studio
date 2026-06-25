import Image from "next/image"
import { Target, Lightbulb, Quote } from "lucide-react"
import { SectionEditor } from "@/components/cms/SectionEditor"
import { getPageContent } from "@/services/cmsService"

export default async function AboutPage() {
  const content = await getPageContent("about") || {}

  const intro = content.intro || {
    subtitle: "Our Evolution",
    title: "A Legacy of Hard Work & Technical Precision",
    description: "Siddhi Industrial Services was founded on the principles of integrity, quality, and commitment. With a history spanning over two decades of technical expertise, we have evolved from site-level management to complex turnkey project delivery."
  }

  const founder = content.founder || {
    name: "Shailesh Patel",
    role: "Founder & Managing Director",
    quote: "Building is more than just concrete and steel; it's about engineering the infrastructure that fuels growth. Our commitment is to deliver excellence every single time.",
    imageUrl: "https://picsum.photos/seed/founder/400/400"
  }

  const timeline = [
    { year: "1997", event: "Site Engineer Career Started", description: "Beginning of professional journey in large-scale civil engineering projects." },
    { year: "2006", event: "Umiya Stone Crusher Plant", description: "Key project leadership in major industrial machinery establishment." },
    { year: "2009", event: "Mahakali Quarry Works", description: "Expansion into resource management and infrastructure development." },
    { year: "2013", event: "Siddhi Industrial Services Founded", description: "Establishment of a dedicated premium industrial contracting firm." }
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Engineering Trust Since 1997</h1>
            <p className="text-xl text-white/70">From site engineer roots to becoming a premier industrial contractor in India.</p>
          </div>
        </div>
      </section>

      {/* Story & Evolution */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-10 right-10 z-50">
          <SectionEditor pageId="about" sectionKey="intro" defaultValues={intro} />
        </div>
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h2 className="text-accent font-bold uppercase tracking-wider">{intro.subtitle}</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-headline text-primary">{intro.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              {intro.description}
            </p>
          </div>

          {/* Centered Timeline */}
          <div className="w-full max-w-2xl mx-auto mb-24">
            <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/30 before:to-transparent">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent bg-white text-accent font-bold shadow-md z-10 mb-4 transition-transform group-hover:scale-110">
                    {item.year.slice(2)}
                  </div>
                  <div className="w-full p-8 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition-all border-t-4 border-t-accent">
                    <time className="block font-bold text-accent font-headline text-lg mb-2">{item.year}</time>
                    <h4 className="font-bold text-primary text-xl font-headline mb-3">{item.event}</h4>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section - Centered */}
          <div className="w-full max-w-3xl mx-auto mb-24 relative">
            <div className="absolute top-4 right-4 z-50">
              <SectionEditor pageId="about" sectionKey="founder" defaultValues={founder} />
            </div>
            <div className="bg-white p-12 rounded-3xl border shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-lg ring-4 ring-accent/10 mb-8">
                  <Image 
                    src={founder.imageUrl} 
                    alt={founder.name} 
                    fill 
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <Quote className="h-10 w-10 text-accent mx-auto mb-2 opacity-50" />
                  <h4 className="text-3xl font-bold text-primary font-headline">{founder.name}</h4>
                  <p className="text-accent font-bold uppercase tracking-widest text-sm">{founder.role}</p>
                  <p className="text-muted-foreground italic leading-relaxed text-lg max-w-xl mx-auto">
                    "{founder.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission - Centered Grid */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary p-12 rounded-3xl text-white space-y-6 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="bg-accent p-4 rounded-2xl shadow-inner">
                <Target className="h-10 w-10 text-accent-foreground" />
              </div>
              <div className="space-y-3">
                <h4 className="text-3xl font-bold font-headline">Our Vision</h4>
                <p className="text-white/70 leading-relaxed">
                  To be recognized as a leading contractor delivering world-class industrial infrastructure that empowers business and community growth.
                </p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-3xl space-y-6 text-center flex flex-col items-center border shadow-lg transition-transform hover:-translate-y-1">
              <div className="bg-primary/10 p-4 rounded-2xl shadow-inner">
                <Lightbulb className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-3">
                <h4 className="text-3xl font-bold font-headline text-primary">Our Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To consistently provide high-quality, cost-effective industrial projects while ensuring customer satisfaction and long-term partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
