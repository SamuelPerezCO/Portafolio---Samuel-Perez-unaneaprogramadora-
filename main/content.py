"""
Todo el contenido del portafolio vive aquí. / All portfolio copy lives here.

Para añadir un proyecto nuevo: agrégalo a PROJECTS con su texto en "es" y "en".
To add a new project: append it to PROJECTS with its "es" and "en" text.

No hay base de datos ni panel de administración: este archivo es la fuente de verdad.
There is no database or admin panel: this file is the source of truth.
"""

LANGUAGES = ("es", "en")
DEFAULT_LANGUAGE = "es"

# ---------------------------------------------------------------------------
# Datos que no cambian entre idiomas / Language-independent data
# ---------------------------------------------------------------------------

PROFILE = {
    "name": "Samuel Pérez Serna",
    "initials": "SP",
    "photo": "img/samuel.jpg",
    "email": "unpsoftware@gmail.com",
    "github": "https://github.com/SamuelPerezCO",
    "github_user": "SamuelPerezCO",
    "linkedin": "https://www.linkedin.com/in/samuel-perez-serna",
    "linkedin_user": "samuel-perez-serna",
    "phone_number": "+57 3167687288",
    "whatsapp_link": "https://wa.me/573167687288"
}

SKILL_GROUPS = [
    {
        "icon": "code",
        "key": "languages",
        "items": ["Python", "Java", "JavaScript", "HTML5", "CSS3", "SQL"],
    },
    {
        "icon": "layers",
        "key": "frameworks",
        "items": ["Django", "Django REST Framework", "Bootstrap", "Chart.js"],
    },
    {
        "icon": "database",
        "key": "databases",
        "items": ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
        "icon": "tool",
        "key": "tools",
        "items": ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    },
]

