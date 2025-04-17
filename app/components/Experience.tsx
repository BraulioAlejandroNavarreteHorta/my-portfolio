"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Job {
  company: string;
  role?: string;
  title?: string;
  period: string;
  location?: string;
  description: string | string[];
  technologies: string[];
  achievements: string[];
}



const experiences: Job[] = [
  {
    company: "Inventer",
    title: "Desarrollador de software Full Stack",
    period: "Abril 2024 - Presente",
    location: "León, Guanajuato, México",
    description: "Orquesto la migración del sitio web de préstamos en línea VIVUS desde REACT a DjangoCMS, mejorando la eficiencia del sistema en un 30% y reduciendo los tiempos de carga en un 50% mediante una arquitectura más robusta.",
    technologies: ["React", "Django", "Python", "FastAPI", "Flask", "TypeScript", "AWS"],
    achievements: [
      "Desarrollo de backend en el framework de python DJANGO para una plataforma sobre automatización de los procesos de máquinas expendedoras",
      "Desarrollo de pantallas para la plataforma web usando REACT y REACT NATIVE para la aplicación multiplataforma",
      "Desarrollo de una API completa en el framework de python FLASK para escaneo de vulnerabilidades de dominios",
      "Mantenimiento y correcciones del sitio de ciberseguridad XENKO usando FASTAPI y REACT",
      "Colaborador en el desarrollo de backend y frontend en la plataforma de firma electrónica ZIGNATRUE"
    ]
  },
  {
    company: "Peletería Central",
    title: "Encargado de confianza",
    period: "Agosto 2014 - Presente",
    location: "Av. Central 1031, Col. Guadalupe, León, Guanajuato, México",
    description: "Administro y optimizo la plataforma de e-business implementada, monitorizando métricas de conversión y satisfacción del cliente.",
    technologies: ["E-commerce", "Gestión de inventarios", "Logística", "Atención al cliente"],
    achievements: [
      "Desarrollé e implementé un sistema completo de e-business, incluyendo tienda online y estrategia digital",
      "Supervisé el inventario de materiales, asegurando niveles óptimos de stock y minimizando faltantes",
      "Implementé estrategias para mejorar la logística de distribución, optimizando rutas de entrega",
      "Colaboré en la selección y evaluación de proveedores, negociando condiciones favorables",
      "Capacité al nuevo personal en procedimientos de atención al cliente y conocimiento técnico de productos"
    ]
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
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-primary">Experiencia Profesional</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 shadow-xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-gray-300">{exp.role || exp.title}</p>
                  {exp.location && (
                    <p className="text-gray-400 text-sm mt-1">{exp.location}</p>
                  )}
                </div>
                <span className="text-primary font-mono mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4">
                {typeof exp.description === 'string' ? exp.description : exp.description.join(' • ')}
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-primary mb-2">Logros y Responsabilidades</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 