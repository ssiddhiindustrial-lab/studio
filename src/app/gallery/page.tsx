
"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects-data"
import { getPageContent } from "@/services/cmsService"

export default function GalleryPage() {
  const [content, setContent] = React.useState<any>({})

  React.useEffect(() => {
    getPageContent("gallery").then(data => data && setContent(data))
  }, [])

  const header = content.header || {
    title: "Visual Portfolio",
    description: "A comprehensive view of our construction sites and completed industrial facilities."
  }

  const galleryItems = projects.map((project, index) => ({
    id: index,
    category: project.category,
    src: project.imageUrl,
    title: project.name,
    status: project.status
  }))

  return (
    <div className="flex flex-col w-full items-center">
      {/* Header - Strictly Centered */}
      <section className="bg-primary py-24 text-white w-full relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">{header.title}</h1>
            <p className="text-xl text-white/70">{header.description}</p>
          </div>
        </div>
      </section>

      {/* Grid - Strictly Centered */}
      <section className="py-24 bg-background w-full">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-6xl w-full">
            <div className="masonry-grid">
              {galleryItems.map((img) => (
                <div key={img.id} className="masonry-item group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all border">
                  <div className="relative w-full flex flex-col items-center">
                    <div className="relative w-full aspect-[4/3] md:aspect-auto">
                      <Image
                        src={img.src}
                        alt={img.title}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-center items-center">
                      <Badge className="bg-accent text-accent-foreground w-fit mb-3 font-bold uppercase tracking-widest text-[10px]">
                        {img.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white font-headline leading-tight">
                        {img.title}
                      </h3>
                      <p className="text-white/70 text-xs mt-2 font-bold uppercase tracking-widest">
                        {img.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
