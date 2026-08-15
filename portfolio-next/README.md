# Portafolio — Samuel Pérez Serna (Next.js)

Rebuild of the portfolio on **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**,
inspired by the structure of [V1-Portfolio](https://github.com/HassanXTech/V1-Portfolio).
Bilingual (ES/EN) and dark/light theme, both toggleable from the nav.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/
    layout.tsx      Fonts, theme provider, language provider
    page.tsx         Assembles the sections
    globals.css       Design tokens (dark/light), grid background
  components/         Nav, Hero, Skills, Projects, Contact, Footer, Reveal
  lib/
    content.ts         All copy (ES/EN) and data: profile, skills, projects
    language-context.tsx  Language toggle (persisted to localStorage)
```

## Editing content

Everything — profile info, skills, projects, and UI copy in both languages — lives in
[`src/lib/content.ts`](src/lib/content.ts). No component edits needed to add a project or
change a bio detail.

## Deployment

Built for Vercel: push to a Git repo, import it in Vercel, no extra config needed.
