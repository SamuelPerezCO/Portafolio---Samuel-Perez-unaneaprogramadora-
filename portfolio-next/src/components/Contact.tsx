"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { PROFILE, whatsappUrl } from "@/lib/content";

export function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section id="contacto" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-20">
          <div>
            <h2 className="display-tight max-w-[16ch] text-4xl font-bold leading-[1.02] text-ink md:text-[3.5rem]">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-[34rem] text-lg text-ink-2">{t.contact.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl(lang)} target="_blank" rel="noreferrer" className="btn btn-primary">
                <MessageCircle size={16} /> {t.contact.whatsapp}
              </a>
              <a href={`mailto:${PROFILE.email}`} className="btn btn-secondary">
                <Mail size={16} /> {t.contact.email}
              </a>
            </div>
          </div>

          <dl className="ficha self-end">
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={PROFILE.whatsappLink} target="_blank" rel="noreferrer">
                  {PROFILE.phoneDisplay}
                </a>
                <span className="mt-1 block text-sm text-ink-2">{t.contact.note}</span>
              </dd>
            </div>
            <div>
              <dt>{t.contact.emailLabel}</dt>
              <dd>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={PROFILE.github} target="_blank" rel="noreferrer">
                  {PROFILE.githubUser}
                </a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  {PROFILE.linkedinUser}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
