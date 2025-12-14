import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { getImagePath } from '../utils/images'
import Section from './ui/Section'

const DevPortfolio = () => {
  const projects = [
    {
      name: 'FlashMaster Chile',
      description: 'Aplicación para gestión de flashcards',
      tech: 'Android, Kotlin, Compose',
      image: 'images/projects/FlashMasterChile-web-screenshot.png',
      github: '#',
      demo: '#',
      accent: 'primary',
    },
    {
      name: 'JessVitrofusion',
      description: 'Plataforma para vitrales y arte en vidrio',
      tech: 'React, TypeScript, Vite',
      image: 'images/projects/JessVitrofusion-web-screenshot.png',
      github: '#',
      demo: '#',
      accent: 'secondary',
    },
    {
      name: 'Jueguetes Digitales',
      description: 'E-commerce de juguetes y productos digitales',
      tech: 'React, Next.js, TypeScript',
      image: 'images/projects/JueguetesDigitales-web-screenshot.png',
      github: '#',
      demo: '#',
      accent: 'tertiary',
    },
    {
      name: 'Mis Gastos App',
      description: 'Gestión personal de finanzas',
      tech: 'Android, Kotlin, Room',
      image: 'images/projects/MisGastosApp-web-screenshot.png',
      github: '#',
      demo: '#',
      accent: 'primary',
    },
    {
      name: 'Negocio Listo',
      description: 'Plataforma para emprendedores',
      tech: 'Android, Kotlin, Firebase',
      image: 'images/projects/NegocioListo-web-screenshot.png',
      github: '#',
      demo: '#',
      accent: 'secondary',
    },
    {
      name: 'Raulif',
      description: 'Aplicación personalizada para cliente',
      tech: 'React, Vite, TypeScript',
      image: 'images/projects/Raulif-web-screenshot.png',
      github: '#',
      demo: '#',
      accent: 'tertiary',
    },
  ]

  const getAccentColor = (accent: string) => {
    const colors: Record<string, string> = {
      primary: 'var(--accent-primary)',
      secondary: 'var(--accent-secondary)',
      tertiary: 'var(--accent-tertiary)',
    }
    return colors[accent] || colors.primary
  }

  return (
    <Section id="portafolio">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Portafolio <span 
            style={{
              background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(124, 92, 255, 0.5)',
              filter: 'drop-shadow(0 0 10px rgba(124, 92, 255, 0.6))',
            }}
          >Desarrollo</span>
        </motion.h2>
        <motion.p 
          className="text-center text-text-muted mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          Proyectos que demuestran mi experiencia y habilidades
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const accentColor = getAccentColor(project.accent)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <div
                  className="group glass-card rounded-lg overflow-hidden transition-all duration-300 smooth hover:-translate-y-1"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accentColor
                    e.currentTarget.style.boxShadow = `0 0 30px ${accentColor}80, 0 10px 30px rgba(0, 0, 0, 0.4)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div className="aspect-video bg-bg-tertiary overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={getImagePath(project.image)}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 relative">
                    <div 
                      className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: accentColor }}
                    />
                    <h3 
                      className="text-xl font-heading font-bold mb-2 text-text-primary transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(124, 92, 255, 0.8))'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'none'
                      }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-text-muted mb-3 group-hover:text-text-secondary transition-colors">
                      {project.description}
                    </p>
                    <p 
                      key={`tech-${project.name}`}
                      className="text-sm mb-4 font-mono"
                      style={{ 
                        color: accentColor,
                        padding: 0,
                        margin: '0 0 1rem 0',
                        display: 'inline-block',
                        filter: `drop-shadow(0 0 4px ${accentColor}80)`,
                      }}
                    >
                      {project.tech}
                    </p>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        className="text-text-muted transition-all duration-300 hover:scale-110"
                        onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-text-muted transition-all duration-300 hover:scale-110"
                        onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default DevPortfolio
