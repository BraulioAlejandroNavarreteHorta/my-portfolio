import './globals.css';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from "next";

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Braulio Navarrete | Desarrollador Full Stack & Co-Fundador',
  description: 'Desarrollador Full Stack especializado en React, Node.js y tecnologías cloud. Co-Fundador de XENOMACODE, creando soluciones innovadoras con IA y desarrollo web moderno.',
  keywords: ['Desarrollador Full Stack', 'React', 'Node.js', 'TypeScript', 'Next.js', 'AWS', 'XENOMACODE', 'Inteligencia Artificial'],
  authors: [{ name: 'Braulio Navarrete', url: 'https://github.com/braulionavarrete' }],
  openGraph: {
    title: 'Braulio Navarrete | Desarrollador Full Stack & Co-Fundador',
    description: 'Desarrollador Full Stack especializado en React, Node.js y tecnologías cloud. Co-Fundador de XENOMACODE.',
    url: 'https://braulionavarrete.dev',
    siteName: 'Portfolio de Braulio Navarrete',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 600,
        alt: 'Braulio Navarrete - Desarrollador Full Stack'
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braulio Navarrete | Desarrollador Full Stack & Co-Fundador',
    description: 'Desarrollador Full Stack especializado en React, Node.js y tecnologías cloud. Co-Fundador de XENOMACODE.',
    creator: '@braulionavarret',
    images: ['/profile.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#112240'
      }
    ]
  },
  manifest: '/manifest.json',
  themeColor: '#112240',
  appleWebApp: {
    title: 'Braulio Navarrete',
    statusBarStyle: 'default',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${syne.variable} ${jakarta.variable} bg-[#0a192f] text-gray-300 antialiased`}>
      <head>
        <meta name="msapplication-TileColor" content="#112240" />
        <meta name="theme-color" content="#112240" />
      </head>
      <body className="relative min-h-screen font-body">
        {children}
      </body>
    </html>
  );
} 