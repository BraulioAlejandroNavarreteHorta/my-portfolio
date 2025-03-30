"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'XENOMACODE Website',
    description: 'Sitio web corporativo para XENOMACODE, desarrollado con Next.js y Three.js para crear una experiencia inmersiva y moderna.',
    tech: ['Next.js', 'Three.js', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/xenomacode',
    external: 'https://xenomacode.com',
    image: '/xenomacode.jpg',
  },
  // Agrega más proyectos aquí
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-teal-400">Mis</span> Proyectos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="w-full h-48 bg-gradient-to-br from-navy-light via-navy to-navy-dark transform group-hover:scale-110 transition-transform duration-300"
                  ></div>
                  <div className="absolute inset-0 bg-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-teal-400 transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-teal-400 transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-teal-300 transition-colors"
            >
              Ver más proyectos
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 