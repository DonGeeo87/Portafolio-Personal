import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#portafolio', label: 'Portafolio' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[rgba(5,5,10,0.6)] shadow-soft' 
          : 'bg-[rgba(5,5,10,0.3)]'
      }`}
      style={{ 
        height: '72px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
      }}
    >
      <div className="container h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <a 
              href="#inicio" 
              className="text-2xl font-heading font-bold"
              style={{
                background: 'linear-gradient(135deg, #7C5CFF 0%, #4D9FFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(124, 92, 255, 0.5)',
                filter: 'drop-shadow(0 0 10px rgba(124, 92, 255, 0.6))',
              }}
            >
              GIP
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 smooth"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 10px rgba(124, 92, 255, 0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none'
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="#contacto" variant="primary">
              Contactar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-accent-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div 
            className="px-2 pt-2 pb-3 space-y-1 bg-[rgba(5,5,10,0.95)]"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-accent-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 smooth"
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 10px rgba(124, 92, 255, 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = 'none'
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button href="#contacto" variant="primary" className="w-full">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
