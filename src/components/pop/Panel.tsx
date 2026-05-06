import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePanelExpand } from '../../hooks/usePanelExpand'
import { Onomatopoeia } from './Onomatopoeia'
import { ActionLines } from './ActionLines'

interface PanelProps {
  id: string
  children: ReactNode
  accent?: string
  expandable?: boolean
  className?: string
}

export function Panel({ id, children, accent, expandable = true, className = '' }: PanelProps) {
  const { isExpanded, togglePanel } = usePanelExpand()
  const expanded = isExpanded(id)

  return (
    <motion.div
      className={`group relative comic-border bg-pop-ink/40 overflow-hidden cursor-pointer ${className}`}
      style={accent ? { borderColor: accent } : undefined}
      onClick={expandable ? () => togglePanel(id) : undefined}
      layout
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <ActionLines color={accent} />

      <AnimatePresence>
        {expanded && (
          <Onomatopoeia
            text="¡ZAS!"
            color={accent}
            trigger={expanded}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{ scale: expanded ? 1.02 : 1 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}