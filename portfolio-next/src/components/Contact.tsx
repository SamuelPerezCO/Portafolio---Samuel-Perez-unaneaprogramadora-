"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { BRAND, FOUNDER, whatsappUrl, workWithUsUrl } from "@/lib/content";
import { Section } from "@/components/Section";
import { Glyph } from "@/components/Glyph";
import { WhatsappIcon } from "@/components/icons";

type Fact = {
  key: string;
  href: string;
  text: string;
  /** Opens in a new tab (WhatsApp, GitHub, LinkedIn). */
  external?: boolean;
  /** Small note printed under the value. */
  note?: string;
  /** Never break mid-word: the label column is wide enough to hold the address. */
  noBreak?: boolean;
};

function FactLink({ fact }: { fact: Fact }) {
  return fact.external ? (
    <a href={fact.href} target="_blank" rel="noreferrer">
      {fact.text}
    </a>
  ) : (
    <a href={fact.href}>{fact.text}</a>
  );
}

/**
 * Contacto — the label column carries the facts (WhatsApp, email, GitHub,
 * LinkedIn); the content column carries the question, the two buttons, the
 * preview of the message WhatsApp will open with, and the hiring hook.
 * Below 1024 the facts render as a .ficha under the preview panel, so they
 * are rendered twice (desktop-only in .lc, mobile-only in .cc), like the hero.
 */
export function Contact() {
  const { lang, t } = useLanguage();
  const c = t.contact;

  const facts: Fact[] = [
    { key: c.whatsappLabel, href: BRAND.whatsappLink, text: BRAND.phoneDisplay, external: true, note: c.note },
    { key: c.emailLabel, href: `mailto:${BRAND.email}`, text: BRAND.email, noBreak: true },
    { key: c.githubLabel, href: BRAND.github, text: BRAND.githubUser, external: true },
    { key: c.linkedinLabel, href: FOUNDER.linkedin, text: FOUNDER.linkedinUser, external: true },
  ];

  return (
    <Section id="contacto">
      <div className="lc">
        <h2 className="sec-name">{c.title}</h2>

        {/* Desktop facts: label over value, 32px apart, no rules (the spine is the rule). */}
        <dl className="mt-6 hidden lg:block">
          {facts.map((fact, i) => (
            <div key={fact.key} className={i > 0 ? "mt-8" : undefined}>
              <dt className="label">{fact.key}</dt>
              <dd className="value mt-2" style={fact.noBreak ? { overflowWrap: "normal" } : undefined}>
                <FactLink fact={fact} />
                {fact.note && <p className="small mt-1">{fact.note}</p>}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="cc">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="mt-6 lg:col-span-7 lg:mt-0">
            <p className="statement" style={{ maxWidth: "16ch" }}>
              {c.statement}
            </p>
            <p className="lead mt-6">{c.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href={whatsappUrl(lang)} target="_blank" rel="noreferrer">
                <WhatsappIcon size={16} />
                {c.whatsapp}
              </a>
              <a className="btn btn-secondary" href={`mailto:${BRAND.email}`}>
                <Mail size={16} />
                {c.email}
              </a>
            </div>
          </div>

          <div className="self-start lg:col-span-5">
            <div className="preview">
              <p className="label">{c.previewLabel}</p>
              <p className="prose mt-3">{c.whatsappMessage}</p>
              <p className="small mt-3">{c.previewHelp}</p>
            </div>
          </div>
        </div>

        {/* Mobile facts: key | rule | value, under the preview. */}
        <dl className="ficha mt-8 lg:hidden">
          {facts.map((fact) => (
            <div key={fact.key}>
              <dt>{fact.key}</dt>
              <dd style={fact.noBreak ? { overflowWrap: "normal" } : undefined}>
                <FactLink fact={fact} />
                {fact.note && <p className="small mt-1">{fact.note}</p>}
              </dd>
            </div>
          ))}
        </dl>

        {/* Hook: a full-width row under a hairline. */}
        <div className="mt-8 border-t border-line pt-8">
          <p className="label inline-flex items-center gap-1">
            <Glyph on={false} />
            <span>{c.hook.title}</span>
          </p>
          <p className="prose mt-2">{c.hook.text}</p>
          <a className="link mt-3" href={workWithUsUrl(lang)}>
            {c.hook.cta} <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </Section>
  );
}
