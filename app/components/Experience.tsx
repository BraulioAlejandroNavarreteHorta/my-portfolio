"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Cofounder & Lead Developer',
    company: 'XENOMACODE',
    period: '2023 - Presente',
    description: [
      'Liderazgo de equipos de desarrollo y gestión de proyectos',
      'Desarrollo de soluciones tecnológicas innovadoras',
      'Implementación de metodologías ágiles y mejores prácticas',
      'Arquitectura de sistemas y toma de decisiones técnicas',
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'Freelance',
    period: '2022 - Presente',
    description: [
      'Desarrollo de aplicaciones web personalizadas',
      'Consultoría técnica para startups y empresas',
      'Optimización y mantenimiento de sistemas existentes',
      'Integración de APIs y servicios de terceros',
    ],
  },
  // Agrega más experiencias aquí
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-teal-400">Mi</span> Experiencia
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-teal-400/20"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? 'right-0 md:-right-4' : 'left-0 md:-left-4'
                  } w-8 h-8 bg-teal-400 rounded-full border-4 border-[#0a192f] z-10`}
                ></div>

                {/* Content */}
                <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl hover:shadow-teal-400/10 transition-shadow">
                  <h3 className="text-xl font-bold text-teal-400 mb-1">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="text-teal-400 mr-2">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 