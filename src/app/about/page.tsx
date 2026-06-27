
import Image from "next/image"
import { Target, Lightbulb, Quote, ShieldCheck, Settings, Timer, Users, Award, Hammer, HelpCircle, CheckCircle2 } from "lucide-react"
import { getPageContent } from "@/services/cmsService"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: 'About Siddhi Industrial Services | Industrial Construction Company Ahmedabad',
  description: 'Learn about Siddhi Industrial Services, premier industrial civil contractors in Ahmedabad. 25+ years of expertise in factory and warehouse construction.',
  alternates: {
    canonical: 'https://www.siddhiindustrialservices.in/about',
  },
}

export default async function AboutPage() {
  const content = await getPageContent("about") || {}

  const header = content.header || {
    title: "Engineering Trust Since 1997",
    description: "From site engineer roots to becoming a premier industrial contractor in India, we deliver precision-engineered infrastructure."
  }

  const intro = content.intro || {
    subtitle: "Our Evolution",
    title: "A Legacy of Hard Work & Technical Precision",
    description: "Siddhi Industrial Services is a trusted Industrial & Infrastructure Contracting company specializing in heavy civil works, structural steel, and turnkey industrial projects. Established in 2013 by Civil Engineer Shailesh Patel, our firm leverages decades of industry-hardened experience to solve complex construction challenges. Based in Sanand, Ahmedabad, we serve a diverse range of manufacturing facilities, providing everything from industrial building construction to specialized RCC works. Our commitment to engineering precision and safety standards has made us the preferred industrial civil contractors in Ahmedabad and Sanand GIDC. We prioritize quality workmanship and timely delivery, ensuring that every industrial facility we build is an asset for our clients' long-term operational success."
  }

  const founder = content.founder || {
    name: "Shailesh Patel",
    role: "Founder & Managing Director",
    quote: "Building is more than just concrete and steel; it's about engineering the infrastructure that fuels growth.",
    message: "With over 25 years in the construction industry, I have seen the sector evolve from traditional methods to advanced engineering precision. At Siddhi Industrial Services, we leverage this experience to solve complex challenges for our clients. Our leadership is defined by a deep commitment to safety, quality, and long-term relationships. We aren't just building manufacturing facilities; we are building trust through transparent project execution and engineering excellence. Every project we undertake in Sanand and Ahmedabad is a testament to our dedication to the highest industrial standards and reliable delivery.",
    imageUrl: "https://lh3.googleusercontent.com/d/1cgARgM8YucIbgZEHoW5OLJrIAuMmKih-"
  }

  const timeline = [
    { year: "1997", event: "Site Engineer Career", description: "Started professional career as a Site Engineer at Y.N. Dhanani, managing large-scale civil works and gaining foundational field expertise." },
    { year: "2006", event: "Umiya Stone Crusher", description: "Established a high-quality industrial material supply plant, strengthening our understanding of the construction supply chain." },
    { year: "2009", event: "Mahakali Quarry Works", description: "Founded this venture to expand technical capabilities in resource development and large-scale infrastructure preparation." },
    { year: "2013", event: "Siddhi Industrial Services", description: "Established our independent contracting firm to deliver end-to-end industrial construction and infrastructure projects across Gujarat." }
  ]

  const coreValues = [
    { title: "Engineering Excellence", desc: "Applying advanced technical knowledge to solve complex industrial construction challenges with absolute precision.", icon: Settings },
    { title: "Integrity", desc: "Maintaining transparent communication and ethical business practices in every project we execute for our clients.", icon: ShieldCheck },
    { title: "Safety First", desc: "Prioritizing the health and well-being of our workforce through 100% PPE compliance and rigorous safety audits.", icon: Award },
    { title: "Quality Workmanship", desc: "Ensuring that every RCC slab, steel beam, and foundation meets the highest industrial durability standards.", icon: Hammer },
    { title: "Timely Delivery", desc: "Utilizing efficient project management to meet critical milestones and ensure zero-delay handover of facilities.", icon: Timer },
    { title: "Client Commitment", desc: "Building long-term partnerships through consistent performance and dedicated post-construction support.", icon: Users }
  ]

  const faqs = [
    { q: "What is the industry experience of Siddhi Industrial Services?", a: "The company was founded in 2013, but our founder, Shailesh Patel, has been a core part of the industrial construction industry since 1997, starting as a Site Engineer." },
    { q: "Which locations do you serve in Gujarat?", a: "We are primarily active in Sanand, Ahmedabad, and Sanand GIDC, but we also execute large-scale infrastructure projects across Gujarat." },
    { q: "What types of industrial facilities do you build?", a: "We specialize in manufacturing plants, heavy-duty industrial sheds, modern warehouses, and specialized infrastructure for utilities." },
    { q: "Are you a turnkey industrial contractor?", a: "Yes, we provide end-to-end turnkey project management, from site grading and machine foundations to final structural execution." },
    { q: "How do you ensure construction quality?", a: "We follow a 4-step framework including precise planning, high-grade material sourcing, skilled engineering, and continuous HSE audits." },
    { q: "Does the founder have a technical background?", a: "Yes, Shailesh Patel is a Civil Engineer (Diploma, 1996) with decades of field-hardened experience in heavy civil contracting." }
  ]

  const orgName = "Siddhi Industrial Services";
  const orgUrl = "https://www.siddhiindustrialservices.in";
  const pageUrl = `${orgUrl}/about`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": "About Siddhi Industrial Services",
        "isPartOf": { "@id": `${orgUrl}/#website` },
        "description": intro.description,
        "breadcrumb": { "@id": `${pageUrl}/#breadcrumb` }
      },
      {
        "@type": "Organization",
        "@id": `${orgUrl}/#organization`,
        "name": orgName,
        "founder": {
          "@type": "Person",
          "name": founder.name,
          "jobTitle": founder.role
        },
        "foundingDate": "2013",
        "description": intro.description
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": orgUrl },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": pageUrl }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                    alt="Shailesh Patel - Founder of Siddhi Industrial Services Ahmedabad" 
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

          {/* Core Values Grid */}
          <div className="w-full max-w-6xl mx-auto mb-24">
             <div className="text-center mb-16 space-y-4">
               <h3 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Core Values</h3>
               <p className="text-muted-foreground max-w-xl mx-auto">The engineering principles that guide our industrial project execution.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {coreValues.map((value, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl border hover:border-accent transition-colors flex flex-col items-center text-center group">
                   <div className="w-14 h-14 bg-secondary text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                     <value.icon className="h-7 w-7" />
                   </div>
                   <h4 className="text-xl font-bold mb-3 text-primary font-headline">{value.title}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                 </div>
               ))}
             </div>
          </div>

          {/* Vision & Mission - Centered Grid */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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

          {/* SEO Content Section */}
          <div className="w-full max-w-4xl mx-auto bg-secondary/30 p-12 rounded-3xl mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-primary font-headline mb-8 text-center">Why Siddhi Industrial Services is a Trusted Industrial Construction Company in Ahmedabad & Sanand</h3>
            <div className="text-muted-foreground text-md leading-relaxed space-y-6">
              <p>As a leading <strong>Industrial Construction Company</strong>, Siddhi Industrial Services has established itself as the go-to partner for <strong>Industrial Civil Contractors in Ahmedabad</strong> and <strong>Industrial Civil Contractors in Sanand</strong>. Our deep-rooted expertise as <strong>Industrial Infrastructure Contractors</strong> allows us to navigate the complexities of large-scale site development and <strong>Industrial Building Construction</strong> with absolute precision.</p>
              <p>Whether you are seeking a <strong>Factory Construction Company</strong> for a greenfield project or a <strong>Commercial Construction Company</strong> for warehouse expansion, our team delivers engineering-first solutions. We specialize in executing heavy civil construction within Sanand GIDC, ensuring that all manufacturing facilities and production units are built to the highest safety standards and quality workmanship. From structural steel works to complex RCC works, our turnkey construction approach ensures that every project is delivered on schedule, reinforcing our position as the most reliable construction contractors in Sanand and Ahmedabad.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full max-w-3xl mx-auto mb-24 flex flex-col items-center">
            <div className="text-center mb-12 flex flex-col items-center">
              <HelpCircle className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-3xl font-bold text-primary font-headline">Frequently Asked Questions</h3>
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
        </div>
      </section>
    </div>
  )
}
