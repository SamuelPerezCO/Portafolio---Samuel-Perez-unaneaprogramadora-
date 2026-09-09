"use client";

import { ArrowUp } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { UnpLockup, UnpMark, UnpWordmark } from "@/components/Brand";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { BRAND, FOUNDER } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

/* The content column: right of the rule, past the rule→content gap. On desktop
   this is the lockup grid's third column plus its padding; below 1024 it is the
   same offset every section's content uses. */
const CONTENT_COLUMN: CSSProperties = {
  paddingLeft: "calc(var(--label-w) + 1px + var(--gap-r))",
};

/* The spine's x: the same expression .spine resolves in globals.css. */
const SPINE_X = "calc(var(--pad) + var(--label-w))";

/* The traced SVGs carry blank canvas on their inner sides (MARK_D ends at 202
   of the mark's 212 viewBox; WORDMARK_D starts at 8 of the wordmark's 451),
   about 4px each at the footer's 96px / 73px sizes. --gap-l / --gap-r are
   ink-to-rule distances in the lockup, so the lockup row's paddings give that
   canvas back: the visible gaps land on the tokens and the wordmark's ink shares
   the colophon's left edge. */
const SVG_BLEED = "4px";

/* Footer links are .link resting on ink-2 and reaching ink on hover; the colour
   and its transition come from the .footer .link rule in globals.css. */
const LINK_CLASS = "link";

type FooterLinkProps = {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

function FooterLink({ href, external = false, className = "", children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className={`${LINK_CLASS} ${className}`.trim()}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

/**
 * The page closes on the logo's own field in both themes (.footer scopes the dark
 * tokens). On desktop the page spine (--line-strong) reaches the footer's top edge
 * and continues inside it in --accent, the logo's white rule: one segment spans
 * the shell's top padding from the edge, and the lockup row (mark | rule | wordmark)
 * takes over with its middle cell, ending exactly with the row. Below 1024 the
 * spine has already ended at the footer's top edge and the lockup stands alone in
 * the content column.
 */
export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell py-12 lg:py-16">
        {/* The spine's footer segment: white from the top edge down to the lockup
            row. h-16 equals lg:py-16, so it abuts the row-1 cell with no gap. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 hidden h-16 w-px bg-accent lg:block"
          style={{ left: SPINE_X }}
        />

        <a
          href="#top"
          aria-label={t.nav.home}
          className="hidden h-[100px] w-fit text-accent lg:grid lg:grid-cols-[var(--label-w)_1px_minmax(0,1fr)]"
        >
          <span
            className="flex items-center justify-end"
            style={{ paddingRight: `calc(var(--gap-l) - ${SVG_BLEED})` }}
          >
            <UnpMark size={96} />
          </span>
          <span aria-hidden="true" className="bg-accent" style={{ width: 1 }} />
          <span className="flex items-center" style={{ paddingLeft: `calc(var(--gap-r) - ${SVG_BLEED})` }}>
            <UnpWordmark height={73} />
          </span>
        </a>

        <div className="lg:hidden" style={CONTENT_COLUMN}>
          <a href="#top" aria-label={t.nav.home} className="inline-flex text-accent">
            <UnpLockup height={40} />
          </a>
        </div>

        <div className="pt-8" style={CONTENT_COLUMN}>
          <p className="small">
            <span className="block sm:inline">{t.footer.location}</span>
            <span className="hidden sm:inline">{" · "}</span>
            <span className="block sm:inline">
              © {year} {BRAND.name}
            </span>
            <span className="hidden sm:inline">{" · "}</span>
            <span className="block sm:inline">{t.footer.founded}</span>
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
            <FooterLink href={`mailto:${BRAND.email}`}>{BRAND.email}</FooterLink>
            <FooterLink href={BRAND.github} external>
              <GithubIcon size={15} />
              {t.contact.githubLabel}
            </FooterLink>
            <FooterLink href={FOUNDER.linkedin} external>
              <LinkedinIcon size={15} />
              {t.contact.linkedinLabel}
            </FooterLink>
            <FooterLink href="#top" className="sm:ml-auto">
              {t.footer.backToTop}
              <ArrowUp size={13} />
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
