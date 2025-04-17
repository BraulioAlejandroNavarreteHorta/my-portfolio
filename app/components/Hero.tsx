"use client";

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './Scene';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden">
      {/* Canvas de Three.js */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene scrollProgress={scrollYProgress} />
          </Suspense>
        </Canvas>
      </div>

      {/* Contenido del Hero */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#64ffda] font-mono mb-5"
        >
          Hola, mi nombre es
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-[#ccd6f6] mb-4"
        >
          Braulio Navarrete.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-[#8892b0] mb-6"
        >
          Construyo experiencias digitales.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-lg text-[#8892b0] text-lg font-body mb-12"
        >
          Soy un desarrollador full-stack especializado en construir experiencias digitales excepcionales. 
          Actualmente, me enfoco en crear software de alta calidad y centrados en el usuario.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda15] transition-colors duration-300 font-body"
        >
          Ver mi trabajo
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-[#8892b0] text-sm mb-2 font-body">Scroll</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-[#8892b0] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1 h-1 bg-[#8892b0] rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
} 