"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter, ArrowRight, Construction } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "Industrial", "Infrastructure", "Warehousing"]
const statuses = ["All", "Ongoing", "Completed"]

export default function ProjectsPage() {
  const [filterCategory, setFilterCategory] = React.useState("All")
  const [filterStatus, setFilterStatus] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = filterCategory === "All" || p.category === filterCategory
    const matchesStatus = filterStatus === "All" || p.status === filterStatus
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.client.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesStatus && matchesSearch
  })

  return (
    <div className="flex flex-col w-full">
      {/* Header - Centered */}
      <section className="bg-primary py-24 text-white">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Project Portfolio</h1>
            <p className="text-xl text-white/70">A showcase of our industrial engineering excellence across India.</p>
          </div>
        </div>
      </section>

      {/* Filters & Search - Centered */}
      <section className="py-12 bg-white sticky top-16 z-30 shadow-sm border-b">
        <div className="container px-4">
          <div className="flex flex-col gap-10 items-center justify-center max-w-4xl mx-auto text-center">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search projects by name or client..."
                className="pl-12 h-14 text-center border-accent/20 focus:border-accent rounded-xl text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center gap-8 w-full">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 justify-center bg-secondary/50 px-4 py-1.5 rounded-full">
                  <Filter className="h-4 w-4 text-accent" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Category</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={filterCategory === cat ? "default" : "outline"}
                      size="sm"
                      className={filterCategory === cat ? "bg-accent text-accent-foreground" : "border-primary/20"}
                      onClick={() => setFilterCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 justify-center bg-secondary/50 px-4 py-1.5 rounded-full">
                  <Construction className="h-4 w-4 text-accent" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Status</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {statuses.map((status) => (
                    <Button
                      key={status}
                      variant={filterStatus === status ? "default" : "outline"}
                      size="sm"
                      className={filterStatus === status ? "bg-primary text-white" : "border-primary/20"}
                      onClick={() => setFilterStatus(status)}
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid - Centered */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-center justify-items-center">
              {filteredProjects.map((project) => (
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
          ) : (
            <div className="text-center py-24 space-y-8 flex flex-col items-center w-full">
              <div className="bg-secondary p-10 rounded-full w-28 h-28 flex items-center justify-center">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary font-headline">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              </div>
              <Button variant="outline" className="border-primary text-primary px-8" onClick={() => { setFilterCategory("All"); setFilterStatus("All"); setSearchQuery(""); }}>
                Reset All Filters
              </Button>
            </div>
          )}
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
