import { ArrowRight, Terminal, Brackets, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './ui/Button'

const Hero = () => {
  return (
    <section id="inicio" className="min-h-[90vh] flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-xs font-mono mb-6"
            >
              <Terminal size={14} />
              <span>SISTEMA_V1.0_ONLINE</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="bg-gradient-primary bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(124,92,255,0.4)]"
              >
                Giorgio
              </span>
              <br />
              <span className="text-text-primary">Interdonato Palacios</span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Brackets, text: "Developer" },
                { icon: Layers, text: "Product Creator" },
                { icon: Brackets, text: "Audiovisual" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-text-muted text-sm font-mono border-l border-accent-primary/50 pl-3">
                  <item.icon size={14} className="text-accent-primary" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Fusiono la precisión técnica con la creatividad artesanal para
              construir experiencias digitales que trascienden la pantalla.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button href="#portafolio" variant="primary" className="group">
                Explorar Proyectos
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
              <Button href="#contacto" variant="secondary" className="border-accent-primary/20 hover:border-accent-primary/50">
                Hablemos
              </Button>
            </motion.div>
          </div>

          {/* Futuristic Visual Element */}
          <motion.div
            className="flex-1 relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-accent-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner rotating ring */}
              <motion.div
                className="absolute inset-[15%] border border-accent-secondary/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              {/* Center glow */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
                <div className="w-40 h-40 bg-accent-primary/30 rounded-full blur-[60px] animate-pulse" />
              </div>
              {/* Floating code brackets */}
              <motion.div
                className="absolute top-10 right-10 p-4 glass-card rounded-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brackets size={32} className="text-accent-primary" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-10 p-4 glass-card rounded-2xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Layers size={32} className="text-accent-secondary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
