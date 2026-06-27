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
    slug: 'hitachi-hi-rel',
    name: 'Hitachi Hi-Rel Power Electronics Ltd',
    value: '₹2.20 Cr',
    year: '2024-2025',
    description: 'Advanced industrial electronics manufacturing facility construction.',
    category: 'Industrial',
    status: 'Ongoing',
    client: 'Hitachi Hi-Rel',
    scope: ['RCC Works', 'Structural Steel', 'Flooring', 'MEP Coordination'],
    imageUrl: getDriveUrl('100DYuXZ3h8HLdukOsIndYKIVwZzeY25B'),
    gallery: [
      getDriveUrl('100DYuXZ3h8HLdukOsIndYKIVwZzeY25B'),
    ],
  },
  {
    slug: 'nectar-engineering',
    name: 'Nectar Engineering',
    value: '₹1.80 Cr',
    year: '2024-2025',
    description: 'Precision engineering workshop and administrative block.',
    category: 'Industrial',
    status: 'Ongoing',
    client: 'Nectar Engineering',
    scope: ['Foundation', 'Structural Steel Fabrication', 'Roofing'],
    imageUrl: getDriveUrl('1wVevZ8XrtD-0fDvvcYUlsSzrSEQMeCIu'),
  },
  {
    slug: 'plot-20-sanand',
    name: 'Plot No. 20 Sanand',
    value: '₹1.15 Cr',
    year: '2024-2025',
    description: 'Multi-purpose industrial shed construction at Sanand GIDC.',
    category: 'Industrial',
    status: 'Ongoing',
    client: 'Private Client',
    scope: ['Earthwork', 'PCC/RCC', 'Structural Shed'],
    imageUrl: getDriveUrl('1kl3dHBSRwodlJvKk7VBYrva2O0NaG98Q'),
  },
  {
    slug: 'siddhi-premises',
    name: 'Siddhi Industrial Services Premises',
    value: '₹0.95 Cr',
    year: '2023-2025',
    description: 'Expansion and modernization of own operations base.',
    category: 'Infrastructure',
    status: 'Ongoing',
    client: 'Siddhi Industrial Services',
    scope: ['Internal Roads', 'Drainage', 'Office Interior Construction'],
    imageUrl: getDriveUrl('1WJCbbk5u2LIvu7gJg5EHZ7ro_9hcxk-3'),
  },
  {
    slug: 'uneco',
    name: 'UNECO',
    value: '₹1.05 Cr',
    year: '2023',
    description: 'Turnkey industrial plant development.',
    category: 'Industrial',
    status: 'Completed',
    client: 'UNECO',
    scope: ['Civil Works', 'Steel Structure'],
    imageUrl: getDriveUrl('1Wv9z2Z6BstPX_fFXF7pCr8C5uYPzw7kJ'),
  },
  {
    slug: 'supreme-power',
    name: 'Supreme Power',
    value: '₹1.10 Cr',
    year: '2023',
    description: 'Substation and power facility infrastructure.',
    category: 'Infrastructure',
    status: 'Completed',
    client: 'Supreme Power',
    scope: ['Specialized Foundations', 'Safety Walls'],
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
