import { ExternalLink, Github, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { getImagePath } from '../utils/images'
import Section from './ui/Section'

const DevPortfolio = () => {
  const projects = [
    {
      name: 'Código Guerrero Dev',
      description: 'Plataforma oficial de marca personal enfocada en mentoría de desarrollo y creación de contenido técnico.',
      tech: ['React', 'TS', 'Tailwind'],
      image: 'images/projects/codigoguerrerodev.png',
      github: 'https://github.com/DonGeeo87',
      demo: 'https://codigoguerrerodev.web.app/',
      accent: 'primary',
    },
    {
      name: 'Suite Emprende',
      description: 'Ecosistema de herramientas para emprendedores chilenos, integrando gestión y presencia digital.',
      tech: ['React', 'Firebase', 'Vite'],
      image: 'images/projects/SuiteEmprende.png',
      github: 'https://github.com/DonGeeo87',
      demo: 'https://dongeeo87.github.io/SuiteEmprende/',
      accent: 'secondary',
    },
    {
      name: 'JessVitrofusion',
      description: 'E-commerce especializado en arte en vidrio con una experiencia de usuario fluida y estética artesanal premium.',
      tech: ['React', 'TS', 'Tailwind'],
      image: 'images/projects/JessVitrofusion-web-screenshot.png',
      github: 'https://github.com/DonGeeo87',
      demo: 'https://jess-vitrofusion-pwa.web.app/',
      accent: 'tertiary',
    },
    {
      name: 'Raulif - Parque La Campana',
      description: 'Plataforma corporativa y de gestión para servicios forestales y turismo sustentable.',
      tech: ['React', 'TS', 'Vite'],
      image: 'images/projects/Raulif-web-screenshot.png',
      github: 'https://github.com/DonGeeo87',
      demo: 'https://dongeeo87.github.io/Raulif-Parque-La-Campana/',
      accent: 'primary',
    },
    {
      name: 'Negocio Listo',
      description: 'Suite administrativa móvil que permite a pequeños negocios gestionar inventario y ventas en tiempo real.',
      tech: ['Kotlin', 'Retrofit', 'Firebase'],
      image: 'images/projects/NegocioListo-web-screenshot.png',
      github: 'https://github.com/DonGeeo87',
      demo: 'https://app-negocio-listo.web.app/landing',
      accent: 'secondary',
    },
    {
      name: 'Mis Gastos App',
      description: 'Aplicación Android nativa para el control financiero personal con análisis detallado de gastos.',
      tech: ['Kotlin', 'MVVM', 'Firebase'],
      image: 'images/projects/MisGastosApp-web-screenshot.png',
      github: 'https://github.com/DonGeeo87/Mis-Gastos-App/',
      demo: 'https://dongeeo87.github.io/Mis-Gastos-App/',
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
    <Section id="portafolio" className="bg-bg-primary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Proyectos <span className="bg-gradient-primary bg-clip-text text-transparent">Seleccionados</span>
            </h2>
            <p className="text-text-muted max-w-xl text-lg">
              Una muestra de soluciones digitales donde la arquitectura de software se encuentra con el diseño centrado en el usuario.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-accent-primary font-mono text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Code2 size={18} />
            <span>TOTAL_PROYECTOS: {projects.length}</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const accentColor = getAccentColor(project.accent)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow behind card */}
                <div
                  className="absolute -inset-2 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: accentColor }}
                />

                <div className="relative glass-card rounded-3xl overflow-hidden border-white/5 h-full flex flex-col group-hover:border-white/20 transition-all duration-500">
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={getImagePath(project.image)}
                      alt={project.name}
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />

                    {/* Floating Links */}
                    <div className="absolute top-4 right-4 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a href={project.github} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-accent-primary border border-white/10 transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-accent-primary border border-white/10 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-white/5 text-text-muted border border-white/5 group-hover:border-accent-primary/30 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-text-secondary leading-relaxed text-sm mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="pt-2">
                      <div
                        className="h-1 rounded-full transition-all duration-500 origin-left scale-x-[0.1] group-hover:scale-x-100"
                        style={{ backgroundColor: accentColor }}
                      />
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
