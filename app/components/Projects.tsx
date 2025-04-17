"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "XENOMACODE Platform",
    description: "Plataforma integral de desarrollo y gestión de proyectos tecnológicos, implementando arquitectura serverless y microservicios.",
    technologies: ["Next.js", "Node.js", "AWS"],
    image: "/images/xenomacode.png",
    link: "https://xenomacode.com",
    github: "https://github.com/XenomaCode"
  },
  {
    title: "Weightlifting Technique Analysis",
    description: "Este proyecto emplea visión artificial, inteligencia artificial y aprendizaje automático con MediaPipe para analizar técnicas de levantamiento de pesas, identificando errores y aciertos para prevenir lesiones y mejorar el rendimiento de los atletas.",
    technologies: ["Python", "TensorFlow", "MediaPipe", "NumPy", "Jupyter Notebook"],
    image: "/images/Weightlifting-Technique-Analysis.png",
    link: "https://github.com/BraulioAlejandroNavarreteHorta/WeightliftingTechniqueAnalysis",
    github: "https://github.com/BraulioAlejandroNavarreteHorta/WeightliftingTechniqueAnalysis"
  },
  {
    title: "Peletería Central E-Bussiness",
    description: "Plataforma de comercio electrónico para la venta de productos para la elaborción de calzado.",
    technologies: ["Next.js", "Node.js", "AWS", "Firebase"],
    image: "/images/peleteria-central.png",
    link: "https://peleteria-central.xenomacode.com/",
    github: "https://github.com/XenomaCode"
  },
  {
    title: "Park Finder Landing Page",
    description: "Landing page para la plataforma Park Finder, una aplicación móvil que permite a los usuarios encontrar y reservar lugar de estacionamiento en tiempo real.",
    technologies: ["Next.js", "Node.js", "Tailwind CSS"],
    image: "/images/park-finder-landing.png",
    link: "https://parkfinder.xenomacode.com/",
    github: "https://github.com/XenomaCode"
  },
  {
    title: "Park Finder App",
    description: "Aplicación móvil para la plataforma Park Finder, una aplicación móvil que permite a los usuarios encontrar y reservar lugar de estacionamiento en tiempo real.",
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "/images/park-finder-app.png",
    link: "https://parkfinder.xenomacode.com/",
    github: "https://github.com/XenomaCode"
  },
  {
    title: "OPEN AI & GOOGLE CLOUD Vision API",
    description: "Integración de OpenAI con Google Cloud para la interpretación y validación de transferencias bancarias",
    technologies: ["Python", "OpenAI", "Google Cloud", "FastAPI", "Vision API"],
    image: "/images/openai-google-cloud.png",
    link: "https://github.com/XenomaCode",
    github: "https://github.com/XenomaCode"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-primary">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Ver Proyecto
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 