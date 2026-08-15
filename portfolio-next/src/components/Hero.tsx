"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./icons";

function TypedRoles({ roles }: { roles: readonly string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 30 : 55;
    const pause = 1500;

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), pause);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
        return;
      }
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <span className="text-accent-2">
      {text}
      <span className="animate-pulse text-accent">▍</span>
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full opacity-10 blur-[120px]"
        style={{ background: "var(--accent-2)" }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono-display text-xs uppercase tracking-[0.2em] text-accent">
            {t.hero.eyebrow}
          </p>

          <h1 className="mt-4 font-mono-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl md:text-6xl">
            {t.hero.greeting} <span className="text-accent">{t.hero.name}</span>
          </h1>

          <p className="mt-4 h-8 font-mono-display text-lg text-muted sm:text-xl">
            <TypedRoles roles={t.hero.roles} />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.hero.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded bg-accent px-5 py-3 font-mono-display text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded border border-border-strong px-5 py-3 font-mono-display text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.ctaSecondary}
            </a>
            <div className="flex items-center gap-3 pl-2 text-muted">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
                <GithubIcon size={18} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="transition-colors hover:text-accent">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="rounded-lg border border-border bg-bg-panel/60 p-1 shadow-2xl"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono-display text-[11px] text-muted">profile.sh</span>
          </div>
          <dl className="grid grid-cols-2 gap-4 p-5 font-mono-display text-xs">
            {t.hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-muted">{fact.label}</dt>
                <dd className="mt-1 text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <a
        href="#skills"
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent md:block"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
