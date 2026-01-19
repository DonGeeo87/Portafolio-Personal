import { Mail, Github, Linkedin, Globe, Heart } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import Card from './ui/Card'
import Button from './ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirigir a Messenger con el ID específico
    window.open(`https://m.me/100071775141585`, '_blank')
  }

  const socialLinks = [
    { icon: <Mail size={20} />, href: 'mailto:giorgio.interdonato@gmail.com', label: 'Email' },
    { icon: <Github size={20} />, href: 'https://github.com/DonGeeo87', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/giorgiointerdonato/', label: 'LinkedIn' },
  ]

  return (
    <Section id="contacto">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(124, 92, 255, 0.5)',
              filter: 'drop-shadow(0 0 10px rgba(124, 92, 255, 0.6))',
            }}
          >Contacto</span>
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          ¿Tienes un proyecto en mente? Hablemos
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-secondary">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 glass-card rounded-lg focus:outline-none focus:border-accent-primary text-text-primary transition-all duration-300"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(124, 92, 255, 0.3)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-secondary">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 glass-card rounded-lg focus:outline-none focus:border-accent-primary text-text-primary transition-all duration-300"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(124, 92, 255, 0.3)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-secondary">
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-2 glass-card rounded-lg focus:outline-none focus:border-accent-primary text-text-primary resize-none transition-all duration-300"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(124, 92, 255, 0.3)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Enviar Mensaje
            </Button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">Conectemos</h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Card className="flex items-center gap-4 hover:border-accent-primary transition-all duration-300">
                    <div className="text-text-muted group-hover:text-accent-primary transition-colors" style={{ filter: 'drop-shadow(0 0 4px rgba(124, 92, 255, 0))' }}>
                      {link.icon}
                    </div>
                    <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                      {link.label}
                    </span>
                  </Card>
                </motion.a>
              ))}
            </div>
            <Card className="mt-8">
              <p className="text-text-muted text-center">
                Hecho con <Heart className="inline text-accent-primary" size={16} /> por Giorgio
                Interdonato Palacios
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
