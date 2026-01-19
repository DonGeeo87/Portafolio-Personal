import { useState, useEffect } from 'react'
import { Menu, X, Rocket } from 'lucide-react'
import Button from './ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

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
    { href: '#portafolio', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 px-4 pt-4`}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-2xl border ${scrolled
          ? 'bg-bg-primary/70 backdrop-blur-xl border-white/10 shadow-glow py-2 px-6'
          : 'bg-transparent border-transparent py-4 px-2'
          }`}
      >
        <div className="flex items-center justify-between h-full">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a
              href="#inicio"
              className="group flex items-center gap-2 text-xl font-heading font-bold"
            >
              <div className="p-1.5 rounded-lg bg-gradient-primary group-hover:rotate-12 transition-transform">
                <Rocket size={18} className="text-white" />
              </div>
              <span className="bg-gradient-primary bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(124,92,255,0.4)]">
                GIP
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-text-secondary hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all group overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-primary group-hover:w-4 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Button href="#contacto" variant="primary" size="sm" className="shadow-glow-primary">
                Hablemos
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-secondary hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 p-2 bg-bg-primary/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-text-secondary hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 transition-all font-medium"
                >
                  <div className="w-1 h-1 rounded-full bg-accent-primary opacity-0 group-hover:opacity-100" />
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button href="#contacto" variant="primary" className="w-full" onClick={() => setIsOpen(false)}>
                  Hablemos
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
