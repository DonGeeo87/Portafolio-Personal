import { ReactNode } from 'react'

interface SpeechBubbleProps {
  children: ReactNode
  accent?: string
  side?: 'left' | 'right'
}

export function SpeechBubble({ children, accent, side = 'left' }: SpeechBubbleProps) {
  const borderColor = accent ?? 'var(--chapter-accent)'
  const bgColor = accent
    ? `color-mix(in srgb, ${accent} 10%, transparent)`
    : 'rgba(var(--chapter-accent-rgb), 0.1)'

  return (
    <div
      className={`speech-bubble speech-bubble-${side}`}
      style={{
        borderColor,
        background: bgColor,
      }}
    >
      {children}
    </div>
  )
}