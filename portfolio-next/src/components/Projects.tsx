"use client";

import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE, PROJECTS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { GithubIcon } from "./icons";

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono-display text-xs uppercase tracking-[0.2em] text-accent">
            {t.projects.eyebrow}
          </p>
          <h2 className="mt-3 font-mono-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-3 max-w-xl text-muted">{t.projects.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const copy = project[lang];
            return (
              <Reveal
                key={project.slug}
                delay={(i % 4) * 0.06}
                className={project.featured ? "sm:col-span-2" : ""}
              >
                <article className="flex h-full flex-col rounded-lg border border-border bg-bg-panel/50 p-6 transition-colors hover:border-accent/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {project.featured && (
                        <span className="font-mono-display text-[10px] uppercase tracking-widest text-accent">
                          {t.projects.featuredBadge}
                        </span>
                      )}
                      <h3 className="mt-1 font-mono-display text-lg font-medium text-fg">
                        {copy.title}
                      </h3>
                    </div>
                    <span className="shrink-0 font-mono-display text-xs text-muted">{project.year}</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">{copy.summary}</p>

                  <ul className="mt-4 space-y-1.5">
                    {copy.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-muted">
                        <span className="text-accent-2">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border px-2 py-0.5 font-mono-display text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4 pt-4">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono-display text-xs text-fg transition-colors hover:text-accent"
                    >
                      <GithubIcon size={14} /> {t.projects.viewCode}
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono-display text-xs text-fg transition-colors hover:text-accent"
                      >
                        <ExternalLink size={14} /> {t.projects.viewDemo}
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={`${PROFILE.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="font-mono-display text-sm text-accent hover:underline"
          >
            {t.projects.allRepos} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
