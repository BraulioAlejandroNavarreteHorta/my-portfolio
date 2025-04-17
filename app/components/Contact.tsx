"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail, FiX } from 'react-icons/fi';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/BraulioAlejandroNavarreteHorta'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/braulio-alejandro-navarrete-horta-024248274/'
    },
    {
      name: 'X',
      icon: FiX,
      url: 'https://x.com/Braulio01478207'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:braulio.navarrete@xenomacode.com'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
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
          <span className="text-[#64ffda] font-mono mr-4">04.</span>
          <span className="text-[#ccd6f6]">Contacto</span>
          <span className="flex-grow ml-4 h-[1px] bg-[#233554]"></span>
        </motion.h2>

        <div className="max-w-2xl mx-auto text-center">
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6"
          >
            ¡Hablemos!
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-[#8892b0] mb-12 text-lg"
          >
            Actualmente estoy buscando nuevas oportunidades para colaborar en proyectos 
            innovadores. Si tienes una pregunta, propuesta o simplemente quieres saludar, 
            ¡mi bandeja de entrada está siempre abierta!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-16"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="mailto:braulio.navarrete@xenomacode.com"
            className="inline-block px-8 py-4 text-[#64ffda] border-2 border-[#64ffda] rounded
                     hover:bg-[#64ffda15] transition-colors duration-300"
          >
            Enviar Mensaje
          </motion.a>
        </div>

        <motion.footer
          variants={itemVariants}
          className="mt-32 text-center text-[#8892b0] text-sm"
        >
          <p>Diseñado y construido por Braulio Navarrete</p>
          <p className="mt-2 font-mono">
            Construido con Next.js, Three.js y mucho ❤️
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
} 