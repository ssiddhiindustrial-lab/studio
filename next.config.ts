import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/projects/suspa',
        destination: '/projects/suspa-industrial-infrastructure-project-sanand',
        permanent: true,
      },
      {
        source: '/projects/hitachi-hi-rel',
        destination: '/projects/hitachi-hi-rel-industrial-facility-expansion-project-sanand',
        permanent: true,
      },
      {
        source: '/projects/nectar-engineering',
        destination: '/projects/nectar-engineering-industrial-building-project-sanand',
        permanent: true,
      },
      {
        source: '/projects/plot-20-sanand',
        destination: '/projects/plot-20-industrial-building-sanand',
        permanent: true,
      },
      {
        source: '/projects/siddhi-premises',
        destination: '/projects/siddhi-industrial-services-premises-sanand',
        permanent: true,
      },
      {
        source: '/projects/uneco',
        destination: '/projects/una-eco-systems-industrial-building-chharodi',
        permanent: true,
      },
      {
        source: '/projects/supreme-power',
        destination: '/projects/supreme-power-industrial-infrastructure-gujarat',
        permanent: true,
      },
      {
        source: '/projects/energy-mission',
        destination: '/projects/energy-mission-industrial-infrastructure-gujarat',
        permanent: true,
      },
      {
        source: '/projects/johnson-screens',
        destination: '/projects/johnson-screens-industrial-infrastructure-sanand',
        permanent: true,
      },
      {
        source: '/projects/vital-wellness',
        destination: '/projects/vital-wellness-industrial-infrastructure-sanand',
        permanent: true,
      },
      {
        source: '/projects/alp-nishikawa',
        destination: '/projects/alp-nishikawa-auto-parts-manufacturing-project-chharodi',
        permanent: true,
      },
      {
        source: '/projects/sharda-motors',
        destination: '/projects/sharda-motors-industrial-infrastructure-sanand',
        permanent: true,
      },
      {
        source: '/projects/mahle-anand',
        destination: '/projects/mahle-anand-industrial-infrastructure-chharodi',
        permanent: true,
      },
      {
        source: '/services/rcc-construction',
        destination: '/services/rcc-contractor-sanand-ahmedabad',
        permanent: true,
      },
      {
        source: '/services/warehousing',
        destination: '/services/industrial-warehousing-construction-sanand',
        permanent: true,
      },
      {
        source: '/services/infrastructure-development',
        destination: '/services/industrial-infrastructure-development-sanand',
        permanent: true,
      },
      {
        source: '/services/roads-drainage',
        destination: '/services/industrial-road-construction-sanand-ahmedabad',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
