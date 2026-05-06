import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: 'glass' | 'panel'
}

export default function Card({ children, className = '', hover = true, variant = 'glass' }: CardProps) {
  if (variant === 'panel') {
    const panelBaseClasses = 'comic-border rounded-lg p-6 transition-all duration-300 smooth'
    const panelHoverClasses = hover ? 'hover:bg-[rgba(var(--chapter-accent-rgb),0.1)]' : ''
    const panelStyle = {
      background: 'rgba(var(--chapter-accent-rgb, 124, 92, 255), 0.05)',
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: 'var(--chapter-accent, #7C5CFF)',
    }

    return (
      <div className={`${panelBaseClasses} ${panelHoverClasses} ${className}`} style={panelStyle}>
        {children}
      </div>
    )
  }

  const baseClasses = 'glass-card rounded-lg p-6 transition-all duration-300 smooth'
  const hoverClasses = hover ? 'hover:glass-card-hover hover:-translate-y-1' : ''

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}