# Cada proyecto: los campos "es"/"en" son texto, el resto es común.
PROJECTS = [
    {
        "slug": "dashboard-gps",
        "featured": True,
        "year": "2025",
        "tags": ["Python", "Django", "REST API", "Chart.js"],
        "repo": "https://github.com/SamuelPerezCO/Dashboard-GPS",
        "demo": "",
        "es": {
            "title": "Dashboard GPS",
            "summary": "Panel de control que se conecta a una API de rastreo GPS y "
                       "transforma los datos crudos en gráficas legibles en tiempo real.",
            "highlights": [
                "Consumo de API externa y normalización de la respuesta",
                "Visualización de series de datos con gráficas interactivas",
                "Construido íntegramente con Django",
            ],
        },
        "en": {
            "title": "GPS Dashboard",
            "summary": "Control panel that connects to a GPS tracking API and turns "
                       "raw data into readable, real-time charts.",
            "highlights": [
                "External API consumption and response normalization",
                "Data-series visualization with interactive charts",
                "Built end to end with Django",
            ],
        },
    },
    {
        "slug": "siic-repositorio",
        "featured": True,
        "year": "2024",
        "tags": ["HTML", "CSS", "JavaScript", "Equipo"],
        "repo": "https://github.com/SamuelPerezCO/SIIC-Repositorio",
        "demo": "",
        "es": {
            "title": "SIIC — Sistema de Información",
            "summary": "Proyecto PPI del Politécnico Colombiano Jaime Isaza Cadavid: "
                       "un sistema de información desarrollado en equipo de principio a fin.",
            "highlights": [
                "Trabajo colaborativo con control de versiones en Git",
                "Levantamiento de requisitos y documentación del sistema",
                "Interfaz web responsiva",
            ],
        },
        "en": {
            "title": "SIIC — Information System",
            "summary": "PPI project at Politécnico Colombiano Jaime Isaza Cadavid: an "
                       "information system built as a team from start to finish.",
            "highlights": [
                "Collaborative work with Git version control",
                "Requirements gathering and system documentation",
                "Responsive web interface",
            ],
        },
    },
    {
        "slug": "siic-bd",
        "featured": False,
        "year": "2024",
        "tags": ["Java", "SQL", "Modelado de datos"],
        "repo": "https://github.com/SamuelPerezCO/Siic-BD",
        "demo": "",
        "es": {
            "title": "SIIC — Base de datos",
            "summary": "Capa de datos del proyecto SIIC, desarrollada en Java junto a "
                       "compañeros del Politécnico Colombiano Jaime Isaza Cadavid.",
            "highlights": [
                "Diseño del modelo entidad-relación",
                "Consultas SQL y persistencia desde Java",
            ],
        },
        "en": {
            "title": "SIIC — Database",
            "summary": "Data layer of the SIIC project, written in Java together with "
                       "classmates at Politécnico Colombiano Jaime Isaza Cadavid.",
            "highlights": [
                "Entity-relationship model design",
                "SQL queries and persistence from Java",
            ],
        },
    },
    {
        "slug": "crud-consultorio-medico",
        "featured": False,
        "year": "2024",
        "tags": ["Python", "CRUD", "SQL"],
        "repo": "https://github.com/SamuelPerezCO/CRUD_ConsultorioMedico",
        "demo": "",
        "es": {
            "title": "CRUD Consultorio Médico",
            "summary": "Gestión de pacientes y citas para un consultorio médico: crear, "
                       "leer, actualizar y eliminar registros sobre una base de datos.",
            "highlights": [
                "Operaciones CRUD completas",
                "Validación de datos de entrada",
            ],
        },
        "en": {
            "title": "Medical Office CRUD",
            "summary": "Patient and appointment management for a medical office: create, "
                       "read, update and delete records against a database.",
            "highlights": [
                "Full CRUD operations",
                "Input data validation",
            ],
        },
    },
    {
        "slug": "contador",
        "featured": False,
        "year": "2023",
        "tags": ["Python", "Lógica"],
        "repo": "https://github.com/SamuelPerezCO/Contador",
        "demo": "",
        "es": {
            "title": "Contador",
            "summary": "Aplicación pequeña de contador en Python. De esos ejercicios "
                       "cortos que sirven para afinar la lógica y practicar lo básico.",
            "highlights": [
                "Python puro, sin dependencias",
            ],
        },
        "en": {
            "title": "Counter",
            "summary": "Small counter application in Python. One of those short exercises "
                       "that sharpen your logic and keep the fundamentals fresh.",
            "highlights": [
                "Pure Python, no dependencies",
            ],
        },
    },
]

# Línea de tiempo: type = "work" | "education"
TIMELINE = [
    {
        "type": "work",
        "current": True,
        "period": "2025 — ",
        "es": {
            "role": "Proyecto propio",
            "org": "Independiente",
            "description": "Desarrollando mi propio proyecto: definiendo el alcance, "
                           "el modelo de datos y la aplicación web completa.",
        },
        "en": {
            "role": "Personal project",
            "org": "Independent",
            "description": "Building my own project: defining the scope, the data model "
                           "and the full web application.",
        },
    },
    {
        "type": "education",
        "current": False,
        "period": "2022 — 2025",
        "es": {
            "role": "Técnico Profesional en Programación de Sistemas de Información",
            "org": "Politécnico Colombiano Jaime Isaza Cadavid",
            "description": "Formación en desarrollo de software, bases de datos y "
                           "análisis de sistemas, con proyectos integradores en equipo.",
        },
        "en": {
            "role": "Professional Technician in Information Systems Programming",
            "org": "Politécnico Colombiano Jaime Isaza Cadavid",
            "description": "Training in software development, databases and systems "
                           "analysis, with team-based integrative projects.",
        },
    },
]

# ---------------------------------------------------------------------------
# Textos de interfaz / UI copy
# ---------------------------------------------------------------------------

