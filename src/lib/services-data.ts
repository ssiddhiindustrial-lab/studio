
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
    slug: "structural-steel-works",
    title: "Structural Steel Works",
    label: "Steel Engineering & Fabrication",
    icon: Construction,
    shortDesc: "Leading structural steel works in Ahmedabad specializing in PEB structures, high-span industrial sheds, and custom fabrication for heavy-duty industrial applications.",
    fullDesc: "As experts in structural steel works, Siddhi Industrial Services provides comprehensive fabrication and on-site erection solutions for the most demanding industrial requirements. Our steel structures are designed for maximum clear spans and structural durability, making us a preferred choice for factory buildings and large-scale warehouses. We utilize advanced fabrication techniques to ensure every joint and member meets precise engineering specifications. Our team is skilled in the erection of Pre-Engineered Buildings (PEB) and custom-designed structural steel frameworks that offer flexibility and speed without compromising on strength. In an era where speed to market is critical, our structural steel solutions allow for faster project delivery while maintaining the highest safety standards. From anti-corrosive coatings to seismic-resistant designs, our steel works are engineered to withstand the harsh industrial environment of Gujarat's manufacturing hubs.",
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
    fullDesc: "Industrial environments demand concrete that can withstand extreme weight, constant vibration, and chemical exposure. Siddhi Industrial Services is a specialist in heavy-duty RCC works, providing engineered solutions that go far beyond standard civil work. We specialize in VDF (Vacuum Dewatered Flooring), which provides the level of precision and durability required for modern manufacturing floors. Our expertise extends to the construction of high-load machine foundations that must absorb significant kinetic energy without cracking. As a leading building contractor in Ahmedabad, we utilize high-grade reinforcement and laser-level precision to ensure every slab is perfectly flat and structurally sound. Our RCC construction processes are optimized for industrial projects where structural integrity is non-negotiable. From utility trenches to specialized storage tanks, our reinforced concrete works are built to last.",
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
    fullDesc: "Siddhi Industrial Services specializes in the development of modern, large-scale warehousing solutions tailored for the logistics and supply chain sectors. We provide turnkey warehouse construction that focuses on space optimization, structural strength, and operational flow. Our warehouses are built using a combination of high-strength RCC and structural steel, ensuring they can support high-rack storage systems and heavy vehicular traffic. We integrate advanced features such as insulated roofing, efficient stormwater drainage, and high-capacity loading docks. As recognized building contractors in Ahmedabad, we understand the local regulatory requirements for warehouse heights and safety clearances. Whether you need a simple storage shed or a complex distribution center with integrated admin blocks, we deliver infrastructure that enhances your supply chain efficiency. Our focus on quality workmanship ensures that your inventory is protected in a secure, climate-stable environment.",
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
  }
];
