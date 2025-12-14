import { Code, Smartphone, Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import Card from './ui/Card'

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desarrollo Trainee',
      description: 'Proyectos Android y web con Kotlin, Jetpack Compose y frameworks modernos',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Comunicación & Contenidos',
      description: 'Más de 10 años en comunicaciones estratégicas y contenidos digitales bilingües',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Diseño & Tecnología',
      description: 'Grabado láser, diseño artesanal y tecnología NFC/QR para productos personalizados',
    },
  ]

  return (
    <Section id="sobre-mi">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Sobre <span 
            style={{
              background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(124, 92, 255, 0.5)',
              filter: 'drop-shadow(0 0 10px rgba(124, 92, 255, 0.6))',
            }}
          >Mí</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-text-secondary text-lg mb-4 leading-relaxed">
              Profesional versátil con más de una década de experiencia en comunicaciones estratégicas,
              contenidos digitales y diseño. Actualmente combino mi trabajo como creador de contenidos
              para Viva Resource Foundation con mi rol como fundador de AK Creaciones SpA, empresa
              dedicada al grabado láser, diseño artesanal y tecnología NFC/QR.
            </p>
            <p className="text-text-secondary text-lg mb-4 leading-relaxed">
              En paralelo, me desempeño como desarrollador trainee en proyectos Android y web,
              aplicando Kotlin, Jetpack Compose y frameworks modernos. Mi sello es unir creatividad
              y lógica, combinando arte, estrategia y código en proyectos con impacto real.
            </p>
          </motion.div>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="text-accent-primary" style={{ filter: 'drop-shadow(0 0 8px rgba(124, 92, 255, 0.6))' }}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-text-primary">{skill.title}</h3>
                      <p className="text-text-muted">{skill.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
