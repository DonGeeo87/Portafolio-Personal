import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const baseClasses = 'glass-card rounded-lg p-6 transition-all duration-300 smooth'
  const hoverClasses = hover ? 'hover:glass-card-hover hover:-translate-y-1' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}
