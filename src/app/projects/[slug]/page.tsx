import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, BadgeDollarSign, Activity, Factory, CheckCircle2, AlertCircle, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjectBySlug, getAllProjects } from "@/services/projectService"
import { Metadata } from "next"

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug)

  if (!project) return {}

  const title = project.metaTitle || `${project.name} | ${project.industry || 'Industrial'} Project Case Study`;
  const description = project.metaDescription || project.description.slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.siddhiindustrialservices.in/projects/${project.slug}`,
      type: 'article',
      images: [{ url: project.imageUrl }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.siddhiindustrialservices.in/projects/${project.slug}`
    }
  }
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const galleryItems = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.imageUrl];

  // Enhanced Structured Data (Schema.org Graph)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.siddhiindustrialservices.in/projects/${project.slug}#webpage`,
        "url": `https://www.siddhiindustrialservices.in/projects/${project.slug}`,
        "name": project.metaTitle || project.name,
        "description": project.metaDescription || project.description,
        "breadcrumb": { "@id": `https://www.siddhiindustrialservices.in/projects/${project.slug}#breadcrumb` }
      },
      {
        "@type": "Article",
        "@id": `https://www.siddhiindustrialservices.in/projects/${project.slug}#article`,
        "headline": project.name,
        "description": project.description,
        "image": project.imageUrl,
        "author": {
          "@type": "Organization",
          "name": "Siddhi Industrial Services",
          "url": "https://www.siddhiindustrialservices.in"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Siddhi Industrial Services",
          "logo": {
            "@type": "ImageObject",
            "url": "https://lh3.googleusercontent.com/d/1FoiTdu48Dr-5jonDN_rkLsh_s15F8bBn"
          }
        },
        "datePublished": project.year.split('–')[0] + "-01-01"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.siddhiindustrialservices.in/projects/${project.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.siddhiindustrialservices.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://www.siddhiindustrialservices.in/projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.name,
            "item": `https://www.siddhiindustrialservices.in/projects/${project.slug}`
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.siddhiindustrialservices.in/#organization",
        "name": "Siddhi Industrial Services",
        "url": "https://www.siddhiindustrialservices.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lh3.googleusercontent.com/d/1FoiTdu48Dr-5jonDN_rkLsh_s15F8bBn"
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
        "@type": "ImageObject",
        "@id": `${project.imageUrl}#image`,
        "url": project.imageUrl,
        "caption": `Professional industrial infrastructure execution for ${project.name}`
      }
    ]
  }

  return (
    <div className="flex flex-col w-full items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-16 text-white text-center w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-1/3" />
        <div className="container px-4 flex flex-col items-center mx-auto relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <div className="space-y-6 flex flex-col items-center">
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge className="bg-accent text-accent-foreground font-bold uppercase tracking-widest text-[10px]">{project.category}</Badge>
                <Badge variant="outline" className="border-white/30 text-white font-bold uppercase tracking-widest text-[10px]">{project.status}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight text-center">
                {project.projectType || `${project.name} ${project.category} Project`}
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed text-center">
                {project.subtitle || `Professional industrial infrastructure development project at ${project.locationDetails}. Delivered with engineering precision and quality workmanship.`}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full mt-8">
              {[
                { label: "Value", value: project.value, icon: BadgeDollarSign },
                { label: "Year", value: project.year, icon: Calendar },
                { label: "Status", value: project.status, icon: Activity },
                { label: "Industry", value: project.industry || "Industrial", icon: Factory },
                { label: "Location", value: project.locationDetails?.split(',')[0] || "Sanand", icon: Factory }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 text-center">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                  <p className="font-bold text-lg md:text-xl font-headline text-accent">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background w-full">
        <div className="container px-4 flex flex-col items-center mx-auto">
          <div className="max-w-6xl mx-auto space-y-24 flex flex-col items-center w-full">
            
            {/* Featured Image */}
            <div className="w-full relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={project.imageUrl}
                alt={`${project.name} - ${project.industry} project infrastructure by Siddhi Industrial Services`}
                fill
                unoptimized
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-sm italic">
                Professional engineering and infrastructure execution at {project.locationDetails}.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-16">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary font-headline flex items-center gap-3">
                    <Activity className="h-7 w-7 text-accent" /> Project Overview
                  </h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4 whitespace-pre-wrap">
                    {project.description}
                  </div>
                </div>

                {project.challenges && (
                  <div className="space-y-6 bg-secondary/30 p-10 rounded-3xl border border-accent/10">
                    <h2 className="text-3xl font-bold text-primary font-headline flex items-center gap-3">
                      <AlertCircle className="h-7 w-7 text-accent" /> Engineering Challenges
                    </h2>
                    <ul className="space-y-6">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <div className="h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold text-xs">!</div>
                          <p className="text-muted-foreground font-medium">{challenge}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.solutions && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary font-headline flex items-center gap-3">
                      <CheckCircle2 className="h-7 w-7 text-accent" /> Our Construction Solution
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.solutions.map((solution, i) => (
                        <div key={i} className="p-6 bg-white rounded-2xl border shadow-sm flex flex-col gap-3">
                          <div className="h-10 w-10 bg-primary/5 text-primary rounded-lg flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <aside className="space-y-12">
                <div className="bg-white p-8 rounded-3xl border shadow-xl sticky top-32 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary font-headline flex items-center gap-2">
                      <HardHat className="h-5 w-5 text-accent" /> Scope of Execution
                    </h3>
                    <ul className="space-y-4">
                      {project.scope.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-primary/80">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t space-y-4">
                    <h3 className="text-xl font-bold text-primary font-headline">Technical Data</h3>
                    <div className="space-y-3">
                      {[
                        { label: "Client", value: project.client },
                        { label: "Location", value: project.locationDetails || "Sanand GIDC" },
                        { label: "Execution", value: project.year },
                        ...(project.technicalHighlights || [])
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground uppercase font-bold text-[10px] tracking-widest">{item.label}</span>
                          <span className="font-bold text-primary text-right">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full h-14 bg-primary hover:bg-accent font-bold">
                    <Link href="/contact">Request Project Consultation</Link>
                  </Button>
                </div>
              </aside>
            </div>

            {/* Gallery */}
            <div className="w-full space-y-12 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary font-headline">Case Study Gallery</h3>
                <p className="text-muted-foreground">Detailed visual documentation of the project execution phases.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {galleryItems.map((item, i) => {
                  const isObject = typeof item === 'object';
                  const imgUrl = isObject ? item.url : item;
                  const alt = isObject ? item.alt : `Execution phase document for ${project.name} by Siddhi Industrial Services`;
                  const caption = isObject ? item.caption : null;

                  return (
                    <div key={i} className="space-y-3">
                      <div className="relative aspect-square rounded-2xl overflow-hidden group border-4 border-white shadow-lg">
                        <Image
                          src={imgUrl}
                          alt={alt}
                          fill
                          unoptimized
                          loading="lazy"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      {caption && <p className="text-xs text-muted-foreground italic">{caption}</p>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Related Services */}
            <div className="w-full pt-16 border-t text-center space-y-10">
              <h3 className="text-2xl font-bold text-primary font-headline">Relevant Industrial Expertise</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "Industrial Building Construction", href: "/services/industrial-building-construction" },
                  { name: "RCC Construction", href: "/services/rcc-contractor-sanand-ahmedabad" },
                  { name: "Infrastructure Development", href: "/services/industrial-infrastructure-development-sanand" },
                  { name: "Roads & Drainage Construction", href: "/services/industrial-road-construction-sanand-ahmedabad" },
                  { name: "Turnkey Project Management", href: "/services/turnkey-project-management" }
                ].map((service, i) => (
                  <Button key={i} variant="outline" asChild className="border-primary/20 hover:border-accent hover:text-accent">
                    <Link href={service.href}>{service.name}</Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary p-12 md:p-20 rounded-3xl text-center w-full relative overflow-hidden text-white space-y-8">
               <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
               <h2 className="text-3xl md:text-5xl font-bold font-headline">Planning Your Next Industrial Project?</h2>
               <p className="text-xl text-white/70 max-w-2xl mx-auto text-center">Partner with Siddhi Industrial Services for industrial buildings, factory development, RCC works, infrastructure projects and turnkey industrial construction across Sanand, Ahmedabad and Gujarat.</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 h-16 text-lg font-bold">
                   <Link href="/contact">Get a Quote</Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 h-16 px-10 text-lg">
                   <Link href="/projects">View More Projects</Link>
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
