import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Siddhi Industrial Services - Industrial & Infrastructure Contractors',
  description: 'Premium industrial and infrastructure contractors. Building excellence with engineering precision.',
  icons: {
    icon: [
      { url: 'https://lh3.googleusercontent.com/d/1GbtvzMhx-j2GeBUmANvJOua_oByeyvhc', type: 'image/png' },
    ],
    shortcut: 'https://lh3.googleusercontent.com/d/1GbtvzMhx-j2GeBUmANvJOua_oByeyvhc',
    apple: 'https://lh3.googleusercontent.com/d/1GbtvzMhx-j2GeBUmANvJOua_oByeyvhc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://lh3.googleusercontent.com/d/1GbtvzMhx-j2GeBUmANvJOua_oByeyvhc" type="image/png" />
        <link rel="shortcut icon" href="https://lh3.googleusercontent.com/d/1GbtvzMhx-j2GeBUmANvJOua_oByeyvhc" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col selection:bg-accent/30 selection:text-accent-foreground">
        <Navbar />
        <main className="flex-grow flex flex-col items-center">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
