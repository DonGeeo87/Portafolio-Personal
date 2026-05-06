import { motion, AnimatePresence } from 'framer-motion'
import { CHAPTERS } from '../../data/chapters'
import { SKILLS } from '../../data/skills'
import ChapterLayout from './ChapterLayout'
import { Panel } from '../pop/Panel'
import { SkillBar } from '../pop/SkillBar'
import { Onomatopoeia } from '../pop/Onomatopoeia'
import { usePanelExpand } from '../../hooks/usePanelExpand'

const chapter = CHAPTERS[1]

const genteSkills = SKILLS.filter((s) =>
  ['mirada', 'gente', 'codigo'].includes(s.chapterId)
)

const skillAccents: Record<string, string> = {
  mirada: '#FF6B6B',
  gente: '#FFD700',
  codigo: '#7B68EE',
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
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

export default function LaGente() {
  const { isExpanded } = usePanelExpand()

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

        {/* Skill panels */}
        <div className="mt-10 flex flex-col gap-6">
          {genteSkills.map((skill, i) => {
            const accent = skillAccents[skill.chapterId] ?? chapter.accent
            const expanded = isExpanded(skill.id)

            return (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                custom={i}
              >
                <Panel id={skill.id} accent={accent}>
                  <div className="p-4 md:p-6">
                    <div className="relative">
                      <AnimatePresence>
                        {expanded && (
                          <Onomatopoeia
                            text="¡ZAS!"
                            color={accent}
                            trigger={expanded}
                          />
                        )}
                      </AnimatePresence>

                      <SkillBar
                        name={skill.displayName}
                        level={skill.level}
                        color={accent}
                      />

                      {/* Expanded sub-skills */}
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            className="mt-4 flex flex-wrap gap-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          >
                            {skill.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-sm border px-3 py-1 text-xs font-bold uppercase tracking-wider text-pop-cream/80"
                                style={{ borderColor: accent }}
                              >
                                {item}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </Panel>
              </motion.div>
            )
          })}
        </div>

        {/* Closing text */}
        <motion.p
          className="mt-10 text-center text-base font-medium text-pop-cream/50 md:text-lg"
          variants={itemVariants}
        >
          11+ a&ntilde;os conectando personas, estrategias y tecnolog&iacute;a.
        </motion.p>
      </motion.div>
    </ChapterLayout>
  )
}