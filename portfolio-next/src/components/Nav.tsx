"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { whatsappUrl } from "@/lib/content";
import { UnpMark, UnpWordmark } from "@/components/Brand";
import { WhatsappIcon } from "@/components/icons";

/* Scroll and mount stores. useSyncExternalStore keeps the server render stable:
   no border, no bar fill and a neutral theme label until the client knows. */
function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

const getScrolled = () => window.scrollY > 8;
const getScrolledOnServer = () => false;

// True only after hydration, so the theme toggle's stateful label never mismatches the server render.
const noop = () => () => {};
const getMounted = () => true;
const getMountedOnServer = () => false;

/* The page's single IntersectionObserver. Sections in page order and the nav anchor
   each one lights up: Más trabajo counts as Proyectos; Testimonios is watched so the
   highlight clears while it fills the reading band. */
const OBSERVED: { id: string; href: string | null }[] = [
  { id: "servicios", href: "#servicios" },
  { id: "proyectos", href: "#proyectos" },
  { id: "mas-trabajo", href: "#proyectos" },
  { id: "testimonios", href: null },
  { id: "nosotros", href: "#nosotros" },
  { id: "contacto", href: "#contacto" },
];

// The reading band: below the 64px bar, down to 60% of the viewport.
const ROOT_MARGIN = "-64px 0px -40% 0px";
// A 1% threshold ladder. A lone 0.4 never fires for a section taller than 2.5x the band
// (Proyectos, Más trabajo), so entries keep reporting while a tall section crosses it and
// the section holding the largest slice of the band is the current one.
const THRESHOLDS = Array.from({ length: 101 }, (_, i) => i / 100);

/* The bar is the ground at 92% (panel 96%) over a 12px backdrop blur. §7.1 paints the
   fill at rest too; here it waits for the hairline's 8px scroll threshold (or the open
   panel) because in dark the fill reads as a darker cap over the hero's lighter vignette.
   Ground on ground is invisible, so nothing changes below the hero or in light. */
const BAR_BG = "color-mix(in srgb, var(--ground) 92%, transparent)";
const PANEL_BG = "color-mix(in srgb, var(--ground) 96%, transparent)";
// Same x as every section's spine (globals.css .spine).
const SPINE_LEFT = "calc(var(--pad) + var(--label-w))";

