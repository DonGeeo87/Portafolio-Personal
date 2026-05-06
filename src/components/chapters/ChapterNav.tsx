import { motion } from 'framer-motion'
import { CHAPTERS } from '../../data/chapters'
import { useChapter } from '../../context/ChapterContext'
import { useActiveChapter } from '../../hooks/useActiveChapter'

export default function ChapterNav() {
  const { activeChapterIndex } = useChapter()
  useActiveChapter()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-bg-primary/80 backdrop-blur-xl border-b border-surface-border/50 transition-all duration-300">
      <div className="font-heading font-bold text-lg tracking-tight">
        <span style={{ color: CHAPTERS[activeChapterIndex].accent }}>
          GIP
        </span>
        <span className="text-text-muted ml-2 hidden sm:inline font-mono text-xs">
          Cap. {CHAPTERS[activeChapterIndex].number}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {CHAPTERS.map((chapter, index) => (
          <button
            key={chapter.id}
            onClick={() => {
              document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative flex items-center justify-center"
            aria-label={`Ir a ${chapter.title}`}
          >
            <motion.div
              className="rounded-full transition-all duration-300"
              style={{ backgroundColor: chapter.accent }}
              animate={{
                width: index === activeChapterIndex ? 32 : 12,
                height: index === activeChapterIndex ? 32 : 12,
                opacity: index === activeChapterIndex ? 1 : 0.4,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
            {index === activeChapterIndex && (
              <span className="absolute -bottom-5 text-[10px] font-mono text-text-muted whitespace-nowrap">
                {chapter.title}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="font-mono text-xs text-text-muted hidden md:block">
        {activeChapterIndex + 1}/{CHAPTERS.length}
      </div>
    </nav>
  )
}