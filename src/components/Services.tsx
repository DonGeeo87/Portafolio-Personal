import { Zap, Image, Code } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import Card from './ui/Card'

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Servicios de Grabado Láser',
      description: 'Diseño y grabado láser en madera para productos personalizados, souvenirs y artesanía',
      color: 'primary',
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: 'Servicios Gráficos y Audiovisuales',
      description: 'Diseño gráfico, contenidos visuales y materiales audiovisuales bilingües',
      color: 'secondary',
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Desarrollo de Proyectos Web o Apps',
      description: 'Desarrollo nivel trainee de aplicaciones web y móviles con tecnologías modernas',
      color: 'tertiary',
    },
  ]

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      primary: 'var(--accent-primary)',
      secondary: 'var(--accent-secondary)',
      tertiary: 'var(--accent-tertiary)',
    }
    return colors[color] || colors.primary
  }

  return (
    <Section id="servicios" className="bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Mis <span 
            style={{
              background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(124, 92, 255, 0.5)',
              filter: 'drop-shadow(0 0 10px rgba(124, 92, 255, 0.6))',
            }}
          >Servicios</span>
        </motion.h2>
        <motion.p 
          className="text-center text-text-muted mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          Soluciones que integran creatividad, diseño y tecnología
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card>
                <div 
                  className="mb-4"
                  style={{ 
                    color: getIconColor(service.color),
                    filter: `drop-shadow(0 0 8px ${getIconColor(service.color)}80)`
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{service.title}</h3>
                <p className="text-text-muted">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Services
