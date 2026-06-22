
"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects-data"

export default function GalleryPage() {
  // Use images from the actual projects data
  const galleryItems = projects.map((project, index) => ({
    id: index,
    category: project.category,
    src: project.imageUrl,
    title: project.name,
    status: project.status
  }))

  return (
    <div className="flex flex-col w-full">
      {/* Header - Centered */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Visual Portfolio</h1>
            <p className="text-xl text-white/70">A comprehensive view of our construction sites and completed industrial facilities.</p>
          </div>
        </div>
      </section>

      {/* Grid - Strictly Centered */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
                        unoptimized
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
