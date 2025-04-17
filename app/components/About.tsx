"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaReact, 
  FaDocker, 
  FaWindows, 
  FaApple, 
  FaLinux,
  FaLanguage,
  FaMobile,
  FaJava,
  FaChair
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPython, 
  SiDjango, 
  SiFastapi, 
  SiFlask,
  SiSpring,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiAmazondynamodb,
  SiAmazon,
  SiTailwindcss,
  SiKalilinux,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiJavascript,
  SiKotlin,
  SiSwift,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAndroid,
  SiApple,
  SiGooglecloud
} from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";

const skills = {
  lenguajes: {
    title: "Lenguajes de Programación",
    icon: <FaCode className="text-2xl" />,
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "Swift", icon: <SiSwift /> }
    ]
  },
  frontend: {
    title: "Frontend",
    icon: <FaReact className="text-2xl" />,
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ]
  },
  backend: {
    title: "Backend",
    icon: <FaCode className="text-2xl" />,
    items: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Spring Boot", icon: <SiSpring /> }
    ]
  },
  mobile: {
    title: "Mobile",
    icon: <FaMobile className="text-2xl" />,
    items: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "Android", icon: <SiAndroid /> },
      { name: "iOS", icon: <SiApple /> },
      { name: ".NET MAUI", icon: <SiDotnet /> },
    ]
  },
  databases: {
    title: "Bases de Datos",
    icon: <FaDatabase className="text-2xl" />,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "DynamoDB", icon: <SiAmazondynamodb /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: <FaCloud className="text-2xl" />,
    items: [
      { name: "AWS", icon: <SiAmazon /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> }
    ]
  },
  sistemas: {
    title: "Sistemas Operativos",
    icon: <FaWindows className="text-2xl" />,
    items: [
      { name: "Windows", icon: <FaWindows /> },
      { name: "MacOS", icon: <FaApple /> },
      { name: "Kali Linux", icon: <SiKalilinux /> }
    ]
  },
  idiomas: {
    title: "Idiomas",
    icon: <FaLanguage className="text-2xl" />,
    items: [
      { name: "Español (Nativo)", icon: <FaLanguage /> },
      { name: "Inglés (Intermedio)", icon: <FaLanguage /> }
    ]
  }
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Sobre Mí</h2>
            <p className="text-gray-300 mb-6">
              Ingeniero de Software y Sistemas Computacionales con experiencia en Python, React y AWS.
              Con certificación AWS Cloud Practitioner. Basado en León, Guanajuato.
            </p>
            <p className="text-gray-300 mb-6">
              Mi experiencia abarca desde el desarrollo frontend con tecnologías modernas como React y 
              Next.js, hasta la implementación de arquitecturas backend robustas y escalables.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-violet-500/30 rounded-lg transform rotate-3"></div>
            <div className="relative bg-gray-900/90 rounded-lg p-8 shadow-xl border border-purple-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="relative w-48 h-12">
                  <Image
                    src="/images/xenomaicono.svg"
                    alt="XENOMACODE Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-purple-400 font-mono">Co-Founder</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">XENOMACODE</h3>
              <p className="text-gray-300 mb-6">
                En XENOMACODE, nos especializamos en el desarrollo de software innovador y soluciones tecnológicas 
                de vanguardia. Como co-fundador, lidero equipos multidisciplinarios en la creación de aplicaciones 
                web, móviles y sistemas empresariales, utilizando las últimas tecnologías y mejores prácticas de 
                desarrollo.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/10">
                  <h4 className="text-purple-400 font-semibold mb-2">Servicios</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Desarrollo Web Full Stack</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Aplicaciones Móviles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Soluciones Cloud</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Consultoría IT</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/10">
                  <h4 className="text-purple-400 font-semibold mb-2">Enfoque</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Innovación Tecnológica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Calidad de Código</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Seguridad</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Escalabilidad</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                  Desarrollo Ágil
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                  Cloud Native
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                  DevOps
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                  Ciberseguridad
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-primary">Habilidades Técnicas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-lg p-6 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary">{category.icon}</span>
                <h4 className="text-xl font-semibold text-primary">{category.title}</h4>
              </div>
              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="text-primary">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 