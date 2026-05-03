# SOCAR Georgia Petroleum — Design System

A design system for **SOCAR Georgia Petroleum** (SGP), the Georgian fuel retail and energy services subsidiary of SOCAR (State Oil Company of the Republic of Azerbaijan). This system codifies the brand's visual and verbal identity for digital products, marketing, signage, and corporate communications.

## Company context

SOCAR Georgia Petroleum is one of Georgia's leading energy companies. Founded in 2006 as SOCAR's first foreign subsidiary, it operates a nationwide network of 100+ filling stations across Georgia, supplying petrol, diesel, and LPG. It also runs the **WayMart** convenience-store and café chain co-located at most stations. The first SOCAR petrol station outside Azerbaijan opened in Georgia on 25 April 2008. Today the company employs 1,500+ people and reported $133.6M revenue in 2025.

The parent SOCAR Group operates in 13 countries and is engaged across the full hydrocarbon value chain — exploration, production, refining, transportation, and retail — with a focus on European-grade fuels (Euro 5 diesel) imported via Azerbaijan and EU partners (Romania, Bulgaria, Greece).

### Products & surfaces

| Product / surface | Audience | Notes |
|---|---|---|
| **Corporate website** (sgp.ge, socar.ge) | Investors, B2B, public | Reports, news, services, business offers |
| **Filling-station network** | Drivers | Signage, pump UI, canopy branding, attendant uniforms |
| **WayMart** | Drivers, families, travelers | Convenience-store retail brand |
| **B2B / fleet services** | Corporate fuel-card customers | Wholesale, fuel cards, logistics |
| **Sustainability comms** | Public, regulators | Solar-panel rollout, gasification, CSR |

## Sources used

No codebase, Figma, or slide deck was provided. This system was constructed from publicly available brand information:

- **socar.ge/en** — corporate site for SOCAR Energy Georgia
- **sgp.ge/en** — SOCAR Georgia Petroleum site
- **socar-mgo.com/logo-usage-guideline** — official SOCAR logo description (flame symbol, color meanings)
- **Wikipedia** — corporate background
- **LinkedIn / RocketReach** — operational scale, employee counts, revenue
- **UN Global Compact Georgia** — subsidiary structure
- **logokit.com / brandfetch.com / Wikimedia Commons** — logo references (could not be fetched directly; logo is reconstructed from public reference)

> ⚠️ **Caveat:** Because no canonical brand assets (logo files, exact hex codes, font files, photography library) were attached, the values in this system are **best-effort reconstructions** based on public-facing marks. Please replace the logo SVG, color hex values, and photography with the canonical brand-book versions before using this in production.

---

## CONTENT FUNDAMENTALS

SOCAR's voice is **corporate, formal, infrastructure-grade**. It communicates **scale, reliability, and stewardship** — never playfulness or trend-chasing. Copy is built for an audience that includes regulators, investors, business partners, and drivers, so it leans toward measured authority over warmth.

### Tone & vibe

- **Authoritative, not chatty.** "SOCAR and its group member companies are leading the energy sector in Georgia." Statements of fact, not pitches.
- **Operational pride.** Numbers, tonnages, kilometres, milestones. "1,000 employees", "30,500 km of pipelines", "10 million tons of oil annually". Quantification = credibility.
- **Stewardship.** Frequent reference to gasification programmes, solar rollouts, charity, and historical buildings preserved. The brand frames itself as **a custodian of national infrastructure**, not a commercial player.
- **Quietly proud.** "We take pride in our achievements and are constantly striving for improvement." Confident but not boastful.

### Voice rules

| Do | Don't |
|---|---|
| Use **"we" / "our customers"** for warmth in marketing copy | Avoid first-person singular ("I"); avoid forced "you" intimacy |
| Use **"the company"** in formal/investor copy | Don't slang or contract ("we're" sparingly; never "gonna", "you'll wanna") |
| Title Case for product names: **WayMart**, **SOCAR Georgia Petroleum**, **Euro 5 Diesel** | Don't lowercase the brand or omit "SOCAR" |
| Spell out numerals under 10 in body, use figures for stats | Don't use exclamation marks except in promotional/retail comms |
| Punctuate every header and bullet (period or no terminal punct — pick one and hold) | Don't use emoji in corporate copy |
| British/International English spelling acceptable (gasification, programme, kilometre) | |

### Casing

- **Headlines:** Sentence case for marketing; Title Case for navigation, product names, and reports.
- **Buttons & CTAs:** Title Case ("Learn More", "Find a Station", "Open an Account").
- **Body copy:** Sentence case.
- **The brand mark "SOCAR" is always all-caps**, never "Socar" or "socar".

### Emoji & icons

**No emoji** in corporate, investor, or station-signage copy. Limited unicode bullets (•, ▪, ▸) appear in legacy materials but are being phased out in favor of consistent SVG iconography. Iconography is geometric, line/filled hybrid, infrastructure-themed (fuel droplet, flame, pipeline, station canopy, EV plug) — see ICONOGRAPHY below.

### Sample copy

