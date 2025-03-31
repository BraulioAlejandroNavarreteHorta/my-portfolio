"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Job {
  company: string;
  title: string;
  period: string;
  description: string[];
  technologies: string[];
}

const jobs: Job[] = [
  {
    company: "XENOMACODE",
    title: "Full Stack Developer",
    period: "2022 - Presente",
    description: [
      "Desarrollo de aplicaciones web escalables utilizando Next.js y TypeScript.",
      "Implementación de experiencias 3D interactivas con Three.js y React Three Fiber.",
      "Optimización de rendimiento y SEO para aplicaciones web.",
      "Colaboración en equipos multidisciplinarios utilizando metodologías ágiles."
    ],
    technologies: ["Next.js", "TypeScript", "Three.js", "Node.js", "MongoDB"]
  },
  {
    company: "Empresa Anterior",
    title: "Frontend Developer",
    period: "2020 - 2022",
    description: [
      "Desarrollo de interfaces de usuario responsivas y accesibles.",
      "Implementación de animaciones y transiciones fluidas con Framer Motion.",
      "Integración de APIs RESTful y servicios de terceros.",
      "Mantenimiento y mejora de aplicaciones existentes."
    ],
    technologies: ["React", "JavaScript", "CSS", "Git", "REST APIs"]
  },
  {
    company: "Primera Empresa",
    title: "Web Developer",
    period: "2018 - 2020",
    description: [
      "Desarrollo de sitios web estáticos y dinámicos.",
      "Implementación de diseños responsivos con HTML5 y CSS3.",
      "Optimización de rendimiento y velocidad de carga.",
      "Colaboración con diseñadores para implementar interfaces de usuario."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(0);
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

  return (
    <section id="experience" className="py-24 relative">
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
          <span className="text-[#64ffda] font-mono mr-4">03.</span>
          <span className="text-[#ccd6f6]">Experiencia</span>
          <span className="flex-grow ml-4 h-[1px] bg-[#233554]"></span>
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-4 md:gap-8">
          {/* Tabs */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide"
          >
            {jobs.map((job, index) => (
              <button
                key={job.company}
                onClick={() => setSelectedJob(index)}
                className={`px-4 py-2 text-sm font-mono whitespace-nowrap md:whitespace-normal text-left transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 ${
                  selectedJob === index
                    ? 'text-[#64ffda] border-[#64ffda] bg-[#112240]'
                    : 'text-[#8892b0] border-[#233554] hover:text-[#64ffda] hover:bg-[#112240]'
                }`}
              >
                {job.company}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-9 pt-4 md:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              key={selectedJob}
              className="space-y-4"
            >
              <h3 className="text-xl text-[#ccd6f6]">
                <span className="font-semibold">{jobs[selectedJob].title}</span>
                {" "}
                <span className="text-[#64ffda]">@ {jobs[selectedJob].company}</span>
              </h3>

              <p className="font-mono text-sm text-[#8892b0]">
                {jobs[selectedJob].period}
              </p>

              <ul className="space-y-4">
                {jobs[selectedJob].description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#64ffda] mr-2 mt-1">▹</span>
                    <span className="text-[#8892b0]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <h4 className="text-sm font-semibold text-[#ccd6f6] mb-2">
                  Tecnologías utilizadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {jobs[selectedJob].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-[#64ffda] border border-[#64ffda] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 