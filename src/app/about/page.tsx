
import Image from "next/image"
import { Target, Lightbulb, Quote } from "lucide-react"
import { getPageContent } from "@/services/cmsService"

export default async function AboutPage() {
  const content = await getPageContent("about") || {}

  const header = content.header || {
    title: "Engineering Trust Since 1997",
    description: "From site engineer roots to becoming a premier industrial contractor in India, we deliver precision-engineered infrastructure."
  }

  const intro = content.intro || {
    subtitle: "Our Evolution",
    title: "A Legacy of Hard Work & Technical Precision",
    description: "Siddhi Industrial Services was founded on the principles of integrity, quality, and technical excellence. Our journey is rooted in the extensive career of our founder, Shailesh Patel, who began as a Site Engineer at a premier AA+ contracting firm in 1997. This foundational experience in managing high-stakes civil works paved the way for successful ventures in material production and infrastructure development. In 2013, Siddhi Industrial Services was established as an independent entity to execute complex industrial projects with a focus on engineering precision. Today, we are recognized as a trusted industrial construction company in Ahmedabad, specializing in building robust factory units and sophisticated warehouses. We bridge the gap between architectural vision and structural reality through decades of field expertise and a commitment to delivering on time, every time."
  }

  const founder = content.founder || {
    name: "Shailesh Patel",
    role: "Founder & Managing Director",
    quote: "Building is more than just concrete and steel; it's about engineering the infrastructure that fuels growth.",
    message: "With over 25 years in the construction industry, I have seen the sector evolve from traditional methods to advanced engineering precision. At Siddhi Industrial Services, we leverage this experience to solve complex challenges for our clients. Our focus remains on delivering high-quality, cost-effective industrial projects while maintaining the highest safety standards. We are not just building structures; we are building long-term partnerships based on reliability, transparency, and technical excellence in every project we execute.",
    imageUrl: "https://lh3.googleusercontent.com/d/1cgARgM8YucIbgZEHoW5OLJrIAuMmKih-"
  }

  const timeline = [
    { year: "1997", event: "Site Engineer Career Started", description: "Started professional career as a Site Engineer at Y.N. Dhanani, managing large-scale civil works." },
    { year: "2006", event: "Umiya Stone Crusher Plant", description: "Established Umiya Stone Crusher Plant to specialize in high-quality industrial material supply." },
    { year: "2009", event: "Mahakali Quarry Works", description: "Founded Mahakali Quarry Works to expand technical capabilities in resource development." },
    { year: "2013", event: "Siddhi Industrial Services Founded", description: "Established Siddhi Industrial Services to deliver independent, high-quality industrial construction projects." }
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">{header.title}</h1>
            <p className="text-xl text-white/70">{header.description}</p>
          </div>
        </div>
      </section>

      {/* Story & Evolution */}
      <section className="py-24 bg-background relative">
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
                  <p className="text-muted-foreground italic leading-relaxed text-lg max-w-xl mx-auto mb-6">
                    "{founder.quote}"
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-md max-w-2xl mx-auto">
                    {founder.message}
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
                  To be recognized as a leading industrial construction company delivering world-class infrastructure that empowers business growth through sustainable engineering and uncompromising quality standards across India’s industrial corridors.
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
                  To consistently provide high-quality, cost-effective industrial projects while ensuring customer satisfaction, safety compliance, and long-term partnerships through expert civil contracting and turnkey execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
