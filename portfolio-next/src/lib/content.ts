export type Lang = "es" | "en";

export const PROFILE = {
  name: "Samuel Pérez Serna",
  initials: "SP",
  photo: "/img/samuel.jpg",
  email: "unpsoftware@gmail.com",
  github: "https://github.com/SamuelPerezCO",
  githubUser: "SamuelPerezCO",
  linkedin: "https://www.linkedin.com/in/samuel-perez-serna",
  linkedinUser: "samuel-perez-serna",
  phoneNumber: "+57 3167687288",
  whatsappLink: "https://wa.me/573167687288",
};

export const SKILL_GROUPS = [
  {
    icon: "code" as const,
    key: "languages",
    items: ["Python", "Java", "JavaScript", "HTML5", "CSS3", "SQL"],
  },
  {
    icon: "layers" as const,
    key: "frameworks",
    items: ["Django", "Django REST Framework", "Bootstrap", "Chart.js"],
  },
  {
    icon: "database" as const,
    key: "databases",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    icon: "tool" as const,
    key: "tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export type Project = {
  slug: string;
  featured: boolean;
  year: string;
  tags: string[];
  repo: string;
  demo: string;
  es: { title: string; summary: string; highlights: string[] };
  en: { title: string; summary: string; highlights: string[] };
};

export const PROJECTS: Project[] = [
  {
    slug: "dashboard-gps",
    featured: true,
    year: "2025",
    tags: ["Python", "Django", "REST API", "Chart.js"],
    repo: "https://github.com/SamuelPerezCO/Dashboard-GPS",
    demo: "",
    es: {
      title: "Dashboard GPS",
      summary:
        "Panel de control que se conecta a una API de rastreo GPS y transforma los datos crudos en gráficas legibles en tiempo real.",
      highlights: [
        "Consumo de API externa y normalización de la respuesta",
        "Visualización de series de datos con gráficas interactivas",
        "Construido íntegramente con Django",
      ],
    },
    en: {
      title: "GPS Dashboard",
      summary:
        "Control panel that connects to a GPS tracking API and turns raw data into readable, real-time charts.",
      highlights: [
        "External API consumption and response normalization",
        "Data-series visualization with interactive charts",
        "Built end to end with Django",
      ],
    },
  },
  {
    slug: "siic-repositorio",
    featured: true,
    year: "2024",
    tags: ["HTML", "CSS", "JavaScript", "Equipo"],
    repo: "https://github.com/SamuelPerezCO/SIIC-Repositorio",
    demo: "",
    es: {
      title: "SIIC — Sistema de Información",
      summary:
        "Proyecto PPI del Politécnico Colombiano Jaime Isaza Cadavid: un sistema de información desarrollado en equipo de principio a fin.",
      highlights: [
        "Trabajo colaborativo con control de versiones en Git",
        "Levantamiento de requisitos y documentación del sistema",
        "Interfaz web responsiva",
      ],
    },
    en: {
      title: "SIIC — Information System",
      summary:
        "PPI project at Politécnico Colombiano Jaime Isaza Cadavid: an information system built as a team from start to finish.",
      highlights: [
        "Collaborative work with Git version control",
        "Requirements gathering and system documentation",
        "Responsive web interface",
      ],
    },
  },
  {
    slug: "siic-bd",
    featured: false,
    year: "2024",
    tags: ["Java", "SQL", "Modelado de datos"],
    repo: "https://github.com/SamuelPerezCO/Siic-BD",
    demo: "",
    es: {
      title: "SIIC — Base de datos",
      summary:
        "Capa de datos del proyecto SIIC, desarrollada en Java junto a compañeros del Politécnico Colombiano Jaime Isaza Cadavid.",
      highlights: [
        "Diseño del modelo entidad-relación",
        "Consultas SQL y persistencia desde Java",
      ],
    },
    en: {
      title: "SIIC — Database",
      summary:
        "Data layer of the SIIC project, written in Java together with classmates at Politécnico Colombiano Jaime Isaza Cadavid.",
      highlights: [
        "Entity-relationship model design",
        "SQL queries and persistence from Java",
      ],
    },
  },
  {
    slug: "crud-consultorio-medico",
    featured: false,
    year: "2024",
    tags: ["Python", "CRUD", "SQL"],
    repo: "https://github.com/SamuelPerezCO/CRUD_ConsultorioMedico",
    demo: "",
    es: {
      title: "CRUD Consultorio Médico",
      summary:
        "Gestión de pacientes y citas para un consultorio médico: crear, leer, actualizar y eliminar registros sobre una base de datos.",
      highlights: ["Operaciones CRUD completas", "Validación de datos de entrada"],
    },
    en: {
      title: "Medical Office CRUD",
      summary:
        "Patient and appointment management for a medical office: create, read, update and delete records against a database.",
      highlights: ["Full CRUD operations", "Input data validation"],
    },
  },
  {
    slug: "contador",
    featured: false,
    year: "2023",
    tags: ["Python", "Lógica"],
    repo: "https://github.com/SamuelPerezCO/Contador",
    demo: "",
    es: {
      title: "Contador",
      summary:
        "Aplicación pequeña de contador en Python. De esos ejercicios cortos que sirven para afinar la lógica y practicar lo básico.",
      highlights: ["Python puro, sin dependencias"],
    },
    en: {
      title: "Counter",
      summary:
        "Small counter application in Python. One of those short exercises that sharpen your logic and keep the fundamentals fresh.",
      highlights: ["Pure Python, no dependencies"],
    },
  },
];

export const CONTENT = {
  es: {
    metaTitle: "Samuel Pérez Serna — Desarrollador de software",
    metaDescription:
      "Portafolio de Samuel Pérez Serna, técnico profesional en programación de sistemas de información. Django, Python y Java. Envigado, Colombia.",
    nav: {
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      menu: "Menú",
    },
    hero: {
      eyebrow: "-- whoami",
      greeting: "Hola, soy",
      name: "Samuel Pérez",
      roles: ["Desarrollador de software", "Django & Python", "Envigado, Colombia"],
      tagline:
        "Técnico profesional en programación de sistemas de información. Construyo aplicaciones web y paneles de datos con Django, y disfruto los retos que me obligan a aprender algo nuevo.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Escríbeme",
      facts: [
        { label: "Ubicación", value: "Envigado, Colombia" },
        { label: "Enfoque", value: "Backend & datos" },
        { label: "Stack", value: "Django · Python · SQL" },
        { label: "Idiomas", value: "Español · Inglés" },
      ],
    },
    skills: {
      eyebrow: "-- stack",
      title: "Herramientas con las que trabajo",
      intro: "El stack que uso a diario y las tecnologías con las que he construido mis proyectos.",
      groups: {
        languages: "Lenguajes",
        frameworks: "Frameworks & librerías",
        databases: "Bases de datos",
        tools: "Herramientas",
      },
    },
    projects: {
      eyebrow: "-- select * from proyectos",
      title: "Lo que he construido",
      intro: "Una selección de proyectos personales y académicos. Todo el código está público en GitHub.",
      featuredBadge: "Destacado",
      viewCode: "Ver código",
      viewDemo: "Ver demo",
      allRepos: "Ver todos los repositorios",
    },
    contact: {
      eyebrow: "-- contacto",
      title: "¿Hablamos?",
      intro:
        "Estoy abierto a oportunidades, proyectos y conversaciones sobre código. Escríbeme por WhatsApp o por correo, lo que te quede mejor.",
      emailCta: "Enviar correo",
      whatsappCta: "Escribir por WhatsApp",
      whatsappMessage: "¡Hola Samuel! Vi tu portafolio y me gustaría hablar contigo.",
      linksTitle: "También estoy en",
    },
    footer: {
      built: "Hecho con Next.js",
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },
  en: {
    metaTitle: "Samuel Pérez Serna — Software Developer",
    metaDescription:
      "Portfolio of Samuel Pérez Serna, professional technician in information systems programming. Django, Python and Java. Envigado, Colombia.",
    nav: {
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      eyebrow: "-- whoami",
      greeting: "Hi, I'm",
      name: "Samuel Pérez",
      roles: ["Software Developer", "Django & Python", "Envigado, Colombia"],
      tagline:
        "Professional technician in information systems programming. I build web applications and data dashboards with Django, and I enjoy the kind of challenge that forces me to learn something new.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
      facts: [
        { label: "Location", value: "Envigado, Colombia" },
        { label: "Focus", value: "Backend & data" },
        { label: "Stack", value: "Django · Python · SQL" },
        { label: "Languages", value: "Spanish · English" },
      ],
    },
    skills: {
      eyebrow: "-- stack",
      title: "Tools I work with",
      intro: "The stack I use day to day and the technologies behind my projects.",
      groups: {
        languages: "Languages",
        frameworks: "Frameworks & libraries",
        databases: "Databases",
        tools: "Tools",
      },
    },
    projects: {
      eyebrow: "-- select * from projects",
      title: "What I've built",
      intro: "A selection of personal and academic projects. All the code is public on GitHub.",
      featuredBadge: "Featured",
      viewCode: "View code",
      viewDemo: "Live demo",
      allRepos: "See all repositories",
    },
    contact: {
      eyebrow: "-- contact",
      title: "Let's talk",
      intro:
        "I'm open to opportunities, projects and conversations about code. Reach me on WhatsApp or by email, whichever suits you best.",
      emailCta: "Send an email",
      whatsappCta: "Message on WhatsApp",
      whatsappMessage: "Hi Samuel! I saw your portfolio and I'd like to talk with you.",
      linksTitle: "Also find me on",
    },
    footer: {
      built: "Built with Next.js",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
} as const;

export function phoneHref(): string {
  const digits = PROFILE.phoneNumber.replace(/\D/g, "");
  return digits ? `+${digits}` : "";
}

export function whatsappUrl(lang: Lang): string {
  const message = CONTENT[lang].contact.whatsappMessage;
  const separator = PROFILE.whatsappLink.includes("?") ? "&" : "?";
  return `${PROFILE.whatsappLink}${separator}text=${encodeURIComponent(message)}`;
}
