import { motion } from 'framer-motion'
import { CHAPTERS } from '../../data/chapters'
import ChapterLayout from './ChapterLayout'
import { SpeechBubble } from '../pop/SpeechBubble'

const chapter = CHAPTERS[0]

const badges = [
  { label: 'Comunicador Audiovisual', accent: '#FF6B6B' },
  { label: 'Ingeniero en Administración de RRHH', accent: '#FFD700' },
  { label: 'Desarrollador Android Trainee', accent: '#7B68EE' },
] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function LaMirada() {
  return (
    <ChapterLayout chapter={chapter}>
      <motion.div
        className="flex min-h-[80vh] flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          className="font-heading text-5xl font-black uppercase tracking-tight text-pop-cream md:text-7xl lg:text-8xl"
          style={{ color: chapter.accent }}
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          Giorgio Interdonato Palacios
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-lg font-medium tracking-wide text-pop-cream/80 md:text-xl"
          variants={itemVariants}
        >
          Comunicador Audiovisual &middot; Ingeniero RRHH &middot; Desarrollador
          Android Trainee
        </motion.p>

        {/* Identity badges */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
          {badges.map((badge, i) => {
            const slideVariant = i % 2 === 0 ? slideFromLeft : slideFromRight
            return (
              <motion.div
                key={badge.label}
                className="comic-border rounded-sm bg-pop-ink/60 px-4 py-3 text-center"
                style={{ borderColor: badge.accent }}
                variants={slideVariant}
              >
                <span
                  className="text-sm font-bold uppercase tracking-wider md:text-base"
                  style={{ color: badge.accent }}
                >
                  {badge.label}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Description */}
        <motion.p
          className="mt-8 text-base text-pop-cream/60 md:text-lg"
          variants={itemVariants}
        >
          Autodidacta. Constructor. Desde Valpara&iacute;so, Chile.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
          variants={itemVariants}
        >
          <SpeechBubble accent={chapter.accent} side="left">
            <a
              href="#codigo"
              className="inline-block px-6 py-3 text-lg font-black uppercase tracking-wider transition-transform hover:scale-105"
              style={{ color: chapter.accent }}
            >
              &iexcl;EXPLORA!
            </a>
          </SpeechBubble>

          <SpeechBubble accent={chapter.accent} side="right">
            <a
              href="#conexion"
              className="inline-block px-6 py-3 text-lg font-black uppercase tracking-wider transition-transform hover:scale-105"
              style={{ color: chapter.accent }}
            >
              &iexcl;HABLEMOS!
            </a>
          </SpeechBubble>
        </motion.div>
      </motion.div>
    </ChapterLayout>
  )
}