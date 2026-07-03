# PROJECT.md — Digital Marketing Portfolio

Read this first in every session. Do not re-scan the codebase to re-derive what's here.

---

## Purpose
Personal portfolio website for **John Austine Osumba** — Digital Marketing & Communications Specialist, Nairobi, Kenya.

## GitHub Repo
https://github.com/devosumba/digital-marketing-portfolio

## Tech Stack
| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (config via `@theme` in CSS — no `tailwind.config.ts`) |
| Animations | Framer Motion v12 |
| Fonts | Urbanist (Google Fonts, 400–800) — matched to osumbaportfolio.vercel.app |
| Remote images | `next.config.ts` allows `img.youtube.com` via `images.remotePatterns` (for YouTube video-card thumbnails) |
| Deployment target | Vercel or Netlify (static export) |

## Key Files & What They Do
```
app/
  layout.tsx      — Root layout: Urbanist font load, SEO metadata, theme hydration script
  globals.css     — Tailwind @theme tokens (colors, fonts), dark mode variant, base styles
  page.tsx        — Composes all section components in order

components/
  Navbar.tsx      — Fixed floating pill/island navbar with orange nav links, dark/light toggle
  Hero.tsx        — Full-screen hero: headline, portrait photo, floating stat badges
  About.tsx       — Bio narrative, 3 experience highlight cards, 4-stat strip
  Expertise.tsx   — 8-service card grid
  Projects.tsx    — Filterable project grid (All / Campaigns / Video/UGC / Design / Enterprise)
                    Each card opens a case-study modal (Challenge → Approach → Execution → Results)
  Skills.tsx      — Tool badges (Meta Ads, GA, SEO, Canva, Adobe, etc.) + capability chips
  Testimonials.tsx — 3-slot quote carousel
  Contact.tsx     — Email/LinkedIn links, CV download, contact form with client-side validation
  Footer.tsx      — Dark footer, nav links, socials, copyright

public/
  images/
    hero.jpg      — Portrait photo of John Austine Osumba (336 KB, JPEG)
    projects/
      naivas.png  — Naivas campaign thumbnail (3375x3375 PNG). Single real asset — card cover
                    and modal media both render it via object-contain, no gallery grid.
      bestlady/   — 15 real campaign assets (Sheba Curl Crème x3 sizes + 12 Mizizi product-offer
                    slides), all 3375x3375 PNG. Card cover uses sheba-curl-creme-500ml.png as the
                    thumbnail; modal media renders all 15 as a real 3-col gallery grid
                    (Project.images array), each tile object-contain, none cropped/stretched.
```

## Design System
| Token | Value | Used for |
|-------|-------|----------|
| `--color-accent` | `#FF8A33` | Primary buttons, links, active states, nav link text |
| `--color-accent-hover` | `#FF6A00` | Hover state for accent elements |
| `--color-terra` | `#C4622D` | Section label chips ("About", "Expertise", etc.) |
| `--color-off-white` | `#FAF7F2` | Light mode background & dark mode text |
| `--color-charcoal` | `#111111` | Dark mode background & light mode text |
| `--color-muted` | `#6B7280` | Secondary/subdued text |
| `--color-surface` | `#F3EFE8` | Light mode card/panel background |
| `--color-surface-dark` | `#1C1C1C` | Dark mode card/panel background |
| `--color-border` | `#E5DDD4` | Light mode borders |
| `--color-border-dark` | `#2A2A2A` | Dark mode borders |
| Font: `--font-display` | Urbanist | All headings (font-display class) |
| Font: `--font-sans` | Urbanist | All body copy |

> Accent color and font sourced from osumbaportfolio.vercel.app CSS (dcce3c0a5a210011.css).

## Sections Built
Page order (app/page.tsx) and nav pill order both follow: Hero → About → Work → Expertise → Skills → Testimonials → Contact.
1. **Hero** — Name, gradient "Austine" text, subtitle, positioning statement, portrait photo, CTA buttons, floating badges (+45% / Nairobi), location tag
2. **About** — Narrative bio, 3 experience cards (Sheth Naturals / VW Rwanda / Working Style), 4-stat strip
3. **Projects** ("Work", `#projects`) — 6 projects with filterable grid + case-study modals: Naivas, Bestlady, Enterprise Ad, Back-to-School Campaign, BTS Design, UGC Videos. Ordered before Expertise per request.
4. **Expertise** (`#expertise`) — 8 service cards: Strategy, Social/Community, Paid Media, SEO/Web, Influencer/UGC, Brand Comms, Events, Research
5. **Skills** — 8 tool badges + 8 soft-skill chips
6. **Testimonials** — 3-slot carousel (placeholders to be filled)
7. **Contact** — Email, LinkedIn, CV download, validated form
8. **Footer** — Dark background, nav links, copyright

## Placeholders Still To Fill
Search `// PLACEHOLDER` across the codebase. Key items:
- `public/images/hero.jpg` ✅ Done
- Naivas case file (thumbnail + copy) ✅ Done — results field intentionally still a placeholder
- Bestlady case file (thumbnail + gallery + copy) ✅ Done — results field intentionally still a placeholder
- Enterprise Ad case file (YouTube embed `JVnBDc9ovGQ` + copy) ✅ Done — results field intentionally still a placeholder
- Remaining project images (Back-to-School, BTS Design, UGC Videos) → still placeholder grids in `Projects.tsx`
- Stats in `About.tsx` `stats` array
- Testimonial quotes/names in `Testimonials.tsx`
- CV PDF → `public/cv-john-austine-osumba.pdf`
- Contact form endpoint → `Contact.tsx` submit handler

## Project Case-File Data Model (`Projects.tsx`)
Each entry in the `projects` array is the single source of truth for that campaign's case file — no separate CMS/data file. Relevant fields:
- `thumbnail?: string` — single hero image path, used for the card cover always, and for modal media when there's no `images` array.
- `images?: string[]` — set only when a campaign has more than one distinct real asset worth showing; renders as a real gallery grid in the modal (replaces the placeholder grid entirely).
- `imageCount?: number` — only consulted when neither `thumbnail` nor `images` is set, to size the placeholder gallery grid.
Cover/thumbnail containers use `aspect-square` (matching the source assets, which are all 3375x3375) with `object-contain`, so posters render edge-to-edge with no letterboxing gap and are never cropped or stretched.

## Navbar Style
Pill/island floating nav — dark pill container (`bg-charcoal/80 backdrop-blur`) centered, nav link text `text-accent` (orange `#FF8A33`), "Get in Touch" filled orange pill on right. No background change on scroll (always floating).

## Commit Rules
- No `Co-Authored-By: Claude` or any AI attribution in commit messages.
- Commits authored under the configured git identity only.
