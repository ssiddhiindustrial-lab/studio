
import { Factory, Construction, Warehouse, Roads, Landmark, HardHat, Settings, Activity } from "lucide-react"

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "industrial-building-construction",
    title: "Industrial Building Construction",
    icon: Factory,
    shortDesc: "Comprehensive civil construction of industrial facilities including specialized foundations.",
    fullDesc: "We provide end-to-end civil construction services for industrial buildings. Our expertise includes site preparation, heavy-duty foundation work, and the construction of robust industrial shells designed to support heavy machinery and high-traffic operations. We ensure that every building is optimized for workflow efficiency and structural longevity.",
    benefits: ["Optimized workflow design", "High-load foundations", "Scalable structures"],
    features: ["Seismic-resistant design", "Heavy-load floor slabs", "Advanced utility integration"]
  },
  {
    slug: "factory-plant-development",
    title: "Factory & Plant Development",
    icon: Settings,
    shortDesc: "Complete setup of manufacturing plants, from technical drawings to final execution.",
    fullDesc: "Our factory and plant development services cover everything from the initial technical layout to the final structural handover. We work closely with engineers to ensure that the civil and structural aspects of the plant perfectly align with the machinery and production line requirements. Our focus is on safety, durability, and operational excellence.",
    benefits: ["Custom plant layouts", "Safety integrated design", "Long-term durability"],
    features: ["Turnkey civil solutions", "Specialized machine pits", "Environmental compliance"]
  },
  {
    slug: "structural-steel-works",
    title: "Structural Steel Works",
    icon: Construction,
    shortDesc: "Pre-engineered and custom steel structural works, including fabrication and on-site erection.",
    fullDesc: "Siddhi Industrial Services specializes in high-precision structural steel fabrication and erection. We design and build high-span industrial sheds, warehouses, and structural frameworks using the highest quality steel. Our fabrication process is rigorous, and our on-site erection team is trained for maximum safety and speed.",
    benefits: ["Fast execution", "High-span capabilities", "Precision fabrication"],
    features: ["PEB structures", "Anti-corrosive coatings", "Mezzanine floor construction"]
  },
  {
    slug: "rcc-construction",
    title: "RCC Construction",
    icon: Activity,
    shortDesc: "Premium reinforced cement concrete works specifically engineered for high vibration and stress.",
    fullDesc: "Industrial environments demand concrete that can withstand extreme weight and constant vibration. We are experts in RCC construction, specializing in VDF (Vacuum Dewatered Flooring), heavy machine bases, and crack-resistant slabs that ensure a smooth, durable surface for your industrial operations.",
    benefits: ["VDF flooring experts", "Cracked-resistance slabs", "Heavy machine bases"],
    features: ["Laser-level precision", "High-grade reinforcement", "Dust-proof surfacing"]
  },
  {
    slug: "warehousing",
    title: "Warehousing Solutions",
    icon: Warehouse,
    shortDesc: "Large-scale storage infrastructure development including PEB sheds and loading docks.",
    fullDesc: "We build modern warehousing facilities that prioritize space optimization and ease of logistics. Our warehouse solutions include large clear spans, efficient drainage systems, high-capacity loading docks, and integrated fire safety measures to protect your inventory and streamline your supply chain.",
    benefits: ["Large clear spans", "Advanced drainage", "Modern fire safety"],
    features: ["Insulated roofing", "Heavy-duty docking bays", "Rack-ready flooring"]
  },
  {
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    icon: Landmark,
    shortDesc: "Developing necessary surrounding infrastructure for industrial parks and corporate facilities.",
    fullDesc: "Beyond buildings, we develop the essential infrastructure that supports industrial ecosystems. This includes compound walls, security gates, administrative blocks, and common utility areas, all built to the same high standards of quality and technical precision that Siddhi is known for.",
    benefits: ["Integrated utilities", "Sustainable design", "Compliance focus"],
    features: ["Compound wall systems", "Security checkpoints", "Admin block construction"]
  },
  {
    slug: "roads-drainage",
    title: "Roads & Drainage",
    icon: Roads,
    shortDesc: "Construction of internal heavy-duty industrial roads and complex drainage systems.",
    fullDesc: "Industrial facilities require roads that don't crack under the weight of heavy transport. We build RCC and bitumen roads specifically designed for industrial loads. Simultaneously, we implement complex storm-water and industrial drainage systems to ensure your site remains functional and dry throughout the year.",
    benefits: ["Heavy transport ready", "Efficient water runoff", "Durable materials"],
    features: ["Vibrated concrete roads", "Closed & open drainage", "Culvert construction"]
  },
  {
    slug: "turnkey-project-management",
    title: "Turnkey Project Management",
    icon: HardHat,
    shortDesc: "End-to-end management of your construction project, from land survey to final handover.",
    fullDesc: "Our turnkey service takes the stress out of industrial construction. We handle everything: land surveying, technical drawings, material procurement, construction management, safety audits, and utility activation. You get a single point of contact and a project delivered on time and within budget.",
    benefits: ["Single point of contact", "Budget control", "Risk management"],
    features: ["Total project lifecycle", "Regulatory approvals", "Quality assurance audits"]
  }
];
