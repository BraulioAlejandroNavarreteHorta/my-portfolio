"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub size={24} />,
      url: 'https://github.com/tuusuario',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={24} />,
      url: 'https://linkedin.com/in/tuusuario',
    },
    {
      name: 'Twitter',
      icon: <FiTwitter size={24} />,
      url: 'https://twitter.com/tuusuario',
    },
    {
      name: 'Email',
      icon: <FiMail size={24} />,
      url: 'mailto:tu@email.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-teal-400">Contacta</span> Conmigo
          </h2>
          
          <p className="text-gray-300 mb-12 text-lg">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él!
            Estoy disponible para freelance, colaboraciones y oportunidades laborales.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold text-teal-400 mb-4">Envíame un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full bg-gray-700/50 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-700/50 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full bg-gray-700/50 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-400 text-gray-900 py-2 rounded-lg font-medium hover:bg-teal-300 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold text-teal-400 mb-4">Conecta conmigo</h3>
              <p className="text-gray-300 mb-6">
                También puedes encontrarme en las siguientes plataformas:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-gray-700/50 rounded-lg text-gray-300 hover:text-teal-400 hover:bg-gray-700 transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-sm"
          >
            Diseñado y desarrollado por Braulio Navarrete
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 