
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, BadgeDollarSign, User, Activity, Factory, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjectBySlug, getAllProjects } from "@/services/projectService"

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const allProjects = await getAllProjects()
  
  // Generate gallery items
  const fallbackImages = allProjects
    .filter(p => p.category === project.category && p.slug !== project.slug)
    .slice(0, 4)
    .map(p => p.imageUrl);

  const galleryItems = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.imageUrl, ...fallbackImages].slice(0, 4);

  return (
    <div className="flex flex-col w-full items-center">
      {/* Header - Strictly Centered */}
      <section className="bg-primary py-16 text-white text-center w-full relative">
        <div className="container px-4 flex flex-col items-center mx-auto">
          <Link href="/projects" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <div className="space-y-4 flex flex-col items-center">
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge className="bg-accent text-accent-foreground font-bold uppercase tracking-widest text-[10px]">{project.category}</Badge>
                <Badge variant="outline" className="border-white/30 text-white font-bold uppercase tracking-widest text-[10px]">{project.status}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight text-center">
                {project.name}
              </h1>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 min-w-[280px] text-center flex flex-col items-center">
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-2">Project Value</p>
              <p className="text-4xl font-bold font-headline text-accent">{project.value}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strictly Centered */}
      <section className="py-24 bg-background w-full">
        <div className="container px-4 flex flex-col items-center mx-auto">
          <div className="max-w-5xl mx-auto space-y-24 flex flex-col items-center text-center w-full">
            
            {/* Main Image */}
            <div className="w-full relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <ProjectHeroImage src={project.imageUrl} alt={project.name} />
            </div>

            {/* Overview */}
            <div className="max-w-3xl space-y-6 flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline text-center">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                {project.description} We utilized advanced construction methodologies to ensure the structural integrity and longevity of the {project.name} project. Our approach prioritized safety, efficiency, and precise adherence to engineering specifications.
              </p>
            </div>

            {/* Scope & Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div className="bg-white p-10 rounded-3xl border shadow-sm flex flex-col items-center">
                <h3 className="text-2xl font-bold text-primary font-headline mb-8 flex items-center gap-2 justify-center">
                  <Activity className="h-6 w-6 text-accent" /> Scope of Work
                </h3>
                <ul className="space-y-4 text-left w-full max-w-xs">
                  {project.scope.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary/80 font-medium">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/30 p-10 rounded-3xl border border-accent/20 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-primary font-headline mb-8 flex items-center gap-2 justify-center">
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

            {/* Technical Data Cards */}
            <div className="w-full space-y-12 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-primary font-headline text-center">Technical Data</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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
            <div className="max-w-2xl w-full flex justify-center">
              <Button asChild className="w-full h-16 bg-primary hover:bg-accent text-xl font-bold rounded-2xl shadow-lg">
                <Link href="/contact" className="flex items-center justify-center gap-3">
                  Inquire Similar Project <ChevronRight className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Strictly Centered */}
      <section className="py-24 bg-primary text-white w-full">
        <div className="container px-4 text-center flex flex-col items-center mx-auto">
          <div className="max-w-4xl mx-auto space-y-6 mb-16 flex flex-col items-center">
            <h2 className="text-accent font-bold uppercase tracking-wider text-sm">Visual Assets</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-headline text-center">Work Site Gallery</h3>
            <p className="text-white/60 text-center">Actual photos from the various stages of project execution.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
            {galleryItems.map((imgUrl, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group border-4 border-white/10 bg-white/5">
                <Image
                  src={imgUrl}
                  alt={`Site activity ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
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
  if (!src) {
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
      unoptimized
      className="object-cover transition-transform duration-700"
    />
  )
}
