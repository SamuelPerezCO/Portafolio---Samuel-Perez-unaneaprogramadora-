# UNP Software — Final screen specification

## 1. Direction

UNP's logo is three things on a navy field: a cut white disc, a thin vertical rule, and two lines of tracked capitals. The site is that lockup stretched into a page. The mark heads the page in the nav, the rule runs the full height as a single 1px spine, and the traced wordmark closes the page in a footer that keeps the logo's navy in both themes. Left of the rule is identification only (section names, client, sector, status, stack, place, phone, the founder's photo), set in the wordmark's tracked-caps voice; right of the rule is content only (one headline, real screenshots, plain Spanish prose). The chromatic accent is zero: the CTA is the logo's own figure/ground (white plate on navy, navy plate on paper), links underline, and the only glyph system is a 12px disc that is either filled (live) or a ring (pending), always beside the word that says the same thing. Navy is not "dark mode" here because the ground, the surfaces and the hero field are sampled from the logo file and the page ends on that exact ground.

**Winner: "La regla" (the lockup stretched into a page).** The three judges split 1-1-1; La regla wins because the brief's failure mode is "generic", and it is the only concept whose skeleton is the logo itself rather than a layout the logo decorates. **Grafted:** from *La ficha* — the hero's spec-sheet facts (SEDE / PARA / RESPONDE) moved into the label column, the `kind` tag beside every Servicios proof, the WhatsApp plate in the nav with glyph + literal word, phone and email as selectable text, the empty-form testimonial slots (QUIÉN / EMPRESA / DIJO), and the ficha's key | rule | value grammar; from *Hoja de datos* — every count computed from content.ts, the ESTADO row on each case, the "mensaje que se enviará" preview in Contacto, the two-layer light-theme shot shadow, the traced SVG wordmark instead of live type. **Dropped from La regla:** the cut-disc glyph state, the cut-corner frame, the retypeset wordmark, the circle avatar, the white spine, the italic bracketed placeholders, numbers in prose intros.

**Every listed risk, resolved:**
- Timeline/sidebar read → no nodes ever touch the spine; the label column carries facts in every section (per-row `kind` labels in Más trabajo, sticky fichas in Proyectos); spine is 1px `--line-strong`, never `--accent`, never thicker.
- Geologica SHRP looking playful → SHRP capped at 50 (h1/h2), 25 (h3/h4), 0 everywhere else; weights 600/500 only.
- Retypeset wordmark → `unp-wordmark.svg` / `unp-mark.svg` inlined as React components; the wordmark is never live type anywhere.
- Flat "dark mode with a blue tint" → hero paints the logo's sampled vignette (#133151 → #0d2645 → #061630), surfaces are the logo's #0d2645, body weight 500 on dark, CTA plate is the brightest element on screen.
- Uppercase at volume → one label style (0.8125rem / 500 / 0.18em / ink-2), never bold, never more than two lines; label-column *values* are sentence-case Alegreya Sans, never caps.
- 52° glyph and corner cut → cut state and corner cut removed; two glyph states (filled / ring) at 12px.
- Abrupt navy footer in light → the spine is navy on paper and turns white on entering the footer; footer top edge carries a 1px `--line` (footer-scoped dark value); 64px of navy above the lockup.
- Empty testimonial section reads unfinished → h3-sized statement, 48/64px rhythm, slots 120px tall, literal `RESERVADO · 01/03`, computed `0 de 3` in the label column, `aria-label`.
- Casual founder photo → square record frame (`.shot`), `object-position: 50% 15%`; the spec marks the photo as content to replace with a plain portrait; the layout does not change when it is.
- Low-affordance CTA → plate carries the WhatsApp glyph + the word "WhatsApp"; plate in nav (≥768) and an icon plate in the mobile bar; phone number printed as text in Contacto; max two WhatsApp controls per viewport; no fixed bottom bar.
- Nav without WhatsApp (judge 2) → added. 291px mobile measure → 307px (spine 8px inside a 16px padding, 12px gap to content). Contact facts in tracked caps → values in 0.9375rem Alegreya Sans, 12rem column, no mid-word breaks. Quote-shaped placeholders → form slots. 10px glyphs → 12px, two states. White spine → `--line-strong`. Tall sticky fichas → sticky only at `min-height: 700px`.
- Thin Alegreya on navy → `--body-weight` 400 light / 500 dark; `-webkit-font-smoothing: auto` in dark; body 18px from 768.
- Section indices, coordinates, build date, mono → none of them exist on this page.
- `MORE_WORK.group` / `MORE_WORK_GROUPS` do not exist in content.ts → MoreWork.tsx is rewritten without groups.
- Servicios proof mapping → keep content.ts's existing `proof` anchors; add a per-service `stack` listing only technologies in the referenced project (values given in §7).

## 2. Tokens

CSS custom properties on `:root` (light) and `:root[data-theme="dark"]` (dark). `next-themes` default is **dark** (`defaultTheme="dark"`, `enableSystem={false}`). The `<footer>` re-declares the dark set on itself in both themes. Ratios computed with the WCAG 2 formula.

| Token | Dark | Light | Role | Contrast vs its ground |
|---|---|---|---|---|
| `--ground` | `#061630` | `#f3f6fb` | Page field. Dark sits between the logo's corner (#020e22) and centre (#0d2645); light is paper tinted with the same hue. | — |
| `--surface` | `#0d2645` | `#ffffff` | Raised plane: the logo's centre navy. `.shot` backing, message-preview panel, filled testimonial, nav backdrop (at 92%). | 1.18 / 1.08 (bounded by `--line`, never by colour alone) |
| `--surface-2` | `#133151` | `#e6ecf5` | One step up: the logo's lightest sampled navy. Hero-field top stop, hover plane for rows. | 1.36 / 1.10 |
| `--ink` | `#eef3fa` | `#071a34` | Headlines, body, values, the mark and wordmark (`currentColor`), focus ring in light. | 16.17 / 16.07 (on surface 13.65 / 17.41; on hero top stop 11.88) |
| `--ink-2` | `#a7b7cc` | `#4a5d7a` | Label keys, captions, descriptions in Más trabajo, placeholder dashes, nav links at rest. | 8.83 / 6.18 (on surface 7.45 / 6.69; on hero top 6.49) |
| `--line` | `#22405f` | `#c9d5e6` | Hairlines only: grid cells, built-list rows, repo rows, `.shot` border (light), dashed slot borders, footer top edge. Never a control's only boundary. | 1.69 / 1.37 (decorative) |
| `--line-strong` | `#7f95b3` | `#5a6f92` | **The spine**, the nav segment, the key-rule inside every ficha, outline-button border, link underline at rest, `.shot` border in dark. | 5.88 / 4.70 (≥3:1 for UI boundaries in both) |
| `--accent` | `#f9fcff` | `#0d2645` | Plate CTA fill (WhatsApp only), footer spine segment, focus ring, selection background. The mark's white / the logo's navy. | 17.50 / 14.05 |
| `--accent-ink` | `#061630` | `#ffffff` | Text and glyph on the plate; selection text. | 17.50 / 15.21 vs `--accent` |
| `--accent-soft` | `#142a4b` | `#e4eaf3` | Hover/pressed fill of outline controls and the ES/EN chip; `aria-current` nav link background. | 1.26 / 1.12 (ink on it 12.88 / 14.39; ink-2 on it 7.03 / 5.53) |
| `--shadow` | `none` | `0 1px 2px rgba(7,26,52,.06), 0 12px 32px -16px rgba(7,26,52,.18)` | `.shot` and preview panel lift on paper; nothing on navy. | — |

Extras (not themed): `--body-weight: 400` light / `500` dark; `--label-w: 12rem` (≥1024) / `8px` (<1024); `--pad: 16px / 32px / 48px` by breakpoint; `--gap-l: 24px` (label → rule); `--gap-r: 32px` (≥1024) / `12px` (<1024) (rule → content). Tailwind: expose all colour tokens through `@theme inline` as now (`--color-ground`, `--color-surface`, …), renaming `paper→ground`, `card→surface`.

## 3. Typography

**Families (next/font/google, in `layout.tsx`):**

```ts
const display = Geologica({ subsets: ["latin"], axes: ["SHRP"], display: "swap", variable: "--font-display" }); // variable wght 100–900 + SHRP 0–100
const body = Alegreya_Sans({ subsets: ["latin"], weight: ["400","500","700"], style: ["normal","italic"], display: "swap", variable: "--font-body" });
```
No third family. No monospace. Numbers everywhere: `font-variant-numeric: lining-nums tabular-nums`. Remove Bricolage Grotesque and Source Serif 4.

**Scale (mobile 360–767 → desktop ≥1024; 768–1023 uses desktop sizes for body/lead/small and mobile sizes for headings):**

| Style | Family / weight | Size (rem) | Line-height | Tracking | SHRP | Colour · measure |
|---|---|---|---|---|---|---|
| h1 (hero only) | Geologica 600 | 2.25 → 4 | 1.08 → 1.02 | −0.02em → −0.025em | 50 | ink · max 16ch |
| h2 (section name, label column) | Geologica 500 | 0.75 → 0.8125 | 1.2 | +0.18em, uppercase | 0 | ink |
| statement (`.statement`, the section's sentence in the content column; Contacto's question) | Geologica 600 | 1.75 → 2.5 | 1.12 → 1.06 | −0.015em → −0.02em | 50 | ink · max 22ch |
| h3 (case titles, service names, founder name) | Geologica 500 | 1.375 → 1.75 | 1.2 → 1.15 | −0.01em | 25 | ink · max 22ch |
| h4 (repo titles) | Geologica 500 | 1.125 → 1.25 | 1.3 | 0 | 25 | ink |
| lead (hero sub, case problem, contact intro) | Alegreya Sans `--body-weight` | 1.125 → 1.25 | 1.55 → 1.5 | 0 | — | ink · max 36rem |
| body | Alegreya Sans `--body-weight` | 1.0625 → 1.125 | 1.6 | 0 | — | ink · max 40rem |
| result (`En qué quedó` line) | Alegreya Sans 700 | body size | 1.5 | 0 | — | ink |
| small (captions, descriptions, notes, colophon) | Alegreya Sans `--body-weight` | 0.9375 | 1.5 | 0 | — | ink-2 · captions italic |
| label (`.label`: ficha keys, slot headers, kind tags, stack lines, ES/EN chip) | Geologica 500 | 0.75 → 0.8125 | 1.2 | +0.18em, uppercase | 0 | ink-2 · never bold · ≤ 2 lines |
| value (`.value`: label-column values, ficha `dd`) | Alegreya Sans 500 | 0.9375 | 1.45 | 0 | — | ink · sentence case · tabular-nums |
| button | Geologica 500 | 0.9375 | 1 | 0 | 0 | padding 12px 18px · radius 6px |
| nav link | Geologica 500 | 0.9375 | 1 | 0 | 0 | ink-2 → ink |

**Rules.** Uppercase exists only in `.label` and the h2 section names; buttons, nav links, headings, values and prose are sentence case. The display face is allowed in h1–h4, `.statement`, `.label`, buttons and nav; all prose and all values are Alegreya Sans. Italic is allowed only for screenshot captions. The wordmark is never typed; it is the traced SVG. SHRP is 50 / 25 / 0 by level and never higher. Dark theme sets `body { -webkit-font-smoothing: auto }`; light keeps `antialiased`. Measures: body ≤ 40rem, lead ≤ 36rem, h1 ≤ 16ch, statement ≤ 22ch, captions ≤ 60ch, description in Más trabajo ≤ 46rem.

## 4. Layout grid

- **Container `.shell`:** `max-width: 1200px; margin-inline: auto; padding-inline: var(--pad)` — 16px (<768), 32px (768–1023), 48px (≥1024). Position relative (the spine is positioned against it).
- **Page template (≥1024), applied per section as `.sec`:** `grid-template-columns: var(--label-w) minmax(0,1fr)` with `--label-w: 12rem`. Label cells (`.lc`) have `padding-right: 24px` (the lockup's 0.24D gap); content cells (`.cc`) have `padding-left: calc(1px + 32px)` (0.31D gap). Content column width at max = 1200 − 96 − 192 − 33 = **879px**; at 1024 = 703px.
- **Below 1024:** one column. `.sec { grid-template-columns: 1fr; padding-left: calc(var(--label-w) + 1px + 12px) }` with `--label-w: 8px`; label cells stack above their content cells in DOM order. Content width at 360 = 360 − 16 − 8 − 1 − 12 − 16 = **307px**; at 768 = 699px.
- **Content sub-grid** (inside `.cc` where a section needs 2-up): 12 columns, 24px gutters, ≥1024 only. Used by Servicios (6/6), Testimonios (4/4/4), Contacto (7/5).
- **Section rhythm:** `padding-block: 64px` mobile / `96px` desktop; Testimonios 48px / 64px; hero `padding-top: 96px / 128px` (under the fixed nav) and `padding-bottom: 64px / 96px`. Sections have **no margin** between them (the spine must be continuous) and no horizontal borders; the section name in the label column is the separator. Cases inside Proyectos are 96px apart (64px mobile) with a 1px `--line` hairline that spans the content column only.
- **Radii:** 6px for controls, panels, photo and `.shot`; nothing is a pill, nothing is 0. Circles exist only in the mark and the status glyph.
- **Anchors:** `#top` (hero), `#servicios`, `#proyectos`, `#mas-trabajo`, `#testimonios`, `#nosotros` (rename from `#sobre-mi`), `#contacto`; case articles use their slug; repo rows use their slug. All get `scroll-margin-top: 5rem`.

## 5. Spacing scale

Eight steps: **4 · 8 · 12 · 16 · 24 · 32 · 64 · 96** (px). 48 appears only as container padding (2 × 24).

| Step | Where |
|---|---|
| 4 | glyph-to-word gap, underline offset, icon-to-text in links |
| 8 | button icon gap, gap between a `.label` key and its value, slot rows |
| 12 | mobile rule→content gap, button padding-block, testimonial slot gap, ficha row padding-block |
| 16 | mobile page padding, gap between stacked shots, panel padding (mobile), gap h3→shot |
| 24 | label→rule gap, sub-grid gutter, cell padding in Servicios, panel padding (desktop), gap statement→content |
| 32 | rule→content gap (desktop), gap between label-column facts, gap between prose blocks (lead→built→result) |
| 64 | mobile section padding, gap between Proyectos cases (mobile), footer padding-top |
| 96 | desktop section padding, gap between Proyectos cases (desktop) |

## 6. Signature element — La regla

**What.** The lockup's vertical rule extended to a 1px spine that runs from the nav's mark to the footer's wordmark. Left of it: identification. Right of it: content. It is the logo doing its own job — separating the sign from the words — at page scale.

**Markup (one section):**
```html
<section id="proyectos" class="sec-wrap">           <!-- position: relative; padding-block -->
  <div class="shell">                                <!-- max-width + padding-inline; position: relative -->
    <span class="spine" aria-hidden="true"></span>   <!-- the rule -->
    <div class="sec">                                <!-- grid: label | content -->
      <div class="lc"><h2 class="sec-name">Proyectos</h2><p class="label">…</p><p class="value">…</p></div>
      <div class="cc"><p class="statement">…</p></div>
      <div class="lc"><dl class="ficha-l">…</dl></div>          <!-- one lc/cc pair per case -->
      <article class="cc" id="dashboard-gps">…</article>
    </div>
  </div>
</section>
```

**CSS behaviour:**
```css
.sec-wrap { position: relative; padding-block: 96px; }             /* 64px < 1024 */
.shell    { position: relative; max-width: 1200px; margin-inline: auto; padding-inline: var(--pad); }
.spine    { position: absolute; top: calc(-1 * var(--sec-pad)); bottom: calc(-1 * var(--sec-pad));
            left: calc(var(--pad) + var(--label-w)); width: 1px; background: var(--line-strong);
            pointer-events: none; }                               /* --sec-pad = the section's padding-block */
.sec      { display: grid; grid-template-columns: var(--label-w) minmax(0,1fr); }
.lc       { padding-right: 24px; }
.cc       { padding-left: 33px; min-width: 0; }
@media (max-width: 1023.98px) {
  .sec { grid-template-columns: 1fr; padding-left: calc(var(--label-w) + 13px); }
  .lc, .cc { padding: 0; }
}
```
Because every section uses `.shell` with the same `--pad` and `--label-w`, `left` resolves to the same x in every section; sections have zero margin, so the segments abut and read as one line. The **nav** (fixed) draws its own `.spine` inside its `.shell` (top 0, bottom 0 of the 64px bar; on mobile top = mark bottom) so the line passes through the bar at any scroll position. The **hero's** spine is the only animated segment (§8). The **footer** does not use the absolute spine: its lockup row is a 3-column grid `12rem 1px 1fr` whose middle cell (`grid-row: 1; background: var(--accent)`) is white and ends exactly at the bottom of the 100px lockup row — the rule terminates as the logo's own rule.

**Rules of the spine.** Nothing sits on it: no dots, ticks, nodes, numbers, progress fill or scroll cursor. Its colour is `--line-strong` everywhere except the footer segment (`--accent`). Left of it only `.sec-name`, `.label`, `.value`, `.glyph`, the founder photo and the mark; right of it never a `.label` except inside a ficha, a stack line, a kind tag or a slot header.

**Where it appears.** Every viewport, every section, both themes. On mobile it moves to x = 24px (8px inside the 16px padding) and the nav's mark (28px) sits centred on its head — the lockup's stacked form; labels stack above content inside the content column.

**Reduced motion.** The hero segment renders complete on first paint (`animation: none`); nothing else about the spine ever moves.

## 7. Sections

Common: every section is a `.sec-wrap > .shell > .spine + .sec`. The h2 of each section is the label-column name (`.sec-name`, uppercase, ink). Section statements are `<p class="statement">`. Counts below are computed at render: `CASE_STUDIES.length`, `MORE_WORK.length`, `TESTIMONIALS.filter(t => t[lang].quote).length`, `SERVICES` proofs resolved against `CASE_STUDIES` / `MORE_WORK` slugs. **No numeral may appear in a prose string in content.ts** (rewrite `services.intro`, `work.intro`, `more.intro` without "cuatro/nueve").

**Data changes to `content.ts` (do all of them):**
- `CaseStudy.status: "live" | "published" | "development"` → dashboard-gps `live`, arribaya `published`, odontologia `live`, el-colombiano `development`. `CONTENT.*.work.labels` gains `status: "Estado"/"Status"`, `year: "Año"/"Year"`, and `statusValues: { live: "En uso"/"In use", published: "Publicado"/"Published", development: "En desarrollo"/"In development" }`. El Colombiano's `kind` becomes "Proyecto propio" / "Own project".
- `MoreWorkItem.kind: "product" | "team" | "tool" | "experiment"` → mvp-crm product; agente-whatsapp team; reporte product; claude-token-counter tool; bot-telegram-tracker product; calendar-telegram-api tool; face-liveness-check experiment; follow-up tool; bot-agendar-clase tool. `CONTENT.*.more.kinds` = Producto propio / Trabajo en equipo / Herramienta / Prueba técnica (EN: Own product / Team work / Tool / Technical test). Remove any reference to `MORE_WORK_GROUPS` or `group`.
- `Service.stack: string[]` (only technologies present in the referenced project) → web `["Django","JavaScript","SVG"]`; data `["Django","PostgreSQL","Redis","Chart.js"]`; agents `["Node.js","TypeScript","Fastify","Gemini"]`; crm `["Django","htmx","WhatsApp Cloud API"]`. `proof` anchors stay as they are. `CONTENT.*.services.proof` label becomes "Lo prueba" / "Proof".
- `CONTENT.*.hero` gains `facts: { seat: { key, value }, audience: { key, value }, replies: { key, value } }` and `shotStatus` is derived from `CASE_STUDIES[0]`; drop `photoAlt`/`photoCaption` (founder photo is not in the hero).
- `CONTENT.*.contact` gains `previewLabel` ("Mensaje que se enviará" / "Message that will be sent") and `previewHelp` (one sentence: opens in WhatsApp, editable before sending).
- `CONTENT.*.testimonials` gains `slot: "Reservado"/"Reserved"`, `who`, `company`, `said` keys, and `counter: "de"/"of"`; keep `intro`.
- `CONTENT.*.about` gains `noteLabel` ("Nota del fundador" / "Founder's note") and `nowLabel` ("Ahora mismo" / "Right now").
- New `src/components/Brand.tsx` exporting `UnpMark` and `UnpWordmark` as inline SVGs (paths copied from `public/brand/unp-mark.svg` 212×212 and `unp-wordmark.svg` 451×157), `fill="currentColor"`, `aria-hidden`. New `WhatsappIcon` in `icons.tsx` (Simple Icons "whatsapp" path, 24 viewBox, `currentColor`). New `Glyph` component: `<span class="glyph glyph-on|glyph-off" aria-hidden>` — 12px circle, `glyph-on` filled `currentColor`, `glyph-off` 1.5px ring.

### 7.1 Nav

```
DESKTOP ≥1024 · fixed · 64px · --ground at 92% + backdrop-blur(12px) · bottom 1px --line only after scrollY > 8
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│            [◐ 32]  │ [UNP/SOFTWARE svg 24h]   Servicios  Proyectos  Nosotros  Contacto   [EN] [☾]  [◉ WhatsApp] │
└────────────────────┼─────────────────────────────────────────────────────────────────────┘
                     │  ← nav's own spine segment, same x as the page spine
```
- Label cell: `UnpMark` 32px, right-aligned (24px to the rule), `color: var(--ink)`. Content cell: `UnpWordmark` height 24px (width ≈ 69px) at 32px from the rule; mark + wordmark are one `<a href="#top" aria-label={t.nav.home}>`.
- Links: Geologica 500, 0.9375rem, sentence case, ink-2 → ink on hover; `aria-current="true"` (set by the page's single IntersectionObserver, threshold 0.4, rootMargin `-64px 0px -40% 0px`) renders ink text on an `--accent-soft` pill-less 6px-radius background with 6px 10px padding.
- Controls: ES/EN chip = `.label` in a 1px `--line-strong` border, 6px radius, 32px tall, hover fill `--accent-soft`; theme toggle = icon-only (lucide `Sun`/`Moon` 18px), 36×36 hit area, same border; WhatsApp = `.btn.btn-primary` compact (10px 14px padding) with `WhatsappIcon` 16 + the word "WhatsApp" (`t.nav.whatsapp`, new key), `href={whatsappUrl(lang)}`, shown from 768px.
- Reuse: the `useSyncExternalStore` scroll/mounted pattern from `Nav.tsx`; replace links array with four anchors in page order.

**360px (56px bar):** `[◐ 28 centred on x=24] [wordmark 21h]  … [◉ 40×40 icon plate, aria-label "Escribir por WhatsApp"] [≡ 40×40]`. The spine segment runs from the mark's bottom (y=42) to the bar's bottom. Open panel: ground at 96%, links at 1.375rem stacked (48px rows), then ES/EN + theme chips, then a full-width `.btn-primary` "Escribir por WhatsApp" (the icon plate in the bar hides while the panel is open so there is one plate on screen). Body scroll locked while open; `Escape` closes.

### 7.2 Hero

```
DESKTOP
 SEDE                │  Software a la medida para              h1 4rem · SHRP 50 · max 16ch
 Envigado, Antioquia │  negocios que ya operan.
 · UTC−5             │
 PARA                │  Paneles, CRMs, agentes de WhatsApp e        lead · max 36rem
 Pymes y equipos de  │  integraciones para pymes de Colombia y
 operaciones ·       │  LatAm. Lo construimos y lo dejamos
 Colombia y LatAm    │  funcionando.
 RESPONDE            │
 Samuel Pérez Serna, │  [◉ Escribir por WhatsApp]   Ver los proyectos ↓
 fundador →          │
                     │
 ● EN USO            │  ┌───────────────────────────────────────────────┐
 Rastrelital ·       │  │ dashboard-gps.webp · .shot · 879px wide         │
 Expreso Brasilia    │  │                                                 │
 2026                │  └───────────────────────────────────────────────┘
                     │  Captura real · ocupación del último mes → Ver el caso   small italic + .link
```
- Grid rows: row 1 = facts (lc) / text (cc); row 2 = shot identification (lc, `align-self: start`) / shot + caption (cc). DOM order is text → shot-id → shot → facts; desktop places them with `grid-area`.
- Facts: three key/value pairs (`.label` key, `.value` value), 32px apart. RESPONDE's value is `<a href={whatsappUrl(lang)}>` underlined (`.link` rules), `FOUNDER.name` + role. Shot-id: `Glyph on` + `statusValues[CASE_STUDIES[0].status]` on one label line, then `CASE_STUDIES[0][lang].kicker` and `year` as values; the whole block links to `#dashboard-gps`.
- Hero background (dark only): `.hero-field { background: radial-gradient(ellipse 90% 70% at 50% 35%, #133151 0%, #0d2645 45%, #061630 100%) }` on the `.sec-wrap`, one static layer, no blur, no second layer. Light: none.
- Buttons: primary `.btn-primary` with `WhatsappIcon` 16; secondary is a `.link`-style text link with lucide `ArrowDown` 15 (one plate on screen). `t.hero.ctaPrimary` / `ctaSecondary` are swapped in meaning: primary = WhatsApp.
- Shot: `next/image`, `priority`, `sizes="(min-width:1024px) 879px, 100vw"`, `.shot`; caption `small italic` + `.link` "Ver el caso" → `#dashboard-gps`.
- Reuse: `.rise` classes on text blocks (retimed, §8). Replace the founder photo block entirely.
- Copy structure: h1 ≤ 9 words, ≤ 3 lines at 4rem; lead ≤ 40 words, names the four service families in words; three fact values ≤ 8 words each; caption = `CASE_STUDIES[0][lang].caption`.

**360px:** h1 (2.25rem) → lead → `.btn-primary` full width → "Ver los proyectos ↓" text link on its own line → shot-id line (`● En uso · Rastrelital · 2026`, label style, one line) → shot full width → caption → facts as a compact ficha (`.ficha` key 5.5rem | rule | value, three rows) 32px below. Hero padding-top 96px.

### 7.3 Servicios

```
DESKTOP
 SERVICIOS           │  Cuatro cosas que construimos, y el trabajo que lo prueba.     statement 2.5rem
 LO PRUEBA           │
 2 casos ·           │  Sitios y aplicaciones web         │ Paneles de datos e integraciones      h3
 2 repositorios      │  Sitios que el negocio administra  │ Tomamos lo que ya entregan tus…       body
                     │  solo y aplicaciones a la medida…  │
                     │  DJANGO · JAVASCRIPT · SVG          │ DJANGO · POSTGRESQL · REDIS · CHART.JS  label
                     │  LO PRUEBA  Clínica Dra. Paula →   │ LO PRUEBA  Panel de flota · Rastrelital →
                     │             TRABAJO PARA CLIENTE    │             TRABAJO PARA CLIENTE        label ink-2
                     │────────────────────────────────────┼──────────────────────────────────────  1px --line
                     │  Agentes de WhatsApp y bots…       │ CRMs y herramientas internas
                     │  …                                  │ …
                     │  NODE.JS · TYPESCRIPT · FASTIFY…    │ DJANGO · HTMX · WHATSAPP CLOUD API
                     │  LO PRUEBA  Agente de ventas →      │ LO PRUEBA  CRM omnicanal →
                     │             TRABAJO EN EQUIPO       │             PRODUCTO PROPIO
```
- Label column: `.sec-name` + key `LO PRUEBA` + computed value `{casesCount} casos · {reposCount} repositorios` (resolve each `SERVICES[i].proof` slug against `CASE_STUDIES` then `MORE_WORK`).
- Content: statement (≤ 12 words), then a 2×2 sub-grid (6/6, 24px gutter) drawn only with hairlines: cells 3–4 `border-top: 1px --line`, cells 2 and 4 `border-left: 1px --line` with `padding-left: 24px`; cell padding-block 24px. No cards, no icons, no numbers, no hover fill.
- Cell: h3 (≤ 5 words) → body (≤ 30 words, "we" voice) → stack `.label` (`service.stack.join(" · ")`) → proof row: `.label` "LO PRUEBA" + `.link` to `service.proof` with `proofLabel` (lucide `ArrowRight` 15) → kind tag `.label` ink-2 (case: `cs[lang].kind`; repo: `t.more.kinds[item.kind]`). Link hit area ≥ 44px tall.
- Replace: no existing Services component; build `Services.tsx`.

**360px:** one column; cells separated by `border-top: 1px --line` (no left borders), padding-block 24px; the proof row wraps link and kind tag on two lines.

### 7.4 Proyectos

```
DESKTOP (one case; four stack, 96px + content-width hairline between)
 PROYECTOS           │  Trabajos con capturas reales, no maquetas.                     statement
 4 casos ·           │
 capturas reales     │
                     │
 (sticky top 5.5rem) │  Panel de ocupación para una flota de buses                     h3 1.75rem
 CLIENTE             │  ┌──────────────────────────────────────────────────────────┐
 Rastrelital, para   │  │ dashboard-gps.webp · .shot                                 │
 la flota de Expreso │  └──────────────────────────────────────────────────────────┘
 Brasilia            │  Captura real · ocupación del último mes, septiembre de 2026   small italic
 SECTOR              │  ┌──────────────────────────────────────────────────────────┐
 Transporte de       │  │ dashboard-gps-mapa.webp · .shot (only when a 2nd exists)   │
 pasajeros           │  └──────────────────────────────────────────────────────────┘
 TIPO                │  Captura real · mapa de la flota                               small italic
 Trabajo para cliente│
 ESTADO              │  La empresa quería saber qué tan llenos van sus buses…          lead · 36rem
 ● En uso            │
 STACK               │  LO QUE CONSTRUIMOS                                             label
 Python · Django ·   │  Reconstrucción de cada viaje a partir de las rachas…           body rows,
 PostgreSQL ·        │  ─────────────────────────────────────────────                  1px --line between,
 Chart.js · Leaflet  │  Atribución de cada viaje a la empresa cliente…                 no bullets
 · Redis · Vercel    │  ─────────────────────────────────────────────
 AÑO                 │  Caché en Redis que precalienta las consultas…
 2026                │
                     │  EN QUÉ QUEDÓ                                                   label
                     │  Hoy el panel reporta la ocupación real de 28 unidades…         result 700
                     │  [GitHub] Ver el código    [↗] Ver en vivo                      .link (only if repo/demo)
```
- Label column per case: `<dl class="ficha-l">` with keys CLIENTE, SECTOR, TIPO, ESTADO, STACK, AÑO (`t.work.labels`), values `.value`; ESTADO = `Glyph` (`on` for live/published, `off` for development) + `statusValues[status]`. `position: sticky; top: 5.5rem` only under `@media (min-width:1024px) and (min-height:700px)`. No hairlines in the label column.
- Content: h3 (≤ 22ch) → primary `.shot` + caption → secondary `.shot` + caption when a second image exists (add `image2?: { src, width, height, caption }` to `CaseStudy`: dashboard-gps → `dashboard-gps-mapa.webp`, arribaya → `arribaya-puestos.webp`; both full content width, uncropped, 16px apart) → problem as lead → `LO QUE CONSTRUIMOS` label + built rows (`padding-block: 12px`, `border-top: 1px --line` from the second row) → `EN QUÉ QUEDÓ` label + result → links row. Prose blocks max 40rem.
- `.shot`: `border: 1px solid var(--line)` light / `color-mix(in srgb, var(--line-strong) 60%, var(--ground))` dark; `border-radius: 6px; background: var(--surface); box-shadow: var(--shadow); overflow: hidden`. No hover state.
- Reuse: `Work.tsx` structure, `.shot`, `.link`, `GithubIcon`, existing ids and alts. Replace: `.ficha` (moves to the label column as `.ficha-l`), the accent-dot bullets (hairline rows), `display-tight`, the `border-t border-ink` article header (kicker moves into CLIENTE; the year into AÑO).
- Copy structure per case (all existing): title, client, sector, kind, status word, stack list, year, problem ≤ 60 words, 3–4 built items ≤ 30 words each, result ≤ 40 words, one caption per image.

**360px:** section name + count line → statement (1.75rem) → per case: h3 → shot(s) + captions → ficha as `.ficha` (key 5.5rem | rule | value; STACK wraps) → lead → built rows → result → links. Cases 64px apart with a hairline.

### 7.5 Más trabajo

```
DESKTOP
 MÁS TRABAJO         │  Productos propios, trabajo en equipo y herramientas que usamos.   statement
 9 repositorios ·    │
 GitHub              │
                     │──────────────────────────────────────────────────────────────────  1px --line
 PRODUCTO PROPIO     │  CRM omnicanal para comercios                      Probarlo ↗   Código
 2026                │  Bandeja unificada para WhatsApp, Instagram…                       small ink-2
                     │  DJANGO · HTMX · POSTGRESQL · WHATSAPP CLOUD API                  label
                     │──────────────────────────────────────────────────────────────────
 TRABAJO EN EQUIPO   │  Agente de ventas por WhatsApp para negocios de comida      Código
                     │  …
                     │──────────────────────────────────────────────────────────────────
 … seven more rows (reporte, claude-token-counter, bot-telegram-tracker,
   calendar-telegram-api, face-liveness-check, follow-up) …
 HERRAMIENTA         │  Bot que agenda clases solo                                  Código
 2025                │  …
```
- Label column per row: kind tag `.label` (from `t.more.kinds[item.kind]`), and the year as `.value` **only when it differs from the previous row** (ledger logic: "2026" on the first row, "2025" on the last).
- Rows: `border-top: 1px --line`, `padding-block: 20px`, grid `minmax(0,1fr) auto` — left: h4 (≤ 8 words) / description small ink-2 (≤ 200 chars, max 46rem) / stack `.label`; right: links top-aligned, "Probarlo" (`ArrowUpRight` 15) only when `live` exists, "Código" (`GithubIcon` 15). No hover fill, no thumbnails. Each `<li id={slug}>` with `scroll-margin-top: 5rem`.
- Reuse: row structure of `MoreWork.tsx`. Replace: the groups loop and `MORE_WORK_GROUPS` import (do not exist); `text-accent` on Probarlo (no chroma; `.link` in ink).

**360px:** kind tag + year (when it changes) as one label line above the row; then h4, description, stack line, links row (44px tall).

### 7.6 Testimonios

```
DESKTOP (padding-block 64px)
 TESTIMONIOS         │  Lo que dirán los clientes.                                         statement at h3 size
 ○ PENDIENTE         │  Estamos recogiendo las palabras de quienes ya usan…                small ink-2
 0 de 3              │
                     │  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
                     │    RESERVADO · 01/03      RESERVADO · 02/03      RESERVADO · 03/03    label
                     │    QUIÉN   │ —            QUIÉN   │ —            QUIÉN   │ —          key | rule | —
                     │    EMPRESA │ —            EMPRESA │ —            EMPRESA │ —
                     │    DIJO    │ —            DIJO    │ —            DIJO    │ —
                     │  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
```
- Label column: `.sec-name`, `Glyph off` + `PENDIENTE` label, computed `{filled} de {total}`.
- Slots (`.slot`): `border: 1px dashed var(--line); border-radius: 6px; padding: 16px; min-height: 120px`, 4/4/4 sub-grid with 12px gutters; header `.label` `{t.testimonials.slot} · {index}/{total}`; three `.ficha` rows with em-dash values in ink-2; `aria-label="Testimonio reservado {i} de {n}"`. No quotation marks, no italic, no avatar, no name text, no stars.
- Filled state (when `placeholder === false` and quote non-empty): solid `--line` border, `--surface` background, quote as body ink, name as `.value`, role as small; the counter increments. This is the only styling difference, so real quotes and slots share one component.
- Statement uses the h3 scale on purpose; the section stays short.

**360px:** section name + `○ PENDIENTE · 0 de 3` on one line → statement → intro → three slots stacked, 12px apart.

### 7.7 Nosotros

```
DESKTOP
 ┌──────────────┐    │  Hoy UNP es una persona; el plan es un equipo.                statement 2.5rem
 │ samuel.jpg   │    │
 │ 168×168 .shot│    │  UNP Software es una empresa de desarrollo de software en…     body · 40rem ("we")
 └──────────────┘    │
 NOSOTROS            │  NOTA DEL FUNDADOR                                              label
 FUNDADOR            │  Hoy UNP es una persona: yo. Respondo el WhatsApp, escribo…    body ("I")
 Samuel Pérez Serna  │
 SEDE                │  ○ AHORA MISMO                                                  glyph off + label
 Envigado, Antioquia │  Un CRM omnicanal y un agente de ventas por WhatsApp.          small
                     │
                     │  BACKEND      │ Python · Django · Django REST Framework · Node.js · TypeScript · Fastify
                     │  DATOS        │ PostgreSQL · SQLite · Prisma · Redis · APIs REST · Chart.js
                     │  FRONTEND     │ HTML · CSS · JavaScript · htmx · Svelte · Next.js
                     │  HERRAMIENTAS │ Git · Vercel · Supabase · Neon · Postman · Figma        .ficha (key 9rem)
```
- Label column: photo first (`next/image`, 168×168, `.shot`, `object-fit: cover; object-position: 50% 15%`, alt `t.about.photoAlt`), then `.sec-name`, FUNDADOR → name, SEDE → place. **Content note:** the current photo is casual for the positioning; replace with a plain portrait on a navy or white ground. The slot is a square record frame, not a circle, so a replacement drops in without layout change.
- Content: statement = the honest growth line (≤ 12 words, "we") → `about.p1` (≤ 80 words, "we") → `NOTA DEL FUNDADOR` label + `about.founderNote` (≤ 60 words, "I") → `○ AHORA MISMO` label + `about.now` small → stack `.ficha` (4 rows, key column 9rem, 1px `--line-strong` rule between key and value, hairline `--line` between rows). Drop `about.p2` or fold it into `p1` under 80 words.
- Reuse: `STACK` loop from `About.tsx`. Replace: the `border-l-2 border-accent` now-line (glyph + label instead), section id.

**360px:** photo 120×120 beside the name/role block (two columns: 120px | 1fr) → section name → statement (1.75rem) → paragraphs → `○ AHORA MISMO` → stack `.ficha` with 5.5rem keys (HERRAMIENTAS wraps to two lines, top-aligned).

### 7.8 Contacto

```
DESKTOP  (content sub-grid 7 | 5)
 CONTACTO            │  ¿Tu negocio necesita software?              ┌ MENSAJE QUE SE ENVIARÁ ──────────────┐
 WHATSAPP            │  Cuéntanos qué te está costando trabajo…     │ ¡Hola! Vi el sitio de UNP Software y  │
 +57 316 768 7288    │  (lead · 36rem)                              │ me gustaría hablar sobre un proyecto. │
 Solo para proyectos │                                              │                                       │
 nuevos.             │  [◉ Escribir por WhatsApp]  [✉ Enviar un correo]  │ Se abre en WhatsApp; puedes editarlo │
 CORREO              │                                              │ antes de enviar.            (small)   │
 unpsoftware@        │                                              └───────────────────────────────────────┘
 gmail.com           │──────────────────────────────────────────────────────────────────────  1px --line
 GITHUB              │  ○ TRABAJA CON NOSOTROS                                              glyph off + label
 SamuelPerezCO       │  ¿Desarrollas y quieres sumarte a proyectos reales? Escríbenos…       body
 LINKEDIN            │  Escribir al correo →                                                 .link (mailto, subject)
 samuel-perez-serna  │
```
- Label column: `.sec-name`; WHATSAPP → `BRAND.phoneDisplay` as `.value` link (`BRAND.whatsappLink`, tabular-nums) + `t.contact.note` small; CORREO → `BRAND.email` link; GITHUB → `BRAND.githubUser`; LINKEDIN → `FOUNDER.linkedinUser`. Values are sentence-case Alegreya 0.9375rem; `overflow-wrap: normal` (the 12rem column fits the email; it must never break mid-address).
- Content left (7 cols): statement = the question (≤ 6 words, max 16ch), lead (≤ 40 words), buttons: `.btn-primary` with `WhatsappIcon` (href `whatsappUrl(lang)`), `.btn-secondary` with lucide `Mail` (href `mailto:`). Right (5 cols, top-aligned): `.preview` panel — `--surface`, 1px `--line`, radius 6, padding 24px, `box-shadow: var(--shadow)`; header `.label` `t.contact.previewLabel`; body = `CONTENT[lang].contact.whatsappMessage` rendered from the same constant `whatsappUrl` encodes, in body ink; `t.contact.previewHelp` small.
- Hook: full-width row under a `--line` hairline, 32px padding-top: `Glyph off` + `.label` `hook.title`, body `hook.text` (≤ 30 words), `.link` `hook.cta` → `workWithUsUrl(lang)`.
- Reuse: `Contact.tsx` buttons and `whatsappUrl`; the facts `dl` moves to the label column. No form. Two WhatsApp controls are visible here at most (nav plate + section plate); the RESPONDE-style link is not repeated in this section.

**360px:** section name → statement (1.75rem) → lead → `.btn-primary` full width → `.btn-secondary` full width → preview panel (padding 16px) directly under the buttons → facts as `.ficha` (WHATSAPP / CORREO / GITHUB / LINKEDIN, key 5.5rem) → hairline → hook.

### 7.9 Footer

```
BOTH THEMES: dark token set scoped on <footer>; border-top 1px --line (#22405f)
                     │
        [ ◐ 96px ]   │  [UNP / SOFTWARE wordmark svg, height 73px]      row 1: 100px tall, spine cell white
                     ┴                                                   spine ends at the row's bottom edge
  Envigado, Antioquia, Colombia · © 2026 UNP Software · Fundada por Samuel Pérez Serna     small ink-2
  unpsoftware@gmail.com · GitHub · LinkedIn                              Volver arriba ↑     .link ink-2 → ink
```
- Footer grid (≥1024): `grid-template-columns: 12rem 1px minmax(0,1fr)`; row 1 `height: 100px` (1.04 × 96): `UnpMark` 96px right-aligned with 24px padding-right, vertically centred; middle cell `background: var(--accent)` (white) spanning row 1 only; `UnpWordmark` height 73px (0.76 × D, width ≈ 210px) with `padding-left: 32px`, vertically centred. Row 2 (`grid-column: 3`, padding-top 32px): colophon small ink-2 and links (`.link`), "Volver arriba" with lucide `ArrowUp` 13. Footer padding-block 64px / 48px.
- The page spine (`--line-strong`) enters the footer and the row-1 cell continues it in `--accent`: the hand-off from page rule to logo rule. In light the visible change is navy → white at the footer edge.
- Reuse: year and back-to-top from `Footer.tsx`. Footer text colours use the scoped dark tokens explicitly.

**360px:** the spine ends at the footer's top edge; row 1 shows `unp-lockup.svg` (inline `UnpLockup` or `<img>` — this one may be an `<img>` since it is always white on navy) at 40px height in the content column; colophon lines stacked, links in a row, "Volver arriba" last.

## 8. Motion

**One orchestrated moment, first paint, hero only (skipped entirely if `prefers-reduced-motion: reduce`):**
- 0ms: the hero's `.spine` draws downward — `transform: scaleY(0 → 1); transform-origin: top; 700ms; cubic-bezier(0.2, 0.7, 0.2, 1)`. The nav segment and every other section's spine are static from first paint.
- 150ms: the hero text blocks rise 14px → 0 with opacity, using the existing `rise` keyframe, 80ms stagger: h1 (`rise-1`), lead (`rise-2`), buttons (`rise-3`), facts (`rise-4`).
- 500ms: the hero shot and its caption fade in, opacity only, 300ms.
- Everything settles by ~1.0s. Nothing animates on scroll; no counters, carousels, reveals, parallax, progress fills.

**Micro-interactions (colour only, 150ms ease):** `.link` underline `--line-strong → --ink`; nav link ink-2 → ink; `.btn-primary` `filter: brightness(0.94)` on hover, `translateY(1px)` on `:active` (kept from current `.btn`); `.btn-secondary` background → `--accent-soft`, border → `--ink`; ES/EN chip and theme toggle same as secondary; `aria-current` nav link gets `--accent-soft` background without transition; `.shot`, `.glyph`, `.spine`, slots and rows never react to hover.

**Focus:** `:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 2px }` on every control in both themes; mobile menu traps focus while open.

**Theme and language toggles:** instant — do not put `transition` on `background-color`/`color` of `body`, sections, panels or text; only interactive elements carry transitions.

**Reduced motion:** keep the existing block (`scroll-behavior: auto`; `transition-duration/animation-duration: 0.01ms !important`); add `.spine, .rise, .hero-shot { animation: none; opacity: 1; transform: none }`. Hover colour changes remain (they are not motion).

## 9. Light theme

The brand printed on paper, not an inversion:
1. Ground is navy-tinted paper `#f3f6fb`, never cream; ink is the logo's navy `#071a34`, so the mark, wordmark and headings print navy via `currentColor`.
2. The plate CTA is `#0d2645` with white text — a piece of the logo's ground carrying the mark's white — not a white button on paper.
3. The spine, ficha rules and outline borders use `--line-strong #5a6f92` (4.7:1) so the axis stays visible on paper at the same 1px weight.
4. Surfaces (`.shot`, preview panel, filled testimonials) are true white with a 1px `#c9d5e6` border and the two-layer navy shadow, so real captures lift off the paper; dark uses borders only.
5. The hero field gradient is dark-only; light hero is flat paper.
6. The footer keeps the dark token set: navy ground, white lockup, `#a7b7cc` colophon (8.83:1), 1px `#22405f` top edge; the navy spine enters it and becomes white.
7. Body weight returns to 400 and `-webkit-font-smoothing: antialiased`; sizes, tracking, spacing and every structural element are identical to dark.
8. Selection: `--accent` background (navy) with white text. Focus ring: navy.
9. Nothing chromatic is introduced in either theme; if a hue other than the navy family and white appears, it is a bug.

## 10. Responsive

| Breakpoint | What changes |
|---|---|
| **360–639 (base)** | `--pad 16px`, `--label-w 8px` (spine at x=24), content 307px at 360. Nav 56px: mark 28px centred on the spine, wordmark 21px, icon plate + menu button; links in a panel. Labels stack above content. Buttons full width, stacked. Hero shot before the facts. Two shots stacked. Services one column with hairlines. Testimonial slots stacked. Photo 120px beside name. Contact facts as `.ficha` under the preview. Footer lockup SVG 40px. |
| **640** | Buttons sit inline (hero: plate + text link on one line; contact: two buttons in a row). Footer colophon on two lines. |
| **768** | `--pad 32px`; body 18px, lead 20px, small stays; nav 64px with inline links, ES/EN, theme and the WhatsApp plate; mobile icon plate and menu hidden. Testimonial slots 3-up at 12px gutters. Hero shot `sizes` 100vw. |
| **1024** | Label column appears (`--label-w 12rem`, gaps 24/32); desktop heading sizes; hero facts beside the h1 and shot-id beside the shot; sticky case fichas (only at viewport height ≥ 700); Services 2×2; Contacto 7 | 5; footer three-column lockup row; `.sec` grid active. |
| **1296** | Container caps at 1200 + 48 padding; content column 879px; images served at 879px via `sizes`. |

Horizontal overflow is forbidden at every width: `.cc { min-width: 0 }`, stack lines wrap, `.shot img { width: 100%; height: auto }`, long values use `overflow-wrap: normal` inside a column wide enough (12rem) to hold the email.

## 11. Do-not list

- Do not add a preloader, animated counters, carousels, glow orbs, blur circles, gradient text, terminal/typewriter decoration, scroll-triggered reveals, a scroll-progress bar or a fixed bottom WhatsApp bar.
- Do not introduce any chromatic colour: no WhatsApp green, no blue links, no emerald, no terracotta. The palette is the navy family plus white.
- Do not retypeset "UNP / SOFTWARE" in any font; use the traced SVGs. Do not recolour, outline, glow, rotate or crop the mark; do not build glyphs from the mark's cut angle.
- Do not put anything on the spine: no dots, ticks, nodes, indices, numbers, progress, thickness changes, colour other than `--line-strong` (page) and `--accent` (footer).
- Do not number sections, services, built items or repos. Slot numbers (01/03) are the only ordinal on the page.
- Do not print coordinates, build dates, UTC offsets outside the SEDE fact, commit hashes or any data that is not a fact a business owner uses.
- Do not use uppercase outside `.label` and `.sec-name`; do not make labels bold, smaller than 0.75rem, or wider-tracked than 0.18em; do not let a label exceed two lines.
- Do not use a monospace face, Inter, Space Grotesk, Geist, Manrope, Outfit, Montserrat, JetBrains Mono or a serif anywhere.
- Do not raise SHRP above 50, h1 above 4rem, or add a third weight to Geologica.
- Do not use cards for services or repos, thumbnails for repos, icons for services, quotation marks/avatars/stars/italic in testimonial slots, or a circle crop for the founder photo.
- Do not use pills, 0 radius, or radii other than 6px (2px on focus rings).
- Do not type any count into copy; every number that describes the page's own content is computed.
- Do not show more than two WhatsApp controls in one viewport; do not hide the phone number inside a button only.
- Do not add a contact form, newsletter, chat widget, cookie banner or social feed.
- Do not transition theme changes, animate anything on scroll, or animate anything when `prefers-reduced-motion` is set.
- Do not crop a screenshot with `object-fit: cover` in Proyectos; captures render uncropped at content width.
- Do not reintroduce `framer-motion`, `MORE_WORK_GROUPS`, the lab repos, `#sobre-mi`, `display-tight`, or the founder photo in the hero.