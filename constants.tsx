import React from 'react';
import { Project, ProjectStatus, TimelineEvent, Service, SocialLink } from './types';
import { 
  Palette, 
  Terminal, 
  Cpu, 
  Hammer, 
  Smartphone, 
  Globe, 
  Zap, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook 
} from 'lucide-react';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/giorgiointerdonato/?skipRedirect=true",
    icon: <Linkedin className="w-6 h-6" />
  },
  {
    name: "GitHub",
    url: "https://github.com/DonGeeo87?tab=repositories",
    icon: <Github className="w-6 h-6" />
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/giorgio.interdonato/",
    icon: <Instagram className="w-6 h-6" />
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/giorgio.interdonato.palacios",
    icon: <Facebook className="w-6 h-6" />
  },
  {
    name: "AK Instagram",
    url: "https://www.instagram.com/ak.creaciones/",
    icon: <Instagram className="w-6 h-6 text-amber" />
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2011–2021",
    title: "Fundamentos y Comunicación",
    description: "Comunicación audiovisual, diseño, contenido digital y dirección de arte. Trabajo con municipalidades y programas sociales.",
    icon: <Palette size={20} />,
    color: "text-magenta"
  },
  {
    year: "2022–2024",
    title: "Estrategia y Liderazgo",
    description: "Consolidación en branding y estrategias digitales. Jefe de Comunicaciones en campaña CORE 2024.",
    icon: <Globe size={20} />,
    color: "text-calipso"
  },
  {
    year: "2025",
    title: "El Gran Salto: Tech + Craft",
    description: "Fundación de AK Creaciones SpA, Finalización de Bootcamp Android y publicación de apps.",
    icon: <Cpu size={20} />,
    color: "text-terminal"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "NegocioListo",
    description: "App móvil para emprendedores: ventas, pedidos, gastos e inventario. Arquitectura limpia y escalable.",
    stack: ["Kotlin", "Jetpack Compose", "Android"],
    status: ProjectStatus.Beta,
    githubUrl: "https://github.com/DonGeeo87/Negocio-Listo-Android-App",
    demoUrl: "https://app-negocio-listo.web.app/landing",
    imageUrl: "/Portafolio-Personal/images/projects/NegocioListo-web-screenshot.png",
    highlight: true
  },
  {
    title: "MisGastos App",
    description: "App minimalista para registrar gastos y visualizar flujo de dinero. Enfoque UX financiero.",
    stack: ["Android", "Web", "Kotlin"],
    status: ProjectStatus.Live,
    githubUrl: "https://github.com/DonGeeo87/Mis-Gastos-App",
    demoUrl: "https://dongeeo87.github.io/Mis-Gastos-App/",
    imageUrl: "/Portafolio-Personal/images/projects/MisGastosApp-web-screenshot.png"
  },
  {
    title: "Juguetes Digitales",
    description: "Colección de microherramientas interactivas para creadores y docentes. Modular y rápido.",
    stack: ["React", "Tools", "Interactive"],
    status: ProjectStatus.MVP,
    githubUrl: "https://github.com/DonGeeo87/Jueguetes-Digitales",
    demoUrl: "https://jueguetes-digitales.vercel.app/",
    imageUrl: "/Portafolio-Personal/images/projects/JueguetesDigitales-web-screenshot.png"
  },
  {
    title: "Web Jess",
    description: "Sitio comercial para venta de artesanía en vidrio. Catálogo y narrativa visual.",
    stack: ["Web", "Design", "E-commerce"],
    status: ProjectStatus.Live,
    githubUrl: "https://github.com/DonGeeo87/Web-Jess",
    demoUrl: "https://dongeeo87.github.io/Web-Jess/",
    imageUrl: "/Portafolio-Personal/images/projects/JessVitrofusion-web-screenshot.png"
  },
  {
    title: "Raulif - Parque La Campana",
    description: "Plataforma educativa y turística. Ideal para instituciones y parques.",
    stack: ["Web", "Turismo", "Info"],
    status: ProjectStatus.Live,
    githubUrl: "https://github.com/DonGeeo87/Raulif-Parque-La-Campana",
    demoUrl: "https://dongeeo87.github.io/Raulif-Parque-La-Campana/",
    imageUrl: "/Portafolio-Personal/images/projects/Raulif-web-screenshot.png"
  },
  {
    title: "FlashMaster Chile",
    description: "Microapp educativa para docentes de inglés. Ejercicios dinámicos y gamificados.",
    stack: ["EdTech", "Gamification"],
    status: ProjectStatus.MVP,
    githubUrl: "https://github.com/DonGeeo87/FlashMaster-Chile",
    demoUrl: "https://dongeeo87.github.io/FlashMaster-Chile/",
    imageUrl: "/Portafolio-Personal/images/projects/FlashMasterChile-web-screenshot.png"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Branding + Creatividad",
    description: "Marcas, storytelling, identidad visual y productos digitales con alma.",
    icon: <Palette size={32} />,
    color: "text-magenta"
  },
  {
    title: "Productos Láser (AK)",
    description: "Souvenirs, colecciones, merchandising y artesanía tecnológica.",
    icon: <Hammer size={32} />,
    color: "text-amber"
  },
  {
    title: "Desarrollo de Apps",
    description: "MVPs, prototipos funcionales y dashboards en Android & Web.",
    icon: <Smartphone size={32} />,
    color: "text-calipso"
  },
  {
    title: "Mini Experiencias Web",
    description: "Sitios interactivos, landing pages y herramientas web rápidas y efectivas.",
    icon: <Globe size={32} />,
    color: "text-terminal"
  }
];