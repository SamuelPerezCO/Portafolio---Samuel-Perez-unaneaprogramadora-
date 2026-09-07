# Portafolio — Samuel Pérez Serna

Portafolio personal en **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**.
Bilingüe (ES/EN) y con tema claro/oscuro, ambos desde la barra de navegación.

La página está construida como una serie de **casos de estudio con capturas reales**
de los proyectos: el problema del negocio, lo que se construyó y en qué quedó,
más una ficha técnica (cliente, sector, tipo, stack) por proyecto.

## Arrancar

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Estructura

```
src/
  app/
    layout.tsx        Fuentes (Bricolage Grotesque + Source Serif 4), tema, idioma, metadatos
    page.tsx          Ensambla las secciones
    globals.css       Tokens de color (claro/oscuro), tipografía, ficha técnica, botones
  components/         Nav, Hero, Work (casos de estudio), MoreWork, About, Contact, Footer
  lib/
    content.ts        TODO el contenido: perfil, casos de estudio, más trabajo, stack, textos ES/EN
    language-context.tsx  Idioma (persistido en localStorage)
public/img/
  samuel.jpg          Foto de perfil
  work/*.webp         Capturas reales de cada proyecto (1600 px de ancho)
```

## Editar el contenido

Todo vive en [`src/lib/content.ts`](src/lib/content.ts). No hay que tocar componentes.

- **Caso de estudio**: agrega un objeto a `CASE_STUDIES` con `slug`, `year`, `stack`,
  `repo`, la `image` (ruta en `public/img/work/`, ancho y alto) y los textos `es` / `en`.
- **Más trabajo**: agrega un objeto a `MORE_WORK` (título, descripción, stack, `repo`, `live`).
- **Stack** de la sección "Sobre mí": lista `STACK`.
- **Textos de la interfaz**: objeto `CONTENT`, con las mismas claves en `es` y `en`.

Las capturas se toman a 1440 × 900 con escala 2x y se exportan a WebP de 1600 px
de ancho; la leyenda de cada imagen dice si es una captura real o arte del proyecto.

## Despliegue

Pensado para Vercel: importa el repositorio y listo. Para que las imágenes de
Open Graph resuelvan con el dominio correcto, define `NEXT_PUBLIC_SITE_URL`
(por ejemplo `https://tu-dominio.com`); si no, se usa la URL de producción de Vercel.
