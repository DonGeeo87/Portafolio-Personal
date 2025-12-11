import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-calipso/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-terminal animate-pulse"></span>
          <span className="text-xs font-mono text-gray-400">Disponible para proyectos</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 leading-tight"
        >
          Creo experiencias.<br />
          Construyo herramientas.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-calipso via-white to-magenta">
            Inspiro a emprendedores.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          Me llamo <strong className="text-white">Giorgio Interdonato</strong>. Transformo ideas en productos reales — digitales y físicos. 
          Donde la creatividad se encuentra con la tecnología.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#dev-portfolio"
            className="group px-8 py-4 bg-calipso text-black font-bold rounded-lg hover:bg-white transition-all flex items-center gap-2"
          >
            Explorar mi trabajo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#ak-creaciones"
            className="group px-8 py-4 bg-transparent border border-amber text-amber font-bold rounded-lg hover:bg-amber/10 transition-all flex items-center gap-2"
          >
            AK Creaciones
            <Terminal className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Floating Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 text-sm text-gray-500 font-mono"
        >
          &quot;Tecnología práctica + Alma emprendedora&quot;
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;