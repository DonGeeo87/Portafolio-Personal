import { useEffect } from 'react'
import { useChapter } from '../context/ChapterContext'

export function useActiveChapter() {
  const { setActiveChapterIndex } = useChapter()

  useEffect(() => {
    const chapters = document.querySelectorAll('[data-chapter]')
    if (!chapters.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chapterId = entry.target.getAttribute('data-chapter')
            const index = ['mirada', 'gente', 'puente', 'codigo', 'conexion'].indexOf(chapterId || '')
            if (index !== -1) {
              setActiveChapterIndex(index)
            }
          }
        })
      },
      { threshold: 0.35, rootMargin: '-10% 0px' }
    )

    chapters.forEach((chapter) => observer.observe(chapter))

    return () => observer.disconnect()
  }, [setActiveChapterIndex])
}