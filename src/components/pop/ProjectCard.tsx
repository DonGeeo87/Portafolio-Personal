import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'
import { getImagePath } from '../../utils/images'
import { ActionLines } from './ActionLines'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative comic-border bg-pop-ink/60 overflow-hidden"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.02, borderColor: 'var(--chapter-accent)' }}
    >
      <ActionLines />

      {/* Project image */}
      <div className="halftone-overlay aspect-video overflow-hidden">
        <img
          src={getImagePath(project.image)}
          alt={project.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 relative z-10">
        <h3 className="font-bold text-lg text-pop-cream">
          {project.name}
        </h3>
        <p className="text-sm text-pop-cream/70 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm"
              style={{
                backgroundColor: 'rgba(var(--chapter-accent-rgb), 0.2)',
                color: 'var(--chapter-accent)',
                border: '1px solid rgba(var(--chapter-accent-rgb), 0.3)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}