| Surface | Example |
|---|---|
| Hero (retail) | **European-grade fuel, every kilometre.** Euro 5 petrol and diesel at 100+ stations across Georgia. |
| Hero (corporate) | **Powering Georgia. Building infrastructure.** A nationwide network of fuel, gas, and energy services. |
| Stat callout | **30,500 km** of pipelines developed and rehabilitated, supplying gas to over **930,000** customers. |
| CTA | Find your nearest station → |
| Sustainability | Solar panels installed across our station network now generate clean electricity for our own operations. |

---

## VISUAL FOUNDATIONS

The visual system is **corporate-infrastructure** — clean, structured, and confident. It draws from European energy brands (Shell, BP, OMV) and adjacent industrial systems (Siemens, ABB) more than from consumer-tech aesthetics.

### Colors

- **Primary palette:** SOCAR red (`#E2231A`), SOCAR green (`#00A551`), SOCAR blue (`#0099D8`) — drawn from the Azerbaijan flag, used as accent and signal colors only. Red signals energy/strength; green signals sustainability and gas; blue signals technology and natural gas services.
- **Neutrals:** Black `#0A0A0A` for the wordmark and primary text. A 9-step grayscale from `#FAFAFA` to `#0A0A0A` carries the bulk of UI surfaces.
- **Restraint:** Color is a **signal, not a wash**. Red headlines, green icons, blue category tags. Backgrounds are white, off-white, or dark gray. **No gradients on UI surfaces.** Limited exception: photography may carry brand color in lighting / signage in-frame.

### Type

- **Display & headlines:** **Inter Display** / **Inter Tight** (substitute for proprietary corporate sans). Heavy weights (700–800), tight tracking, set in title case or uppercase for wayfinding.
- **Body:** **Inter** at 16–18px, regular/medium.
- **Numerals:** Tabular numerals in stats and data tables. Numbers are a hero element for this brand — set them large, set them tight.
- **Georgian script:** **Noto Sans Georgian** for ქართული copy — paired so x-height matches the Latin set. SGP serves a Georgian-speaking domestic audience; the system is **bilingual by default**.

> ⚠️ **Font caveat:** SOCAR's brand book likely specifies a custom or licensed sans (Graphik, Foundry Gridnik, or similar industrial geometric grotesque). I have substituted **Inter** + **Noto Sans Georgian** from Google Fonts. **Please supply the canonical brand fonts** so I can swap them in.

### Spacing & grid

- **8-point base scale**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px.
- **Layout grid:** 12-column, 96px gutter on desktop; 4-column, 24px gutter on mobile. Wide outer margins (≥120px on desktop) — the brand "breathes".
- **Page sections** are vertically generous: 96–128px between top-level sections.

### Backgrounds

- **Surfaces:** white, near-white (`#F5F6F7`), and ink black for inverse sections. **No gradients** on UI surfaces.
- **Photography is full-bleed where it appears** — wide hero crops of stations, refineries, pipelines, vehicles. No floating image cards on tinted backdrops.
- **No textures, no hand-drawn illustrations, no patterns.** The closest the system gets is the **diagonal pump-canopy chevron** repeated as a subtle background motif on print/signage (45° red-and-white stripes on station soffits).

### Imagery — color vibe

Photography is **cool, daylight, neutral**. Not warm/orange. Skies tend cyan-to-overcast; concrete, steel, and asphalt set the scene. People are framed in branded uniforms (red caps, green aprons) against white pump structures. **No grain, no film simulation, no b&w treatments.** Imagery should feel like an annual-report photograph: documentary clarity, no retouching beyond color correction. Prefer crisp, clean, well-lit photographs.

### Animation

- **Restrained.** Easings are `ease-out` and `ease-in-out`; durations 150–300ms.
- **Fades and small translates** — no bounces, no springs, no parallax tricks.
- **Hover lift** on cards: 4px translateY + soft shadow.
- **Page transitions:** instant or 200ms cross-fade, never elaborate.

### Hover & press states

- **Buttons (primary, red fill):** Hover darkens to `#B81C14` (10% darker). Press: scales to 98% and darkens further.
- **Buttons (secondary, outline):** Hover fills with 6% black tint; press fills with 12%.
- **Links:** Underline appears on hover; color shifts from black to red (or stays neutral on red links).
- **Cards:** 4px lift + shadow ramp on hover; no outline change.

### Borders, shadows & elevation

- **Borders:** 1px hairlines at `#E5E7E9` for dividers; 2px at `#0A0A0A` for emphatic structure (stat cards, callouts).
- **Corner radii:** **Conservative.** 0px on signage and full-bleed sections; **4px** on inputs and buttons; **8px** on cards; **12px** max on hero callouts. **No fully-rounded pill shapes** except for status badges.
- **Shadows:** Soft, low-spread. `0 1px 2px rgba(10,10,10,.06)` for resting cards; `0 8px 24px rgba(10,10,10,.08)` for hover/elevated. No colored shadows. No inner shadows except inside form inputs (`inset 0 1px 2px rgba(10,10,10,.06)`).

