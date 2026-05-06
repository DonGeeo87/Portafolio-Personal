import { createContext, useContext, useState, ReactNode } from 'react'
import { CHAPTERS } from '../data/chapters'

interface ChapterContextType {
  activeChapterIndex: number
  setActiveChapterIndex: (index: number) => void
  expandedPanel: string | null
  setExpandedPanel: (id: string | null) => void
  activeChapter: typeof CHAPTERS[number]
}

const ChapterContext = createContext<ChapterContextType | null>(null)

export function ChapterProvider({ children }: { children: ReactNode }) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0)
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null)

  const activeChapter = CHAPTERS[activeChapterIndex]

  return (
    <ChapterContext.Provider value={{
      activeChapterIndex,
      setActiveChapterIndex,
      expandedPanel,
      setExpandedPanel,
      activeChapter,
    }}>
      {children}
    </ChapterContext.Provider>
  )
}

export function useChapter() {
  const context = useContext(ChapterContext)
  if (!context) throw new Error('useChapter must be used within ChapterProvider')
  return context
}