export type Lang = "es" | "en";

export const BRAND = {
  name: "UNP Software",
  url: "https://unpsoftware.com",
  email: "unpsoftware@gmail.com",
  phoneDisplay: "+57 316 768 7288",
  whatsappLink: "https://wa.me/573167687288",
  github: "https://github.com/SamuelPerezCO",
  githubUser: "SamuelPerezCO",
};

export const FOUNDER = {
  name: "Samuel Pérez Serna",
  photo: "/img/samuel-founder.jpg",
  linkedin: "https://www.linkedin.com/in/samuel-perez-serna",
  linkedinUser: "samuel-perez-serna",
};

export type CaseStatus = "live" | "published" | "development" | "construction";
export type MoreWorkKind = "product" | "team" | "tool" | "experiment";

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
  /** Caption and alt for the second screenshot, when the case has one. */
  caption2?: string;
  image2Alt?: string;
};

export type CaseStudy = {
  slug: string;
  year: string;
  status: CaseStatus;
  stack: string[];
  repo?: string;
  demo?: string;
  /** The code exists but is not public; the case itself explains what was built. */
  codePrivate?: boolean;
  /** The product belongs to the client (or is not public): no demo, and the page says so. */
  productPrivate?: boolean;
  image?: { src: string; width: number; height: number };
  image2?: { src: string; width: number; height: number };
  es: CaseCopy;
  en: CaseCopy;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "dashboard-gps",
    year: "2026",
    status: "live",
    productPrivate: true,
    stack: ["Python", "Django", "PostgreSQL", "Chart.js", "Leaflet", "Redis", "Vercel"],
    repo: "https://github.com/SamuelPerezCO/Dashboard-GPS",
    image: { src: "/img/work/dashboard-gps.webp", width: 1600, height: 1000 },
    image2: { src: "/img/work/dashboard-gps-mapa.webp", width: 1600, height: 1000 },
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
      caption2: "Captura real · mapa de la flota y último reporte de cada unidad",
      image2Alt:
        "Panel con el mapa de la flota en la costa Caribe colombiana y la tabla de unidades con placa, estado, velocidad y último reporte",
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
      caption2: "Real screenshot · fleet map and each unit's last report",
      image2Alt:
        "Dashboard with the fleet map on Colombia's Caribbean coast and the units table with plate, state, speed and last report",
      imageAlt:
        "Fleet occupancy dashboard with company, vehicle type and date range filters, and charts for trips, taps and occupancy per vehicle",
    },
  },
  {
    slug: "arribaya",
    year: "2026",
    status: "published",
    codePrivate: true,
    productPrivate: true,
    stack: ["Python", "Django", "PostgreSQL", "MercadoPago", "Vercel"],
    image: { src: "/img/work/arribaya.webp", width: 1600, height: 1000 },
    image2: { src: "/img/work/arribaya-puestos.webp", width: 1600, height: 1000 },
    es: {
      kicker: "ArribaYA",
      title: "Un ranking de avisos donde el puesto #1 se compra",
      client: "Producto propio, pensado para el mercado colombiano",
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
        "Un producto que funciona de punta a punta —publicar, pagar, subir de puesto y medir— en un solo despliegue de Django.",
      caption: "Captura real · portada con avisos de demostración",
      caption2: "Captura real · todos los puestos, con avisos de demostración",
      image2Alt:
        "Lista de todos los puestos de ArribaYA: cada aviso con su posición, categoría, precio pagado y el botón para superarlo",
      imageAlt:
        "Portada de ArribaYA con el formulario para comprar el puesto número uno, el top del día y el feed de última actividad",
    },
    en: {
      kicker: "ArribaYA",
      title: "A listings ranking where the #1 spot is for sale",
      client: "Own product, built for the Colombian market",
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
        "A product that works end to end — publish, pay, climb the ranking and measure — in a single Django deployment.",
      caption: "Real screenshot · home page with demo listings",
      caption2: "Real screenshot · every spot, with demo listings",
      image2Alt:
        "ArribaYA's full ranking: every listing with its position, category, price paid and the button to outbid it",
      imageAlt:
        "ArribaYA home page with the form to buy the number-one spot, today's top listing and the latest-activity feed",
    },
  },
  {
    slug: "odontologia-paula-munoz",
    year: "2026",
    status: "construction",
    productPrivate: true,
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
    status: "development",
    codePrivate: true,
    stack: ["Python", "Stake Engine", "Svelte", "PixiJS", "TypeScript"],
    image: { src: "/img/work/el-colombiano-base.webp", width: 1600, height: 1000 },
    image2: { src: "/img/work/el-colombiano-bonus.webp", width: 1600, height: 1000 },
    es: {
      kicker: "El Colombiano · Stake Engine",
      title: "Una tragamonedas de temática colombiana",
      client: "Proyecto propio para la plataforma Stake Engine",
      sector: "Juegos",
      kind: "Proyecto propio",
      problem:
        "Un slot con cóndor, esmeralda, chiva, arepa y guaro que corra en Stake Engine. En un juego de azar la matemática tiene que cerrar antes de que exista una sola animación.",
      built: [
        "Modelo matemático en Python sobre el math-sdk de Stake: líneas de pago, tabla de símbolos, bonus de elección con guaro y simulaciones para verificar el retorno al jugador.",
        "Cliente del juego en Svelte y PixiJS sobre el web-sdk de Stake, jugable desde Storybook.",
        "Pipeline propio para procesar el arte de los símbolos, los fondos y el audio del juego.",
      ],
      result:
        "La matemática del juego base está verificada por simulación y el modo de líneas ya se juega. El bonus y la integración final siguen en curso.",
      caption: "Captura real · modo de líneas jugable en Storybook",
      imageAlt:
        "Tablero del juego base de El Colombiano: cinco rodillos con café, naranja, sombrero vueltiao, chiva, mochila, arepa, esmeralda, acordeón y cóndor sobre una finca cafetera, con balance, ganancia y botón de jugar",
      caption2: "Captura real · bonus «Encuentra el guaro», en desarrollo",
      image2Alt:
        "Pantalla del bonus: doce botellas de guaro para elegir en una tienda de pueblo, con tres premios restantes",
    },
    en: {
      kicker: "El Colombiano · Stake Engine",
      title: "A Colombian-themed slot game",
      client: "Own project for the Stake Engine platform",
      sector: "Games",
      kind: "Own project",
      problem:
        "A slot with a condor, an emerald, a chiva bus, an arepa and guaro that runs on Stake Engine. In a game of chance the math has to add up before a single animation exists.",
      built: [
        "A math model in Python on Stake's math-sdk: paylines, symbol table, a guaro pick bonus and simulations to verify the return to player.",
        "The game client in Svelte and PixiJS on Stake's web-sdk, playable from Storybook.",
        "A custom pipeline to process the symbol art, backgrounds and audio.",
      ],
      result:
        "The base-game math is verified by simulation and the lines mode is already playable. The bonus and final integration are still in progress.",
      caption: "Real screenshot · lines mode, playable in Storybook",
      imageAlt:
        "El Colombiano base-game board: five reels with coffee, orange, vueltiao hat, chiva bus, mochila, arepa, emerald, accordion and condor over a coffee farm, with balance, win and the play button",
      caption2: "Real screenshot · the “Find the guaro” bonus, in development",
      image2Alt:
        "Bonus screen: twelve guaro bottles to pick from in a village shop, three prizes remaining",
    },
  },
];