### Cards

- White surface, 8px radius, 1px hairline border (`#E5E7E9`), no shadow at rest, soft shadow on hover. Title in display weight, body in regular, optional red accent stripe (4px) at top for "featured" treatment.

### Transparency & blur

- **Use sparingly.** Blur is reserved for: (1) sticky nav with `backdrop-filter: blur(12px) saturate(120%)` over a 90% white background; (2) photo overlay gradients (`linear-gradient(to top, rgba(10,10,10,.6), transparent)`) for legibility of titles on hero images.
- **No frosted-glass cards or panels in body content.**

### Layout rules

- Sticky top nav (64px), white with hairline bottom border. Logo top-left, primary nav center or right.
- Footer is dark (`#0A0A0A`) with white type, organized into 3–4 columns: company / services / business / contact.
- Hero sections are full-bleed photography with a 60% black overlay-gradient at bottom for headline legibility.

### Numbers & data

- Stats are presented as **giant numerals** (96–144px) over a brief label. The number does the talking.
- Data tables: dense, tabular-numeral, alternating row tint (`#FAFAFA`), red used only for negative/decline indicators.

---

## ICONOGRAPHY

SOCAR's iconography is **geometric, infrastructure-themed, line-based**. The closest open-source match is **Lucide** with **2px stroke** — and that is what this design system substitutes by default until the canonical SOCAR icon set is provided.

### Approach

- **Style:** 2px stroke, rounded line caps and joins, 24×24 grid. Filled variants used for active/selected states only.
- **Subjects:** Fuel droplet, flame, EV plug, station canopy, pump nozzle, pipeline, gas cylinder, truck, location pin, shopping bag (for WayMart), car, leaf (sustainability).
- **No emoji.** No unicode glyphs as icons (no ★, ☆, →). Arrows are SVG.

### Substitution flag

> ⚠️ This system uses **Lucide Icons** (lucide.dev) loaded from CDN as a stand-in for SOCAR's proprietary icon library. The stroke-weight, geometry, and rounded-cap aesthetic match the corporate reference closely but are not identical. **Please supply the canonical SOCAR icon SVGs** to replace them.

### Logo usage

The SOCAR logo combines:

1. A **flame symbol** with three colored facets — red (energy/strength), green (environment/sustainability), blue (gas/technology). The three colors echo the Azerbaijan flag.
2. A black wordmark **"SOCAR"** in geometric uppercase sans, set right of or beneath the symbol.
3. For Georgia, a localized lockup adds a thin gray subtitle: **"Georgia Petroleum"** or, in Georgian, **"საქართველო"**.

Variants required: full-color on light, white on dark/photo, single-color black, single-color white. Minimum size 26px digital / 9mm print. Clear-space = the height of the flame symbol on all sides.

The flame mark is at `assets/logos/socar-flame.png` (512×512, transparent PNG). Vector versions should be obtained from the official brand vendor for print/large-format use.

---

## Index — what's in this folder

```
README.md                  ← you are here
SKILL.md                   ← Agent Skill manifest (Claude Code-compatible)
colors_and_type.css        ← CSS variables for the full token system
fonts/                     ← (substituted) Inter, Noto Sans Georgian via Google Fonts CDN
assets/
  logos/                   ← Logo lockups (reconstructed)
  photos/                  ← Photography placeholders with descriptive labels
  icons/                   ← Reference icons (loaded from Lucide CDN at runtime)
preview/                   ← Design-system cards rendered for the asset-review tab
ui_kits/
  website/                 ← Corporate website kit (sgp.ge-style)
  station/                 ← Filling-station digital signage / pump UI kit
slides/                    ← (omitted — no template provided)
```

### UI kits

- `ui_kits/website/` — corporate website surfaces (header, hero, stats, services, station finder, news, footer). Open `index.html`.
- `ui_kits/station/` — physical-station digital surfaces (price totem, pump terminal, canopy wayfinding). Open `index.html`.

### Foundation cards

The `preview/` folder contains 19 cards covering brand colors, neutrals, semantic colors, display & body type, stat numerals, bilingual pairing, spacing, radii, shadows, buttons, inputs, cards, badges, logos, iconography, photography, and voice. They are registered for the Design System review tab.
```

### How to use this system

1. **For prototyping in HTML:** import `colors_and_type.css`, link the Google Fonts and Lucide CDNs, lift components from `ui_kits/`.
2. **For production code:** mine the CSS variables and component patterns; replace placeholder assets and substituted fonts/icons before shipping.
3. **For slides & marketing:** use the photography placeholders as a brief for art-direction and the type/color tokens as a foundation.

### Caveats summary

- 🔴 Canonical brand fonts substituted with Inter/Noto Sans Georgian.
- 🔴 Canonical icon set substituted with Lucide.
- 🔴 Logo reconstructed from public reference; replace with vendor SVG.
- 🔴 Photography is placeholder color blocks with labels; replace with the real library.
- 🟡 Hex values for SOCAR red/green/blue are best-effort matches to the published palette description; verify against the official brand book.
