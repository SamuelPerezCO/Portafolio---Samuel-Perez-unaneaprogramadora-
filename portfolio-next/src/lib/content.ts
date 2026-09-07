export type Lang = "es" | "en";

export const PROFILE = {
  name: "Samuel Pérez Serna",
  photo: "/img/samuel.jpg",
  email: "unpsoftware@gmail.com",
  github: "https://github.com/SamuelPerezCO",
  githubUser: "SamuelPerezCO",
  linkedin: "https://www.linkedin.com/in/samuel-perez-serna",
  linkedinUser: "samuel-perez-serna",
  phoneDisplay: "+57 316 768 7288",
  whatsappLink: "https://wa.me/573167687288",
};

type CaseCopy = {
  kicker: string;
  title: string;
  client: string;
  sector: string;
  kind: string;
  problem: string;
  built: string[];
  result: string;
  caption: string;
  imageAlt: string;
};

export type CaseStudy = {
  slug: string;
  year: string;
  stack: string[];
  repo?: string;
  demo?: string;
  image?: { src: string; width: number; height: number };
  es: CaseCopy;
  en: CaseCopy;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "dashboard-gps",
    year: "2026",
    stack: ["Python", "Django", "PostgreSQL", "Chart.js", "Leaflet", "Redis", "Vercel"],
    repo: "https://github.com/SamuelPerezCO/Dashboard-GPS",
    image: { src: "/img/work/dashboard-gps.webp", width: 1600, height: 1000 },
    es: {
      kicker: "Rastrelital · Expreso Brasilia",
      title: "Panel de ocupación para una flota de buses",
      client: "Rastrelital, para la flota de Expreso Brasilia",
      sector: "Transporte de pasajeros",
      kind: "Trabajo para cliente",
      problem:
        "La empresa quería saber qué tan llenos van sus buses, pero el proveedor de GPS solo entrega alertas crudas: entradas a geocercas y timbradas de pasajeros con iButton, sin noción de viaje, de empresa ni de capacidad.",
      built: [
        "Reconstrucción de cada viaje a partir de las rachas de timbradas: si un bus pasa 25 minutos sin que nadie timbre, lo que sigue es otro viaje.",
        "Atribución de cada viaje a la empresa cliente según la geocerca en la que entra el bus, y capacidad por vehículo tomada de la planilla de la flota.",
        "Ocupación por vehículo, empresa, ruta, turno y día, con gráficas, mapa de la flota en vivo y accesos separados por empresa.",
        "Caché en Redis que precalienta las consultas mientras el usuario escribe su contraseña, y un comando de auditoría que delata geocercas mal configuradas.",
      ],
      result:
        "Hoy el panel reporta la ocupación real de 28 unidades. Una auditoría en agosto de 2026 encontró y corrigió un conteo que inflaba la ocupación hasta un 291 %.",
      caption: "Captura real · ocupación del último mes, septiembre de 2026",
      imageAlt:
        "Panel de ocupación de la flota con filtros por empresa, tipo de vehículo y rango de fechas, y gráficas de servicios, timbradas y ocupación por vehículo",
    },
    en: {
      kicker: "Rastrelital · Expreso Brasilia",
      title: "Occupancy dashboard for a bus fleet",
      client: "Rastrelital, for the Expreso Brasilia fleet",
      sector: "Passenger transport",
      kind: "Client work",
      problem:
        "The company wanted to know how full its buses run, but the GPS provider only delivers raw alerts: geofence entries and passenger iButton taps, with no notion of a trip, a customer company, or seat capacity.",
      built: [
        "Trips rebuilt from bursts of passenger taps: if a bus goes 25 minutes without a tap, whatever comes next is a new trip.",
        "Each trip attributed to the customer company by the geofence the bus enters, with seat capacity per vehicle taken from the fleet roster.",
        "Occupancy by vehicle, company, route, shift and day, with charts, a live fleet map and separate logins per company.",
        "A Redis cache that pre-warms the queries while the user types their password, plus an audit command that flags misconfigured geofences.",
      ],
      result:
        "The dashboard now reports real occupancy for 28 units. An audit in August 2026 found and fixed a count that had inflated occupancy to 291%.",
      caption: "Real screenshot · last-month occupancy, September 2026",
      imageAlt:
        "Fleet occupancy dashboard with company, vehicle type and date range filters, and charts for trips, taps and occupancy per vehicle",
    },
  },
  {
    slug: "arribaya",
    year: "2026",
    stack: ["Python", "Django", "PostgreSQL", "MercadoPago", "Vercel"],
    image: { src: "/img/work/arribaya.webp", width: 1600, height: 1000 },
    es: {
      kicker: "ArribaYA",
      title: "Un ranking de avisos donde el puesto #1 se compra",
      client: "Producto propio, pensado para el mercado argentino",
      sector: "Publicidad",
      kind: "Producto propio",
      problem:
        "Una idea con una sola regla: el aviso que más paga aparece más arriba, y el puesto #1 es tuyo hasta que alguien ponga más. Había que convertirla en un producto completo, con pagos, en pocos días.",
      built: [
        "Ranking histórico y del día, con categorías que tienen su propio #1: SEO, Gastronomía, Agentes IA y las que se vayan creando.",
        "Flujo de publicar y pagar con MercadoPago, botón «superá este puesto» en cada tarjeta y feed de última actividad.",
        "Contador de visitantes en vivo, redirección con conteo de clics por aviso y un endpoint público de estadísticas.",
        "Interfaz oscura propia, sin frameworks de CSS, desplegada en Vercel.",
      ],
      result:
        "Un producto que funciona de punta a punta, publicar, pagar, subir de puesto y medir, en un solo despliegue de Django.",
      caption: "Captura real · portada con avisos de demostración",
      imageAlt:
        "Portada de ArribaYA con el formulario para comprar el puesto número uno, el top del día y el feed de última actividad",
    },
    en: {
      kicker: "ArribaYA",
      title: "A listings ranking where the #1 spot is for sale",
      client: "Own product, built for the Argentine market",
      sector: "Advertising",
      kind: "Own product",
      problem:
        "An idea with a single rule: the listing that pays the most sits highest, and the #1 spot is yours until someone pays more. It had to become a complete product, payments included, in a few days.",
      built: [
        "All-time and daily rankings, with categories that each have their own #1: SEO, food, AI agents and whatever gets created next.",
        "A publish-and-pay flow through MercadoPago, an “outbid this spot” button on every card and a latest-activity feed.",
        "A live visitor counter, click-counting redirects per listing and a public stats endpoint.",
        "A custom dark interface with no CSS framework, deployed on Vercel.",
      ],
      result:
        "A product that works end to end, publish, pay, climb and measure, in a single Django deployment.",
      caption: "Real screenshot · home page with demo listings",
      imageAlt:
        "ArribaYA home page with the form to buy the number-one spot, today's top listing and the latest-activity feed",
    },
  },
  {
    slug: "odontologia-paula-munoz",
    year: "2026",
    stack: ["Python", "Django", "SVG", "JavaScript", "WhatsApp"],
    repo: "https://github.com/SamuelPerezCO/OdontologiaPaulaMunoz",
    image: { src: "/img/work/odontologia.webp", width: 1600, height: 1000 },
    es: {
      kicker: "Clínica Odontológica Dra. Paula Muñoz",
      title: "Un sitio para una clínica dental que no da miedo",
      client: "Clínica Odontológica Dra. Paula Muñoz, Envigado",
      sector: "Salud",
      kind: "Trabajo para cliente",
      problem:
        "Una clínica en Envigado necesitaba un sitio que explicara sus tratamientos, le quitara el miedo a la gente que lleva años sin ir al odontólogo y que la doctora pudiera actualizar sin llamar a nadie.",
      built: [
        "Un odontograma interactivo de la arcada superior: cada diente se dibuja con sus medidas reales de corona en milímetros y se reparte sobre una elipse por longitud de arco.",
        "Cada zona de la arcada lleva a su tratamiento, y la relación es clínica, no decorativa.",
        "Tratamientos, horarios, testimonios y datos de contacto editables desde el administrador de Django, en español.",
        "Solicitud de cita con campo trampa contra spam, botón de WhatsApp y ficha schema.org para Google.",
      ],
      result:
        "Una página que el consultorio administra solo, con un elemento central que ninguna plantilla trae.",
      caption: "Captura real · portada con la arcada interactiva",
      imageAlt:
        "Portada del sitio de la clínica con el titular «Odontología que no da miedo» y el dibujo interactivo de la arcada superior",
    },
    en: {
      kicker: "Clínica Odontológica Dra. Paula Muñoz",
      title: "A website for a dental clinic that isn't scary",
      client: "Clínica Odontológica Dra. Paula Muñoz, Envigado",
      sector: "Healthcare",
      kind: "Client work",
      problem:
        "A clinic in Envigado needed a site that explained its treatments, calmed people who hadn't seen a dentist in years, and that the doctor could update without calling anyone.",
      built: [
        "An interactive odontogram of the upper arch: every tooth is drawn with its real crown measurements in millimetres and spaced along an ellipse by arc length.",
        "Each zone of the arch links to its treatment, and the mapping is clinical, not decorative.",
        "Treatments, hours, testimonials and contact details editable from the Django admin, in Spanish.",
        "An appointment request form with a spam honeypot, a WhatsApp button and schema.org data for Google.",
      ],
      result:
        "A page the practice runs on its own, with a centrepiece no template ships with.",
      caption: "Real screenshot · home page with the interactive arch",
      imageAlt:
        "Clinic website home page with the headline “Dentistry that isn't scary” and the interactive drawing of the upper arch",
    },
  },
  {
    slug: "el-colombiano",
    year: "2026",
    stack: ["Python", "Stake Engine", "Svelte", "PixiJS", "TypeScript"],
    image: { src: "/img/work/el-colombiano.webp", width: 1600, height: 893 },
    es: {
      kicker: "El Colombiano · Stake Engine",
      title: "Una tragamonedas de temática colombiana",
      client: "Proyecto propio para la plataforma Stake Engine",
      sector: "Juegos",
      kind: "En desarrollo",
      problem:
        "Un slot con cóndor, esmeralda, chiva, arepa y guaro que corra en Stake Engine. En un juego de azar la matemática tiene que cerrar antes de que exista una sola animación.",
      built: [
        "Modelo matemático en Python sobre el math-sdk de Stake: líneas de pago, tabla de símbolos, bonus de elección con guaro y simulaciones para verificar el retorno al jugador.",
        "Cliente del juego en Svelte y PixiJS sobre el web-sdk de Stake, jugable desde Storybook.",
        "Pipeline propio para procesar el arte de los símbolos, los fondos y el audio del juego.",
      ],
      result:
        "La matemática del juego base está verificada por simulación y el modo de líneas ya se juega. El bonus y la integración final siguen en curso.",
      caption: "Arte del juego · fondo del modo base y logo",
      imageAlt:
        "Ilustración del juego: una finca cafetera entre montañas con el logo «El Colombiano» sobre un tablero de madera",
    },
    en: {
      kicker: "El Colombiano · Stake Engine",
      title: "A Colombian-themed slot game",
      client: "Own project for the Stake Engine platform",
      sector: "Games",
      kind: "In development",
      problem:
        "A slot with a condor, an emerald, a chiva bus, an arepa and guaro that runs on Stake Engine. In a game of chance the math has to close before a single animation exists.",
      built: [
        "A math model in Python on Stake's math-sdk: paylines, symbol table, a guaro pick bonus and simulations to verify the return to player.",
        "The game client in Svelte and PixiJS on Stake's web-sdk, playable from Storybook.",
        "A custom pipeline to process the symbol art, backgrounds and audio.",
      ],
      result:
        "The base-game math is verified by simulation and the lines mode is already playable. The bonus and final integration are still in progress.",
      caption: "Game art · base-mode background and logo",
      imageAlt:
        "Game illustration: a coffee farm among mountains with the “El Colombiano” logo over a wooden board",
    },
  },
];

