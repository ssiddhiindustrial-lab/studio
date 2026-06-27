export interface Project {
  slug: string;
  name: string;
  value: string;
  year: string;
  description: string;
  category: 'Industrial' | 'Infrastructure' | 'Warehousing';
  status: 'Ongoing' | 'Completed';
  client: string;
  scope: string[];
  imageUrl: string;
  gallery?: string[];
  industry?: string;
  locationDetails?: string;
  challenges?: string[];
  solutions?: string[];
  technicalHighlights?: {
    label: string;
    value: string;
  }[];
}

/**
 * HELPER: Converts a standard Google Drive share link to a direct-view URL.
 * This format is the most stable for public cross-domain embedding.
 */
const getDriveUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const projects: Project[] = [
  {
    slug: 'suspa-industrial-infrastructure-project-sanand',
    name: 'SUSPA Industrial Infrastructure Project',
    value: '₹0.50 Cr',
    year: '2019-2020',
    description: 'Siddhi Industrial Services was commissioned by SUSPA to execute a specialized industrial infrastructure package at their manufacturing plant in Sanand GIDC, Ahmedabad. The project required a high degree of engineering precision to accommodate specialized machinery and utility installations critical to the facility\'s manufacturing operations. Our engineering approach focused on delivering high-durability reinforced concrete structures. A primary component of the project was the construction of the Nitrogen Tank Foundation, which demanded strict adherence to load-bearing specifications and seismic stability. Additionally, we executed various Machine Foundation Construction tasks, involving deep-pit excavations and high-grade RCC pouring to ensure zero-vibration mounting for heavy manufacturing equipment. The project also encompassed site-wide infrastructure improvements, including the development of heavy-duty RCC roads designed for multi-axle vehicle traffic and a comprehensive parking area development. To ensure site stability and secure the perimeter, we constructed reinforced compound walls and retaining walls, integrating them with the site\'s grading and drainage plan.',
    category: 'Industrial',
    status: 'Completed',
    client: 'SUSPA',
    industry: 'Industrial Manufacturing',
    locationDetails: 'Sanand GIDC, Ahmedabad, Gujarat',
    scope: [
      'High-precision RCC foundations for industrial nitrogen storage tanks.',
      'Construction of vibration-dampening machine foundations for heavy units.',
      'Development of heavy-duty RCC internal roads and pavement for logistics.',
      'Reinforced compound walls and retaining structures for site security.',
      'Organized parking area development and site grading for logistics flow.'
    ],
    challenges: [
      'Soil Stabilization for Heavy Tanks: The site conditions required specialized soil preparation to support high static loads of the Nitrogen Tanks.',
      'Precision Leveling: Machine foundations required sub-millimeter precision to ensure alignment for manufacturing equipment.',
      'Active Site Management: Executing RCC road construction while maintaining facility access for ongoing factory operations.'
    ],
    solutions: [
      'Custom Foundation Design: Implemented a raft-foundation design for the nitrogen tanks to distribute load effectively across the sub-grade.',
      'High-Precision Shuttering: Used advanced shuttering and leveling tools to meet the tight tolerances required for machine pits.',
      'Phased Execution: Divided the road construction and site grading into phases, allowing the client to maintain partial facility access throughout.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Infrastructure' },
      { label: 'Industry', value: 'Manufacturing' },
      { label: 'Structure Type', value: 'Heavy Load RCC' },
      { label: 'Concrete Grade', value: 'M25 / M30' }
    ],
    imageUrl: getDriveUrl('1wt8E6q-Y5WVRaKCIUk4TKD3OSsZlaYkn'),
    gallery: [
      getDriveUrl('1wt8E6q-Y5WVRaKCIUk4TKD3OSsZlaYkn'),
    ],
  },
  {
    slug: 'hitachi-hi-rel-industrial-facility-expansion-project-sanand',
    name: 'Hitachi Hi-Rel Industrial Facility Expansion Project',
    value: '₹2.20 Cr',
    year: '2024-2025',
    description: 'Siddhi Industrial Services is currently spearheading the industrial facility expansion and infrastructure development project for Hitachi Hi-Rel Power Electronics Ltd at their Chharodi manufacturing site in Sanand, Ahmedabad. As a premier industrial infrastructure contractor in Gujarat, we were selected to deliver a technically demanding package that involves both critical civil repairs and the construction of new manufacturing extensions. The project is designed to transform the existing site into a high-capacity electronics production hub, requiring meticulous planning to integrate new structures with existing operational blocks. Our engineering approach focuses on creating a robust backbone for the facility. This includes the installation of a comprehensive Storm Water Drainage (SWD) network and strategic culvert construction to protect the sensitive electronic manufacturing environment from regional monsoons. To facilitate heavy logistics, we are executing high-strength RCC road construction throughout the site, designed for the durability required by multi-axle supply chain vehicles. Beyond pure industrial shells, the scope encompasses essential human-centric infrastructure like modern locker rooms, executive toilet blocks, and high-visibility security cabins, alongside organized parking area development to improve traffic flow.',
    category: 'Industrial',
    status: 'Ongoing',
    client: 'Hitachi Hi-Rel',
    industry: 'Industrial Power Electronics Manufacturing',
    locationDetails: 'Chharodi, Sanand, Ahmedabad, Gujarat',
    scope: [
      'Civil repairs and structural extension of the main manufacturing block.',
      'Installation of a comprehensive Storm Water Drainage (SWD) network.',
      'Construction of heavy-duty internal RCC roads for material transport.',
      'Strategic culvert construction for efficient site water management.',
      'Development of administrative utility buildings including locker rooms and executive toilet blocks.',
      'Erection of high-security cabins and organized parking infrastructure.'
    ],
    challenges: [
      'Operational Continuity: Executing heavy civil works and extensions while the existing manufacturing plant maintains full production capacity.',
      'Complex Drainage Integration: Designing and installing a new Storm Water Drainage (SWD) network that integrates with existing site levels to ensure zero waterlogging.',
      'Utility Logistics: Managing multiple infrastructure upgrades (locker rooms, security cabins, parking) simultaneously within a live industrial environment.'
    ],
    solutions: [
      'Phased Construction: Implementing a strict phased schedule to ensure that construction noise and dust do not impact sensitive power electronics assembly areas.',
      'Advanced Surveying: Utilizing high-precision leveling for the SWD and culvert construction to guarantee efficient water flow and long-term site stability.',
      'Dedicated HSE Oversight: Deploying full-time safety officers to manage the safe movement of construction equipment alongside plant personnel and logistics vehicles.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Expansion' },
      { label: 'Industry', value: 'Power Electronics' },
      { label: 'Location', value: 'Chharodi, Sanand' },
      { label: 'Infrastructure', value: 'SWD & RCC Roads' },
      { label: 'Project Value', value: '₹2.20 Cr' },
      { label: 'Status', value: 'Ongoing' }
    ],
    imageUrl: getDriveUrl('100DYuXZ3h8HLdukOsIndYKIVwZzeY25B'),
    gallery: [
      getDriveUrl('100DYuXZ3h8HLdukOsIndYKIVwZzeY25B'),
    ],
  },
  {
    slug: 'nectar-engineering-industrial-building-project-sanand',
    name: 'Nectar Engineering Industrial Building Project',
    value: '₹1.80 Cr',
    year: '2024-2025',
    description: 'Siddhi Industrial Services is currently executing the comprehensive industrial building and infrastructure development project for Nectar Engineering in Sanand, Ahmedabad. This project represents a significant engineering undertaking, transforming a greenfield site into a technically advanced precision engineering manufacturing facility. Our client required a high-performance workspace that integrates heavy manufacturing capabilities with administrative and residential support structures. Our engineering approach for Nectar Engineering focuses on structural integrity and operational efficiency. We began with deep-site grading and the execution of high-load industrial foundations to support the massive RCC frame structure of the main factory building. A key technical highlight is the installation of over 40,000 square feet of high-strength Tremix industrial flooring, specifically engineered to withstand heavy machinery vibrations and continuous logistical traffic. Beyond the main production hall, we are constructing a modern administrative block and a specialized worker\'s guest house, ensuring that the facility provides a comprehensive environment for both operations and personnel. The infrastructure scope also includes a robust RCC internal road network and organized parking development, designed to facilitate seamless multi-axle vehicle movement. To ensure site security and stability, we have executed reinforced boundary wall construction integrated with advanced storm water drainage systems. This ongoing project in Sanand GIDC is being executed under strict safety protocols and quality audits, ensuring that Nectar Engineering receives a turnkey facility that meets global industrial standards.',
    category: 'Industrial',
    status: 'Ongoing',
    client: 'Nectar Engineering',
    industry: 'Industrial Manufacturing',
    locationDetails: 'Sanand, Ahmedabad, Gujarat',
    scope: [
      'Execution of heavy-load industrial foundations for precision machinery.',
      'Construction of high-strength RCC frame structure for the main factory block.',
      'Installation of specialized Tremix industrial flooring for heavy-duty production.',
      'Development of administrative building and worker\'s guest house infrastructure.',
      'Construction of high-security boundary walls and site security enclosures.',
      'Execution of internal RCC roads and organized parking area development.'
    ],
    challenges: [
      'Structural Load Balancing: The main engineering block required specialized foundation design to support heavy machinery while maintaining the integrity of the RCC frame structure.',
      'Soil Bearing Capacity: The site in Sanand required soil stabilization and specialized compaction to prevent long-term settlement of the high-span manufacturing floors.',
      'Monsoon Utility Management: Integrating the underground utility network and storm water drainage while maintaining the construction schedule during heavy rainfall periods.'
    ],
    solutions: [
      'Raft Foundation System: Implementation of a Raft Foundation system to distribute heavy static and dynamic loads evenly across the manufacturing floor area.',
      'High-Grade Materials: Utilization of high-grade M30 concrete for the RCC frame and Tremix flooring to ensure maximum durability and abrasion resistance.',
      'Phased Site Stabilization: Phased infrastructure development, prioritizing the boundary wall and drainage systems first to stabilize the site for vertical construction.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Building Construction' },
      { label: 'Industry', value: 'Precision Engineering' },
      { label: 'Location', value: 'Sanand, Ahmedabad' },
      { label: 'Structure Type', value: 'RCC Frame & Tremix Floor' },
      { label: 'Execution', value: '2024–2025' },
      { label: 'Status', value: 'Ongoing' }
    ],
    imageUrl: getDriveUrl('1wVevZ8XrtD-0fDvvcYUlsSzrSEQMeCIu'),
  },
  {
    slug: 'plot-20-industrial-building-sanand',
    name: 'Plot No. 20 Industrial Building Project',
    value: '₹1.25 Cr',
    year: '2024-2025',
    description: 'Siddhi Industrial Services is spearheading the industrial building construction and infrastructure development project at Plot No. 20 in Sanand, Gujarat. This greenfield project involves transforming an undeveloped site into a high-efficiency manufacturing hub. Our client required a multi-functional facility that could support both precision manufacturing and intensive administrative operations. To meet these needs, we implemented an engineering strategy centered on structural durability and site resilience. The project began with comprehensive site grading and the installation of a reinforced boundary wall to secure the perimeter. We are executing the complete RCC frame structure for the main factory block, which includes high-load industrial foundations designed to absorb static and dynamic equipment stresses. A major technical component of this project is the installation of high-strength Tremix industrial flooring, providing a hard-wearing surface for heavy-duty production lines. Beyond the manufacturing shell, we are constructing a modern administrative building and a dedicated utility network. The infrastructure scope also includes the development of a heavy-duty internal RCC road network and organized parking areas, engineered to facilitate multi-axle vehicle logistics. This ongoing project highlights our capability as an industrial infrastructure contractor to deliver complex, multi-faceted facilities in Sanand\'s premier industrial corridor.',
    category: 'Industrial',
    status: 'Ongoing',
    client: 'Private Client',
    industry: 'Industrial Manufacturing',
    locationDetails: 'Sanand, Ahmedabad, Gujarat',
    scope: [
      'Construction of high-security boundary walls and site security enclosures.',
      'Execution of specialized industrial foundations and full RCC frame structure.',
      'Installation of heavy-duty Tremix industrial flooring for manufacturing halls.',
      'Development of a modern administrative building with integrated utilities.',
      'Construction of internal RCC road network for logistical vehicle movement.',
      'Comprehensive parking area development and site grading for drainage flow.'
    ],
    challenges: [
      'Site Soil Stability: The greenfield site at Plot No. 20 required extensive soil stabilization and moisture control before laying the heavy-load industrial foundations.',
      'Simultaneous Infrastructure Development: Coordinating the construction of the main RCC frame alongside the development of the underground utility network and internal road systems.',
      'Logistics Management: Managing heavy construction equipment movement within the plot while maintaining access for material supply during the foundation phase.'
    ],
    solutions: [
      'Phased Site Grading: Implemented a systematic site grading plan to ensure stable bearing capacity across the entire footprint before foundation pouring.',
      'Integrated Utility Planning: Used advanced site layout techniques to install underground pipelines and electrical ducts concurrently with the structural frame to optimize the timeline.',
      'High-Grade RCC: Utilized M30 grade concrete for the frame and specialized additives for the Tremix floor to ensure maximum surface hardness and longevity.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Building & Infrastructure' },
      { label: 'Industry', value: 'Manufacturing' },
      { label: 'Location', value: 'Sanand, Ahmedabad' },
      { label: 'Structure Type', value: 'RCC Frame & Tremix Flooring' },
      { label: 'Execution', value: '2024–2025' },
      { label: 'Status', value: 'Ongoing' }
    ],
    imageUrl: getDriveUrl('1kl3dHBSRwodlJvKk7VBYrva2O0NaG98Q'),
  },
  {
    slug: 'siddhi-industrial-services-premises-sanand',
    name: 'Siddhi Industrial Services Premises',
    value: '₹0.95 Cr',
    year: '2023-2025',
    description: 'Siddhi Industrial Services is developing its own integrated infrastructure facility at Sanand GIDC to strengthen construction operations across Ahmedabad and surrounding industrial regions. As a premier industrial civil contractor, we recognized the need for a centralized, technically advanced operations hub that could streamline our supply chain and workforce management. This project serves as a live demonstration of our turnkey engineering capabilities, encompassing everything from site grading and soil stabilization to the construction of specialized heavy-duty structures. The premises features a multi-functional layout including dedicated construction material storage, machinery yards, and modern administrative offices, designed for maximum operational efficiency and future scalability.',
    category: 'Infrastructure',
    status: 'Ongoing',
    client: 'Siddhi Industrial Services',
    industry: 'Construction & Industrial Infrastructure',
    locationDetails: 'Sanand GIDC, Ahmedabad, Gujarat',
    scope: [
      'Boundary wall construction and site security fortification.',
      'Comprehensive soil filling and land development for heavy logistics.',
      'Execution of heavy-load foundations for machinery storage areas.',
      'Construction of high-strength RCC internal roads and parking hubs.',
      'Installation of specialized Tremix industrial flooring for the material godown.',
      'Development of modern administrative building with integrated utility networks.',
      'Strategic construction material godown and machinery storage facility development.',
      'Planned labour colony development with hygienic welfare facilities.'
    ],
    challenges: [
      'Complex Utility Integration: Coordinating underground drainage, electrical ducts, and firefighting networks within a restricted plot area while maintaining site access.',
      'Dynamic Load Requirements: Designing foundations for machinery storage that can handle varying weight distributions from heavy cranes and equipment.',
      'Operational Continuity: Managing our own site development while simultaneously supporting multiple external industrial projects in Sanand GIDC.'
    ],
    solutions: [
      'Modular Layout Design: Implemented a strategic zoning plan that separates office traffic from heavy machinery zones to ensure safety and efficiency.',
      'Soil Stabilization: Conducted extensive soil filling and moisture control procedures to create a stable sub-grade for the heavy-duty yard and godown foundations.',
      'Smart Infrastructure: Installed a comprehensive SWD network with integrated catchment pits to ensure the site remains flood-free during the Gujarat monsoon season.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Company Infrastructure Development' },
      { label: 'Industry', value: 'Industrial Construction' },
      { label: 'Location', value: 'Sanand GIDC, Ahmedabad' },
      { label: 'Structure Type', value: 'RCC Frame & Industrial Yard' },
      { label: 'Execution Period', value: '2023–2025' },
      { label: 'Status', value: 'Under Development' }
    ],
    imageUrl: getDriveUrl('1WJCbbk5u2LIvu7gJg5EHZ7ro_9hcxk-3'),
    gallery: [
      getDriveUrl('1WJCbbk5u2LIvu7gJg5EHZ7ro_9hcxk-3'),
    ]
  },
  {
    slug: 'una-eco-systems-industrial-building-chharodi',
    name: 'Una Eco Systems Pvt. Ltd.',
    value: '₹1.05 Cr',
    year: '2023',
    description: 'Siddhi Industrial Services successfully completed the industrial building and infrastructure development project for Una Eco Systems Pvt. Ltd. at Chharodi, Ahmedabad, Gujarat. This greenfield project involved transforming an undeveloped site into a high-performance manufacturing facility. The client required a structurally sound production environment integrated with a modern administrative block and robust logistics infrastructure. Our engineering approach prioritized foundation stability and efficient site water management. We executed a complete RCC structural framework, including high-load bearing foundations designed for manufacturing equipment. A critical technical component was the installation of the Storm Water Drainage (SWD) network, engineered to protect the sensitive manufacturing environment from regional monsoons. The project also featured high-strength Tremix industrial flooring for the production floors and a comprehensive internal RCC road network for heavy vehicle access. This completed project stands as a testament to our capability to deliver turnkey industrial facilities that meet global engineering standards within the Ahmedabad industrial corridor.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Una Eco Systems Pvt. Ltd.',
    industry: 'Industrial Manufacturing',
    locationDetails: 'Chharodi, Ahmedabad, Gujarat',
    scope: [
      'Boundary wall construction and site security fortification.',
      'Complete RCC foundations and structural framework for the factory block.',
      'Execution of heavy-duty RCC internal roads and pavement for material transport.',
      'Installation of a comprehensive Storm Water Drainage (SWD) network.',
      'Construction of modern administrative building with integrated utilities.',
      'Installation of specialized Tremix industrial flooring for heavy-duty production.',
      'Site grading and land development for optimized logistics flow.',
      'Organized parking area development and site security infrastructure.'
    ],
    challenges: [
      'Sub-surface Soil Instability: The Chharodi region features varied soil bearing capacities, requiring advanced soil preparation and engineered filling to support industrial loads.',
      'High-Volume Runoff Management: Designing a drainage network capable of handling high-volume runoff from the large manufacturing roof area without affecting neighboring plots.'
    ],
    solutions: [
      'Engineered Soil Stabilization: Implemented a dual-layer engineered soil filling and compaction process to stabilize the sub-grade before foundation pouring.',
      'Hydrological Network Design: Developed a high-capacity SWD network with reinforced culverts and precise gradients to ensure rapid discharge of storm water during the monsoon.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Building & Infrastructure' },
      { label: 'Industry', value: 'Manufacturing' },
      { label: 'Location', value: 'Chharodi, Ahmedabad' },
      { label: 'Structure Type', value: 'RCC Frame & Tremix Floor' },
      { label: 'Execution', value: '2023' },
      { label: 'Status', value: 'Completed' }
    ],
    imageUrl: getDriveUrl('1Wv9z2Z6BstPX_fFXF7pCr8C5uYPzw7kJ'),
  },
  {
    slug: 'supreme-power-industrial-infrastructure-gujarat',
    name: 'Supreme Power Industrial Infrastructure Project',
    value: '₹1.10 Cr',
    year: '2023',
    description: 'The Supreme Power Industrial Infrastructure Project in Gujarat was a landmark project executed by Siddhi Industrial Services, focusing on high-precision civil engineering and site development. Our client, Supreme Power Ltd., required a robust infrastructure backbone for their industrial manufacturing facility, demanding uncompromising structural quality and engineering precision. The project background involved transforming a challenging site into an optimized industrial hub through comprehensive site preparation and soil stabilization. Our engineering approach centered on structural stability, utilizing high-grade RCC foundations and a complete structural frame to support heavy manufacturing equipment. Execution involved the construction of heavy-duty internal RCC roads, a strategic Storm Water Drainage (SWD) network, and high-strength Tremix industrial flooring to ensure long-term operational efficiency. The outcome is a world-class manufacturing facility that meets all industrial safety standards, empowering Supreme Power\'s growth in the Gujarat corridor.',
    category: 'Infrastructure',
    status: 'Completed',
    client: 'Supreme Power Ltd.',
    industry: 'Industrial Power Manufacturing',
    locationDetails: 'Gujarat, India',
    scope: [
      'Precision site preparation and engineered soil filling for heavy foundations.',
      'Construction of high-security boundary walls and site fortification.',
      'Execution of specialized heavy-duty RCC foundations and structural frame.',
      'Installation of comprehensive Storm Water Drainage (SWD) infrastructure.',
      'Construction of high-strength internal RCC roads for heavy transport.',
      'Execution of Tremix industrial flooring for production and storage areas.',
      'Organized parking area development and integrated site utility works.'
    ],
    challenges: [
      'Complex Site Topography: The Gujarat site required extensive land development and soil stabilization to support heavy industrial loads.',
      'Integration with Power Systems: Executing civil works in close proximity to high-voltage zones required specialized safety protocols.',
      'Monsoon Water Management: Designing a high-capacity drainage network that could handle the regional rainfall intensity without site flooding.'
    ],
    solutions: [
      'Advanced Soil Engineering: Implemented a systematic filling and compaction process to create a stable base for the factory foundations.',
      'Safety-First Execution: Deployed specialized HSE teams to oversee all construction activity near electrical infrastructure.',
      'Engineered Drainage Flow: Utilized high-precision leveling and reinforced SWD channels to ensure rapid water discharge across the site.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Infrastructure Development' },
      { label: 'Industry', value: 'Power Manufacturing' },
      { label: 'Location', value: 'Gujarat' },
      { label: 'Structure Type', value: 'RCC & Heavy Foundations' },
      { label: 'Execution', value: '2023' },
      { label: 'Project Value', value: '₹1.10 Cr' },
      { label: 'Status', value: 'Completed' }
    ],
    imageUrl: getDriveUrl('1ZUK6NL9RhzTg4RjIysIFWt9-MRDUMxjv'),
  },
  {
    slug: 'energy-mission-industrial-infrastructure-gujarat',
    name: 'Energy Mission Industrial Infrastructure Project',
    value: '₹0.85 Cr',
    year: '2022',
    description: 'Siddhi Industrial Services successfully completed the industrial infrastructure development project for Energy Mission in Gujarat. This manufacturing unit for energy equipment required a high-integrity civil backbone to support intensive production cycles and heavy equipment movement. Our engineering approach centered on structural durability and site resilience, transforming the greenfield area into a technically advanced industrial hub. The execution phase encompassed a comprehensive range of civil services, beginning with boundary wall construction and precise site grading. We implemented engineered soil filling and compaction to ensure a stable sub-grade for the manufacturing floors. The primary structural components involved the construction of high-load bearing foundations and a robust RCC frame structure designed to withstand both static and dynamic machinery loads. To facilitate seamless logistics, we constructed a network of heavy-duty RCC internal roads and optimized parking areas, allowing multi-axle vehicle movement without structural degradation. A critical technical feature was the installation of high-strength Tremix industrial flooring, specifically treated for abrasion resistance and long-term durability in a manufacturing environment. Additionally, we installed a strategic Storm Water Drainage (SWD) network to safeguard the facility from Gujarat\'s monsoon intensity, ensuring zero waterlogging in production zones. The outcome is a world-class manufacturing facility that meets all industrial standards, empowering Energy Mission’s operational growth.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Energy Mission',
    industry: 'Manufacturing Unit',
    locationDetails: 'Gujarat, India',
    scope: [
      'Boundary wall construction and site development for high security.',
      'Soil filling and land preparation engineered for industrial load bearing.',
      'Complete RCC foundations and structural framework for the manufacturing block.',
      'Execution of heavy-duty RCC internal roads for logistics and transport.',
      'Installation of a comprehensive Storm Water Drainage (SWD) network.',
      'Specialized Tremix industrial flooring for heavy-duty production halls.',
      'Parking area development and site utility network works.'
    ],
    challenges: [
      'Site Topography and Runoff: The site\'s original gradient posed a risk of water accumulation, requiring precise hydrological leveling for the SWD network.',
      'Heavy Machinery Vibration: The client\'s energy equipment manufacturing process involves high-vibration machinery, necessitating specialized machine foundations.',
      'Accelerated Timeline: The project needed to be completed within a tight window to align with the client\'s production commencement date.'
    ],
    solutions: [
      'High-Capacity SWD Integration: Designed a multi-point drainage network with reinforced culverts to handle high-volume storm water discharge.',
      'Raft Foundation System: Implemented specialized raft foundations for machine zones to dampen vibrations and distribute loads evenly across the sub-grade.',
      '24/7 Site Management: Utilized parallel workstreams for site infrastructure and structural framing to meet the aggressive delivery schedule.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Infrastructure Development' },
      { label: 'Industry', value: 'Manufacturing Unit' },
      { label: 'Location', value: 'Gujarat' },
      { label: 'Structure Type', value: 'RCC Frame & Heavy Infrastructure' },
      { label: 'Execution', value: '2022' },
      { label: 'Project Value', value: '₹0.85 Cr' },
      { label: 'Status', value: 'Completed' }
    ],
    imageUrl: getDriveUrl('1zjwxZ34iALXXzwzj4WKoGGFZLmdzkihC'),
  },
  {
    slug: 'johnson-screens-industrial-infrastructure-sanand',
    name: 'Johnson Screens Industrial Infrastructure Project',
    value: '₹0.80 Cr',
    year: '2022',
    description: 'Johnson Screens, a global leader in screening and separation technology, required a robust infrastructure upgrade for their manufacturing facility in Sanand, Ahmedabad. The project demanded high-precision civil engineering to support specialized industrial utilities, specifically the ETP (Effluent Treatment Plant) and complex cable networking. Siddhi Industrial Services was appointed as the primary industrial civil contractor to deliver a turnkey infrastructure package. Our engineering approach focused on durability and site resilience, ensuring that every foundation and trench met the heavy-duty operational requirements of the plant. Execution involved precise soil stabilization for the ETP plant foundation and the construction of reinforced cable trenches designed for easy maintenance access. The project was delivered on schedule, providing Johnson Screens with a modernized site infrastructure that optimizes logistics and utility management.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Johnson Screens',
    industry: 'Industrial Manufacturing',
    locationDetails: 'Sanand, Chharodi, Ahmedabad, Gujarat',
    scope: [
      'Construction of high-security boundary walls for perimeter fortification.',
      'Execution of heavy-duty industrial foundations for ETP plant components.',
      'Development of reinforced cable trenches for facility-wide utility networking.',
      'Construction of heavy-strength internal RCC roads for material transport.',
      'Installation of a strategic Storm Water Drainage (SWD) network.',
      'Development of a specialized industrial scrap yard for efficient waste management.',
      'Engineered soil filling and site grading for optimized logistics flow.'
    ],
    challenges: [
      'Sub-surface Utility Coordination: Integrating complex cable trenches within an existing operational site without disturbing existing underground utilities.',
      'ETP Foundation Stability: The ETP plant required a high-load bearing, chemical-resistant foundation to support heavy effluent processing equipment.',
      'Operational Logistics: Managing heavy material transport and RCC road construction while maintaining site access for manufacturing operations.'
    ],
    solutions: [
      'Advanced Ground Surveying: Utilized high-precision surveying to map underground utilities before trenching, ensuring zero downtime for the plant.',
      { label: 'High-Grade Material Sourcing', value: 'Used specialized concrete additives to provide chemical resistance for the ETP foundation, enhancing structural longevity.' },
      'Phased Execution: Divided the scrap yard and road construction into sections, allowing the client to maintain logistics flow throughout the build.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Infrastructure & Civil Works' },
      { label: 'Industry', value: 'Manufacturing' },
      { label: 'Location', value: 'Sanand, Ahmedabad' },
      { label: 'Specialized Scope', value: 'ETP & Cable Trenches' },
      { label: 'Execution', value: '2022' },
      { label: 'Project Value', value: '₹0.80 Cr' },
      { label: 'Status', value: 'Completed' }
    ],
    imageUrl: getDriveUrl('18zmL98dOb850vmHyj5LH92szDV5VcFjz'),
    gallery: [
      getDriveUrl('18zmL98dOb850vmHyj5LH92szDV5VcFjz'),
    ],
  },
  {
    slug: 'vital-wellness-industrial-infrastructure-sanand',
    name: 'Vital Wellness Industrial Infrastructure Project',
    value: '₹1.10 Cr',
    year: '2021',
    description: 'Siddhi Industrial Services successfully completed a comprehensive industrial infrastructure development project for Vital Wellness at GIDC Sanand, Ahmedabad. As the premier industrial civil contractor for this wellness product distribution hub, we were tasked with creating a high-performance logistics environment designed for intensive warehousing operations. The project involved transforming a raw industrial plot into a technically advanced facility through deep site preparation and specialized structural execution. Our engineering approach prioritized floor durability and site water management to ensure long-term operational efficiency for the client. The core of the project focused on the main distribution warehouse, where we installed high-strength Tremix (VDF) industrial flooring designed to handle the high static loads of sophisticated steel racking systems and the constant dynamic stresses of heavy-duty forklifts. Beyond the main shell, the scope encompassed the construction of a modern administrative building with integrated utility networks, providing a centralized hub for operations management. Infrastructure development included a robust internal RCC road network and organized parking areas engineered for multi-axle vehicle logistics. To ensure site longevity, we executed a strategic Storm Water Drainage (SWD) network and integrated industrial landscaping to manage site runoff while improving the facility aesthetic. This completed turnkey project stands as a testament to our expertise in delivering durable, high-capacity warehousing infrastructure in the Sanand GIDC industrial corridor.',
    category: 'Warehousing',
    status: 'Completed',
    client: 'Vital Wellness',
    industry: 'Industrial Manufacturing & Distribution',
    locationDetails: 'GIDC Sanand, Ahmedabad, Gujarat',
    scope: [
      'Construction of high-security boundary walls for site fortification.',
      'Execution of heavy-duty RCC internal roads and pavement for logistics.',
      'Installation of specialized Tremix (VDF) industrial flooring for the main warehouse.',
      'Construction of a modern administrative building with integrated utilities.',
      'Development of a comprehensive Storm Water Drainage (SWD) network.',
      'Execution of industrial landscaping and site water management.',
      'Organized parking area development for staff and logistics vehicles.'
    ],
    challenges: [
      'High-Density Racking Stability: The warehouse required specialized floor leveling and reinforcement to support the high point-loads of steel rack foundations.',
      'Drainage & Landscape Integration: Designing a drainage network that effectively managed site runoff while maintaining the structural integrity of the landscaped zones.',
      'Sanand GIDC Soil Conditions: Managing soil stabilization in the Sanand region to prevent long-term settlement under heavy logistics traffic.'
    ],
    solutions: [
      'VDF Flooring System: Implemented a Vacuum Dewatered Flooring (VDF) system to provide a hard-wearing, dust-proof surface with superior flatness for racking.',
      'Strategic SWD Layout: Engineered a gravity-fed storm water network with reinforced catch pits integrated into the site grading plan.',
      'High-Grade RCC: Utilized M30 grade concrete for internal roads and parking to ensure durability against multi-axle vehicle movement.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Infrastructure' },
      { label: 'Industry', value: 'Wellness & Distribution' },
      { label: 'Location', value: 'GIDC Sanand, Ahmedabad' },
      { label: 'Flooring Type', value: 'Tremix / VDF' },
      { label: 'Infrastructure', value: 'RCC Roads & SWD' }
    ],
    imageUrl: getDriveUrl('1nJCt-hLyzud9IbJmxin4N_wvogcyN8sq'),
    gallery: [
      getDriveUrl('1nJCt-hLyzud9IbJmxin4N_wvogcyN8sq'),
    ]
  },
  {
    slug: 'alp-nishikawa-auto-parts-manufacturing-project-chharodi',
    name: 'ALP Nishikawa Industrial Infrastructure & Manufacturing Facility Development Project',
    value: '₹0.85 Cr',
    year: '2020-2021',
    description: 'Siddhi Industrial Services successfully delivered a specialized industrial infrastructure and facility development package for ALP Nishikawa’s automotive parts manufacturing plant in Khoda, Chharodi, Ahmedabad. This project, valued at ₹0.85 crore and executed during the 2020-2021 period, was a critical expansion designed to support high-precision manufacturing processes required for automotive sealing systems. The client required a structural environment that could accommodate heavy-duty vibrating machinery while ensuring a safe and efficient workflow for their workforce. Our engineering approach prioritized the execution of high-grade machine foundations, utilizing reinforced concrete with specific vibration-dampening properties to ensure zero-tolerance stability for the manufacturing units. The project scope encompassed the complete site development, including the construction of a reinforced compound wall for perimeter security and the development of a modern administrative building integrated with the facility\'s core operations. We implemented a comprehensive Storm Water Drainage (SWD) network, engineered to handle the regional rainfall patterns and protect the sensitive production zones from water ingress. Additionally, the execution included organized parking area development and industrial landscaping, creating a professional and functional environment. The outcome of this project is a technically sound, high-performance manufacturing facility that meets ALP Nishikawa’s global safety and quality standards.',
    category: 'Industrial',
    status: 'Completed',
    client: 'ALP Nishikawa',
    industry: 'Automotive Parts Manufacturing',
    locationDetails: 'Khoda, Chharodi, Ahmedabad, Gujarat',
    scope: [
      'Construction of high-security reinforced compound walls for perimeter fortification.',
      'Execution of specialized high-precision machine foundations for automotive production.',
      'Development of modern administrative building infrastructure with integrated utilities.',
      'Installation of a comprehensive Storm Water Drainage (SWD) network.',
      'Organized parking area development and internal logistics paving.',
      'Execution of professional industrial landscaping and site grading.'
    ],
    challenges: [
      'Vibration Management: Designing foundations for high-speed automotive part machinery required specialized RCC mixes to prevent structural fatigue.',
      'Site Drainage Integration: Integrating a new Storm Water Drainage network into an existing plot topography while ensuring zero-backflow during peak monsoons.',
      'Workforce Logistics: Constructing the administrative block and parking facilities without interrupting the client’s existing manufacturing logistics.'
    ],
    solutions: [
      'Engineered Foundations: Employed high-strength M30 concrete with specialized steel reinforcement maps for critical machine pits.',
      'Hydrological Grading: Utilized digital site surveying to establish precise gradients for the SWD network, ensuring gravity-based water discharge.',
      'Phased Infrastructure: Sequenced the compound wall and admin building construction to maintain secure access points throughout the execution phase.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Infrastructure Development' },
      { label: 'Industry', value: 'Automotive Parts' },
      { label: 'Location', value: 'Chharodi, Ahmedabad' },
      { label: 'Structure Type', value: 'RCC Foundations & Admin Block' },
      { label: 'Execution', value: '2020–2021' },
      { label: 'Project Value', value: '₹0.85 Cr' },
      { label: 'Status', value: 'Completed' }
    ],
    imageUrl: getDriveUrl('1pO5inxi_Tk05q9Aj646vRtfwoZW3L8N8'),
  },
  {
    slug: 'sharda-motors-industrial-infrastructure-sanand',
    name: 'Sharda Motors Industrial Infrastructure Project',
    value: '₹1.15 Cr',
    year: '2018–2019',
    description: 'Siddhi Industrial Services executed a critical industrial infrastructure development project for Sharda Motors, a prominent name in industrial automation and automotive component manufacturing, at their Sanand facility in Ahmedabad. The project, valued at ₹1.15 crore, was carried out between 2018 and 2019, focusing on enhancing the operational backbone of the manufacturing plant. The client required specialized civil works that could support high-precision automation lines and integrated MEPF (Mechanical, Electrical, Plumbing, and Firefighting) systems, demanding a contractor with deep technical expertise in industrial environments. Our engineering approach was centered on precision and structural longevity. We began with the complex task of designing and constructing foundations for MEPF systems, which required careful coordination with the plant\'s mechanical layouts to ensure zero-clash installation of heavy utility infrastructure. This was followed by the construction of heavy-duty internal RCC roads, engineered to withstand continuous multi-axle vehicle traffic essential for the automotive supply chain. Beyond the core manufacturing shell, we developed specialized storage yards and modernized the facility\'s utility blocks, including high-standard industrial toilet blocks designed for durability and hygiene. The successful completion of this project resulted in a significant upgrade to Sharda Motors\' site infrastructure, providing them with a robust, efficient, and future-ready facility that supports their large-scale manufacturing output in the heart of Gujarat\'s industrial corridor.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Sharda Motors',
    industry: 'Industrial Automation & Automotive Components Manufacturing',
    locationDetails: 'Sanand, Ahmedabad, Gujarat',
    scope: [
      'Design and execution of specialized RCC foundations for complex MEPF utility systems.',
      'Construction of heavy-duty internal RCC roads engineered for multi-axle logistical traffic.',
      'Development of modern industrial toilet blocks with premium industrial-grade fittings.',
      'Construction of high-capacity industrial storage yards with reinforced flooring.',
      'Strategic industrial landscape development to improve site aesthetics and runoff management.'
    ],
    challenges: [
      'Precision Foundation for MEPF: Constructing foundations for high-density MEPF systems within an active plant required sub-millimeter accuracy to avoid interference with existing underground utilities and production lines.',
      'Dynamic Load Management: The storage yard and internal roads needed to be engineered for varying static and dynamic loads from both manufacturing equipment and heavy logistical vehicles.',
      'Timeline Sync: Aligning the construction phases with the client\'s production downtime windows necessitated an accelerated execution schedule without compromising on curing periods for the RCC works.'
    ],
    solutions: [
      '3D Site Mapping: We employed advanced site surveying to map existing underground networks, ensuring the MEPF foundations and cable trenches were executed with zero utility damage.',
      'High-Performance RCC Mixes: Utilized M30 grade concrete with specialized additives for the internal roads and MEPF foundations to ensure rapid strength gain and high resistance to industrial wear.',
      'Integrated Project Management: Deployed a multi-disciplinary site team to manage the parallel execution of the landscape, utility blocks, and road works, optimizing the overall project timeline.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Infrastructure & Specialized Civil Works' },
      { label: 'Industry', value: 'Industrial Automation & Automotive Components' },
      { label: 'Location', value: 'Sanand, Ahmedabad, Gujarat' },
      { label: 'Structure Type', value: 'Heavy Load RCC & Infrastructure' },
      { label: 'Execution Period', value: '2018–2019' },
      { label: 'Project Value', value: '₹1.15 Cr' },
      { label: 'Status', value: 'Completed' }
    ],
    imageUrl: getDriveUrl('1XBNbWd5tDjrCHzYCy1Zof815Elqjd6og'),
    gallery: [
      getDriveUrl('1XBNbWd5tDjrCHzYCy1Zof815Elqjd6og'),
    ]
  },
  {
    slug: 'mahle-anand-industrial-infrastructure-chharodi',
    name: 'Mahle Anand Thermal Systems',
    value: '₹1.10 Cr',
    year: '2017–2018',
    description: 'Siddhi Industrial Services successfully delivered a specialized industrial infrastructure package for Mahle Anand Thermal Systems at their automotive thermal management manufacturing facility in Chharodi, Ahmedabad. This project, executed between 2017 and 2018, was critical for the facility\'s operational expansion and environmental compliance. Our engineering approach integrated advanced civil repair techniques with the construction of high-capacity utility infrastructure. A primary technical component was the design and execution of a comprehensive Storm Water Drainage (SWD) network and Recharge Well construction. This sustainable water management system was engineered to handle high-volume industrial runoff, ensuring the facility remains flood-free during the Gujarat monsoons while simultaneously recharging the local groundwater table. We also executed the construction of high-precision foundations for MEPF (Mechanical, Electrical, Plumbing, and Firefighting) systems, requiring strict adherence to equipment-specific load-bearing and alignment specifications. The project also encompassed extensive industrial civil repairs to the existing manufacturing block, reinforcing the structural integrity of the aging infrastructure. To facilitate heavy-duty logistics and supply chain movements, we constructed a network of high-strength internal RCC roads designed for multi-axle vehicle durability. Additionally, the development of an organized industrial storage yard optimized the plant\'s material handling capabilities. This project highlights our ability as an industrial infrastructure contractor to deliver multi-faceted civil works that enhance both the functionality and sustainability of large-scale manufacturing units.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Mahle Anand Thermal Systems',
    industry: 'Automotive Thermal Management Manufacturing',
    locationDetails: 'Chharodi, Ahmedabad, Gujarat',
    scope: [
      'Construction of high-capacity recharge wells for sustainable groundwater management.',
      'Installation of a comprehensive Storm Water Drainage (SWD) network for site flood protection.',
      'Structural civil repairs and reinforcement of the existing manufacturing blocks.',
      'Execution of heavy-duty internal RCC roads for multi-axle vehicle logistics.',
      'Design and construction of high-precision RCC foundations for MEPF utility systems.',
      'Development of organized industrial storage yards for material management.',
      'Site grading and land preparation for optimized utility flow.'
    ],
    challenges: [
      'Sustainable Water Management Integration: Integrating a large-scale recharge well and drainage system into an existing operational facility without disrupting production cycles.',
      'Precision MEPF Foundations: Executing foundations for complex mechanical and electrical systems that required sub-millimeter leveling to ensure the longevity of high-performance thermal management equipment.',
      'Operational Site Repairs: Performing structural repairs within a live manufacturing environment, necessitating strict dust control and safety protocols to protect workers and sensitive electronics.'
    ],
    solutions: [
      'Hydrological Mapping: Used advanced site surveying and hydrological modeling to design the recharge well and SWD network for maximum efficiency and zero backflow.',
      'High-Grade RCC Mixes: Utilized M30 grade concrete with specialized additives for the road and MEPF works to ensure rapid strength gain and high resistance to industrial stresses.',
      'Zero-Disruption Phasing: Implemented a phased repair schedule, utilizing off-peak shifts and containment barriers to perform civil works while the plant maintained its thermal system production.'
    ],
    technicalHighlights: [
      { label: 'Project Type', value: 'Industrial Infrastructure & Specialized Civil Works' },
      { label: 'Industry', value: 'Automotive Thermal Management Manufacturing' },
      { label: 'Location', value: 'Chharodi, Ahmedabad, Gujarat' },
      { label: 'Structure Type', value: 'Heavy Load RCC & Sustainable Drainage' },
      { label: 'Execution Period', value: '2017–2018' },
      { label: 'Project Value', value: '₹1.10 Cr' },
      { label: 'Status', value: 'Completed' }
    ],
    imageUrl: getDriveUrl('1PbMAmBSm0OIhRRoQ3tN77_EmC37TGgqr'),
  }
];
