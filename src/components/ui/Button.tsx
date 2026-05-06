import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'comic'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button'
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  }

  const baseClasses = `rounded-full font-medium transition-all duration-300 smooth ${sizeClasses[size]}`

  const variantClasses = {
    primary: 'text-white shadow-glow hover:scale-105',
    secondary: 'bg-transparent border border-surface-border text-text-primary hover:border-accent-primary hover:text-accent-primary',
    comic: 'comic-border font-bold uppercase font-mono'
  }

  const primaryStyle = variant === 'primary' ? {
    background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
    boxShadow: '0 0 40px rgba(124, 92, 255, 0.35)',
  } : {}

  const comicStyle = variant === 'comic' ? {
    background: 'rgba(var(--chapter-accent-rgb, 124, 92, 255), 0.15)',
    borderColor: 'var(--chapter-accent, #7C5CFF)',
    borderWidth: '3px',
    borderStyle: 'solid',
    color: 'var(--chapter-accent, #7C5CFF)',
    fontFamily: "'JetBrains Mono', monospace",
  } : {}

  const style = { ...primaryStyle, ...comicStyle }

  const hoverHandlers = variant === 'primary' ? {
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.boxShadow = '0 0 50px rgba(124, 92, 255, 0.5)'
    },
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.boxShadow = '0 0 40px rgba(124, 92, 255, 0.35)'
    }
  } : variant === 'comic' ? {
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.background = 'rgba(var(--chapter-accent-rgb, 124, 92, 255), 0.25)'
      e.currentTarget.style.color = 'var(--chapter-accent, #7C5CFF)'
    },
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.background = 'rgba(var(--chapter-accent-rgb, 124, 92, 255), 0.15)'
      e.currentTarget.style.color = 'var(--chapter-accent, #7C5CFF)'
    }
  } : {}

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        {...hoverHandlers}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={style}
      {...hoverHandlers}
    >
      {children}
    </button>
  )
}