type MoreCopy = { title: string; description: string };

export type MoreWorkGroup = "work" | "lab";

export type MoreWorkItem = {
  slug: string;
  group: MoreWorkGroup;
  year: string;
  stack: string[];
  repo?: string;
  live?: string;
  es: MoreCopy;
  en: MoreCopy;
};

export const MORE_WORK_GROUPS: MoreWorkGroup[] = ["work", "lab"];

export const MORE_WORK: MoreWorkItem[] = [
  {
    slug: "mvp-crm",
    group: "work",
    year: "2026",
    stack: ["Django", "htmx", "PostgreSQL", "WhatsApp Cloud API"],
    repo: "https://github.com/SamuelPerezCO/MVP-CRM",
    live: "https://mvp-crm-lake.vercel.app",
    es: {
      title: "CRM omnicanal para comercios",
      description:
        "Bandeja unificada para WhatsApp, Instagram, Messenger y TikTok, con chat en vivo por htmx, la regla de 24 horas de WhatsApp, embudos de venta, catálogo y estadísticas.",
    },
    en: {
      title: "Omnichannel CRM for small businesses",
      description:
        "A unified inbox for WhatsApp, Instagram, Messenger and TikTok, with live chat over htmx, WhatsApp's 24-hour rule, sales funnels, a product catalogue and statistics.",
    },
  },
  {
    slug: "agente-whatsapp",
    group: "work",
    year: "2026",
    stack: ["Node.js", "TypeScript", "Fastify", "Prisma", "Gemini"],
    repo: "https://github.com/diegaos1189/Agente-Whatsapp",
    es: {
      title: "Agente de ventas por WhatsApp para negocios de comida",
      description:
        "Menú, toma de pedidos, pagos y escalamiento a una persona, con clasificación de intención y extracción de datos por IA, con guardas contra alucinaciones. Trabajo en equipo.",
    },
    en: {
      title: "WhatsApp sales agent for food businesses",
      description:
        "Menu, order taking, payments and hand-off to a human, with AI intent classification and entity extraction behind anti-hallucination guardrails. Team project.",
    },
  },
  {
    slug: "reporte",
    group: "work",
    year: "2026",
    stack: ["Python", "Django", "Supabase", "PostgreSQL", "Vercel"],
    repo: "https://github.com/SamuelPerezCO/Reporte",
    es: {
      title: "Reporte, plataforma para buscar personas desaparecidas",
      description:
        "Sitio para publicar reportes de personas desaparecidas, avisar a familiares que viven lejos y pedir u ofrecer ayuda durante una emergencia, filtrado por municipio. Sin cuentas: el contacto es por WhatsApp y cada reporte se gestiona con un enlace privado.",
    },
    en: {
      title: "Reporte, a platform to find missing people",
      description:
        "A site to post missing-person reports, reach relatives who live far away and request or offer help during an emergency, filtered by municipality. No accounts: contact goes through WhatsApp and each report is managed with a private link.",
    },
  },
  {
    slug: "claude-token-counter",
    group: "work",
    year: "2026",
    stack: ["Python", "Claude Code"],
    repo: "https://github.com/SamuelPerezCO/Claude_Token_Counter",
    es: {
      title: "Medidor de uso para Claude Code",
      description:
        "Servidor web local que consulta cuánto queda del límite de sesión y del semanal, e imprime un código QR para verlo desde el celular en la misma red.",
    },
    en: {
      title: "Usage meter for Claude Code",
      description:
        "A small local web server that reports how much of the session and weekly limits remain, and prints a QR code so you can check it from your phone on the same network.",
    },
  },
  {
    slug: "bot-telegram-tracker",
    group: "work",
    year: "2026",
    stack: ["Python", "Telegram Bot API", "Vercel"],
    repo: "https://github.com/SamuelPerezCO/Bot_Telegram_Tracker",
    live: "https://t.me/Tracker90Bot",
    es: {
      title: "Bot de rachas para metas diarias",
      description:
        "Escribes tus metas y el plazo que te das; el bot te recuerda cada una a su hora y lleva la racha. Si fallas una, solo esa se reinicia.",
    },
    en: {
      title: "Streak bot for daily goals",
      description:
        "You write your goals and the period you give yourself; the bot reminds you of each one at its hour and keeps the streak. Miss one and only that one restarts.",
    },
  },
  {
    slug: "calendar-telegram-api",
    group: "work",
    year: "2026",
    stack: ["Python", "Telegram Bot API", "Google Calendar API"],
    repo: "https://github.com/SamuelPerezCO/Calendar_Telegram_API",
    es: {
      title: "Bot de Telegram para Google Calendar",
      description:
        "Crea, consulta, edita y borra eventos del calendario desde el chat. En desarrollo, a ratos.",
    },
    en: {
      title: "Telegram bot for Google Calendar",
      description:
        "Create, read, update and delete calendar events from the chat. In development, part time.",
    },
  },
  {
    slug: "face-liveness-check",
    group: "work",
    year: "2026",
    stack: ["TypeScript", "Angular", "AWS Rekognition", "Amplify"],
    repo: "https://github.com/SamuelPerezCO/Face-Liveness-check",
    es: {
      title: "Prueba de detección de vida con Amazon Rekognition",
      description:
        "El detector de rostro en vivo de AWS integrado en una aplicación Angular, para ver cómo funciona antes de usarlo en un proyecto.",
    },
    en: {
      title: "Face liveness check with Amazon Rekognition",
      description:
        "AWS's live-face detector wired into an Angular app, to see how it works before using it in a project.",
    },
  },
  {
    slug: "follow-up",
    group: "work",
    year: "2026",
    stack: ["Python", "Django"],
    repo: "https://github.com/SamuelPerezCO/Follow-Up",
    es: {
      title: "Tablero tipo Jira, sin usuarios",
      description:
        "Cuatro columnas, proyectos y tareas, para seguir el avance de mis propios desarrollos sin montar nada más.",
    },
    en: {
      title: "A Jira-style board, no accounts",
      description:
        "Four columns, projects and issues, to track the progress of my own work without setting anything else up.",
    },
  },
  {
    slug: "bot-agendar-clase",
    group: "work",
    year: "2025",
    stack: ["Python", "Selenium", "PyAutoGUI"],
    repo: "https://github.com/SamuelPerezCO/botAgendarClase",
    es: {
      title: "Bot que agenda clases solo",
      description:
        "El computador se enciende a las 6:00 a. m., el bot inicia sesión en la plataforma, reserva la clase del día y la hora indicados y apaga el equipo.",
    },
    en: {
      title: "A bot that books classes on its own",
      description:
        "The computer powers on at 6:00 a.m., the bot logs into the platform, books the class for the set day and time, and shuts the machine down.",
    },
  },
  {
    slug: "exercise-counter",
    group: "lab",
    year: "2026",
    stack: ["Python", "MediaPipe", "OpenCV"],
    repo: "https://github.com/SamuelPerezCO/Exercise-Counter",
    es: {
      title: "Contador de repeticiones con la cámara",
      description:
        "Reconoce si haces sentadillas o flexiones por la inclinación del torso y cuenta cada repetición con una máquina de estados sobre el ángulo de la rodilla o del codo.",
    },
    en: {
      title: "Rep counter with the webcam",
      description:
        "Tells squats from push-ups by torso angle and counts each rep with a state machine over the knee or elbow angle.",
    },
  },
  {
    slug: "vibe-arcade",
    group: "lab",
    year: "2026",
    stack: ["Python", "pygame-ce"],
    repo: "https://github.com/SamuelPerezCO/Vibe-Arcade-",
    es: {
      title: "Vibe Arcade, tres juegos en un menú",
      description: "Snake, un plataformas estilo Mario y Buscaminas, escritos en Python con pygame.",
    },
    en: {
      title: "Vibe Arcade, three games behind one menu",
      description: "Snake, a Mario-style platformer and Minesweeper, written in Python with pygame.",
    },
  },
  {
    slug: "test-api",
    group: "lab",
    year: "2026",
    stack: ["JavaScript", "Chart.js", "PokeAPI"],
    repo: "https://github.com/SamuelPerezCO/Test-API",
    es: {
      title: "Visor de estadísticas Pokémon",
      description:
        "Busca un Pokémon en la PokeAPI y dibuja sus estadísticas en siete tipos de gráfica, con comparación entre dos.",
    },
    en: {
      title: "Pokémon stats viewer",
      description:
        "Looks up a Pokémon in the PokeAPI and draws its stats in seven chart types, with a two-Pokémon comparison.",
    },
  },
  {
    slug: "bot-telegram",
    group: "lab",
    year: "2026",
    stack: ["Python", "python-telegram-bot"],
    repo: "https://github.com/SamuelPerezCO/Bot_Telegram",
    es: {
      title: "Bot de Telegram con lista de tareas",
      description:
        "Comandos, conversaciones de varios pasos, teclados en línea y manejo de mensajes, hecho para aprender la librería.",
    },
    en: {
      title: "Telegram bot with a to-do list",
      description:
        "Commands, multi-step conversations, inline keyboards and message handling, built to learn the library.",
    },
  },
  {
    slug: "hand-tracking",
    group: "lab",
    year: "2026",
    stack: ["Python", "OpenCV", "MediaPipe"],
    repo: "https://github.com/SamuelPerezCO/Hand_Tracking",
    es: {
      title: "Detector de gestos con la mano",
      description: "Cuenta los dedos levantados en tiempo real con la cámara, del uno al cinco.",
    },
    en: {
      title: "Hand gesture detector",
      description: "Counts raised fingers in real time from the webcam, one to five.",
    },
  },
  {
    slug: "ics-file-creator",
    group: "lab",
    year: "2026",
    stack: ["Python", "icalendar"],
    repo: "https://github.com/SamuelPerezCO/ICS-file-creator",
    es: {
      title: "Generador de archivos .ics",
      description: "Ejercicio corto: crear un evento de calendario e importarlo en cualquier agenda.",
    },
    en: {
      title: "ICS file generator",
      description: "Short exercise: create a calendar event and import it into any calendar app.",
    },
  },
  {
    slug: "crud-consultorio-medico",
    group: "lab",
    year: "2025",
    stack: ["Python", "CustomTkinter", "SQLite"],
    repo: "https://github.com/SamuelPerezCO/CRUD_ConsultorioMedico",
    es: {
      title: "CRUD de escritorio para un consultorio médico",
      description: "Pacientes, historia clínica y citas, con registro de eventos por fecha.",
    },
    en: {
      title: "Desktop CRUD for a medical office",
      description: "Patients, medical history and appointments, with dated event logging.",
    },
  },
  {
    slug: "contador",
    group: "lab",
    year: "2024",
    stack: ["Python", "Tkinter", "MySQL"],
    repo: "https://github.com/SamuelPerezCO/Contador",
    es: {
      title: "Contador con Tkinter y MySQL",
      description:
        "El primer proyecto del repositorio: un contador de eventos por día, semana, mes y año guardado en base de datos.",
    },
    en: {
      title: "Counter with Tkinter and MySQL",
      description:
        "The first project in the repository: a counter of events by day, week, month and year stored in a database.",
    },
  },
  {
    slug: "siic-bd",
    group: "lab",
    year: "2023",
    stack: ["Java", "JSP", "Oracle"],
    repo: "https://github.com/SamuelPerezCO/Siic-BD",
    es: {
      title: "SIIC, base de datos del semillero",
      description:
        "Aplicación web para publicar grabaciones, diapositivas y tutoriales del semillero de inteligencia computacional del Politécnico, con Juan Pablo Restrepo y Wilmar Osorio.",
    },
    en: {
      title: "SIIC, the research group's database",
      description:
        "Web app to publish recordings, slides and tutorials for the Politécnico's computational intelligence research group, with Juan Pablo Restrepo and Wilmar Osorio.",
    },
  },
  {
    slug: "siic",
    group: "lab",
    year: "2023",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/SamuelPerezCO/SIIC-Repositorio",
    es: {
      title: "SIIC, sistema de información del Politécnico",
      description:
        "Proyecto PPI desarrollado en equipo de principio a fin: levantamiento de requisitos, documentación e interfaz web.",
    },
    en: {
      title: "SIIC, an information system for the Politécnico",
      description:
        "PPI project built as a team from start to finish: requirements gathering, documentation and a web interface.",
    },
  },
];

