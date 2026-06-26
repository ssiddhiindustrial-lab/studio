
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
  title: 'Industrial Civil Contractors in Ahmedabad & Sanand | Siddhi Industrial Services',
  description: 'Siddhi Industrial Services is a leading industrial civil contractor in Ahmedabad, specializing in factory construction, warehouse development, and turnkey industrial projects.',
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
