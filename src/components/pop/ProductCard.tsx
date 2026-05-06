import { motion } from 'framer-motion'
import { getImagePath } from '../../utils/images'
import { ActionLines } from './ActionLines'

interface ProductCardProps {
  name: string
  description: string
  image: string
  accent?: string
}

export function ProductCard({ name, description, image, accent }: ProductCardProps) {
  const borderColor = accent ?? 'var(--chapter-accent)'
  const glowShadow = accent
    ? `0 0 20px ${accent}40`
    : '0 0 20px rgba(var(--chapter-accent-rgb), 0.4)'

  return (
    <motion.div
      className="group relative comic-border bg-pop-ink/60 overflow-hidden"
      style={{ borderColor }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        scale: 1.02,
        boxShadow: glowShadow,
        borderColor,
      }}
    >
      <ActionLines color={accent} />

      {/* Product image */}
      <div className="halftone-overlay aspect-square overflow-hidden">
        <img
          src={getImagePath(image)}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 relative z-10">
        <h3 className="font-bold text-pop-cream">
          {name}
        </h3>
        <p className="text-sm text-pop-cream/70 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}