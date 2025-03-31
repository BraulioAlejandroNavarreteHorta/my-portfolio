"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const technologies = [
    { name: 'JavaScript (ES6+)', category: 'Lenguajes' },
    { name: 'TypeScript', category: 'Lenguajes' },
    { name: 'Python', category: 'Lenguajes' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Three.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Bases de datos' },
    { name: 'PostgreSQL', category: 'Bases de datos' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' }
  ];

  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  return (
    <section id="about" className="py-24 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center"
        >
          <span className="text-[#64ffda] font-mono mr-4">01.</span>
          <span className="text-[#ccd6f6]">Sobre Mí</span>
          <span className="flex-grow ml-4 h-[1px] bg-[#233554]"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-[#8892b0] leading-relaxed">
              ¡Hola! Me llamo Braulio y disfruto creando experiencias digitales que viven en internet. 
              Mi interés por el desarrollo web comenzó en 2018 cuando decidí explorar HTML & CSS — 
              resulta que construir una página web me enseñó mucho sobre lógica de programación.
            </p>
            <p className="text-[#8892b0] leading-relaxed">
              Hoy en día, tengo el privilegio de trabajar en proyectos diversos que me permiten 
              combinar mi pasión por el diseño con soluciones técnicas innovadoras. Mi enfoque principal 
              es construir productos digitales accesibles e inclusivos.
            </p>
            <p className="text-[#8892b0] leading-relaxed">
              Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
            </p>

            <div className="grid grid-cols-1 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="gradient-border p-4"
                >
                  <h3 className="text-[#ccd6f6] font-semibold mb-3">{category}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies
                      .filter(tech => tech.category === category)
                      .map(tech => (
                        <div
                          key={tech.name}
                          className="flex items-center text-[#8892b0]"
                        >
                          <span className="text-[#64ffda] mr-2">▹</span>
                          {tech.name}
                        </div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#64ffda] rounded-lg opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg transform translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
              <Image
                src="/profile.jpg"
                alt="Braulio Navarrete"
                fill
                className="rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 