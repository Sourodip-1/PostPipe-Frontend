import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google'; // Import fonts from next/font/google
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

// Define font variables
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Custom CSS variable for Inter
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // Custom CSS variable for Poppins
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://postpipe.app';

export const metadata: Metadata = {
  title: {
    default: 'PostPipe | The Ultimate Next.js Component Library',
    template: `%s | PostPipe`,
  },
  description: 'The biggest and most complete open-source Next.js component library. Built for developers, by developers. Fully customizable and production-ready.',
  keywords: ['Next.js', 'React', 'Components', 'UI Library', 'Open Source', 'Tailwind CSS', 'Shadcn UI', 'PostPipe'],
  authors: [{ name: 'PostPipe Team', url: 'https://github.com/sourodip-1/PostPipe-2.0' }],
  creator: 'Sourodip',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'PostPipe | The Ultimate Next.js Component Library',
    description: 'The biggest and most complete open-source Next.js component library, built for production.',
    siteName: 'PostPipe',
    images: [
      {
        url: '/og-image.png', // This should be a 1200x630 image in the public folder
        width: 1200,
        height: 630,
        alt: 'PostPipe Hero Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PostPipe | The Ultimate Next.js Component Library',
    description: 'The biggest and most complete open-source Next.js component library, built for production.',
    images: ['/og-image.png'], // This should be a 1200x630 image in the public folder
  },
  icons: {
    icon: '/PostPipe-Black.ico',
    shortcut: '/PostPipe-Black.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  // No need for manual preconnect or stylesheet links here, next/font handles it
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}