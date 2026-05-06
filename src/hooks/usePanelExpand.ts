import { useChapter } from '../context/ChapterContext'

export function usePanelExpand() {
  const { expandedPanel, setExpandedPanel } = useChapter()

  const togglePanel = (id: string) => {
    setExpandedPanel(expandedPanel === id ? null : id)
  }

  const isExpanded = (id: string) => expandedPanel === id

  return { togglePanel, isExpanded, expandedPanel }
}