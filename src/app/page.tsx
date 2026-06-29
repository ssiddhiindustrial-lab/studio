
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Activity, Factory, Warehouse, Construction, ArrowRight, ShieldCheck, Settings, Landmark, HelpCircle } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { getPageContent } from "@/services/cmsService"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const dynamic = 'force-dynamic';

export default async function Home() {
  const content = await getPageContent("home") || {}

  const hero = content.hero || {
    subtitle: "Engineering Excellence Since 1997",
    title: "Premier Industrial & Infrastructure Construction Contractors in Ahmedabad",
    description: "Delivering high-precision factory development, warehousing solutions, and turnkey industrial projects across Sanand GIDC and Gujarat with a focus on quality and safety.",
    imageUrl: "https://lh3.googleusercontent.com/d/100DYuXZ3h8HLdukOsIndYKIVwZzeY25B"
  }

  const servicesSection = content.servicesSection || {
    subtitle: "Industrial Expertise",
    title: "Trusted Civil Contractors in Ahmedabad for Large-Scale Industrial Projects",
    description: "Founded by Shailesh Patel, Siddhi Industrial Services combines decades of technical expertise with modern engineering practices. As a leading commercial construction company, we specialize in building robust industrial infrastructure, from heavy-duty manufacturing plants to sophisticated warehousing facilities in the Sanand industrial hub."
  }

  const coreServices = [
    { title: "Industrial Building Construction", icon: Factory, desc: "High-precision construction for factories and manufacturing units, focusing on structural longevity and load-bearing foundations in Ahmedabad." },
    { title: "Factory & Plant Development", icon: Settings, desc: "Optimized production layouts and heavy-duty infrastructure integration for specialized manufacturing facilities across Sanand GIDC." },
    { title: "Structural Steel Works", icon: Construction, desc: "Expert fabrication and erection of industrial sheds and PEB structures designed for maximum clear span and durability." },
    { title: "RCC Construction", icon: Activity, desc: "High-strength reinforced concrete works including specialized machinery foundations and VDF flooring for industrial applications." },
    { title: "Warehousing Solutions", icon: Warehouse, desc: "Modern warehouse development featuring optimized storage layouts, efficient drainage, and integrated utility systems for logistics hubs." },
    { title: "Infrastructure Development", icon: Landmark, desc: "Comprehensive industrial site preparation, underground utility networks, and administrative facility construction for large-scale projects." }
  ]

  const stats = [
    { label: "Years of Excellence", value: "13+" },
    { label: "Industrial Projects", value: "20+" },
    { label: "Qualified Engineers", value: "15+" },
    { label: "Safety Compliance", value: "100%" }
  ]

  const faqs = [
    { q: "Why choose Siddhi as your industrial civil contractors in Ahmedabad?", a: "We combine over 25 years of technical field experience with modern engineering precision to deliver durable industrial facilities." },
    { q: "What services does a factory construction company provide?", a: "We handle everything from site grading and machine foundations to specialized RCC works and structural steel fabrication." },
    { q: "Do you handle industrial construction projects in Sanand GIDC?", a: "Yes, we are highly active in Sanand GIDC, providing infrastructure and building solutions for major manufacturing units." },
    { q: "What is turnkey industrial construction?", a: "It is a single-point responsibility model where we handle planning, procurement, and execution until the facility is ready for handover." },
    { q: "How do you ensure safety standards on construction sites?", a: "We follow a strict zero-compromise HSE policy with daily toolbox talks, dedicated safety officers, and 100% PPE compliance." },
    { q: "Do you build industrial warehouses and sheds?", a: "Yes, we specialize in high-span structural steel sheds and modern warehousing solutions with VDF flooring." }
  ]

  const orgName = "Siddhi Industrial Services";
  const orgUrl = "https://www.siddhiindustrialservices.in";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${orgUrl}/#website`,
        "url": orgUrl,
        "name": orgName,
        "description": "Leading industrial civil contractor in Ahmedabad & Sanand specializing in factory construction and warehousing.",
        "publisher": { "@id": `${orgUrl}/#organization` },
        "inLanguage": "en-IN"
      },
      {
        "@type": "Organization",
        "@id": `${orgUrl}/#organization`,
        "name": orgName,
        "url": orgUrl,
        "logo": {
          "@type": "ImageObject",
          "url": "https://lh3.googleusercontent.com/d/1FoiTdu48Dr-5jonDN_rkLsh_s15F8bBn",
          "width": 600,
          "height": 190
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-91571-87484",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi", "gu"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "K-403 Radhe Sky Line, Sanand",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382110",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${orgUrl}/#localbusiness`,
        "name": orgName,
        "image": hero.imageUrl,
        "@id": orgUrl,
        "url": orgUrl,
        "telephone": "+91-91571-87484",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "K-403 Radhe Sky Line, Sanand",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382110",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.9990",
          "longitude": "72.3789"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.imageUrl}
            alt="Industrial building construction site in Sanand GIDC Ahmedabad by Siddhi Industrial Services"
            fill
            sizes="100vw"
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>
        
        <div className="container mx-auto relative z-10 px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-reveal flex flex-col items-center">
            <p className="text-accent font-bold tracking-widest uppercase text-sm md:text-base mb-4">
              {hero.subtitle}
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight font-headline mb-6">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 px-10 text-lg rounded-xl shadow-lg">
                <Link href="/projects">View Our Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary h-14 px-10 text-lg rounded-xl transition-all">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b w-full flex justify-center">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group flex flex-col items-center">
                <p className="text-4xl md:text-6xl font-bold text-primary mb-2 group-hover:text-accent transition-colors font-headline">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background w-full flex flex-col items-center relative">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <div className="max-w-4xl mb-16 space-y-6 flex flex-col items-center">
            <p className="text-accent font-bold uppercase tracking-wider text-sm">{servicesSection.subtitle}</p>
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary">{servicesSection.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              {servicesSection.description}
            </p>
            <div className="pt-2">
              <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group text-lg">
                Learn More About Us <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full justify-items-center">
            {coreServices.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-all group text-center flex flex-col items-center w-full">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary font-headline">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="h-1.5 w-12 bg-accent group-hover:w-full transition-all duration-300 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background w-full flex flex-col items-center">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <div className="max-w-4xl mb-16 space-y-4 flex flex-col items-center">
            <p className="text-accent font-bold uppercase tracking-wider text-sm">Our Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary">Proven Excellence in Factory & Infrastructure Execution</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              A showcase of our successfully delivered industrial sites across Sanand GIDC and Ahmedabad’s premier industrial zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl w-full justify-items-center">
            {projects.slice(0, 3).map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="group overflow-hidden rounded-xl bg-white border shadow-sm hover:shadow-xl transition-all flex flex-col items-center w-full max-w-sm">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.name} - industrial construction project by Siddhi Industrial Services`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {project.status}
                  </div>
                </div>
                <div className="p-8 text-center flex-grow flex flex-col items-center w-full">
                  <p className="text-accent font-bold text-[10px] uppercase tracking-widest mb-3">{project.category}</p>
                  <h4 className="text-xl font-bold text-primary font-headline mb-6 group-hover:text-accent transition-colors leading-tight">{project.name}</h4>
                  <div className="w-full flex justify-between items-center text-xs text-muted-foreground border-t pt-5 mt-auto font-medium">
                    <span className="uppercase tracking-widest">{project.year}</span>
                    <span className="font-bold text-primary text-lg">{project.value}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center flex justify-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-12 h-14 text-lg rounded-xl">
              <Link href="/projects">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-secondary/30 w-full flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-8">Trusted Industrial Construction Company in Sanand & Ahmedabad</h2>
          <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
            <p>
              As a leading <strong>Industrial Construction Company</strong>, Siddhi Industrial Services has established itself as the go-to partner for <strong>Industrial Civil Contractors in Ahmedabad</strong> and <strong>Industrial Civil Contractors in Sanand</strong>. Our deep-rooted expertise as <strong>Industrial Infrastructure Contractors</strong> allows us to navigate the complexities of large-scale site development and <strong>Industrial Building Construction</strong> with absolute precision.
            </p>
            <p>
              Whether you are seeking a <strong>Factory Construction Company</strong> for a greenfield project or a <strong>Commercial Construction Company</strong> for warehouse expansion, our team delivers engineering-first solutions. We specialize in executing heavy civil construction within Sanand GIDC, ensuring that all manufacturing facilities and production units are built to the highest safety standards and quality workmanship. From structural steel works to complex RCC works, our turnkey construction approach ensures that every project is delivered on schedule, reinforcing our position as the most reliable construction contractors in Sanand and Ahmedabad.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white w-full flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-3xl flex flex-col items-center">
          <div className="text-center mb-12 flex flex-col items-center">
            <HelpCircle className="h-10 w-10 text-accent mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold text-primary hover:text-accent">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white w-full flex flex-col items-center">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="bg-accent rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group max-w-6xl w-full flex flex-col items-center">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
            
            <div className="relative z-10 max-w-3xl space-y-8 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl font-bold text-accent-foreground font-headline">Partner with a Leading Commercial Construction Company</h2>
              <p className="text-lg md:text-xl text-accent-foreground/80">Discuss your next industrial project with our expert engineering team for a technically sound and cost-effective execution plan.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-12 h-14 text-lg rounded-xl shadow-xl">
                  <Link href="/contact">Get a Consultation</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-primary font-bold hover:bg-white/20 h-14 text-lg rounded-xl">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
