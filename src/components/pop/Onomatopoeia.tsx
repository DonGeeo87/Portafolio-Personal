import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface OnomatopoeiaProps {
  text: string
  color?: string
  trigger?: boolean
}

export function Onomatopoeia({ text, color, trigger = true }: OnomatopoeiaProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (trigger) {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), 600)
      return () => clearTimeout(timer)
    }
  }, [trigger])

  const accentColor = color ?? 'var(--chapter-accent)'

  return (
    <AnimatePresence>
      {visible && (
        <motion.span
          className="onomatopoeia absolute top-2 right-2 z-20"
          style={{ color: accentColor }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          exit={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {text}
        </motion.span>
      )}
    </AnimatePresence>
  )
}