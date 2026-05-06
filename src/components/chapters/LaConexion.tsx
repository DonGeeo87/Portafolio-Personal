import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CHAPTERS } from '../../data/chapters'
import ChapterLayout from './ChapterLayout'
import { SpeechBubble } from '../pop/SpeechBubble'

const chapter = CHAPTERS[4]

const MESSENGER_URL = 'https://m.me/100071775141585'

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:giorgio.interdonato@gmail.com',
    display: 'giorgio.interdonato@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DonGeeo87',
    display: 'DonGeeo87',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/giorgiointerdonato/',
    display: 'giorgiointerdonato',
  },
] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function LaConexion() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    window.open(MESSENGER_URL, '_blank')
  }

  return (
    <ChapterLayout chapter={chapter}>
      <motion.div
        className="mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        {/* Section heading */}
        <motion.div variants={itemVariants}>
          <h2
            className="font-heading text-4xl font-black uppercase tracking-tight md:text-6xl"
            style={{ color: chapter.accent }}
          >
            {chapter.title}
          </h2>
          <p className="mt-2 text-lg font-medium text-pop-cream/70 md:text-xl">
            {chapter.subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-6 text-base leading-relaxed text-pop-cream/60 md:text-lg"
          variants={itemVariants}
        >
          {chapter.description}
        </motion.p>

        {/* Contact form as SpeechBubble */}
        <motion.div className="mt-10" variants={itemVariants}>
          <SpeechBubble accent={chapter.accent} side="left">
            <form onSubmit={handleSubmit} className="space-y-5 p-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="conexion-name"
                  className="mb-1 block text-xs font-bold uppercase tracking-wider text-pop-cream/60"
                >
                  Nombre
                </label>
                <input
                  id="conexion-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-sm border-2 bg-pop-ink/80 px-4 py-2.5 text-pop-cream placeholder-pop-cream/30 transition-colors focus:outline-none comic-border"
                  style={{ borderColor: 'transparent' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = chapter.accent
                    e.currentTarget.style.boxShadow = `0 0 15px rgba(${chapter.accentRgb}, 0.3)`
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.boxShadow = ''
                  }}
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="conexion-email"
                  className="mb-1 block text-xs font-bold uppercase tracking-wider text-pop-cream/60"
                >
                  Email
                </label>
                <input
                  id="conexion-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-sm border-2 bg-pop-ink/80 px-4 py-2.5 text-pop-cream placeholder-pop-cream/30 transition-colors focus:outline-none comic-border"
                  style={{ borderColor: 'transparent' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = chapter.accent
                    e.currentTarget.style.boxShadow = `0 0 15px rgba(${chapter.accentRgb}, 0.3)`
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.boxShadow = ''
                  }}
                  placeholder="tu@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="conexion-message"
                  className="mb-1 block text-xs font-bold uppercase tracking-wider text-pop-cream/60"
                >
                  Mensaje
                </label>
                <textarea
                  id="conexion-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-sm border-2 bg-pop-ink/80 px-4 py-2.5 text-pop-cream placeholder-pop-cream/30 transition-colors focus:outline-none comic-border"
                  style={{ borderColor: 'transparent' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = chapter.accent
                    e.currentTarget.style.boxShadow = `0 0 15px rgba(${chapter.accentRgb}, 0.3)`
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.boxShadow = ''
                  }}
                  placeholder="Cu&eacute;ntame tu idea..."
                />
              </div>

              {/* Submit — pop art explosion button */}
              <motion.button
                type="submit"
                className="relative w-full overflow-hidden comic-border px-6 py-3 text-lg font-black uppercase tracking-widest transition-transform"
                style={{
                  color: chapter.accent,
                  borderColor: chapter.accent,
                  backgroundColor: `rgba(${chapter.accentRgb}, 0.15)`,
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: `0 0 25px rgba(${chapter.accentRgb}, 0.5)`,
                }}
                whileTap={{ scale: 0.96 }}
              >
                {/* Explosion burst background */}
                <span
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle, ${chapter.accent} 0%, transparent 70%)`,
                  }}
                />
                <span className="relative z-10">{'¡PING!'}</span>
              </motion.button>
            </form>
          </SpeechBubble>
        </motion.div>

        {/* Social links as colorful badges */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={itemVariants}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-border rounded-sm px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105"
              style={{
                color: chapter.accent,
                borderColor: chapter.accent,
                backgroundColor: `rgba(${chapter.accentRgb}, 0.1)`,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer — comic book end-page style */}
        <motion.div
          className="mt-16 border-t border-pop-cream/10 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-pop-cream/40">
            Hecho con {'❤'}{'️'} por Giorgio Interdonato Palacios
          </p>
          <p
            className="mt-1 text-xs font-black uppercase tracking-widest"
            style={{ color: chapter.accent }}
          >
            C&oacute;digo Guerrero Dev
          </p>
          <p className="mt-3 text-xs text-pop-cream/25">
            &copy; {new Date().getFullYear()} &mdash; Valpara&iacute;so, Chile
          </p>
        </motion.div>
      </motion.div>
    </ChapterLayout>
  )
}