type MoreCopy = { title: string; description: string };

export type MoreWorkItem = {
  slug: string;
  kind: MoreWorkKind;
  year: string;
  stack: string[];
  repo?: string;
  live?: string;
  /** Set when the repo goes private: the row keeps its description and shows "código privado" instead of a link. */
  codePrivate?: boolean;
  productPrivate?: boolean;
  es: MoreCopy;
  en: MoreCopy;
};

export const MORE_WORK: MoreWorkItem[] = [
  {
    slug: "mvp-crm",
    kind: "product",
    productPrivate: true,
    year: "2026",
    stack: ["Django", "htmx", "PostgreSQL", "WhatsApp Cloud API"],
    repo: "https://github.com/SamuelPerezCO/MVP-CRM",
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
    kind: "team",
    productPrivate: true,
    year: "2026",
    stack: ["Node.js", "TypeScript", "Fastify", "Prisma", "Gemini"],
    repo: "https://github.com/diegaos1189/Agente-Whatsapp",
    es: {
      title: "Agente de ventas por WhatsApp para negocios de comida",
      description:
        "Menú, toma de pedidos, pagos y escalamiento a una persona, con clasificación de intención y extracción de datos por IA, con guardas contra alucinaciones.",
    },
    en: {
      title: "WhatsApp sales agent for food businesses",
      description:
        "Menu, order taking, payments and hand-off to a human, with AI intent classification and entity extraction behind anti-hallucination guardrails.",
    },
  },
  {
    slug: "reporte",
    kind: "product",
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
    kind: "tool",
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
    kind: "product",
    year: "2026",
    stack: ["Python", "Telegram Bot API", "Vercel"],
    repo: "https://github.com/SamuelPerezCO/Bot_Telegram_Tracker",
    es: {
      title: "Bot de rachas para metas diarias",
      description:
        "Escribes tus metas y el plazo que te das; el bot te recuerda cada una a su hora y lleva la racha. Si fallas una, solo esa se reinicia.",
    },
    en: {
      title: "Streak bot for daily goals",
      description:
        "You write your goals and the period you give yourself; the bot reminds you of each one at its set time and tracks the streak. Miss one and only that one restarts.",
    },
  },
  {
    slug: "calendar-telegram-api",
    kind: "tool",
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
        "Create, read, update and delete calendar events from the chat. In development, on and off.",
    },
  },
  {
    slug: "face-liveness-check",
    kind: "experiment",
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
    kind: "tool",
    year: "2026",
    stack: ["Python", "Django"],
    repo: "https://github.com/SamuelPerezCO/Follow-Up",
    es: {
      title: "Tablero tipo Jira, sin usuarios",
      description:
        "Cuatro columnas, proyectos y tareas, para seguir el avance de nuestros propios desarrollos sin montar nada más.",
    },
    en: {
      title: "A Jira-style board, no accounts",
      description:
        "Four columns, projects and issues, to track the progress of our own work without setting anything else up.",
    },
  },
  {
    slug: "bot-agendar-clase",
    kind: "tool",
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
];

