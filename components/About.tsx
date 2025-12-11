import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE, SOCIAL_LINKS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Narrative Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6 text-white">
              Quién Soy
            </h2>
            <div className="w-20 h-1 bg-calipso mb-8"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Soy <span className="text-white font-semibold">Giorgio Interdonato</span>, Comunicador Audiovisual con más de una década de experiencia en comunicaciones, contenido digital y proyectos sociales. Entre 2021 y 2024 trabajé de manera remota desde Estados Unidos, perfeccionando mi perspectiva internacional y aplicando narrativa y estrategias digitales.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              En los últimos años he impulsado mi perfil tecnológico: completé un Bootcamp de Desarrollo de Aplicaciones Android, formación en desarrollo web e integración estratégica de inteligencia artificial para mejorar la productividad y creatividad de emprendedores.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Toda esta trayectoria convergió en <span className="text-amber font-semibold">AK Creaciones SpA</span>, donde <span className="text-white font-semibold">artesanía y tecnología conviven</span>: productos grabados en madera, diseño láser, integración NFC/QR y soluciones interactivas. Mi misión es transformar ideas en productos significativos y herramientas digitales que impulsen negocios reales.
            </p>

            <div className="flex gap-4">
               {SOCIAL_LINKS.filter(l => l.name !== 'AK Instagram').map((link) => (
                 <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-calipso hover:bg-calipso/10 transition-all"
                 >
                   {link.icon}
                 </a>
               ))}
            </div>
          </motion.div>

          {/* Timeline Side */}
          <div className="relative border-l border-gray-800 ml-3 lg:ml-0 pl-8 space-y-12">
            {TIMELINE.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`absolute -left-[41px] top-0 p-2 bg-background border border-gray-800 rounded-full ${event.color}`}>
                  {event.icon}
                </div>
                <span className="text-sm font-mono text-gray-500 mb-1 block">{event.year}</span>
                <h3 className={`text-xl font-bold mb-2 ${event.color}`}>{event.title}</h3>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;