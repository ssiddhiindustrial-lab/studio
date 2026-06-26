
import { Factory, Construction, Warehouse, Route, Landmark, HardHat, Settings, Activity } from "lucide-react"

export interface ServiceDetail {
  slug: string;
  title: string;
  label: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
  faq: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "industrial-building-construction",
    title: "Industrial Building Construction",
    label: "Core Civil Engineering",
    icon: Factory,
    shortDesc: "Expert industrial civil contractors in Ahmedabad providing high-precision construction for factories, manufacturing units, and heavy-duty industrial shells with a focus on structural longevity.",
    fullDesc: "Siddhi Industrial Services stands as a premier industrial construction company, delivering robust civil solutions for complex industrial environments. Our expertise in industrial building construction encompasses everything from site preparation and heavy-load foundations to the execution of multi-story industrial frameworks. We understand that industrial facilities require more than just standard building practices; they demand engineering precision that accounts for high machinery vibrations, heavy floor loads, and seamless utility integration. By choosing Siddhi, you partner with building contractors in Ahmedabad who prioritize safety standards and quality workmanship. Our construction process involves rigorous site analysis, material testing, and skilled execution to ensure your facility remains a high-performing asset for decades. Whether you are expanding an existing unit or building a new manufacturing hub, we provide the technical depth required for successful industrial project execution.",
    benefits: [
      "Optimized industrial layouts for workflow efficiency",
      "High-load foundations for heavy machinery",
      "Seismic-resistant structural designs",
      "Compliance with international safety standards",
      "Precision-engineered utility integrations",
      "Scalable infrastructure for future expansion"
    ],
    features: [
      "Heavy-duty RCC structural frameworks",
      "Advanced site grading and earthwork",
      "Custom machine pit construction",
      "High-strength industrial roofing systems",
      "Integrated fire-safety structural elements",
      "Premium industrial grade material sourcing"
    ],
    faq: [
      { question: "What is your typical construction timeline?", answer: "Timeline varies based on project scale, but we prioritize timely delivery through rigorous project management." },
      { question: "Do you provide turnkey industrial solutions?", answer: "Yes, we handle everything from site survey to final utility activation." },
      { question: "Are you experienced in Sanand GIDC projects?", answer: "We have executed numerous high-profile industrial projects across Sanand GIDC and Ahmedabad." },
      { question: "How do you ensure construction quality?", answer: "We conduct regular material testing and follow a 4-step quality audit framework." },
      { question: "Do you handle specialized machine foundations?", answer: "Yes, we specialize in high-load, vibration-absorbing foundations for heavy industrial equipment." }
    ]
  },
  {
    slug: "factory-plant-development",
    title: "Factory & Plant Development",
    label: "Manufacturing Hubs",
    icon: Settings,
    shortDesc: "Professional factory construction and industrial plant development in Ahmedabad, focusing on manufacturing workflow optimization and heavy-duty infrastructure integration.",
    fullDesc: "Siddhi Industrial Services specializes in the dedicated development of industrial plants and manufacturing facilities. Our approach integrates process-specific requirements into the civil structure, ensuring that the building supports the machinery and production flow. As expert industrial civil contractors in Ahmedabad, we handle everything from specialized machine pits to high-clearance process halls. We collaborate closely with manufacturing heads to ensure that the physical infrastructure—including load-bearing capacities and utility corridors—is perfectly aligned with the industrial engineering needs of the plant.",
    benefits: [
      "Optimized production workflows",
      "Seamless machinery integration",
      "Scalable facility design",
      "High safety standards compliance",
      "Robust utility planning",
      "Durable structural build"
    ],
    features: [
      "Process-aware plant layouts",
      "Custom heavy-load machine pits",
      "High-clearance manufacturing halls",
      "Integrated utility corridors",
      "Specialized ventilation systems",
      "Advanced site security features"
    ],
    faq: [
      { question: "Can you build specialized machine foundations?", answer: "Yes, we specialize in vibration-isolated foundations and heavy-load pits for manufacturing machinery." },
      { question: "Do you handle chemical-resistant flooring?", answer: "We provide various industrial flooring options including epoxy and chemical-resistant RCC." },
      { question: "How do you manage utility integration?", answer: "We plan all plumbing, electrical, and gas lines during the civil phase for a clutter-free environment." },
      { question: "Are you active in Sanand GIDC?", answer: "Yes, we have extensive experience working within Sanand GIDC and other industrial zones in Ahmedabad." },
      { question: "Do you provide fire-safety infrastructure?", answer: "Every plant development includes integrated fire tanks, piping, and safety walls as per industrial norms." }
    ]
  },
  {
    slug: "structural-steel-works",
    title: "Structural Steel Works",
    label: "Steel Engineering & Fabrication",
    icon: Construction,
    shortDesc: "Leading structural steel works in Ahmedabad specializing in PEB structures, high-span industrial sheds, and custom fabrication for heavy-duty industrial applications.",
    fullDesc: "As experts in structural steel works, Siddhi Industrial Services provides comprehensive fabrication and on-site erection solutions for the most demanding industrial requirements. Our steel structures are designed for maximum clear spans and structural durability, making us a preferred choice for factory buildings and large-scale warehouses. We utilize advanced fabrication techniques to ensure every joint and member meets precise engineering specifications. Our team is skilled in the erection of Pre-Engineered Buildings (PEB) and custom-designed structural steel frameworks that offer flexibility and speed without compromising on strength. In an era where speed to market is critical, our structural steel solutions allow for faster project delivery while maintaining the highest safety standards.",
    benefits: [
      "Rapid on-site erection for faster delivery",
      "Maximized clear spans for storage optimization",
      "Cost-effective alternative to traditional RCC",
      "Superior strength-to-weight ratios",
      "Flexible and scalable structural designs",
      "High resistance to environmental stressors"
    ],
    features: [
      "Custom PEB (Pre-Engineered Building) design",
      "Precision fabrication of heavy steel sections",
      "Seismic-compliant structural frameworks",
      "Anti-corrosive industrial coatings",
      "Integrated mezzanine floor solutions",
      "High-span roof truss systems"
    ],
    faq: [
      { question: "What are the advantages of PEB over traditional steel?", answer: "PEB structures offer faster construction, lower costs, and greater design flexibility." },
      { question: "What type of steel grades do you use?", answer: "We use high-grade industrial steel that meets all national and international standards." },
      { question: "Can you handle custom structural designs?", answer: "Yes, we have an expert team for custom fabrication based on specific engineering drawings." },
      { question: "Do you provide roofing with the steel structure?", answer: "Yes, we offer integrated roofing solutions including insulated and skylight options." },
      { question: "Is your steel work anti-corrosive?", answer: "We apply specialized anti-corrosive coatings to ensure long-term durability in industrial settings." }
    ]
  },
  {
    slug: "rcc-construction",
    title: "RCC Construction",
    label: "Concrete Engineering",
    icon: Activity,
    shortDesc: "Specialized RCC works and heavy-duty industrial flooring in Ahmedabad, delivering high-strength reinforced concrete solutions for manufacturing plants and machinery bases.",
    fullDesc: "Industrial environments demand concrete that can withstand extreme weight, constant vibration, and chemical exposure. Siddhi Industrial Services is a specialist in heavy-duty RCC works, providing engineered solutions that go far beyond standard civil work. We specialize in VDF (Vacuum Dewatered Flooring), which provides the level of precision and durability required for modern manufacturing floors. Our expertise extends to the construction of high-load machine foundations that must absorb significant kinetic energy without cracking. As a leading building contractor in Ahmedabad, we utilize high-grade reinforcement and laser-level precision to ensure every slab is perfectly flat and structurally sound.",
    benefits: [
      "VDF flooring for superior surface hardness",
      "Crack-resistant industrial concrete slabs",
      "High-load machinery base engineering",
      "Laser-level precision for flat surfaces",
      "Reduced maintenance costs over lifecycle",
      "Superior resistance to heavy industrial traffic"
    ],
    features: [
      "Vacuum Dewatered Flooring (VDF) expertise",
      "High-grade reinforcement steel integration",
      "Specialized vibration-dampening foundations",
      "Chemical-resistant concrete surfacing",
      "Integrated drainage and utility channels",
      "Dust-proof and wear-resistant finishes"
    ],
    faq: [
      { question: "What is VDF flooring?", answer: "VDF stands for Vacuum Dewatered Flooring, which increases concrete strength and surface hardness." },
      { question: "How do you prevent cracks in large slabs?", answer: "We use high-grade reinforcement and specialized joint cutting techniques." },
      { question: "Can you build foundations for heavy machinery?", answer: "Yes, we specialize in heavy-load foundations with vibration absorption." },
      { question: "What concrete grades do you work with?", answer: "We typically work with M25 to M40 grades depending on the industrial load requirements." },
      { question: "Do you provide floor hardening services?", answer: "Yes, we offer various surface treatments to increase floor durability." }
    ]
  },
  {
    slug: "warehousing",
    title: "Warehousing Solutions",
    label: "Storage Infrastructure",
    icon: Warehouse,
    shortDesc: "Complete industrial warehouse development in Ahmedabad, featuring large clear-span sheds, VDF flooring, and optimized storage layouts for logistics and manufacturing hubs.",
    fullDesc: "Siddhi Industrial Services specializes in the development of modern, large-scale warehousing solutions tailored for the logistics and supply chain sectors. We provide turnkey warehouse construction that focuses on space optimization, structural strength, and operational flow. Our warehouses are built using a combination of high-strength RCC and structural steel, ensuring they can support high-rack storage systems and heavy vehicular traffic. We integrate advanced features such as insulated roofing, efficient stormwater drainage, and high-capacity loading docks.",
    benefits: [
      "Maximum space utilization with high spans",
      "VDF flooring ready for high-rack storage",
      "Efficient logistics flow and loading design",
      "Integrated fire safety and utility systems",
      "Climate-aware roofing and insulation",
      "Durable infrastructure for 24/7 operations"
    ],
    features: [
      "High-clearance PEB structural sheds",
      "Heavy-duty vehicular docking bays",
      "Advanced site drainage and water management",
      "Integrated office and admin blocks",
      "Rack-ready high-strength flooring",
      "Security-integrated site perimeter solutions"
    ],
    faq: [
      { question: "What is the maximum span you can achieve?", answer: "We can design and build spans up to 60+ meters depending on structural requirements." },
      { question: "Do you build warehouses with cold storage capability?", answer: "Yes, we provide the civil and structural base required for insulated cold storage." },
      { question: "How do you handle site drainage?", answer: "We design complex stormwater drainage systems to keep the site dry during monsoons." },
      { question: "Can you assist with building permissions?", answer: "While we are contractors, we can provide all technical drawings needed for regulatory approvals." },
      { question: "What kind of flooring is best for warehouses?", answer: "VDF (Vacuum Dewatered Flooring) is the industry standard for durability and flatness." }
    ]
  },
  {
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    label: "Industrial Backbone",
    icon: Landmark,
    shortDesc: "Comprehensive industrial infrastructure development in Ahmedabad, including site preparation, utility networks, and administrative facilities for large industrial zones.",
    fullDesc: "Infrastructure is the backbone of any industrial enterprise. Siddhi Industrial Services provides end-to-end infrastructure development, ensuring your site is ready for high-performance operations. We manage complex site grading, underground utility networks, and the construction of support buildings like administrative blocks, labs, and security hubs. As recognized building contractors in Ahmedabad, we understand that quality infrastructure is a long-term investment that reduces operational friction and ensures safety across the entire site.",
    benefits: [
      "Reliable utility networks",
      "Expert site preparation",
      "Durable support infrastructure",
      "Future-ready site planning",
      "Efficient land utilization",
      "Compliance with GIDC norms"
    ],
    features: [
      "Advanced earthwork and grading",
      "Underground piping and cabling",
      "Administrative building construction",
      "Perimeter security and fencing",
      "Water storage and treatment units",
      "Integrated fire fighting networks"
    ],
    faq: [
      { question: "Do you handle site land grading?", answer: "Yes, we provide comprehensive earthwork, leveling, and grading to prepare the site for construction." },
      { question: "Can you build administrative blocks?", answer: "We construct all support infrastructure including offices, security cabins, and worker welfare centers." },
      { question: "How do you plan underground utilities?", answer: "We design and execute integrated utility trenches for electrical, water, and sewage lines." },
      { question: "Do you work with GIDC regulations?", answer: "We have deep knowledge of GIDC norms in Gujarat, ensuring all infrastructure is compliant." },
      { question: "Is fire-fighting infrastructure included?", answer: "We specialize in building underground fire tanks and hydrant pipe networks for industrial safety." }
    ]
  },
  {
    slug: "roads-drainage",
    title: "Roads & Drainage",
    label: "Industrial Access",
    icon: Route,
    shortDesc: "Durable industrial road construction and stormwater drainage engineering in Ahmedabad, designed to withstand heavy vehicular traffic and heavy monsoons.",
    fullDesc: "Industrial roads and drainage systems face unique challenges, including heavy truck traffic and significant water runoff. Siddhi Industrial Services engineers these systems to last. We use high-grade materials for internal road networks and design sophisticated drainage systems to ensure your site remains operational and flood-free during Ahmedabad’s monsoons. Our expertise in industrial road construction ensures smooth logistics flow and minimizes long-term maintenance costs for the facility owner.",
    benefits: [
      "Flood-free site operations",
      "High-durability road surfaces",
      "Optimized traffic flow",
      "Reduced long-term maintenance",
      "Efficient water runoff management",
      "Sustainable site drainage"
    ],
    features: [
      "Heavy-duty RCC/Bitumen roads",
      "Stormwater drainage networks",
      "Paved parking and loading zones",
      "Integrated culverts and manholes",
      "Sustainable water harvesting points",
      "High-visibility road markings"
    ],
    faq: [
      { question: "What type of roads are best for factories?", answer: "Heavy-duty RCC roads with proper reinforcement are the best for long-term industrial use." },
      { question: "How do you prevent site flooding?", answer: "We design sloped site drainage and high-capacity stormwater networks based on local rainfall data." },
      { question: "Do you handle internal road marking?", answer: "Yes, we provide complete road markings and safety signage as part of the infrastructure package." },
      { question: "Can you build heavy-load parking zones?", answer: "We specialize in constructing parking areas that can withstand constant use by multi-axle trucks." },
      { question: "What about maintenance for these roads?", answer: "Our high-precision RCC construction ensures minimal maintenance for many years." }
    ]
  },
  {
    slug: "turnkey-project-management",
    title: "Turnkey Project Management",
    label: "End-to-End Execution",
    icon: HardHat,
    shortDesc: "Complete turnkey industrial project management in Ahmedabad, providing a single point of responsibility from initial concept to final facility handover.",
    fullDesc: "Our turnkey project management services simplify the complex process of industrial construction. Siddhi Industrial Services takes full responsibility for the project, coordinating design, procurement, and construction. This ensures seamless communication, faster delivery, and a technically superior final product, allowing you to focus on your core business. As premier turnkey builders in Ahmedabad, we manage everything from the initial land survey to the final commissioning of the facility.",
    benefits: [
      "Single point of responsibility",
      "Faster project turnaround",
      "Cost-certainty execution",
      "Seamless communication",
      "Expert vendor coordination",
      "Zero-hassle handover"
    ],
    features: [
      "Integrated project planning",
      "Budget and schedule management",
      "Procurement and vendor selection",
      "On-site supervision and HSE",
      "Quality control and reporting",
      "Final commissioning and handover"
    ],
    faq: [
      { question: "What does 'Turnkey' actually include?", answer: "It means we handle everything: planning, materials, labor, and execution until the building is ready for use." },
      { question: "Do you provide fixed-cost contracts?", answer: "We provide detailed estimates and can work on fixed-budget models for better cost-certainty." },
      { question: "How is communication handled?", answer: "You will have a dedicated project manager who will provide weekly progress and quality reports." },
      { question: "Do you handle regulatory compliance?", answer: "We provide all technical documents and support required for regulatory and GIDC approvals." },
      { question: "What is your track record for turnkey projects?", answer: "We have successfully delivered multiple turnkey factories and warehouses across Gujarat." }
    ]
  }
];
