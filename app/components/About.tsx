"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-[#0a192f]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-teal-400">Sobre</span> Mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-300">
                Soy un desarrollador Fullstack apasionado por crear soluciones tecnológicas innovadoras.
                Actualmente estoy cursando Ingeniería en Software y Sistemas Computacionales en la
                Universidad La Salle Bajío (2021-2025).
              </p>
              <p className="text-gray-300">
                Como Cofundador de XENOMACODE, lidero equipos de desarrollo y trabajo en proyectos
                desafiantes que impulsan la transformación digital de las empresas.
              </p>
              <p className="text-gray-300">
                Mi experiencia abarca tanto el desarrollo frontend como backend, y me especializo en:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <motion.ul
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-2"
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-teal-400 mr-2">▹</span> React/Next.js
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-teal-400 mr-2">▹</span> Node.js
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-teal-400 mr-2">▹</span> TypeScript
                  </motion.li>
                </motion.ul>
                
                <motion.ul
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-2"
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-teal-400 mr-2">▹</span> Python
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-teal-400 mr-2">▹</span> AWS
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-teal-400 mr-2">▹</span> Docker
                  </motion.li>
                </motion.ul>
              </div>
            </div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="relative"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 border-2 border-teal-400 rounded-md transform translate-x-4 translate-y-4"></div>
                <div
                  className="relative z-10 w-full h-full rounded-md bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600"
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 