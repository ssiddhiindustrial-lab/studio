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
}

/**
 * HELPER: Converts a standard Google Drive share link to a direct-view URL.
 * Using the lh3 subdomain is more reliable for direct embedding in web apps.
 */
const getDriveUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const projects: Project[] = [
  {
    slug: 'suspa',
    name: 'SUSPA',
    value: '0.50 Cr',
    year: '2019-2020',
    description: 'Specialized industrial infrastructure works including nitrogen tank foundations and heavy-duty parking development.',
    category: 'Industrial',
    status: 'Completed',
    client: 'SUSPA',
    scope: [
      'Foundation for Nitrogen Tank',
      'RCC Road',
      'Compound Wall – Retaining',
      'Machine Foundations',
      'Parking Area Development'
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