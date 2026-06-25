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

// Using a versioned direct link to force browser to refresh favicon
const faviconUrl = "https://lh3.googleusercontent.com/d/1cgARgM8YucIbgZEHoW5OLJrIAuMmKih-?v=25";

export const metadata: Metadata = {
  title: 'Siddhi Industrial Services - Industrial & Infrastructure Contractors',
  description: 'Premium industrial and infrastructure contractors. Building excellence with engineering precision.',
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
      <head>
        {/* Force favicon refresh across all browsers with explicit link tags */}
        <link rel="icon" type="image/png" href={faviconUrl} />
        <link rel="shortcut icon" type="image/x-icon" href={faviconUrl} />
        <link rel="apple-touch-icon" href={faviconUrl} />
      </head>
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
