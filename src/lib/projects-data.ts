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
    slug: 'energy-mission',
    name: 'Energy Mission',
    value: '₹0.85 Cr',
    year: '2022',
    description: 'Manufacturing unit for energy equipment.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Energy Mission',
    scope: ['Civil Construction', 'Utility Lines'],
    imageUrl: getDriveUrl('1zjwxZ34iALXXzwzj4WKoGGFZLmdzkihC'),
  },
  {
    slug: 'johnson-screens',
    name: 'Johnson Screens',
    value: '₹0.80 Cr',
    year: '2022',
    description: 'Industrial filter manufacturing plant extension.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Johnson Screens',
    scope: ['RCC Flooring', 'Extension shed'],
    imageUrl: getDriveUrl('18zmL98dOb850vmHyj5LH92szDV5VcFjz'),
  },
  {
    slug: 'vital-wellness',
    name: 'Vital Wellness',
    value: '₹1.10 Cr',
    year: '2021',
    description: 'Wellness product distribution warehouse.',
    category: 'Warehousing',
    status: 'Completed',
    client: 'Vital Wellness',
    scope: ['VDF Flooring', 'Steel Racks foundation', 'Warehousing shed'],
    imageUrl: getDriveUrl('1nJCt-hLyzud9IbJmxin4N_wvogcyN8sq'),
  },
  {
    slug: 'alp-nishikawa',
    name: 'ALP Nishikawa',
    value: '₹0.85 Cr',
    year: '2021',
    description: 'Automotive component plant expansion.',
    category: 'Industrial',
    status: 'Completed',
    client: 'ALP Nishikawa',
    scope: ['Industrial Shed', 'Machine Foundations'],
    imageUrl: getDriveUrl('1pO5inxi_Tk05q9Aj646vRtfwoZW3L8N8'),
  },
  {
    slug: 'sharda-motors',
    name: 'Sharda Motors',
    value: '₹1.15 Cr',
    year: '2020',
    description: 'Exhaust system manufacturing unit expansion.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Sharda Motors',
    scope: ['High-load Foundations', 'Internal Paving'],
    imageUrl: getDriveUrl('1XBNbWd5tDjrCHzYCy1Zof815Elqjd6og'),
  },
  {
    slug: 'mahle-anand',
    name: 'Mahle Anand Thermal Systems',
    value: '₹1.10 Cr',
    year: '2020',
    description: 'Thermal systems production facility infrastructure.',
    category: 'Industrial',
    status: 'Completed',
    client: 'Mahle Anand',
    scope: ['RCC Slabs', 'Utility Trenches'],
    imageUrl: getDriveUrl('1PbMAmBSm0OIhRRoQ3tN77_EmC37TGgqr'),
  }
];
