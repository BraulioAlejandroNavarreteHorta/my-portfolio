import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ["latin"], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: "Braulio Navarrete | Fullstack Developer",
  description: "Desarrollador Fullstack, Cofundador de XENOMACODE y estudiante de Ingeniería en Software",
  keywords: ["Braulio Navarrete", "Fullstack Developer", "XENOMACODE", "React", "Next.js", "Software Engineer"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${firaCode.variable}`}>
      <body className={`${inter.className} bg-[#0a192f] text-gray-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 