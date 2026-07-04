# A Bíblia do Tatuador 10K — Landing Page

## Stack
- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 with `tw-animate-css`
- shadcn/ui component library
- wouter (routing)
- lucide-react (icons)
- **Analytics**: Matomo on-premise (analytics.vaif.com.br, site ID: 2)
- **Node.js**: v22+ required (Vite 7.3+ não roda em <20.19)
- **Package manager**: npm (migrado de pnpm)

## Node Version Note
O Node do sistema é v20.9.0 (não compatível com Vite 7). Use nvm:
```bash
source ~/.nvm/nvm.sh && nvm use 22
```
Depois `npm install` e `npx vite --host`.

## Project Structure
```
/var/www/vaif-ebook/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── tatuador10k.tsx   ← MAIN landing page (route: /, /tatuador-10K)
│   │   │   └── NotFound.tsx
│   │   ├── components/
│   │   │   ├── ui/                ← shadcn/ui primitives (accordion, progress, badge, etc.)
│   │   │   └── ...
│   │   ├── App.tsx                ← Router setup (ThemeProvider defaultTheme="dark")
│   │   ├── index.css              ← Global styles + VAIF design tokens + animations
│   │   ├── const.ts               ← Client constants
│   │   └── main.tsx               ← Entry point
│   ├── index.html                 ← Google Fonts: Cormorant Garamond + Montserrat only
│   └── public/
├── server/                        ← Backend (Express)
├── shared/                        ← Shared constants
└── CLAUDE.md
```

## Active Routes
- `/` and `/tatuador-10K` → `Tatuador10K` component
- `/404` → `NotFound` component

## Status
- `Home.tsx` was **removed** — `tatuador10k.tsx` is the only landing page
- All pages now follow VAIF design identity
- Conversion elements implemented (see below)

## Product
- **Product**: E-book "A Bíblia do Tatuador 10K"
- **Target**: Brazilian tattoo artists
- **Promise**: Scale from R$2K to R$10K/month
- **Price**: R$147 (limited offer, normally R$247)
- **Payment**: Kiwify (`pay.kiwify.com.br/fZC8xt0`)
- **Format**: Digital PDF, immediate access
- **Guarantee**: 30 days money-back

## Page Sections (top→bottom)
1. **Navbar** — fixed, VAIF gold/black, CTA button
2. **Hero** — full viewport, ebook mockup + value prop + bullet features + CTA
3. **Animated Stats** — 4 counters (buyers, multiplier, rating, guarantee) with IntersectionObserver animation
4. **7 Modules** — full module list with gold numbered boxes, VAIF cards
5. **Trust Badges** — payment methods + security seals
6. **Author Section (VAIF)** — company authority, "após anos com centenas de artistas"
7. **Testimonials (6)** — grid with photos, ratings, before→after results
8. **Scarcity CTA** — stock progress bar (shadcn Progress), limited copies warning
9. **FAQ (Accordion)** — 6 questions, shadcn Accordion component
10. **Final CTA** — centered closing conversion
11. **Sticky Mobile CTA** — fixed bottom bar (mobile <768px only)
12. **Footer**

## Conversion Strategy (Current)
- **Urgency/Scarcity**: Progress bar "X of 100 remaining", limited price R$147
- **Social Proof**: Animated counters (1,247+ buyers, 4.9★), 6 testimonials with R$ amounts
- **Risk Reversal**: 30-day guarantee in stats + CTA areas
- **Clear Value Prop**: "R$2K→R$10K" in hero, bullet points, module previews
- **Low Friction**: WhatsApp float, sticky mobile CTA, trust badges, multiple CTAs
- **Authority**: Author section with credentials

## VAIF Design Identity — DO NOT DEVIATE

### CSS Variables (in `index.css` `:root`)
```css
--gold: #D4B04C;
--gold-light: #E5C35E;
--bg-dark: #0A0A0A;
--bg-card: #121212;
--text-main: rgb(242, 237, 228);
--text-muted: rgb(160, 154, 142);
--border-color: #222222;
```

### CSS Classes Available
- `.bg-vaif` — dark bg + radial gold gradient
- `.card-vaif` — standard card (#121212 bg, #222 border)
- `.card-vaif-premium` — card with gold top border (3px)
- `.diamond-divider` + `.diamond` — centered gold diamond divider
- `.fade-in-up` + `.delay-1`, `.delay-2`, `.delay-3` — scroll animations
- `.sticky-cta-mobile` — responsive fixed bottom bar
- `.whatsapp-float` — floating WhatsApp button
- `font-cormorant` — apply Cormorant Garamond
- `font-montserrat` — apply Montserrat (default body font)

### Typography
- **Headings**: `font-cormorant` (Cormorant Garamond 600–700, color `var(--text-main)`)
- **Body/UI/Buttons**: `font-montserrat` (Montserrat 300–700)
- **CTAs/labels**: Montserrat, 10–12px, uppercase, 2px+ letter-spacing, weight 600–700
- **Numbers/stats**: Cormorant Garamond, gold, large size

### Core UI Patterns
- **Buttons**: bg `var(--gold)` → hover `var(--gold-light)`, text `#0A0A0A`, Montserrat 12px uppercase 2px tracking, weight 700, `px-8 py-4 h-auto rounded-none`, hover `-translate-y-0.5`
- **Cards**: bg `var(--bg-card)` (#121212), border `1px solid var(--border-color)` (#222)
- **Diamond Dividers**: between every section via `SectionHeader` or standalone `<DiamondDivider />`
- **Colors**: never use `text-gray-*`, `text-slate-*`, `amber-*` — use `text-[var(--text-main)]` and `text-[var(--text-muted)]` instead

### Background
- `bg-vaif` class: `#0A0A0A radial-gradient(circle at 80% 20%, rgba(212, 176, 76, 0.05), transparent 40%)`

### Animations
- Sections use class `fade-in-up` + optional `delay-1/2/3`
- Animation: 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), opacity+translateY

### Key Design Principles
1. Luxury/premium dark theme — spare gold accents
2. Gold touches only on CTAs, diamonds, numbers, top borders
3. Serif (Cormorant) for emotional impact, sans-serif (Montserrat) for functional
4. Everything centered — hero, sections, forms
5. Funnel linear and visible

## Reusable shadcn/ui Components in Use
| Component | Usage |
|---|---|
| `Progress` | Stock scarcity bar (in section 8) |
| `Accordion` | FAQ section (section 9) |
| `Button` | All CTAs |
| `Card` | (wrapped by `.card-vaif` styles via className) |
| `Badge` | Available for trust badges |

## Known Improvements (Future)
- [ ] Exit-intent modal (Dialog component ready)
- [ ] Countdown timer for scarcity section
- [ ] Carousel testimonials on mobile
- [ ] Bonus visual section (templates, spreadsheets)
- [ ] Replace placeholder WhatsApp number + author name
- [ ] SEO meta tags refinement
