
import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/components/providers/AuthProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const faviconUrl = "https://lh3.googleusercontent.com/d/1cgARgM8YucIbgZEHoW5OLJrIAuMmKih-";

export const metadata: Metadata = {
  title: 'Industrial Civil Contractors in Ahmedabad | Siddhi Industrial Services',
  description: 'Siddhi Industrial Services is a leading industrial civil contractor in Ahmedabad & Sanand, specializing in factory construction and warehousing. Get a quote today!',
  keywords: 'industrial construction company, industrial civil contractors in ahmedabad, construction contractors in ahmedabad, civil contractors in ahmedabad, building contractors in ahmedabad, industrial infrastructure contractors, factory construction company, industrial building contractors, warehouse builders ahmedabad, sanand gidc contractors',
  alternates: {
    canonical: 'https://www.siddhiindustrialservices.in/',
  },
  openGraph: {
    title: 'Industrial Civil Contractors in Ahmedabad | Siddhi Industrial Services',
    description: 'Leading industrial construction company in Ahmedabad & Sanand. Specializing in factories, warehouses, and turnkey infrastructure projects.',
    url: 'https://www.siddhiindustrialservices.in/',
    siteName: 'Siddhi Industrial Services',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddhi Industrial Services | Industrial Contractors Ahmedabad',
    description: 'Premier industrial civil contractors in Ahmedabad. Building the future of Gujarat\'s industrial corridors with engineering precision.',
  },
  icons: {
    icon: [
      { url: faviconUrl, type: 'image/png' },
    ],
    shortcut: faviconUrl,
    apple: faviconUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col selection:bg-accent/30 selection:text-accent-foreground">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow flex flex-col items-center w-full">{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
