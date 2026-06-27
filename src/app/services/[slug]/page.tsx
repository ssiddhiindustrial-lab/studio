import { notFound } from "next/navigation"
import { servicesData } from "@/lib/services-data"
import ServiceDetailClient from "./ServiceDetailClient"
import { Metadata } from "next"

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug)

  if (!service) {
    notFound()
  }

  // Structured Data for SEO, AEO, and GEO
  const orgName = "Siddhi Industrial Services";
  const orgUrl = "https://www.siddhiindustrialservices.in";
  const pageUrl = `${orgUrl}/services/${service.slug}`;
  const logoUrl = "https://lh3.googleusercontent.com/d/1FoiTdu48Dr-5jonDN_rkLsh_s15F8bBn";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": service.title,
        "description": service.fullDesc,
        "provider": { "@id": `${orgUrl}/#organization` },
        "areaServed": {
          "@type": "State",
          "name": "Gujarat"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industrial Construction Services",
          "itemListElement": service.benefits.map((benefit, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": benefit
            }
          }))
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${orgUrl}/#organization`,
        "name": orgName,
        "url": orgUrl,
        "logo": logoUrl,
        "image": logoUrl,
        "telephone": "+91-91571-87484",
        "email": "s.d.patel.qw@gmail.com",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "K-403 Radhe Sky Line, Sanand",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382110",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.9990",
          "longitude": "72.3789"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": orgUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${orgUrl}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": service.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": service.title,
        "isPartOf": { "@id": `${orgUrl}/#website` },
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
        "mainEntity": { "@id": `${pageUrl}#service` }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient slug={slug} />
    </>
  )
}