CONTENT = {
    "es": {
        "lang_code": "es",
        "other_lang": "en",
        "other_lang_label": "EN",
        "meta_title": "Samuel Pérez Serna — Desarrollador de software",
        "meta_description": "Portafolio de Samuel Pérez Serna, técnico profesional en "
                           "programación de sistemas de información. Django, Python y Java. "
                           "Envigado, Colombia.",
        "nav": {
            "about": "Sobre mí",
            "skills": "Habilidades",
            "projects": "Proyectos",
            "timeline": "Trayectoria",
            "contact": "Contacto",
            "menu": "Menú",
        },
        "hero": {
            "greeting": "Hola, soy",
            "name": "Samuel Pérez",
            "roles": ["Desarrollador de software", "Django & Python", "Envigado, Colombia"],
            "tagline": "Técnico profesional en programación de sistemas de información. "
                       "Construyo aplicaciones web y paneles de datos con Django, y "
                       "disfruto los retos que me obligan a aprender algo nuevo.",
            "cta_primary": "Ver proyectos",
            "cta_secondary": "Escríbeme",
            "scroll": "Desliza",
            "photo_alt": "Retrato de Samuel Pérez Serna",
        },
        "about": {
            "label": "Sobre mí",
            "title": "Aprender rápido y construir cosas que funcionen",
            "paragraphs": [
                "Soy Samuel, técnico profesional en programación de sistemas de la "
                "información, egresado del Politécnico Colombiano Jaime Isaza Cadavid. "
                "Vivo en Envigado, Colombia.",
                "Me muevo sobre todo en el backend: Python y Django para la lógica y los "
                "datos, SQL para modelar bien desde el principio. También he trabajado "
                "con Java en proyectos académicos en equipo.",
                "Me gustan los proyectos donde hay que entender un problema real antes de "
                "escribir código. Ahora mismo estoy dedicado a un proyecto propio, y sigo "
                "buscando retos nuevos.",
            ],
            "facts": [
                {"label": "Ubicación", "value": "Envigado, Colombia"},
                {"label": "Enfoque", "value": "Backend & datos"},
                {"label": "Stack principal", "value": "Django · Python · SQL"},
                {"label": "Idiomas", "value": "Español · Inglés"},
            ],
        },
        "skills": {
            "label": "Habilidades",
            "title": "Herramientas con las que trabajo",
            "intro": "El stack que uso a diario y las tecnologías con las que he "
                     "construido mis proyectos.",
            "groups": {
                "languages": "Lenguajes",
                "frameworks": "Frameworks & librerías",
                "databases": "Bases de datos",
                "tools": "Herramientas",
            },
        },
        "projects": {
            "label": "Proyectos",
            "title": "Lo que he construido",
            "intro": "Una selección de proyectos personales y académicos. Todo el código "
                     "está público en GitHub.",
            "featured_badge": "Destacado",
            "view_code": "Ver código",
            "view_demo": "Ver demo",
            "all_repos": "Ver todos los repositorios",
        },
        "timeline": {
            "label": "Trayectoria",
            "title": "Experiencia y formación",
            "intro": "El camino que me trajo hasta acá.",
            "current_badge": "Actual",
            "types": {"work": "Experiencia", "education": "Formación"},
        },
        "contact": {
            "label": "Contacto",
            "title": "¿Hablamos?",
            "intro": "Estoy abierto a oportunidades, proyectos y conversaciones sobre "
                     "código. La forma más rápida de llegarme es por correo.",
            "email_cta": "Enviar correo",
            "links_title": "También estoy en",
        },
        "footer": {
            "built": "Hecho con Django",
            "rights": "Todos los derechos reservados.",
            "back_to_top": "Volver arriba",
        },
    },
    "en": {
        "lang_code": "en",
        "other_lang": "es",
        "other_lang_label": "ES",
        "meta_title": "Samuel Pérez Serna — Software Developer",
        "meta_description": "Portfolio of Samuel Pérez Serna, professional technician in "
                           "information systems programming. Django, Python and Java. "
                           "Envigado, Colombia.",
        "nav": {
            "about": "About",
            "skills": "Skills",
            "projects": "Projects",
            "timeline": "Journey",
            "contact": "Contact",
            "menu": "Menu",
        },
        "hero": {
            "greeting": "Hi, I'm",
            "name": "Samuel Pérez",
            "roles": ["Software Developer", "Django & Python", "Envigado, Colombia"],
            "tagline": "Professional technician in information systems programming. I build "
                       "web applications and data dashboards with Django, and I enjoy the "
                       "kind of challenge that forces me to learn something new.",
            "cta_primary": "View projects",
            "cta_secondary": "Get in touch",
            "scroll": "Scroll",
            "photo_alt": "Portrait of Samuel Pérez Serna",
        },
        "about": {
            "label": "About me",
            "title": "Learn fast, and build things that actually work",
            "paragraphs": [
                "I'm Samuel, a professional technician in information systems programming, "
                "graduated from Politécnico Colombiano Jaime Isaza Cadavid. I live in "
                "Envigado, Colombia.",
                "I work mostly on the backend: Python and Django for logic and data, SQL to "
                "get the model right from the start. I've also used Java on team-based "
                "academic projects.",
                "I like projects where you have to understand a real problem before writing "
                "any code. Right now I'm focused on a project of my own, and I'm always "
                "looking for the next challenge.",
            ],
            "facts": [
                {"label": "Location", "value": "Envigado, Colombia"},
                {"label": "Focus", "value": "Backend & data"},
                {"label": "Core stack", "value": "Django · Python · SQL"},
                {"label": "Languages", "value": "Spanish · English"},
            ],
        },
        "skills": {
            "label": "Skills",
            "title": "Tools I work with",
            "intro": "The stack I use day to day and the technologies behind my projects.",
            "groups": {
                "languages": "Languages",
                "frameworks": "Frameworks & libraries",
                "databases": "Databases",
                "tools": "Tools",
            },
        },
        "projects": {
            "label": "Projects",
            "title": "What I've built",
            "intro": "A selection of personal and academic projects. All the code is public "
                     "on GitHub.",
            "featured_badge": "Featured",
            "view_code": "View code",
            "view_demo": "Live demo",
            "all_repos": "See all repositories",
        },
        "timeline": {
            "label": "Journey",
            "title": "Experience & education",
            "intro": "The path that got me here.",
            "current_badge": "Current",
            "types": {"work": "Experience", "education": "Education"},
        },
        "contact": {
            "label": "Contact",
            "title": "Let's talk",
            "intro": "I'm open to opportunities, projects and conversations about code. "
                     "Email is the fastest way to reach me.",
            "email_cta": "Send an email",
            "links_title": "Also find me on",
        },
        "footer": {
            "built": "Built with Django",
            "rights": "All rights reserved.",
            "back_to_top": "Back to top",
        },
    },
}


def get_context(lang: str) -> dict:
    """Devuelve el contexto completo para un idioma. / Full context for a language."""
    if lang not in CONTENT:
        lang = DEFAULT_LANGUAGE

    t = CONTENT[lang]

    # Ojo: la clave se llama "entries" y no "items" porque en las plantillas de
    # Django `x.items` se resolvería de forma ambigua con el método dict.items().
    # Note: the key is "entries", not "items", because in Django templates
    # `x.items` would clash ambiguously with the dict.items() method.
    skills = [
        {
            "icon": group["icon"],
            "title": t["skills"]["groups"][group["key"]],
            "entries": group["items"],
        }
        for group in SKILL_GROUPS
    ]

    projects = [{**project, **project[lang]} for project in PROJECTS]

    timeline = [
        {
            **entry,
            **entry[lang],
            "type_label": t["timeline"]["types"][entry["type"]],
        }
        for entry in TIMELINE
    ]

    return {
        "t": t,
        "lang": lang,
        "profile": PROFILE,
        "skills": skills,
        "projects": projects,
        "timeline": timeline,
    }
