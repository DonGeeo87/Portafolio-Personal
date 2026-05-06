export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  image: string
  github: string
  demo: string
}

export const PROJECTS: Project[] = [
  {
    id: 'codigo-guerrero',
    name: 'Código Guerrero Dev',
    description: 'Plataforma oficial de marca personal enfocada en mentoría de desarrollo y creación de contenido técnico.',
    tech: ['React', 'TS', 'Tailwind'],
    image: 'images/projects/codigoguerrerodev.png',
    github: 'https://github.com/DonGeeo87',
    demo: 'https://codigoguerrerodev.web.app/',
  },
  {
    id: 'suite-emprende',
    name: 'Suite Emprende',
    description: 'Ecosistema de herramientas para emprendedores chilenos, integrando gestión y presencia digital.',
    tech: ['React', 'Firebase', 'Vite'],
    image: 'images/projects/SuiteEmprende.png',
    github: 'https://github.com/DonGeeo87',
    demo: 'https://dongeeo87.github.io/SuiteEmprende/',
  },
  {
    id: 'jess-vitrofusion',
    name: 'JessVitrofusion',
    description: 'E-commerce especializado en arte en vidrio con una experiencia de usuario fluida y estética artesanal premium.',
    tech: ['React', 'TS', 'Tailwind'],
    image: 'images/projects/JessVitrofusion-web-screenshot.png',
    github: 'https://github.com/DonGeeo87',
    demo: 'https://jess-vitrofusion-pwa.web.app/',
  },
  {
    id: 'raulif',
    name: 'Raulif — Parque La Campana',
    description: 'Plataforma corporativa y de gestión para servicios forestales y turismo sustentable.',
    tech: ['React', 'TS', 'Vite'],
    image: 'images/projects/Raulif-web-screenshot.png',
    github: 'https://github.com/DonGeeo87',
    demo: 'https://dongeeo87.github.io/Raulif-Parque-La-Campana/',
  },
  {
    id: 'negocio-listo',
    name: 'Negocio Listo',
    description: 'Suite administrativa móvil que permite a pequeños negocios gestionar inventario y ventas en tiempo real.',
    tech: ['Kotlin', 'Retrofit', 'Firebase'],
    image: 'images/projects/NegocioListo-web-screenshot.png',
    github: 'https://github.com/DonGeeo87',
    demo: 'https://app-negocio-listo.web.app/landing',
  },
  {
    id: 'mis-gastos',
    name: 'Mis Gastos App',
    description: 'Aplicación Android nativa para el control financiero personal con análisis detallado de gastos.',
    tech: ['Kotlin', 'MVVM', 'Firebase'],
    image: 'images/projects/MisGastosApp-web-screenshot.png',
    github: 'https://github.com/DonGeeo87/Mis-Gastos-App/',
    demo: 'https://dongeeo87.github.io/Mis-Gastos-App/',
  },
]