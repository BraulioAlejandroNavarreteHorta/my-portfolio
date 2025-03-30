"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-teal-400 mb-4">¡Hola! Mi nombre es</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-100">
            Braulio Navarrete
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-gray-300">
            Fullstack Developer & Cofounder
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Soy un desarrollador fullstack especializado en crear experiencias digitales excepcionales.
            Cofundador de XENOMACODE y apasionado por la innovación tecnológica.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-colors"
          >
            ¡Contáctame!
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <a href="#about" className="text-gray-400 hover:text-teal-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
} 