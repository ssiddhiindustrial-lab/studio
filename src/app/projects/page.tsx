"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Construction } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full items-center">
      {/* Header - Strictly Centered */}
      <section className="bg-primary py-24 text-white w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Project Portfolio</h1>
            <p className="text-xl text-white/70">A showcase of our industrial engineering excellence across India.</p>
          </div>
        </div>
      </section>

      {/* Grid - Strictly Centered */}
      <section className="py-24 bg-background w-full">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full justify-items-center">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group bg-white rounded-3xl border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center w-full max-w-sm"
              >
                <div className="relative h-72 w-full overflow-hidden bg-secondary/30 flex items-center justify-center border-b">
                  <ProjectImage src={project.imageUrl} alt={project.name} />
                  <div className="absolute top-4 left-0 right-0 flex justify-center gap-2 px-4">
                    <Badge className="bg-accent text-accent-foreground hover:bg-accent font-bold uppercase text-[10px] shadow-sm">
                      {project.status}
                    </Badge>
                    <Badge className="bg-primary text-white hover:bg-primary font-bold uppercase text-[10px] shadow-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8 flex-grow space-y-4 text-center flex flex-col items-center w-full">
                  <h3 className="text-2xl font-bold text-primary font-headline group-hover:text-accent transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-col items-center gap-4 w-full pt-6 border-t border-secondary mt-auto">
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Project Value</p>
                      <p className="font-bold text-primary text-xl font-headline">{project.value}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Year</p>
                      <p className="font-bold text-primary font-medium">{project.year}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-secondary/20 border-t w-full flex items-center justify-center gap-2 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <span className="text-sm font-bold uppercase tracking-widest">Case Study</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = React.useState(false)

  if (error || !src || src.startsWith('/projects')) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 bg-secondary/50 h-full w-full">
        <Construction className="h-12 w-12 text-accent/40" />
        <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest px-4 leading-tight">{alt}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-700"
      onError={() => setError(true)}
      unoptimized
    />
  )
}