export function Nav() {
  const { lang, toggleLang, t } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolled, getScrolledOnServer);
  const mounted = useSyncExternalStore(noop, getMounted, getMountedOnServer);

  const links = [
    { href: "#servicios", label: t.nav.services },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#nosotros", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  const copy = t.nav;
  const whatsapp = whatsappUrl(lang);
  const otherLang = lang === "es" ? "EN" : "ES";
  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
  const close = () => setOpen(false);

  // Section tracking: aria-current follows the section holding most of the reading band.
  useEffect(() => {
    const targets = OBSERVED.flatMap(({ id, href }) => {
      const el = document.getElementById(id);
      return el ? [{ el, href }] : [];
    });
    if (targets.length === 0) return;

    const share = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) share.set(entry.target, entry.intersectionRect.height);
        let best: (typeof targets)[number] | null = null;
        let bestShare = 0;
        for (const target of targets) {
          const height = share.get(target.el) ?? 0;
          if (height > bestShare) {
            best = target;
            bestShare = height;
          }
        }
        setActive(best ? best.href : null);
      },
      { threshold: THRESHOLDS, rootMargin: ROOT_MARGIN }
    );
    for (const target of targets) observer.observe(target.el);
    return () => observer.disconnect();
  }, []);

  // While the panel is open, body scroll is locked and the page beneath is inert, so
  // swipe navigation (VoiceOver, TalkBack) stays inside the bar and the panel like Tab does.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const rest = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    rest.forEach((el) => el.setAttribute("inert", ""));
    return () => {
      document.body.style.overflow = previous;
      rest.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open]);

  // Escape closes the panel; Tab stays inside the bar and the panel while it is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !navRef.current) return;
      const focusables = Array.from(
        navRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      ).filter((el) => el.getClientRects().length > 0);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const current = document.activeElement;
      const inside = current instanceof Node && navRef.current.contains(current);
      if (event.shiftKey ? current === first || !inside : current === last || !inside) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // The panel only exists below 768px; close it if the viewport grows past that.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open]);

  /* ES/EN chip shows the other language and its name starts with that visible text.
     The theme toggle paints both icons and CSS keyed on data-theme shows one, so the first
     paint is right before hydration; its label names the theme it switches to once the
     client knows, and stays neutral until then. */
  const themeLabel = mounted ? (resolvedTheme === "light" ? copy.themeDark : copy.themeLight) : t.nav.theme;
  const chips = (
    <>
      <button type="button" className="chip label" onClick={toggleLang}>
        {otherLang}
        <span className="sr-only normal-case"> · {t.nav.language}</span>
      </button>
      <button type="button" className="chip chip-icon" onClick={toggleTheme} aria-label={themeLabel}>
        <Sun size={18} aria-hidden="true" className="hidden [[data-theme=dark]_&]:block" />
        <Moon size={18} aria-hidden="true" className="[[data-theme=dark]_&]:hidden" />
      </button>
    </>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-x-clip backdrop-blur-[12px]">
      {/* Skip link: the first tab stop, visible only while focused. #top is the hero, the
          first thing in main; the jump moves the sequential-focus start there, so the next Tab
          lands in the page instead of the bar's controls. Ground behind it so it reads over the mark. */}
      <a
        href="#top"
        className="btn btn-secondary sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]"
        style={{ background: "var(--ground)" }}
      >
        {copy.skip}
      </a>

      <nav ref={navRef}>
        <div className="relative" style={{ background: scrolled || open ? BAR_BG : "transparent" }}>
          <div className="shell">
            {/* The nav's own segment of the spine. Full height from 1024; below that the
                mark sits on the rule's head, so the segment starts at the mark's bottom. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[42px] bottom-0 w-px bg-line-strong md:top-12 lg:top-0"
              style={{ left: SPINE_LEFT }}
            />

            <div className="flex h-14 items-center md:h-16">
              {/* Mark and wordmark are one link. From 1024 the mark is right-aligned in the label
                  cell (24px to the rule) and the wordmark sits 1px + 32px past it; below 1024 the
                  mark is centred on the rule's x and the wordmark follows at the rule-to-content gap. */}
              <a href="#top" aria-label={t.nav.home} onClick={close} className="flex shrink-0 items-center text-ink">
                <span className="flex w-[calc(var(--label-w)_+_14px)] shrink-0 justify-end md:w-[calc(var(--label-w)_+_16px)] lg:w-[var(--label-w)] lg:pr-[var(--gap-l)]">
                  <UnpMark size={32} className="h-7 w-7 shrink-0 md:h-8 md:w-8" />
                </span>
                <span className="ml-[var(--gap-r)] flex shrink-0 lg:ml-0 lg:pl-[calc(1px_+_var(--gap-r))]">
                  <UnpWordmark height={24} className="h-[21px] w-[60px] md:h-6 md:w-[69px]" />
                </span>
              </a>

              <ul role="list" className="ml-4 hidden items-center md:flex lg:ml-8 lg:gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="nav-link" aria-current={active === link.href ? "true" : undefined}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="ml-auto hidden items-center gap-2 md:flex">
                {chips}
                <a className="btn btn-primary btn-compact ml-2" href={whatsapp} target="_blank" rel="noreferrer">
                  <WhatsappIcon size={16} />
                  {t.nav.whatsapp}
                </a>
              </div>

              <div className="ml-auto flex items-center gap-2 md:hidden">
                {/* One plate on screen: the bar's icon plate hides while the panel shows its own. */}
                {!open && (
                  <a
                    className="btn btn-primary btn-icon"
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t.nav.whatsappLong}
                  >
                    <WhatsappIcon size={18} />
                  </a>
                )}
                <button
                  ref={menuButtonRef}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-md text-ink"
                  onClick={() => setOpen((value) => !value)}
                  aria-label={open ? t.nav.close : t.nav.menu}
                  aria-expanded={open}
                  aria-controls="nav-panel"
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom hairline, only once the page has scrolled. */}
          {scrolled && <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-line" />}
        </div>

        {open && (
          <div id="nav-panel" className="h-[calc(100dvh_-_56px)] overflow-y-auto md:hidden" style={{ background: PANEL_BG }}>
            {/* The panel fills the viewport under the bar, so the page (and its own WhatsApp
                plate) never shows through. .shell stretches to the panel's full height, and past
                it when the content has to scroll, so the rule runs the whole way and a tap on the
                empty area below the content closes the menu; taps on links and chips are untouched. */}
            <div
              className="shell min-h-full pt-2 pb-6"
              onClick={(event) => {
                if (event.target === event.currentTarget) close();
              }}
            >
              {/* The rule continues through the panel; the panel's content sits right of it,
                  aligned with the page's content column. */}
              <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-line-strong" style={{ left: SPINE_LEFT }} />
              <div className="flex flex-col pl-[calc(var(--label-w)_+_1px_+_var(--gap-r))]">
                <ul role="list" className="flex flex-col">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={close}
                        className="-mx-2 flex h-12 items-center rounded-md px-2 font-display text-[1.375rem] leading-none font-medium text-ink aria-[current=true]:bg-accent-soft"
                        aria-current={active === link.href ? "true" : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-2">{chips}</div>
                <a className="btn btn-primary mt-6" href={whatsapp} target="_blank" rel="noreferrer">
                  <WhatsappIcon size={16} />
                  {t.nav.whatsappLong}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
