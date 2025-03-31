import './globals.css';
import { Inter, Fira_Code } from 'next/font/google';
import type { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Braulio Navarrete - Full Stack Developer',
  description: 'Portfolio personal de Braulio Navarrete, desarrollador Full Stack especializado en crear experiencias digitales excepcionales.',
  keywords: 'Braulio Navarrete, Full Stack Developer, React, Next.js, Three.js, Portfolio',
  authors: [{ name: "Braulio Navarrete" }],
  creator: "Braulio Navarrete",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://braulionavarrete.com",
    title: "Braulio Navarrete | Fullstack Developer",
    description: "Desarrollador Fullstack, Cofundador de XENOMACODE y estudiante de Ingeniería en Software",
    siteName: "Braulio Navarrete Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braulio Navarrete | Fullstack Developer",
    description: "Desarrollador Fullstack, Cofundador de XENOMACODE y estudiante de Ingeniería en Software",
    creator: "@tuusuario",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${firaCode.variable} bg-[#0a192f] text-gray-300 antialiased`}>
      <body className="relative min-h-screen">
        {children}
      </body>
    </html>
  );
} 