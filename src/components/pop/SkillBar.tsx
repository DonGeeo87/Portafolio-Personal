import { motion } from 'framer-motion'

interface SkillBarProps {
  name: string
  level: number
  color?: string
}

export function SkillBar({ name, level, color }: SkillBarProps) {
  const accentColor = color ?? 'var(--chapter-accent)'

  return (
    <div className="flex flex-col gap-1">
      <span className="font-bold uppercase text-sm tracking-wider text-pop-cream">
        {name}
      </span>
      <div className="h-3 w-full bg-pop-ink rounded-sm overflow-hidden border border-white/10">
        <motion.div
          className="skill-bar-fill h-full rounded-sm"
          style={{
            width: `${level}%`,
            backgroundColor: accentColor,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}