export const STACK = [
  { key: "backend", items: ["Python", "Django", "Django REST Framework", "Node.js", "TypeScript", "Fastify"] },
  { key: "data", items: ["PostgreSQL", "SQLite", "Prisma", "Redis", "APIs REST", "Chart.js"] },
  { key: "frontend", items: ["HTML", "CSS", "JavaScript", "htmx", "Svelte", "Next.js"] },
  { key: "tools", items: ["Git", "Vercel", "Supabase", "Neon", "Postman", "Figma"] },
] as const;

export const CONTENT = {
  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      menu: "Menú",
      language: "Cambiar a inglés",
      theme: "Cambiar tema",
    },
    hero: {
      eyebrow: "Envigado, Colombia · Desarrollador de software",
      headline: "Software que ya está trabajando en negocios reales.",
      sub: "Soy Samuel Pérez Serna. Con Python y Django construyo las herramientas que una empresa necesita y no tiene: paneles de datos, sitios, CRMs y agentes de WhatsApp.",
      ctaPrimary: "Ver los proyectos",
      ctaSecondary: "Escribir por WhatsApp",
      photoAlt: "Samuel Pérez Serna",
      photoCaption: "Samuel Pérez Serna · Envigado, Antioquia",
    },
    work: {
      title: "Proyectos",
      intro: "Cuatro trabajos recientes, con capturas reales y no maquetas. En cada uno, el problema del negocio, lo que construí y en qué quedó.",
      labels: {
        client: "Cliente",
        sector: "Sector",
        kind: "Tipo",
        stack: "Stack",
        built: "Lo que construí",
        result: "En qué quedó",
        code: "Ver el código",
        demo: "Ver en vivo",
      },
    },
    more: {
      title: "Más trabajo",
      intro: "Todo lo demás que está en GitHub: productos propios, trabajo en equipo, ejercicios y experimentos.",
      groups: {
        work: "Productos y herramientas",
        lab: "Ejercicios, experimentos y proyectos académicos",
      },
      live: "Probarlo",
      code: "Código",
    },
    about: {
      title: "Sobre mí",
      p1: "Soy técnico profesional en programación de sistemas de información del Politécnico Colombiano Jaime Isaza Cadavid, y vivo en Envigado. Empecé con Java y SQL en proyectos académicos; hoy trabajo sobre todo con Python y Django, y cada vez más con Node, TypeScript y modelos de lenguaje.",
      p2: "Me gusta el trabajo donde el dato viene sucio y el problema es del negocio, no del framework: entender cómo opera una flota, un consultorio o un comercio, y devolverles una herramienta que usen todos los días.",
      now: "Ahora mismo: un CRM omnicanal y un agente de ventas por WhatsApp.",
      stack: {
        backend: "Backend",
        data: "Datos",
        frontend: "Frontend",
        tools: "Herramientas",
      },
    },
    contact: {
      title: "¿Tu negocio necesita software?",
      intro: "Cuéntame qué te está costando trabajo y te digo cómo lo resolvería. Respondo por WhatsApp o por correo, en español o en inglés.",
      whatsapp: "Escribir por WhatsApp",
      email: "Enviar un correo",
      note: "Este número es solamente para proyectos nuevos.",
      emailLabel: "Correo",
      whatsappMessage: "¡Hola Samuel! Vi tu portafolio y me gustaría hablar contigo.",
    },
    footer: {
      location: "Envigado, Antioquia, Colombia",
      backToTop: "Volver arriba",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
      menu: "Menu",
      language: "Switch to Spanish",
      theme: "Toggle theme",
    },
    hero: {
      eyebrow: "Envigado, Colombia · Software developer",
      headline: "Software that is already at work in real businesses.",
      sub: "I'm Samuel Pérez Serna. With Python and Django I build the tools a business needs and doesn't have: data dashboards, websites, CRMs and WhatsApp agents.",
      ctaPrimary: "See the projects",
      ctaSecondary: "Message on WhatsApp",
      photoAlt: "Samuel Pérez Serna",
      photoCaption: "Samuel Pérez Serna · Envigado, Antioquia",
    },
    work: {
      title: "Projects",
      intro: "Four recent pieces of work, with real screenshots rather than mockups. For each one: the business problem, what I built and where it stands.",
      labels: {
        client: "Client",
        sector: "Sector",
        kind: "Type",
        stack: "Stack",
        built: "What I built",
        result: "Where it stands",
        code: "View the code",
        demo: "See it live",
      },
    },
    more: {
      title: "More work",
      intro: "Everything else on GitHub: own products, team work, exercises and experiments.",
      groups: {
        work: "Products and tools",
        lab: "Exercises, experiments and academic projects",
      },
      live: "Try it",
      code: "Code",
    },
    about: {
      title: "About me",
      p1: "I'm a professional technician in information systems programming from the Politécnico Colombiano Jaime Isaza Cadavid, based in Envigado. I started with Java and SQL on academic projects; today I work mostly with Python and Django, and increasingly with Node, TypeScript and language models.",
      p2: "I like the work where the data comes in dirty and the problem belongs to the business, not the framework: understanding how a fleet, a clinic or a shop operates, and handing back a tool they use every day.",
      now: "Right now: an omnichannel CRM and a WhatsApp sales agent.",
      stack: {
        backend: "Backend",
        data: "Data",
        frontend: "Frontend",
        tools: "Tools",
      },
    },
    contact: {
      title: "Does your business need software?",
      intro: "Tell me what's costing you time and I'll tell you how I'd solve it. I reply on WhatsApp or by email, in Spanish or English.",
      whatsapp: "Message on WhatsApp",
      email: "Send an email",
      note: "This number is for new projects only.",
      emailLabel: "Email",
      whatsappMessage: "Hi Samuel! I saw your portfolio and I'd like to talk with you.",
    },
    footer: {
      location: "Envigado, Antioquia, Colombia",
      backToTop: "Back to top",
    },
  },
} as const;

export function whatsappUrl(lang: Lang): string {
  const message = CONTENT[lang].contact.whatsappMessage;
  const separator = PROFILE.whatsappLink.includes("?") ? "&" : "?";
  return `${PROFILE.whatsappLink}${separator}text=${encodeURIComponent(message)}`;
}
