export interface Chapter {
  id: string
  number: number
  title: string
  subtitle: string
  accent: string
  accentRgb: string
  pattern: 'sunburst' | 'halftone' | 'burst' | 'grid' | 'stars'
  description: string
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'mirada',
    number: 1,
    title: 'LA MIRADA',
    subtitle: 'Comunicador Audiovisual',
    accent: '#FF6B6B',
    accentRgb: '255, 107, 107',
    pattern: 'sunburst',
    description: 'Donde todo empieza — la cámara, el encuadre, la historia visual.',
  },
  {
    id: 'gente',
    number: 2,
    title: 'LA GENTE',
    subtitle: 'Ingeniero en Administración de RRHH',
    accent: '#FFD700',
    accentRgb: '255, 215, 0',
    pattern: 'halftone',
    description: 'La vuelta — de mirar pantallas a entender personas.',
  },
  {
    id: 'puente',
    number: 3,
    title: 'EL PUENTE',
    subtitle: 'Emprendimiento & Contenido Digital',
    accent: '#00D4AA',
    accentRgb: '0, 212, 170',
    pattern: 'burst',
    description: 'Donde los mundos se conectan — AK Creaciones, contenido, estrategia.',
  },
  {
    id: 'codigo',
    number: 4,
    title: 'EL CÓDIGO',
    subtitle: 'Desarrollador Android Trainee',
    accent: '#7B68EE',
    accentRgb: '123, 104, 238',
    pattern: 'grid',
    description: 'La nueva dimensión — aprendiendo a construir, no solo a comunicar.',
  },
  {
    id: 'conexion',
    number: 5,
    title: 'LA CONEXIÓN',
    subtitle: 'Hablemos',
    accent: '#FF69B4',
    accentRgb: '255, 105, 180',
    pattern: 'stars',
    description: 'Donde el lector se convierte en protagonista.',
  },
]