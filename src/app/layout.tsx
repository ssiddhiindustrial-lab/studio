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

// Use standard favicon URL
const faviconUrl = "https://drive.google.com/thumbnail?id=1cgARgM8YucIbgZEHoW5OLJrIAuMmKih-&sz=w128";

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