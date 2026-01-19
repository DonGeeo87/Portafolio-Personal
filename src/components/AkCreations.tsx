import { ExternalLink, Instagram, Facebook, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { getImagePath } from '../utils/images'
import Section from './ui/Section'

const AkCreations = () => {
  const creations = [
    {
      name: 'Emprendedores Artesanos',
      description: 'Plataforma para artesanos locales que conecta el trabajo manual con oportunidades digitales.',
      image: 'images/ak-creaciones/emprendedores-artesanos.jpg',
      link: 'https://wa.me/c/56939688275',
    },
    {
      name: 'NFC QR Experience',
      description: 'Productos inteligentes con tecnología NFC y QR que fusionan objetos físicos con interacciones digitales.',
      image: 'images/ak-creaciones/NFC QR.jpg',
      link: 'https://wa.me/c/56939688275',
    },
    {
      name: 'Identidad Local',
      description: 'Diseño de souvenirs turísticos inspirados en la riqueza cultural y geográfica de la zona central de Chile.',
      image: 'images/ak-creaciones/turismolocal.jpg',
      link: 'https://wa.me/c/56939688275',
    },
  ]

  const socialLinks = [
    { name: 'GMB', url: 'https://share.google/ljy20FEL3CronRGk0', icon: MapPin },
    { name: 'Instagram', url: 'https://www.instagram.com/ak.creaciones/', icon: Instagram },
    { name: 'Facebook', url: 'https://www.facebook.com/ak.creaciones.spa', icon: Facebook },
  ]

  return (
    <Section id="ak-creaciones" className="bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-2xl bg-accent-primary/10 text-accent-primary mb-6"
          >
            <Sparkles size={24} />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            AK <span className="bg-gradient-primary bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(124,92,255,0.4)]">Creaciones</span>
          </motion.h2>

          <motion.p
            className="text-text-muted text-lg max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Donde la precisión milimétrica del láser se encuentra con el alma de la artesanía chilena.
            Creamos productos que cuentan historias y conectan mundos.
          </motion.p>
        </div>

        {/* Productos destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {creations.map((creation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-[2.5rem] p-4 h-full border-white/5 group-hover:border-accent-primary/50 transition-all duration-500 overflow-hidden">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative">
                  <img
                    src={getImagePath(creation.image)}
                    alt={creation.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <a
                    href={creation.link}
                    className="absolute bottom-4 right-4 p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="px-4 pb-4">
                  <h4 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors">
                    {creation.name}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {creation.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/20 rounded-full blur-[80px] group-hover:bg-accent-primary/40 transition-colors" />
            <h3 className="text-2xl font-bold mb-8">Filosofía AK</h3>
            <div className="space-y-8">
              <div>
                <div className="text-accent-primary font-bold text-sm tracking-widest uppercase mb-2">Aikido</div>
                <p className="text-text-secondary text-sm leading-relaxed">Armonía y respeto por el proceso creativo.</p>
              </div>
              <div>
                <div className="text-accent-secondary font-bold text-sm tracking-widest uppercase mb-2">Kaizen</div>
                <p className="text-text-secondary text-sm leading-relaxed">Mejora continua y búsqueda de la excelencia.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-center lg:items-start p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Conecta con nosotros</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 glass-card rounded-2xl border-white/5 hover:border-accent-primary/50 hover:bg-accent-primary/5 transition-all group"
                >
                  <social.icon size={18} className="text-accent-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default AkCreations
