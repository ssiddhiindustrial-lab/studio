
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
    fullDesc: "Siddhi Industrial Services specializes in the comprehensive development of industrial plants and manufacturing facilities across the high-growth corridors of Ahmedabad and Sanand. Our engineering approach goes beyond basic civil work; we integrate process-specific requirements directly into the structural design, ensuring that the physical infrastructure seamlessly supports complex machinery and production workflows. As expert factory development partners, we handle everything from specialized, vibration-isolated machine foundations to high-clearance process halls. We collaborate closely with manufacturing heads and consultants to ensure that the production infrastructure—including load-bearing capacities and utility corridors—is perfectly aligned with the industrial engineering needs of the plant. Whether you are initiating a greenfield factory development in Sanand GIDC or executing a strategic factory expansion in Ahmedabad, our turnkey industrial projects prioritize manufacturing workflow optimization and long-term operational efficiency. Our deep expertise in industrial civil construction and heavy RCC works ensures that every manufacturing unit is built to withstand rigorous industrial loads while providing a safe, productive, and compliant environment for your production units.",
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
      { question: "What is included in factory & plant development in Ahmedabad?", answer: "Our service covers turnkey civil works, specialized machine foundations, industrial utilities, and production hall construction tailored to manufacturing needs." },
      { question: "Do you provide factory & plant development in Sanand?", answer: "Yes, we have extensive experience executing plant development projects within Sanand GIDC, adhering to all local industrial norms." },
      { question: "How do you design machine foundations?", answer: "We design foundations based on equipment load and vibration specifications, using specialized RCC techniques to ensure stability and machine longevity." },
      { question: "Can you handle factory expansion projects?", answer: "Yes, we specialize in brownfield expansions, ensuring minimal disruption to existing operations while integrating new production units seamlessly." },
      { question: "What industrial utilities do you manage?", answer: "We plan and install comprehensive utility networks including compressed air lines, industrial water systems, power corridors, and specialized drainage." },
      { question: "What is the typical project timeline?", answer: "Timelines vary by scale, but a standard manufacturing facility typically takes 6 to 12 months from site grading to final handover." }
    ]
  },
  {
    slug: "structural-steel-works",
    title: "Structural Steel Works",
    label: "Steel Engineering & Fabrication",
    icon: Construction,
    shortDesc: "Expert structural steel fabrication and erection in Ahmedabad specializing in PEB structures, high-span industrial sheds, and heavy framework for manufacturing units.",
    fullDesc: "Siddhi Industrial Services is a premier contractor for structural steel fabrication and erection in Ahmedabad and Sanand. We specialize in delivering end-to-end steelwork construction, from factory-controlled fabrication to precise on-site structural steel erection. Our expertise encompasses complex industrial steel structures, including heavy-duty frameworks for manufacturing plants, factory buildings, and specialized industrial sheds. We utilize advanced structural engineering principles to fabricate high-integrity steel columns and beams that form the backbone of modern industrial infrastructure. Whether it is structural steel fabrication and installation for a greenfield project in Sanand GIDC or custom industrial platforms and roofing structures, our team ensures every joint and weld meets IS standards. Our steelwork construction services are tailored for iron and steel workers and procurement teams who demand speed without sacrificing structural safety. By integrating PEB structures with traditional heavy steel construction, we provide flexible and scalable solutions for industrial facilities across Gujarat. Our turnkey steel projects prioritize durability, seismic resistance, and anti-corrosive protection, ensuring your infrastructure withstands the most rigorous industrial environments.",
    benefits: [
      "High Structural Strength & Durability",
      "Faster Project Execution Timelines",
      "Custom Fabrication Precision",
      "Seismic-Resistant Frameworks",
      "Long-Term Service Life",
      "Low Maintenance Costs"
    ],
    features: [
      "IS Standard Structural Steel Sourcing",
      "Factory-Controlled Precision Fabrication",
      "Precision Arc & Mig Welding Procedures",
      "Heavy Load-Bearing Columns & Beams",
      "Anti-Corrosion Surface Coating Systems",
      "Expert Site Erection & Alignment Protocols"
    ],
    faq: [
      { question: "What is included in your structural steel fabrication and erection service?", answer: "It includes material sourcing, factory-based fabrication, logistics, and precision on-site erection of steel frameworks for industrial buildings." },
      { question: "Do you provide structural steel fabrication and installation in Sanand GIDC?", answer: "Yes, we are a leading provider of steelwork construction services in Sanand GIDC, catering to major manufacturing units and industrial parks." },
      { question: "What are the advantages of PEB structures for factory buildings?", answer: "PEB structures offer significant cost savings, faster erection timelines, and greater flexibility for future expansions compared to traditional RCC." },
      { question: "How do you ensure the quality of structural steel erection?", answer: "We follow strict alignment protocols, torque-controlled bolting, and certified welding procedures to ensure the structural integrity of the entire framework." },
      { question: "What is the typical timeline for a structural steel project?", answer: "Timelines depend on the tonnage and complexity, but our streamlined fabrication and erection process typically reduces project duration by 30-40%." },
      { question: "Do you handle heavy-duty industrial platforms and mezzanines?", answer: "Yes, we design and execute high-capacity steel platforms and mezzanine floors tailored for heavy machinery and material storage." }
    ]
  },
  {
    slug: "rcc-contractor-sanand-ahmedabad",
    title: "RCC Construction Contractor in Sanand, Ahmedabad",
    label: "Concrete Engineering",
    icon: Activity,
    shortDesc: "Specialized RCC works and heavy-duty industrial flooring delivering high-strength reinforced concrete solutions for manufacturing plants and machinery foundations.",
    fullDesc: "Siddhi Industrial Services is a specialized RCC construction contractor in Sanand and Ahmedabad, delivering high-integrity concrete structures for the most demanding industrial environments. Our expertise in industrial RCC construction encompasses heavy-duty foundations designed to withstand extreme dynamic loads, vibration-isolated machine foundations, and large-span concrete frameworks. Operating extensively in Sanand GIDC, we understand that industrial infrastructure requires more than just pouring concrete; it demands precise reinforcement as per IS codes and superior grade concrete (M25 to M40) to ensure longevity. As a leading RCC contracting company, we execute complex projects including high-load bearing columns, reinforced beams, and specialized industrial floor slabs. Our civil engineering team provides end-to-end solutions for retaining walls, water tanks, and underground RCC structures critical for manufacturing facilities and warehouses in Gujarat. By choosing Siddhi, you partner with RCC building contractors who prioritize structural safety, engineering precision, and quality-assured workmanship. From initial site mobilization to final curing, we ensure that every reinforced cement concrete structure we build serves as a reliable backbone for your industrial operations, adhering to the highest standards of heavy civil construction and industrial engineering.",
    benefits: [
      "Heavy Load-Bearing Capacity",
      "Extended Structural Lifecycle",
      "Precision RCC Execution",
      "High-Strength Concrete (M25-M40)",
      "Cost-Effective Civil Engineering",
      "Quality-Assured Site Supervision"
    ],
    features: [
      "M25 to M40 Grade Concrete Usage",
      "Reinforcement as per IS 456 Standards",
      "Vibration-Dampening Machine Foundations",
      "Heavy-Duty Industrial Floor Slabs",
      "High-Strength RCC Columns",
      "Rigorous Slump & Cube Strength Testing"
    ],
    faq: [
      { question: "Why hire an RCC construction contractor in Sanand?", answer: "Sanand GIDC has unique soil and load requirements. We provide specialized heavy RCC works designed for the industrial loads typical of Gujarat's manufacturing hub." },
      { question: "Which concrete grades do you use for machine foundations?", answer: "We typically use M25 to M40 grade concrete, depending on the machinery specifications, to ensure maximum durability and vibration resistance." },
      { question: "Do you provide RCC construction in Ahmedabad city limits?", answer: "Yes, we are full-service RCC contractors in Ahmedabad, serving both industrial zones and urban commercial construction projects." },
      { question: "What is the importance of IS code reinforcement?", answer: "Adhering to IS 456 standards ensures the structural integrity and safety of the building, preventing future cracks or structural failures in heavy load environments." },
      { question: "How do you manage the RCC construction timeline?", answer: "We use systematic planning, high-efficiency shuttering systems, and mechanized concrete pouring to meet aggressive industrial project deadlines." },
      { question: "Can you build specialized RCC retaining walls?", answer: "Yes, we specialize in high-strength RCC retaining walls and underground water tanks designed for industrial-scale water management and site stability." }
    ]
  },
  {
    slug: "industrial-warehousing-construction-sanand",
    title: "Industrial Warehouse Construction",
    label: "Logistics & Storage Infrastructure",
    icon: Warehouse,
    shortDesc: "Leading industrial warehouse contractor in Sanand & Ahmedabad, specializing in high-capacity logistics infrastructure and distribution centers built for structural durability.",
    fullDesc: "Siddhi Industrial Services is recognized as a premier Industrial Warehouse Contractor in Sanand, Ahmedabad, delivering end-to-end solutions for the logistics and manufacturing sectors. Our expertise in industrial warehouse construction encompasses strategic warehouse planning, site grading, and the execution of high-capacity storage infrastructure. We specialize in building modern distribution centers and logistics infrastructure that prioritize supply chain efficiency and high-density storage. Our construction methodologies integrate robust warehouse RCC and steel structures, featuring large clear-span sheds to maximize internal space. A critical component of our service is the installation of heavy-duty industrial flooring, such as VDF (Vacuum Dewatered Flooring), designed to withstand the constant movement of material handling equipment and high rack loads. We ensure that every facility is equipped with optimized loading and unloading bays, including advanced dock levelers for seamless transport operations. Whether you are looking for a new turnkey project or a warehouse expansion in Sanand GIDC or Ahmedabad, our team provides technically sound infrastructure that meets global logistics standards. From utility planning to fire safety compliance, we deliver durable, scalable industrial storage facilities that serve as the backbone of your supply chain operations in Gujarat.",
    benefits: [
      "Optimized Warehouse Layout for Flow",
      "Maximum Storage Capacity Efficiency",
      "Heavy Vehicle Access & Docking",
      "Durable VDF Industrial Flooring",
      "Fast Project Delivery Timelines",
      "Scalable & Modular Warehouse Design"
    ],
    features: [
      "High Load-Bearing Floor Engineering",
      "Wide Span Clear-Height Warehouse Design",
      "Dock Levelers & Heavy Loading Bays",
      "Natural Industrial Ventilation Systems",
      "FM2/FM3 Fire Safety Compliance",
      "Integrated Utility & Infrastructure"
    ],
    faq: [
      { question: "Why hire an industrial warehouse contractor in Sanand?", answer: "Sanand GIDC is a major logistics hub. We provide specialized warehouse construction designed for high-density storage and heavy vehicle movement typical of the region." },
      { question: "What type of flooring is best for industrial warehouses?", answer: "VDF (Vacuum Dewatered Flooring) is the industry standard for industrial warehouses in Ahmedabad, offering high abrasion resistance and a flat surface for heavy racking." },
      { question: "Do you handle warehouse construction in Ahmedabad?", answer: "Yes, we are a leading warehouse construction company in Ahmedabad, serving various logistics and manufacturing corridors." },
      { question: "What is the typical project timeline?", answer: "Timelines depend on the scale, but our use of PEB and efficient civil management usually delivers a functional warehouse in 4 to 8 months." },
      { question: "Steel vs RCC: Which is better for warehouses?", answer: "Steel (PEB) is ideal for large clear spans and speed, while RCC is preferred for certain load-bearing and climate-specific requirements. We often use a hybrid approach." },
      { question: "Can you assist with customized warehouse design?", answer: "Yes, we provide turnkey warehouse planning, ensuring the design accommodates your specific racking, docking, and utility requirements." }
    ]
  },
  {
    slug: "industrial-infrastructure-development-sanand",
    title: "Industrial Infrastructure Development",
    label: "Industrial Backbone",
    icon: Landmark,
    shortDesc: "Comprehensive industrial infrastructure development in Ahmedabad, including site preparation, utility networks, and internal roads for large industrial zones.",
    fullDesc: "Siddhi Industrial Services stands as a premier industrial infrastructure contractor, delivering robust site solutions that serve as the foundation for manufacturing success. Our expertise in infrastructure development in Sanand, Ahmedabad encompasses the entire spectrum of civil engineering required for high-performing industrial zones. We specialize in industrial site development, including meticulous site grading and industrial earthwork to ensure optimal terrain for construction. Our team engineers durable internal roads and pavement systems designed to withstand multi-axle vehicle loads typical of GIDC environments. A core competency is the design and execution of sophisticated underground utility networks, including water supply infrastructure, electrical utility corridors, and underground pipeline networks. We prioritize environmental resilience through advanced storm water drainage systems and industrial sewer lines that prevent site flooding during peak monsoons. Whether constructing industrial compound walls for high-level security or planning a complete turnkey infrastructure development project, we adhere to the highest industrial engineering standards. By choosing Siddhi, you partner with experts who understand the unique regulatory and technical demands of the Ahmedabad and Sanand industrial corridors.",
    benefits: [
      "Complete Industrial Site Development",
      "Integrated Utility Network Planning",
      "Efficient Storm Water Management",
      "Durable Heavy-Duty Road Infrastructure",
      "Scalable Infrastructure for Growth",
      "Adherence to GIDC Safety Norms"
    ],
    features: [
      "Internal RCC & Bitumen Roads",
      "Storm Water Drainage Networks",
      "Underground Utility Corridors",
      "High-Capacity Water Supply Pipelines",
      "Electrical Duct & Manhole Networks",
      "Precision Site Grading & Earthwork"
    ],
    faq: [
      { question: "What is included in industrial infrastructure development in Ahmedabad?", answer: "It includes site grading, internal roads, storm water drainage, sewer lines, water supply networks, and electrical utility corridors." },
      { question: "Do you provide infrastructure development in Sanand GIDC?", answer: "Yes, we are highly experienced in executing comprehensive site and utility infrastructure projects within Sanand GIDC following local industrial norms." },
      { question: "Why are durable internal roads important for industrial sites?", answer: "Industrial sites handle heavy multi-axle truck traffic; therefore, we build high-strength RCC or Bitumen roads to ensure long-term logistical efficiency and low maintenance." },
      { question: "How do you manage storm water on large industrial sites?", answer: "We design and build integrated storm water drainage networks that calculate peak runoff to ensure the site remains flood-free during heavy rains." },
      { question: "What underground utilities do you execute?", answer: "We install electrical duct networks, water supply lines, firefighting lines, and telecommunication conduits in organized underground corridors." },
      { question: "What is the typical project timeline?", answer: "Timeline depends on the site area and complexity, but a complete site infrastructure for a standard factory typically takes 3 to 6 months." }
    ]
  },
  {
    slug: "industrial-road-construction-sanand-ahmedabad",
    title: "Industrial Road Construction in Ahmedabad",
    label: "Roads & Drainage Engineering",
    icon: Route,
    shortDesc: "Specialized industrial road construction in Ahmedabad and Sanand. Expert road construction contractors providing industrial drainage construction and storm water drainage systems.",
    fullDesc: "Siddhi Industrial Services is a leader in industrial road construction in Ahmedabad, delivering high-performance infrastructure designed for the heavy logistical demands of manufacturing sectors. As premier road construction contractors, we specialize in the engineering and execution of internal factory roads that withstand multi-axle vehicle traffic in Sanand. Our expertise also extends to industrial road construction in Sanand, particularly within Sanand GIDC, where we provide technically advanced pavement solutions. A critical component of our road infrastructure is professional industrial drainage construction. As an experienced storm water drainage contractor, we design integrated storm water networks and underground drainage systems that prevent flooding and protect industrial assets during monsoons. Whether it is heavy-duty RCC roads or bituminous surfacing, our team ensures every project meets rigorous industrial safety and durability standards. We provide turnkey solutions from road base preparation to final surface alignment, making us the go-to contractors for comprehensive industrial access and water management in Gujarat.",
    benefits: [
      "Heavy Vehicle Ready Infrastructure",
      "Advanced Storm Water Management",
      "Long-Term Structural Durability",
      "Integrated Utility Corridors",
      "Rapid Site Connectivity",
      "Low Maintenance Road Design"
    ],
    features: [
      "RCC & Bituminous Road Pavement",
      "Industrial Drainage Networks",
      "Expert Subgrade Preparation",
      "High-Capacity Drainage Channels",
      "Precise Surface Leveling",
      "IS Standard Construction Practices"
    ],
    faq: [
      { question: "What are your capabilities in industrial road construction in Ahmedabad?", answer: "We provide complete turnkey services including site grading, base preparation, and the construction of heavy-duty RCC or Bituminous roads tailored for industrial traffic." },
      { question: "Do you offer industrial road construction in Sanand?", answer: "Yes, we are highly active in Sanand GIDC, executing large-scale road projects for leading manufacturing units and logistics hubs." },
      { question: "Why should we hire expert road construction contractors?", answer: "Professional contractors understand load-bearing requirements and drainage integration, ensuring that roads do not crack under heavy truck movement." },
      { question: "What is included in industrial drainage construction?", answer: "It involves the planning and building of RCC open drains, underground pipelines, and catchment basins to handle large volumes of industrial runoff." },
      { question: "What makes you a preferred storm water drainage contractor?", answer: "Our ability to perform hydrological site analysis ensures that we design drainage networks that effectively prevent waterlogging during peak monsoons." },
      { question: "How long does a typical industrial road project take?", answer: "Timelines depend on the square meter area, but a standard industrial road and drainage project typically takes between 3 to 5 months." }
    ]
  },
  {
    slug: "turnkey-project-management",
    title: "Turnkey Project Management",
    label: "End-to-End Execution",
    icon: HardHat,
    shortDesc: "Complete turnkey industrial project management in Ahmedabad, providing a single point of responsibility from initial concept to final facility handover.",
    fullDesc: "Siddhi Industrial Services provides comprehensive turnkey project management in Sanand and Ahmedabad, offering a single point of responsibility for large-scale industrial infrastructure. Our end-to-end project delivery model begins with rigorous project planning and engineering coordination, ensuring that design management is perfectly aligned with the client’s operational requirements. We handle every phase of the lifecycle, including detailed budget planning and procurement management to ensure cost control without compromising on engineering excellence. Our construction execution team manages vendor coordination and construction supervision, maintaining strict quality assurance and safety management protocols throughout the process. As a leading industrial turnkey contractor, we navigate the complexities of Sanand GIDC and Ahmedabad’s regulatory landscapes, providing a hassle-free experience for factory owners and industrial developers. The process concludes with thorough testing and commissioning, followed by a professional final project handover. By managing everything from site grading to final utility activation, we reduce client risk and ensure that the facility is ready for immediate operation upon completion.",
    benefits: [
      "Single Point Responsibility",
      "Better Cost Control",
      "Faster Project Delivery",
      "Integrated Project Coordination",
      "Quality-Assured Execution",
      "Reduced Client Risk"
    ],
    features: [
      "End-to-End Project Planning",
      "Engineering & Design Coordination",
      "Procurement Management",
      "Construction Monitoring",
      "Quality & Safety Compliance",
      "Commissioning & Handover"
    ],
    faq: [
      { question: "What is turnkey project management in Ahmedabad?", answer: "It is a single-source responsibility model where Siddhi handles everything from planning and engineering to procurement and final project handover." },
      { question: "Why hire a turnkey contractor in Sanand?", answer: "A turnkey contractor like Siddhi understands Sanand GIDC norms and manages all vendors, reducing the client's management burden and project risks." },
      { question: "What are the advantages of turnkey industrial projects?", answer: "Key advantages include faster project delivery, better cost control, integrated coordination, and single-point accountability for quality." },
      { question: "How do you manage industrial project costs?", answer: "We use detailed budget planning and procurement management to prevent cost overruns and ensure transparency throughout the execution phase." },
      { question: "What is the typical timeline for a turnkey project?", answer: "Timelines depend on the facility's scale and complexity, but the turnkey model typically shortens the overall duration through integrated management." },
      { question: "Do you handle testing and commissioning?", answer: "Yes, our turnkey service includes complete testing, commissioning, and ensuring the facility meets all operational specifications before handover." }
    ]
  }
];
