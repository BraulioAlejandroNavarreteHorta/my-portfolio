"use client";

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';

// Importar componentes
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const About = dynamic(() => import('./components/About'), { ssr: false });
const Projects = dynamic(() => import('./components/Projects'), { ssr: false });
const Experience = dynamic(() => import('./components/Experience'), { ssr: false });
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });
const Cursor = dynamic(() => import('./components/Cursor'), { ssr: false });

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main ref={containerRef} className="relative bg-[#0a192f]">
      {/* Barra de progreso */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#64ffda] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Cursor personalizado */}
      <Cursor />

      {/* Secciones */}
      <Hero />
      
      <div className="relative z-10">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/* Overlay de ruido */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-50 mix-blend-soft-light">
        <div className="absolute inset-0 bg-noise" />
      </div>
    </main>
  );
} 