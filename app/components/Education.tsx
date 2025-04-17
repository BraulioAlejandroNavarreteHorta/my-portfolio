"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Education {
  title: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

interface Certification {
  title: string;
  organization: string;
  date: string;
  skills: string[];
}

const educationData: Education[] = [
  {
    title: "Ingeniería en Software y Sistemas Computacionales",
    institution: "Universidad La Salle Bajío",
    location: "Avenida Universidad 602, Lomas del Campestre, 37150 León de los Aldama, Gto.",
    period: "2025",
    gpa: "4.0 GPA",
    achievements: [
      "Ganador de la feria de ciencias presentando un proyecto de visión por computadora que ayuda a prevenir lesiones al realizar rutinas de ejercicios en levantamiento de pesas y mejorar la técnica progresivamente llamada GYMTECH",
      "Incursión en el taller cultural de teatro",
      "Colaborador de una aplicación móvil que mejora la gestión y da información de lugares de estacionamiento para el campus de la Universidad La Salle Bajío"
    ]
  }
];

const certifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    date: "2023",
    skills: [
      "Comprensión de los principios básicos de la ciberseguridad y su impacto.",
      "Identificación de amenazas comunes como malware, phishing y ataques DDoS.",
      "Conocimiento del modelo CIA: Confidencialidad, Integridad y Disponibilidad.",
      "Buenas prácticas de seguridad digital para proteger datos y dispositivos.",
      "Introducción a conceptos clave como criptografía, evaluación de riesgos y normas de seguridad."
    ]
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2024",
    skills: [
      "Comprender los conceptos fundamentales de la infraestructura cloud de AWS",
      "Identificar y aplicar servicios clave de AWS para solucionar necesidades empresariales",
      "Implementar buenas prácticas de seguridad y cumplimiento en entornos cloud",
      "Analizar modelos de costos y estructuras de precios para optimizar inversiones tecnológicas",
      "Contribuir a decisiones estratégicas sobre adopción y migración a la nube"
    ]
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="education" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-primary">Educación</h2>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 shadow-xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{edu.title}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mt-1">{edu.location}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="text-primary font-mono">{edu.period}</span>
                  {edu.gpa && (
                    <p className="text-gray-300 text-sm">{edu.gpa}</p>
                  )}
                </div>
              </div>
              {edu.achievements && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-primary mb-2">Logros Destacados</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold my-12 text-primary">Certificaciones</h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 shadow-xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{cert.title}</h3>
                  <p className="text-gray-300">{cert.organization}</p>
                </div>
                <span className="text-primary font-mono mt-2 md:mt-0">{cert.date}</span>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-primary mb-2">Competencias Adquiridas</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {cert.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 