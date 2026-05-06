import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  chapter?: string
}

export default function Section({ children, className = '', id, chapter }: SectionProps) {
  return (
    <section
      id={id}
      data-chapter={chapter}
      className={`container py-12 md:py-24 ${className}`}
    >
      {children}
    </section>
  )
}