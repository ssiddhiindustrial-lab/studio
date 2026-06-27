
import { notFound } from "next/navigation"
import { servicesData } from "@/lib/services-data"
import ServiceDetailClient from "./ServiceDetailClient"
import { Metadata } from "next"

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  
  if (!service) return {};

  if (service.metadata) {
    return service.metadata;
  }

  return {
    title: `${service.title} | Siddhi Industrial Services`,
    description: service.shortDesc,
  }
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
