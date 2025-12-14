import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  href,
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 smooth'
  
  const variantClasses = {
    primary: 'text-white shadow-glow hover:scale-105',
    secondary: 'bg-transparent border border-surface-border text-text-primary hover:border-accent-primary hover:text-accent-primary'
  }

  const primaryStyle = variant === 'primary' ? {
    background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
    boxShadow: '0 0 40px rgba(124, 92, 255, 0.35)',
  } : {}

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        style={primaryStyle}
        {...(variant === 'primary' ? {
          onMouseEnter: (e) => {
            e.currentTarget.style.boxShadow = '0 0 50px rgba(124, 92, 255, 0.5)'
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.boxShadow = '0 0 40px rgba(124, 92, 255, 0.35)'
          }
        } : {})}
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
      style={primaryStyle}
      {...(variant === 'primary' ? {
        onMouseEnter: (e) => {
          e.currentTarget.style.boxShadow = '0 0 50px rgba(124, 92, 255, 0.5)'
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.boxShadow = '0 0 40px rgba(124, 92, 255, 0.35)'
        }
      } : {})}
    >
      {children}
    </button>
  )
}
