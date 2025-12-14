import { ExternalLink, Instagram, Facebook, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { getImagePath } from '../utils/images'
import Section from './ui/Section'

const AkCreations = () => {
  const creations = [
    {
      name: 'Emprendedores Artesanos',
      description: 'Plataforma para artesanos locales que conecta el trabajo manual con oportunidades digitales',
      image: 'images/ak-creaciones/emprendedores-artesanos.jpg',
      link: '#',
    },
    {
      name: 'NFC QR',
      description: 'Productos con tecnología NFC y códigos QR que conectan lo físico con experiencias digitales',
      image: 'images/ak-creaciones/NFC QR.jpg',
      link: '#',
    },
    {
      name: 'Turismo Local',
      description: 'Souvenirs turísticos inspirados en la identidad de ciudades como Limache, Olmué y Valparaíso',
      image: 'images/ak-creaciones/turismolocal.jpg',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      name: 'Google My Business',
      url: 'https://share.google/ljy20FEL3CronRGk0',
      icon: MapPin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ak.creaciones/',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ak.creaciones.spa',
      icon: Facebook,
    },
  ]

  return (
    <Section className="bg-bg-secondary/50" id="ak-creaciones">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            AK <span 
              style={{
                background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(124, 92, 255, 0.5)',
                filter: 'drop-shadow(0 0 10px rgba(124, 92, 255, 0.6))',
              }}
            >Creaciones</span> SpA
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-accent-primary font-semibold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            Artesanía y Tecnología en Perfecta Armonía
          </motion.p>
          <motion.p 
            className="text-sm text-text-muted mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            Aikido Kaizen Creaciones
          </motion.p>
          <motion.p 
            className="text-center text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Empresa chilena que fusiona la artesanía en madera con la tecnología de grabado y corte láser 
            para crear productos únicos, personalizados y llenos de identidad. Cada pieza refleja el equilibrio 
            entre arte, precisión y significado, convirtiéndose en un puente entre la historia local y las nuevas 
            formas de expresión.
          </motion.p>
        </motion.div>

        {/* Productos destacados */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-text-primary">
            Qué Hacemos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {creations.map((creation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <div
                  className="group glass-card rounded-lg overflow-hidden transition-all duration-300 smooth hover:-translate-y-1 h-full flex flex-col"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)'
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(124, 92, 255, 0.3), 0 10px 30px rgba(0, 0, 0, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div className="aspect-video bg-bg-tertiary overflow-hidden">
                    <img
                      src={getImagePath(creation.image)}
                      alt={creation.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-semibold mb-2 text-text-primary">{creation.name}</h4>
                    <p className="text-text-muted mb-4 flex-1">{creation.description}</p>
                    <a
                      href={creation.link}
                      className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(124, 92, 255, 0.4))' }}
                    >
                      Ver más
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filosofía */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="glass-card rounded-lg p-8 md:p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-text-primary text-center">
              Nuestra Filosofía
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">Aikido</div>
                <p className="text-text-muted text-sm">
                  Armonía, equilibrio y respeto por el proceso
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-secondary mb-2">Kaizen</div>
                <p className="text-text-muted text-sm">
                  Mejora continua, innovación y aprendizaje constante
                </p>
              </div>
            </div>
            <div className="border-t border-surface-border pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Misión</h4>
                  <p className="text-text-muted">
                    Crear productos que integren arte, tecnología y personalización, 
                    fortaleciendo la identidad local y el valor del trabajo hecho a mano.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Visión</h4>
                  <p className="text-text-muted">
                    Ser una marca referente en Chile en el diseño láser artesanal, 
                    reconocida por su originalidad, calidad y conexión entre lo artesanal y lo digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Redes Sociales */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-xl font-semibold mb-6 text-text-primary">
            Síguenos en nuestras redes
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card rounded-lg px-6 py-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(124, 92, 255, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <Icon 
                    className="text-accent-primary group-hover:text-accent-secondary transition-colors" 
                    size={20}
                  />
                  <span className="text-text-primary font-medium">{social.name}</span>
                  <ExternalLink 
                    className="text-text-muted group-hover:text-accent-primary transition-colors ml-1" 
                    size={14}
                  />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default AkCreations
