# PPA — Deep Work Blueprint Landing Page

A production-ready **Next.js 14** landing page built with:

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for utility styling
- **GSAP + ScrollTrigger** for scroll animations & parallax
- **SF Pro Display** font scale (H1–H5 per style guide) + DM Sans body
- **Dark / Light theme** with `localStorage` persistence
- **Hamburger nav** for mobile
- **Live countdown timer** synced across hero + pricing
- **YouTube video** embed in hero
- **Accordion curriculum** modules
- **Sticky pricing sidebar**

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Typography Scale (SF Pro Display)

| Class    | Size  | Weight  | Line Height |
|----------|-------|---------|-------------|
| `.h1`    | 52px  | 500     | 115%        |
| `.h2`    | 40px  | 500     | 115%        |
| `.h3`    | 28px  | 500     | 115%        |
| `.h4`    | 24px  | 400     | 135%        |
| `.h5`    | 20px  | 400     | 135%        |
| `.body-normal` | 17px | 400 | 135%      |
| `.body-sm`     | 15px | 400 | 135%      |

All headings use `font-family: var(--font-sf-display)` which resolves to:
- **macOS / iOS**: Native SF Pro Display (system font)
- **Windows / Linux / Android**: Helvetica Neue → Arial fallback

---

## Project Structure

```
ppa-landing/
├── app/
│   ├── globals.css          # CSS variables, typography, utility classes
│   ├── layout.tsx           # Root layout (DM Sans via next/font, metadata)
│   └── page.tsx             # Page — composes all sections
├── components/
│   ├── Navbar.tsx            # Sticky nav, hamburger, theme toggle
│   ├── Footer.tsx            # Footer with student social proof
│   ├── ScrollAnimations.tsx  # GSAP client component (dynamic import)
│   ├── ui/
│   │   ├── Badge.tsx         # Reusable pill badge
│   │   └── Countdown.tsx     # Live countdown (client component)
│   └── sections/
│       ├── Hero.tsx          # Hero + YouTube + CTAs
│       ├── Pain.tsx          # Problem awareness
│       ├── Blueprint.tsx     # Timeline feature list
│       ├── Curriculum.tsx    # Accordion modules + sidebar
│       ├── Testimonials.tsx  # Review cards
│       └── Pricing.tsx       # Pricing cards + countdown
├── hooks/
│   ├── useTheme.ts           # Dark/light toggle + localStorage
│   └── useCountdown.ts       # Live countdown timer
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## Theme

CSS custom properties drive the entire color system. Toggle between dark and light
via the nav buttons — the `data-theme` attribute on `<html>` switches all vars instantly.

```css
/* Dark (default) */
--bg, --bg2, --bg3        /* page backgrounds */
--surface, --surface2     /* card surfaces    */
--border, --border2       /* borders          */
--text, --text2, --text3  /* text hierarchy   */
--blue, --blue2           /* brand accent     */

/* Light — overrides all above */
[data-theme="light"] { ... }
```

---

## Deployment

```bash
npm run build
npm run start
```

Or deploy instantly to **Vercel** — just push to GitHub and connect the repo.
