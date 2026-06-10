import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, BadgeDollarSign, User, Activity, CheckCircle2, Factory, ChevronRight } from "lucide-react"
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
      {/* Header */}
      <section className="bg-primary py-12 text-white">
        <div className="container px-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-accent text-accent-foreground font-bold">{project.category}</Badge>
                <Badge variant="outline" className="border-white/30 text-white font-bold">{project.status}</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
                {project.name}
              </h1>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 min-w-[240px]">
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Project Value</p>
              <p className="text-3xl font-bold font-headline text-accent">{project.value}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Col: Info & Images */}
            <div className="lg:col-span-2 space-y-12">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary font-headline">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description} We utilized advanced construction methodologies to ensure the structural integrity and longevity of the {project.name} project. Our approach prioritized safety, efficiency, and precise adherence to engineering specifications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This facility was designed to handle high-load industrial operations with specialized flooring and reinforced structural elements as part of the core scope of work provided by Siddhi Industrial Services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border shadow-sm">
                  <h3 className="text-xl font-bold text-primary font-headline mb-6 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-accent" /> Scope of Work
                  </h3>
                  <ul className="space-y-4">
                    {project.scope.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-primary/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary/30 p-8 rounded-2xl border border-accent/20">
                  <h3 className="text-xl font-bold text-primary font-headline mb-6 flex items-center gap-2">
                    <Factory className="h-5 w-5 text-accent" /> Facility Highlights
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm border-b border-white pb-2">
                      <span className="text-muted-foreground uppercase font-bold text-[10px] tracking-widest">Type</span>
                      <span className="font-bold text-primary">{project.category} Facility</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white pb-2">
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
            </div>

            {/* Right Col: Details Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-3xl border shadow-xl sticky top-32">
                <h3 className="text-2xl font-bold text-primary font-headline mb-8 pb-4 border-b">Project Data</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="bg-accent/10 p-3 rounded-xl">
                      <User className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Client Name</p>
                      <p className="font-bold text-primary text-lg font-headline">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-accent/10 p-3 rounded-xl">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Completion Year</p>
                      <p className="font-bold text-primary text-lg font-headline">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-accent/10 p-3 rounded-xl">
                      <BadgeDollarSign className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Contract Value</p>
                      <p className="font-bold text-primary text-lg font-headline">{project.value}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-accent/10 p-3 rounded-xl">
                      <Activity className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Status</p>
                      <p className="font-bold text-primary text-lg font-headline">{project.status}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <Button asChild className="w-full h-14 bg-primary hover:bg-accent text-lg">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Inquire Similar Project <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery Snippet */}
      <section className="py-24 bg-primary text-white">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-accent font-bold uppercase tracking-wider">Visual Assets</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-headline">Work Site Gallery</h3>
            </div>
            <Link href="/gallery" className="text-accent hover:text-white transition-colors font-bold uppercase text-sm tracking-widest flex items-center gap-2">
              View All Photos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src={`https://picsum.photos/seed/${project.slug}-${i}/600/600`}
                  alt={`Site activity ${i}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}