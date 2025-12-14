import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './ui/Button'

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Radial glow background effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-70 hidden md:block" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse hidden md:block" style={{ 
        backgroundColor: 'rgba(124, 92, 255, 0.3)',
        animationDuration: '4s' 
      }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse hidden md:block" style={{ 
        backgroundColor: 'rgba(77, 159, 255, 0.3)',
        animationDuration: '5s', 
        animationDelay: '1s' 
      }} />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(124, 92, 255, 0.5)',
                filter: 'drop-shadow(0 0 20px rgba(124, 92, 255, 0.6))',
              }}
            >
              Giorgio
            </motion.span>{' '}
            <motion.span 
              className="text-text-primary inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              Interdonato{' '}
            </motion.span>
            <motion.span 
              className="text-text-primary inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              Palacios
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-4 font-mono text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Profesional Versátil & Creador Multidisciplinario
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Integro recursos humanos, comunicación audiovisual, diseño y tecnología
            para crear soluciones innovadoras que conectan personas, ideas y marcas.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button href="#contacto" variant="primary" className="inline-flex items-center justify-center">
              Contactar
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button href="#portafolio" variant="secondary" className="inline-flex items-center justify-center">
              Ver Portafolio
              <Download className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
