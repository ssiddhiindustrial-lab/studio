import Image from "next/image"
import { Target, Lightbulb, History, Quote } from "lucide-react"

export default function AboutPage() {
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
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Engineering Trust Since 1997</h1>
            <p className="text-xl text-white/70">From site engineer roots to becoming a premier industrial contractor in India.</p>
          </div>
        </div>
      </section>

      {/* Story & Evolution */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h2 className="text-accent font-bold uppercase tracking-wider">Our Evolution</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-headline text-primary">A Legacy of Hard Work & Technical Precision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              Siddhi Industrial Services was founded on the principles of integrity, quality, and commitment. With a history spanning over two decades of technical expertise, we have evolved from site-level management to complex turnkey project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Timeline Column */}
            <div className="space-y-12">
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/30 before:to-transparent">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent bg-white text-accent font-bold shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {item.year.slice(2)}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-white border shadow-sm group-hover:border-accent transition-colors">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-primary text-xl font-headline">{item.event}</div>
                        <time className="font-bold text-accent font-headline">{item.year}</time>
                      </div>
                      <div className="text-muted-foreground text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder & Vision Column */}
            <div className="space-y-12">
              {/* Founder Section */}
              <div className="bg-white p-12 rounded-2xl border shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full" />
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-lg ring-4 ring-accent/10 mb-8">
                    <Image 
                      src="https://picsum.photos/seed/founder/400/400" 
                      alt="Shailesh Patel" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 max-w-lg">
                    <Quote className="h-10 w-10 text-accent mx-auto mb-2" />
                    <h4 className="text-2xl font-bold text-primary font-headline">Shailesh Patel</h4>
                    <p className="text-accent font-bold uppercase tracking-widest text-sm">Founder & Managing Director</p>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "Building is more than just concrete and steel; it's about engineering the infrastructure that fuels growth. Our commitment is to deliver excellence every single time."
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-primary p-10 rounded-2xl text-white space-y-4 text-center flex flex-col items-center">
                  <div className="bg-accent p-3 w-fit rounded-xl mb-2">
                    <Target className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold font-headline">Our Vision</h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    To be recognized as a leading contractor delivering world-class industrial infrastructure that empowers business and community growth.
                  </p>
                </div>
                <div className="bg-secondary p-10 rounded-2xl space-y-4 text-center flex flex-col items-center">
                  <div className="bg-primary p-3 w-fit rounded-xl mb-2">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold font-headline text-primary">Our Mission</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    To consistently provide high-quality, cost-effective industrial projects while ensuring customer satisfaction and long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
