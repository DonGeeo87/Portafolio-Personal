export interface SkillModule {
  id: string
  name: string
  displayName: string
  level: number
  items: string[]
  chapterId: string
}

export const SKILLS: SkillModule[] = [
  {
    id: 'audiovisual',
    name: 'COMUNICACION_AUDIOVISUAL',
    displayName: 'Comunicación Audiovisual',
    level: 80,
    items: ['Producción audiovisual', 'Diseño gráfico y branding', 'Contenidos digitales', 'Grabado láser'],
    chapterId: 'mirada',
  },
  {
    id: 'gestion',
    name: 'GESTION_ESTRATEGIA',
    displayName: 'Gestión & Estrategia',
    level: 65,
    items: ['Administración de RRHH', 'Marketing digital', 'Emprendimiento', 'Estrategia de contenidos'],
    chapterId: 'gente',
  },
  {
    id: 'desarrollo',
    name: 'DESARROLLO_ANDROID',
    displayName: 'Desarrollo Android',
    level: 40,
    items: ['Kotlin', 'Android SDK', 'Firebase', 'Vibecoding'],
    chapterId: 'codigo',
  },
]