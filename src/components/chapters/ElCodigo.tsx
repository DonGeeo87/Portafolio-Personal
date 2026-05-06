import { motion, AnimatePresence } from 'framer-motion'
import { CHAPTERS } from '../../data/chapters'
import { PROJECTS } from '../../data/projects'
import ChapterLayout from './ChapterLayout'
import { ProjectCard } from '../pop/ProjectCard'
import { Onomatopoeia } from '../pop/Onomatopoeia'
import { Panel } from '../pop/Panel'
import { usePanelExpand } from '../../hooks/usePanelExpand'

const chapter = CHAPTERS[3]

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

export default function ElCodigo() {
  const { isExpanded } = usePanelExpand()

  return (
    <ChapterLayout chapter={chapter}>
      <motion.div
        className="mx-auto max-w-5xl"
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

        {/* Trainee badge */}
        <motion.div
          className="mt-6 inline-flex items-center gap-3"
          variants={itemVariants}
        >
          <span
            className="rounded-sm px-4 py-1.5 text-sm font-black uppercase tracking-widest comic-border"
            style={{
              color: chapter.accent,
              borderColor: chapter.accent,
              backgroundColor: `rgba(${chapter.accentRgb}, 0.15)`,
            }}
          >
            TRAINEE
          </span>
          <span className="text-xs text-pop-cream/50 leading-snug">
            Graduado bootcamp &mdash; Abril 2025, Talento Digital para Chile
          </span>
        </motion.div>

        {/* Projects grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const panelId = `codigo-${project.id}`
            const expanded = isExpanded(panelId)

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={i}
              >
                <Panel id={panelId} accent={chapter.accent}>
                  <div className="relative">
                    <Onomatopoeia
                      text="¡POW!"
                      color={chapter.accent}
                      trigger={!!expanded}
                    />
                    <ProjectCard project={project} />

                    {/* Tech tags styled as onomatopoeia badges */}
                    <AnimateOnomatopoeiaTags
                      tech={project.tech}
                      accent={chapter.accent}
                      accentRgb={chapter.accentRgb}
                      visible={!!expanded}
                    />
                  </div>
                </Panel>
              </motion.div>
            )
          })}
        </div>

        {/* Closing line */}
        <motion.p
          className="mt-10 text-center text-base font-medium text-pop-cream/50 md:text-lg"
          variants={itemVariants}
        >
          Construyendo, no solo comunicando.
        </motion.p>
      </motion.div>
    </ChapterLayout>
  )
}

/* ------------------------------------------------------------------ */
/* Inline helper — tech tags that animate in when the panel expands   */
/* ------------------------------------------------------------------ */

function AnimateOnomatopoeiaTags({
  tech,
  accent,
  accentRgb,
  visible,
}: {
  tech: string[]
  accent: string
  accentRgb: string
  visible: boolean
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="mt-3 flex flex-wrap gap-2 px-4 pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {tech.map((t, i) => (
            <motion.span
              key={t}
              className="onomatopoeia inline-block px-2 py-0.5 text-xs font-black uppercase tracking-wider"
              style={{
                color: accent,
                textShadow: `0 0 8px rgba(${accentRgb}, 0.5)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 0.25,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}