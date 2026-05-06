# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Giorgio Interdonato Palacios ("Codigo Guerrero Dev"). An **interactive graphic novel** with Pop Art Latino visual style, organized as 5 biographical chapters. Written in Spanish, deployed to GitHub Pages at `https://dongeoo87.github.io/Portafolio-Personal/` with canonical domain `https://codigoguerrerodev.web.app/`.

**User's real identity:** Comunicador Audiovisual, Ingeniero en Administracion de RRHH, Desarrollador Android Trainee (NOT a senior developer). Content must reflect this honestly.

## Commands

- `npm run dev` — Vite dev server (http://localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint with `--max-warnings 0` (zero tolerance)

No test framework is configured.

## Tech Stack

React 19 / TypeScript 5.6 / Vite 5.4 / Tailwind CSS 3.4 / Framer Motion 11 / Lucide React / react-helmet-async

No router — anchor-based navigation via chapter sections (`#mirada`, `#gente`, `#puente`, `#codigo`, `#conexion`). State managed via `ChapterContext` with IntersectionObserver.

## Architecture

### 5 Chapter System

`App.tsx` wraps everything in `ChapterProvider` + `ChapterNav` + 5 chapter components vertically:

| Chapter | ID | Accent | Pattern | Content |
|---------|------|--------|---------|---------|
| I LA MIRADA | `mirada` | Rojo `#FF6B6B` | Sunburst | Opening splash — name, identity badges, CTAs |
| II LA GENTE | `gente` | Dorado `#FFD700` | Halftone | Skills with expandable panels |
| III EL PUENTE | `puente` | Verde `#00D4AA` | Burst | AK Creaciones SpA + newsletter |
| IV EL CÓDIGO | `codigo` | Violeta `#7B68EE` | Grid | Android projects (trainee level) |
| V LA CONEXIÓN | `conexion` | Rosa `#FF69B4` | Stars | Contact form + social links |

### Component hierarchy

- `ChapterLayout` — wrapper with `data-chapter` attr, pattern bg, ChapterNumber watermark
- `ChapterNav` — fixed top nav with 5 colored dots, IntersectionObserver-driven
- `src/components/pop/` — reusable Pop Art components: Panel, Onomatopoeia, SpeechBubble, ActionLines, ChapterNumber, SkillBar, ProjectCard, ProductCard
- `src/components/ui/` — Button (primary/secondary/comic), Card (glass/panel), Section
- `src/data/` — chapters.ts, projects.ts, skills.ts (all content data)

### Dynamic accent color system

CSS custom property `--chapter-accent` changes per chapter via `[data-chapter]` selectors in globals.css. Components use `var(--chapter-accent)` instead of hardcoded colors. Tailwind tokens: `pop-mirada`, `pop-gente`, `pop-puente`, `pop-codigo`, `pop-conexion`, `chapter-accent`.

### Animation pattern

Framer Motion `whileInView` with `viewport={{ once: true }}`. Staggered delays: `delay: index * 0.1`. Easing: `ease: [0.4, 0, 0.2, 1]`. Panels expand on click with AnimatePresence + Onomatopoeia flash ("¡ZAS!", "¡BOOM!", "¡POW!").

### Image paths

Use `getImagePath()` from `src/utils/images.ts` for all image references — it prepends `import.meta.env.BASE_URL` for GitHub Pages subpath compatibility.

### Contact form

Does NOT submit to a backend. On submit it opens a Facebook Messenger link (`https://m.me/100071775141585`). Form data is collected but not transmitted.

### SEO

Centralized in `SEO.tsx` via `react-helmet-async`. Job title: "Comunicador Audiovisual | Ingeniero en Administracion de RRHH | Desarrollador Android Trainee". Canonical URL: `codigoguerrerodev.web.app`.

## Deployment

GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Triggers on push to `main`. Uses Node.js 20 and `npm install --legacy-peer-deps`.

**Base path**: `/Portafolio-Personal/` — set in both `vite.config.ts` (`base` option) and the workflow's `BASE_URL` env var. This must stay in sync for images and assets to resolve.

## Key constraints

- All user-facing text is in Spanish
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
- Do NOT represent the user as a "Senior Developer" — they are a trainee/autodidact
- No new dependencies (Framer Motion + CSS only for all effects)
- Pop Art CSS patterns are pure CSS gradients (no images)
- Background patterns use `::before` pseudo-elements with `pointer-events: none`