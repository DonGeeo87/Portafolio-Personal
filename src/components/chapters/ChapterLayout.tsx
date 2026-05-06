import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Chapter } from '../../data/chapters'
import { ChapterNumber } from '../pop/ChapterNumber'

interface ChapterLayoutProps {
  chapter: Chapter
  children: ReactNode
  className?: string
}

export default function ChapterLayout({ chapter, children, className = '' }: ChapterLayoutProps) {
  return (
    <section
      id={chapter.id}
      data-chapter={chapter.id}
      className={`relative min-h-screen py-16 md:py-24 overflow-hidden pattern-${chapter.pattern} ${className}`}
    >
      <ChapterNumber number={chapter.number} />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}