
"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const galleryCategories = ["All", "Industrial Projects", "RCC Works", "Roads", "Warehouses", "Site Activities"]

const galleryImages = [
  { id: 1, category: "Industrial Projects", src: "https://picsum.photos/seed/ind1/800/600", title: "Industrial Shed Fabrication" },
  { id: 2, category: "RCC Works", src: "https://picsum.photos/seed/rcc1/600/800", title: "High Strength Machine Foundation" },
  { id: 3, category: "Roads", src: "https://picsum.photos/seed/road1/800/600", title: "Internal Concrete Road" },
  { id: 4, category: "Warehouses", src: "https://picsum.photos/seed/wh1/800/1000", title: "Modern Logistics Warehouse" },
  { id: 5, category: "Site Activities", src: "https://picsum.photos/seed/site1/1000/800", title: "Safety Briefing Session" },
  { id: 6, category: "Industrial Projects", src: "https://picsum.photos/seed/ind2/800/600", title: "Main Plant Structure" },
  { id: 7, category: "RCC Works", src: "https://picsum.photos/seed/rcc2/600/900", title: "VDF Flooring Progress" },
  { id: 8, category: "Site Activities", src: "https://picsum.photos/seed/site2/800/600", title: "HSE Audit at Night" },
  { id: 9, category: "Warehouses", src: "https://picsum.photos/seed/wh2/800/600", title: "Steel Racking System" }
]

export default function GalleryPage() {
  const [filter, setFilter] = React.useState("All")

  const filteredImages = galleryImages.filter(img => filter === "All" || img.category === filter)

  return (
    <div className="flex flex-col w-full">
      {/* Header - Centered */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Visual Portfolio</h1>
            <p className="text-xl text-white/70">A look inside our construction sites and completed facilities.</p>
          </div>
        </div>
      </section>

      {/* Filter Bar - Centered */}
      <section className="py-12 bg-white sticky top-16 z-30 shadow-sm border-b overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 min-w-max pb-2">
            {galleryCategories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                className={filter === cat ? "bg-accent text-accent-foreground" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid - Strictly Centered */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="masonry-grid max-w-6xl mx-auto">
            {filteredImages.map((img) => (
              <div key={img.id} className="masonry-item group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all">
                <div className="relative w-full h-full flex flex-col items-center">
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={800}
                    height={1000}
                    className="object-cover w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-center items-center">
                    <Badge className="bg-accent text-accent-foreground w-fit mb-3">{img.category}</Badge>
                    <h3 className="text-xl font-bold text-white font-headline">{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
