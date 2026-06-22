import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, BadgeDollarSign, User, Activity, Factory, ChevronRight } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header - Centered */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="container px-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge className="bg-accent text-accent-foreground font-bold">{project.category}</Badge>
                <Badge variant="outline" className="border-white/30 text-white font-bold">{project.status}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
                {project.name}
              </h1>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 min-w-[280px] text-center">
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Project Value</p>
              <p className="text-4xl font-bold font-headline text-accent">{project.value}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Centered */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto space-y-24 flex flex-col items-center text-center">
            
            {/* Main Image */}
            <div className="w-full relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <ProjectHeroImage src={project.imageUrl} alt={project.name} />
            </div>

            {/* Overview */}
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description} We utilized advanced construction methodologies to ensure the structural integrity and longevity of the {project.name} project. Our approach prioritized safety, efficiency, and precise adherence to engineering specifications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This facility was designed to handle high-load industrial operations with specialized flooring and reinforced structural elements as part of the core scope of work provided by Siddhi Industrial Services.
              </p>
            </div>

            {/* Scope & Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="bg-white p-10 rounded-3xl border shadow-sm flex flex-col items-center">
                <h3 className="text-2xl font-bold text-primary font-headline mb-8 flex items-center gap-2">
                  <Activity className="h-6 w-6 text-accent" /> Scope of Work
                </h3>
                <ul className="space-y-4 text-left w-fit">
                  {project.scope.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary/80 font-medium">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/30 p-10 rounded-3xl border border-accent/20 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-primary font-headline mb-8 flex items-center gap-2">
                  <Factory className="h-6 w-6 text-accent" /> Facility Highlights
                </h3>
                <div className="space-y-6 w-full max-w-xs">
                  <div className="flex justify-between items-center text-sm border-b border-primary/10 pb-3">
                    <span className="text-muted-foreground uppercase font-bold text-[10px] tracking-widest">Type</span>
                    <span className="font-bold text-primary">{project.category} Facility</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-primary/10 pb-3">
                    <span className="text-muted-foreground uppercase font-bold text-[10px] tracking-widest">Structural Build</span>
                    <span className="font-bold text-primary">Heavy Load RCC/Steel</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground uppercase font-bold text-[10px] tracking-widest">Execution Period</span>
                    <span className="font-bold text-primary">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Data Cards */}
            <div className="w-full space-y-12">
              <h3 className="text-3xl font-bold text-primary font-headline">Technical Data</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Client Name", value: project.client, icon: User },
                  { label: "Completion Year", value: project.year, icon: Calendar },
                  { label: "Contract Value", value: project.value, icon: BadgeDollarSign },
                  { label: "Project Status", value: project.status, icon: Activity }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center group hover:border-accent transition-colors">
                    <div className="bg-accent/10 p-4 rounded-xl mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                      <item.icon className="h-6 w-6 text-accent group-hover:text-white" />
                    </div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">{item.label}</p>
                    <p className="font-bold text-primary text-lg font-headline">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-2xl w-full">
              <Button asChild className="w-full h-16 bg-primary hover:bg-accent text-xl font-bold rounded-2xl shadow-lg">
                <Link href="/contact" className="flex items-center justify-center gap-3">
                  Inquire Similar Project <ChevronRight className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Centered */}
      <section className="py-24 bg-primary text-white">
        <div className="container px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <h2 className="text-accent font-bold uppercase tracking-wider">Visual Assets</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-headline">Work Site Gallery</h3>
            <p className="text-white/60">Candid photos from the various stages of project execution.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group border-4 border-white/10">
                <Image
                  src={`https://picsum.photos/seed/${project.slug}-${i}/600/600`}
                  alt={`Site activity ${i}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <Link href="/gallery" className="text-accent hover:text-white transition-colors font-bold uppercase text-sm tracking-widest flex items-center justify-center gap-2">
              View All Photos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectHeroImage({ src, alt }: { src: string; alt: string }) {
  if (!src || src.startsWith('/projects')) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-secondary/50 p-12 text-center space-y-4">
        <Factory className="h-16 w-16 text-accent/40" />
        <span className="text-xl font-bold text-primary/40 uppercase tracking-widest">{alt}</span>
        <p className="text-sm text-primary/30">Project image coming soon</p>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700"
      unoptimized
    />
  )
}