export const STACK = [
  { key: "backend", items: ["Python", "Django", "Django REST Framework", "Node.js", "TypeScript", "Fastify"] },
  { key: "data", items: ["PostgreSQL", "SQLite", "Prisma", "Redis", "APIs REST", "Chart.js"] },
  { key: "frontend", items: ["HTML", "CSS", "JavaScript", "htmx", "Svelte", "Next.js"] },
  { key: "tools", items: ["Git", "Vercel", "Supabase", "Neon", "Postman", "Figma"] },
] as const;

export type ServiceKey = "web" | "data" | "agents" | "crm";

type ServiceCopy = { title: string; description: string; proofLabel: string };

export type Service = {
  key: ServiceKey;
  /** Anchor of the project on this page that proves the service (a case-study or repo slug). */
  proof: string;
  /** Only technologies present in the referenced project. */
  stack: string[];
  es: ServiceCopy;
  en: ServiceCopy;
};

export const SERVICES: Service[] = [
  {
    key: "web",
    proof: "#odontologia-paula-munoz",
    stack: ["Django", "JavaScript", "SVG"],
    es: {
      title: "Sitios y aplicaciones web",
      description:
        "Sitios que el negocio administra solo y aplicaciones a la medida, con Django o Next.js, desplegadas donde convenga.",
      proofLabel: "Clínica Dra. Paula Muñoz",
    },
    en: {
      title: "Websites and web apps",
      description:
        "Sites the business runs on its own and custom applications, built with Django or Next.js and deployed wherever makes sense.",
      proofLabel: "Dra. Paula Muñoz clinic",
    },
  },
  {
    key: "data",
    proof: "#dashboard-gps",
    stack: ["Django", "PostgreSQL", "Redis", "Chart.js"],
    es: {
      title: "Paneles de datos e integraciones",
      description:
        "Tomamos lo que ya entregan tus proveedores —GPS, pagos, calendarios, hojas de cálculo— y lo convertimos en un panel que responde preguntas del negocio.",
      proofLabel: "Panel de flota · Rastrelital",
    },
    en: {
      title: "Data dashboards and integrations",
      description:
        "We take what your providers already deliver — GPS, payments, calendars, spreadsheets — and turn it into a dashboard that answers business questions.",
      proofLabel: "Fleet dashboard · Rastrelital",
    },
  },
  {
    key: "agents",
    proof: "#agente-whatsapp",
    stack: ["Node.js", "TypeScript", "Fastify", "Gemini"],
    es: {
      title: "Agentes de WhatsApp y bots de Telegram",
      description:
        "Atención y ventas por chat: menús, pedidos, recordatorios y paso a una persona cuando hace falta, con reglas claras para la IA.",
      proofLabel: "Agente de ventas por WhatsApp",
    },
    en: {
      title: "WhatsApp agents and Telegram bots",
      description:
        "Support and sales over chat: menus, orders, reminders and hand-off to a person when needed, with clear rules for the AI.",
      proofLabel: "WhatsApp sales agent",
    },
  },
  {
    key: "crm",
    proof: "#mvp-crm",
    stack: ["Django", "htmx", "WhatsApp Cloud API"],
    es: {
      title: "CRMs y herramientas internas",
      description:
        "Bandejas unificadas, embudos, catálogos y tableros de seguimiento: la herramienta interna que la empresa necesita y no encuentra hecha.",
      proofLabel: "CRM omnicanal",
    },
    en: {
      title: "CRMs and internal tools",
      description:
        "Unified inboxes, funnels, catalogues and tracking boards: the internal tool the company needs and can't find off the shelf.",
      proofLabel: "Omnichannel CRM",
    },
  },
];

