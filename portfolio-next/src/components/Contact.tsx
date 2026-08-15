"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE, whatsappUrl } from "@/lib/content";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-mono-display text-xs uppercase tracking-[0.2em] text-accent">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 font-mono-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">{t.contact.intro}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 rounded bg-accent px-5 py-3 font-mono-display text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
            >
              <Mail size={16} /> {t.contact.emailCta}
            </a>
            <a
              href={whatsappUrl(lang)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded border border-border-strong px-5 py-3 font-mono-display text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle size={16} /> {t.contact.whatsappCta}
            </a>
          </div>

          <div className="mt-12">
            <p className="font-mono-display text-xs uppercase tracking-widest text-muted">
              {t.contact.linksTitle}
            </p>
            <div className="mt-4 flex items-center justify-center gap-6">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <GithubIcon size={18} /> <span className="font-mono-display text-sm">{PROFILE.githubUser}</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <LinkedinIcon size={18} /> <span className="font-mono-display text-sm">{PROFILE.linkedinUser}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
