import { Code, Smartphone, Palette, User } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from './ui/Section'

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Desarrollo Digital',
      description: 'Especialista trainee en Android (Kotlin/Compose) y ecosistemas web modernos.',
      color: 'accent-primary'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Estrategia & Contenidos',
      description: '10+ años optimizando la comunicación estratégica y narrativa bilingüe.',
      color: 'accent-secondary'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Artesanía Tecnológica',
      description: 'Fusión de grabado láser y tecnología NFC para productos con identidad única.',
      color: 'accent-tertiary'
    },
  ]

  return (
    <Section id="sobre-mi" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-mono mb-6">
              <User size={14} />
              <span>PERFIL_PROFESIONAL</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              Uniendo <span className="bg-gradient-primary bg-clip-text text-transparent">Creatividad</span> y Lógica.
            </h2>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Soy un profesional multidisciplinario que habita en la intersección de la tecnología y el arte.
                Mi trayectoria de más de una década en comunicaciones me ha dado la sensibilidad para entender
                lo que los usuarios necesitan, mientras que mi formación técnica me permite construirlo.
              </p>
              <p>
                Como fundador de <span className="text-accent-primary font-semibold">AK Creaciones SpA</span>,
                aplico la misma precisión del grabado láser a mi código: limpio, eficiente y con atención al detalle.
                Mi meta es transformar ideas complejas en interfaces intuitivas y memorables.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-3xl p-6 flex gap-6 hover:border-accent-primary/30 transition-all duration-500 overflow-hidden relative">
                  <div className={`p-4 rounded-2xl bg-white/5 text-${skill.color} group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    {skill.icon}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-text-primary">{skill.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{skill.description}</p>
                  </div>
                  {/* Decorative faint glow */}
                  <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity bg-accent-primary`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
