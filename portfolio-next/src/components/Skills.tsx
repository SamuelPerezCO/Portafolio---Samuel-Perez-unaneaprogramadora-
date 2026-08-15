"use client";

import { Code2, Database, Layers, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { SKILL_GROUPS } from "@/lib/content";
import { Reveal } from "./Reveal";

const ICONS = { code: Code2, layers: Layers, database: Database, tool: Wrench } as const;

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono-display text-xs uppercase tracking-[0.2em] text-accent">
            {t.skills.eyebrow}
          </p>
          <h2 className="mt-3 font-mono-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {t.skills.title}
          </h2>
          <p className="mt-3 max-w-xl text-muted">{t.skills.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.key} delay={i * 0.08}>
                <div className="h-full rounded-lg border border-border bg-bg-panel/50 p-5 transition-colors hover:border-accent/50">
                  <Icon size={20} className="text-accent" />
                  <h3 className="mt-4 font-mono-display text-sm font-medium text-fg">
                    {t.skills.groups[group.key as keyof typeof t.skills.groups]}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded border border-border px-2 py-1 font-mono-display text-[11px] text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