type TestimonialCopy = { quote: string; name: string; role: string };

/** An empty quote renders the reserved slot; the founder fills quote/name/role with a real, authorised testimonial. */
export type Testimonial = {
  id: string;
  es: TestimonialCopy;
  en: TestimonialCopy;
};

export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", es: { quote: "", name: "", role: "" }, en: { quote: "", name: "", role: "" } },
  { id: "t2", es: { quote: "", name: "", role: "" }, en: { quote: "", name: "", role: "" } },
  { id: "t3", es: { quote: "", name: "", role: "" }, en: { quote: "", name: "", role: "" } },
];

/* Copy. Rules: no count is ever typed into a string (counts are computed at
   render); uppercase is applied by CSS, so keys and section names are written
   in sentence case here. "We" for the agency, "I" only in the founder's note. */
export const CONTENT = {
  es: {
    meta: {
      title: "UNP Software — Desarrollo de software a la medida en Envigado",
      description:
        "Sitios, paneles de datos, CRMs y agentes de WhatsApp que ya trabajan en negocios reales. UNP Software, Envigado, Colombia.",
    },
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
      menu: "Menú",
      close: "Cerrar el menú",
      language: "Cambiar a inglés",
      theme: "Cambiar tema",
      themeLight: "Cambiar a tema claro",
      themeDark: "Cambiar a tema oscuro",
      skip: "Saltar al contenido",
      home: "Ir al inicio",
      whatsapp: "WhatsApp",
      whatsappLong: "Escribir por WhatsApp",
    },
    hero: {
      headline: "Software a la medida para negocios que ya operan.",
      lead: "Paneles de datos, CRMs, agentes de WhatsApp e integraciones para pymes de Colombia y LatAm. Lo construimos y lo dejamos funcionando.",
      ctaPrimary: "Escribir por WhatsApp",
      ctaSecondary: "Ver los proyectos",
      facts: {
        seat: { key: "Sede", value: "Envigado, Antioquia · UTC−5" },
        // \u00a0 keeps the separator dot off the head of a wrapped line.
        audience: { key: "Para", value: "Pymes y equipos de operaciones\u00a0· Colombia y LatAm" },
        replies: { key: "Responde", value: "Samuel Pérez Serna, fundador" },
      },
      shotLink: "Ver el caso",
    },
    services: {
      title: "Servicios",
      statement: "Lo que construimos, y el trabajo que lo prueba.",
      refKey: "Referencia",
      refKeys: "Referencias",
      cases: { one: "caso", other: "casos" },
      repos: { one: "repositorio", other: "repositorios" },
    },
    work: {
      title: "Proyectos",
      statement: "Trabajos con capturas reales, no maquetas.",
      note: "Los productos son de los clientes y no están disponibles para probar; lo que se ve son capturas reales.",
      cases: { one: "caso", other: "casos" },
      countSuffix: "capturas reales",
      labels: {
        client: "Cliente",
        sector: "Sector",
        kind: "Tipo",
        status: "Estado",
        stack: "Stack",
        year: "Año",
        built: "Lo que construimos",
        result: "En qué quedó",
        code: "Ver el código",
        demo: "Ver en vivo",
        privateCode: "Código privado",
        privateProduct: "Producto privado · no disponible para probar",
      },
      statusValues: {
        live: "En uso",
        published: "Publicado",
        development: "En desarrollo",
        construction: "En construcción",
      },
    },
    more: {
      title: "Más trabajo",
      statement: "Productos propios, trabajo en equipo y herramientas que usamos.",
      repos: { one: "repositorio", other: "repositorios" },
      source: "GitHub",
      kinds: {
        product: "Producto propio",
        team: "Trabajo en equipo",
        tool: "Herramienta",
        experiment: "Prueba técnica",
      },
      live: "Probarlo",
      code: "Código",
      privateCode: "Código privado",
      privateProduct: "Producto privado · no disponible para probar",
    },
    testimonials: {
      title: "Testimonios",
      statement: "Lo que dirán los clientes.",
      intro:
        "Estamos recogiendo las palabras de quienes ya usan herramientas nuestras. Mientras llegan, los resultados están en cada proyecto de arriba.",
      pending: "Pendiente",
      received: "Recibidos",
      slot: "Reservado",
      who: "Quién",
      company: "Empresa",
      said: "Dijo",
      counter: "de",
      slotAria: "Testimonio reservado {i} de {n}",
    },
    about: {
      title: "Nosotros",
      statement: "Hoy UNP es una persona; el plan es un equipo.",
      founderLabel: "Fundador",
      seatLabel: "Sede",
      seat: "Envigado, Antioquia",
      photoAlt: "Samuel Pérez Serna, fundador de UNP Software",
      p1: "UNP Software es una empresa de desarrollo de software en Envigado, Antioquia, fundada por Samuel Pérez Serna, técnico profesional en programación del Politécnico Colombiano Jaime Isaza Cadavid. Nos gusta el trabajo donde el dato viene sucio y el problema es del negocio, no del framework: entender cómo opera una flota, un consultorio o un comercio, y devolverles una herramienta que usen todos los días.",
      noteLabel: "Nota del fundador",
      founderNote:
        "Hoy UNP es una persona: yo. Respondo el WhatsApp, escribo el código y hago la entrega. El plan es un equipo, y se está armando con los proyectos que van llegando.",
      nowLabel: "Ahora mismo",
      now: "Un CRM omnicanal y un agente de ventas por WhatsApp.",
      stack: {
        backend: "Backend",
        data: "Datos",
        frontend: "Frontend",
        // Soft hyphen: the 5.5rem mobile key breaks it HERRA-/MIENTAS; one word elsewhere.
        tools: "Herra\u00admientas",
      },
    },
    contact: {
      title: "Contacto",
      statement: "¿Tu negocio necesita software?",
      lead: "Cuéntanos qué te está costando trabajo y te decimos cómo lo resolveríamos. Respondemos por WhatsApp o por correo, en español o en inglés.",
      whatsapp: "Escribir por WhatsApp",
      email: "Enviar un correo",
      note: "Solo para proyectos nuevos y colaboraciones.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Correo",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      previewLabel: "Mensaje que se enviará",
      previewHelp: "Se abre en WhatsApp; puedes editarlo antes de enviar.",
      whatsappMessage: "¡Hola! Vi el sitio de UNP Software y me gustaría hablar sobre un proyecto.",
      hook: {
        title: "Trabaja con nosotros",
        text: "¿Desarrollas y quieres sumarte a proyectos reales? Escríbenos con un enlace a tu trabajo.",
        cta: "Enviar un enlace a tu trabajo",
        subject: "Trabajar con UNP Software",
      },
    },
    footer: {
      founded: "Fundada por Samuel Pérez Serna",
      location: "Envigado, Antioquia, Colombia",
      backToTop: "Volver arriba",
    },
  },
  en: {
    meta: {
      title: "UNP Software — Custom software from Envigado, Colombia",
      description:
        "Websites, data dashboards, CRMs and WhatsApp agents already at work in real businesses. UNP Software, Envigado, Colombia.",
    },
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      menu: "Menu",
      close: "Close the menu",
      language: "Switch to Spanish",
      theme: "Toggle theme",
      themeLight: "Switch to light theme",
      themeDark: "Switch to dark theme",
      skip: "Skip to content",
      home: "Go to top",
      whatsapp: "WhatsApp",
      whatsappLong: "Message on WhatsApp",
    },
    hero: {
      headline: "Custom software for businesses that are already running.",
      lead: "Data dashboards, CRMs, WhatsApp agents and integrations for small and mid-size businesses in Colombia and LatAm. We build it and leave it running.",
      ctaPrimary: "Message on WhatsApp",
      ctaSecondary: "See the projects",
      facts: {
        seat: { key: "Based in", value: "Envigado, Antioquia · UTC−5" },
        // \u00a0 keeps the separator dot off the head of a wrapped line.
        audience: { key: "For", value: "SMBs and operations teams\u00a0· Colombia and LatAm" },
        replies: { key: "Answered by", value: "Samuel Pérez Serna, founder" },
      },
      shotLink: "See the case",
    },
    services: {
      title: "Services",
      statement: "What we build, and the work that proves it.",
      refKey: "Reference",
      refKeys: "References",
      cases: { one: "case", other: "cases" },
      repos: { one: "repository", other: "repositories" },
    },
    work: {
      title: "Projects",
      statement: "Work with real screenshots, not mockups.",
      note: "The products belong to the clients and are not available to try; what you see are real screenshots.",
      cases: { one: "case", other: "cases" },
      countSuffix: "real screenshots",
      labels: {
        client: "Client",
        sector: "Sector",
        kind: "Type",
        status: "Status",
        stack: "Stack",
        year: "Year",
        built: "What we built",
        result: "Where it stands",
        code: "View the code",
        demo: "See it live",
        privateCode: "Private code",
        privateProduct: "Private product · not available to try",
      },
      statusValues: {
        live: "In use",
        published: "Published",
        development: "In development",
        construction: "Under construction",
      },
    },
    more: {
      title: "More work",
      statement: "Own products, team work and tools we use.",
      repos: { one: "repository", other: "repositories" },
      source: "GitHub",
      kinds: {
        product: "Own product",
        team: "Team work",
        tool: "Tool",
        experiment: "Technical test",
      },
      live: "Try it",
      code: "Code",
      privateCode: "Private code",
      privateProduct: "Private product · not available to try",
    },
    testimonials: {
      title: "Testimonials",
      statement: "What clients will say.",
      intro:
        "We're gathering quotes from people who already use our tools. Until they arrive, the results are in every project above.",
      pending: "Pending",
      received: "Received",
      slot: "Reserved",
      who: "Who",
      company: "Company",
      said: "Said",
      counter: "of",
      slotAria: "Reserved testimonial {i} of {n}",
    },
    about: {
      title: "About",
      statement: "Today UNP is one person; the plan is a team.",
      founderLabel: "Founder",
      seatLabel: "Based in",
      seat: "Envigado, Antioquia",
      photoAlt: "Samuel Pérez Serna, founder of UNP Software",
      p1: "UNP Software is a software development company in Envigado, Antioquia, founded by Samuel Pérez Serna, who trained as a programmer at the Politécnico Colombiano Jaime Isaza Cadavid. We like the work where the data comes in dirty and the problem belongs to the business, not the framework: understanding how a fleet, a clinic or a shop operates, and handing back a tool they use every day.",
      noteLabel: "Founder's note",
      founderNote:
        "Today UNP is one person: me. I'm the one on WhatsApp, I write the code and I ship the work. The plan is a team, and it's taking shape with the projects that keep coming in.",
      nowLabel: "Right now",
      now: "An omnichannel CRM and a WhatsApp sales agent.",
      stack: {
        backend: "Backend",
        data: "Data",
        frontend: "Frontend",
        tools: "Tools",
      },
    },
    contact: {
      title: "Contact",
      statement: "Does your business need software?",
      lead: "Tell us what's costing you time and we'll tell you how we'd solve it. We reply on WhatsApp or by email, in Spanish or English.",
      whatsapp: "Message on WhatsApp",
      email: "Send an email",
      note: "New projects and collaborations only.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      previewLabel: "Message that will be sent",
      previewHelp: "Opens in WhatsApp; you can edit it before sending.",
      whatsappMessage: "Hi! I saw the UNP Software site and I'd like to talk about a project.",
      hook: {
        title: "Work with us",
        text: "Do you build software and want in on real projects? Email us with a link to your work.",
        cta: "Send a link to your work",
        subject: "Working with UNP Software",
      },
    },
    footer: {
      founded: "Founded by Samuel Pérez Serna",
      location: "Envigado, Antioquia, Colombia",
      backToTop: "Back to top",
    },
  },
} as const;

/** "1 caso" / "2 casos" from a {one, other} pair. */
export function plural(n: number, forms: { one: string; other: string }): string {
  return `${n} ${n === 1 ? forms.one : forms.other}`;
}

/** The status glyph is filled only while the product is actually running. */
export function statusIsOn(status: CaseStatus): boolean {
  return status === "live" || status === "published";
}

export function whatsappUrl(lang: Lang): string {
  const message = CONTENT[lang].contact.whatsappMessage;
  const separator = BRAND.whatsappLink.includes("?") ? "&" : "?";
  return `${BRAND.whatsappLink}${separator}text=${encodeURIComponent(message)}`;
}

export function workWithUsUrl(lang: Lang): string {
  const subject = CONTENT[lang].contact.hook.subject;
  return `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}`;
}
