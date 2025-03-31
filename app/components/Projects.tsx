"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  reverse?: boolean;
}

const projects: Project[] = [
  {
    title: "Portfolio 3D",
    description: "Un portafolio personal interactivo construido con Next.js, Three.js y Framer Motion. Presenta una experiencia inmersiva con animaciones fluidas y efectos 3D.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Three.js", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio.com"
  },
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración. Implementada con Next.js y MongoDB.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce.com",
    reverse: true
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con características de colaboración en tiempo real, notificaciones y análisis de productividad.",
    image: "/projects/tasks.jpg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/username/tasks",
    live: "https://tasks.com"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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

  return (
    <section id="projects" className="py-24 relative">
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
          <span className="text-[#64ffda] font-mono mr-4">02.</span>
          <span className="text-[#ccd6f6]">Proyectos Destacados</span>
          <span className="flex-grow ml-4 h-[1px] bg-[#233554]"></span>
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`relative grid md:grid-cols-12 items-center gap-4 md:gap-8 ${
                project.reverse ? 'md:text-right' : ''
              }`}
            >
              {/* Contenido */}
              <div className={`md:col-span-7 ${project.reverse ? 'md:col-start-6' : ''} relative z-10`}>
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl font-bold text-[#ccd6f6] mb-4"
                >
                  {project.title}
                </motion.h3>

                <motion.div
                  variants={itemVariants}
                  className="gradient-border p-6 bg-[#112240] shadow-xl mb-4"
                >
                  <p className="text-[#8892b0]">{project.description}</p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className={`flex gap-4 flex-wrap text-sm text-[#8892b0] mb-4 ${
                    project.reverse ? 'md:justify-end' : ''
                  }`}
                >
                  {project.technologies.map(tech => (
                    <span key={tech} className="font-mono">{tech}</span>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className={`flex gap-4 ${project.reverse ? 'md:justify-end' : ''}`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Imagen */}
              <div className={`md:col-span-7 ${
                project.reverse ? 'md:col-start-1 md:row-start-1' : 'md:col-start-6'
              } relative`}>
                <motion.div
                  variants={itemVariants}
                  className="relative aspect-video group"
                >
                  <div className="absolute inset-0 bg-[#64ffda] mix-blend-screen opacity-20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 