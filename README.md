# Aaditya Pai — Personal Portfolio

A minimal, editorial, research-forward personal site for **Aaditya Pai**, ML researcher in LLM agent security. Single-page scroll with dark mode by default and a light-mode toggle.

## Tech stack

- **[Next.js](https://nextjs.org/)** (App Router) + **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com/)** for styling
- **shadcn/ui**-style base components (`Button`, `Card`, `Badge`)
- **[Framer Motion](https://www.framer.com/motion/)** for scroll-reveal + hover motion (respects `prefers-reduced-motion`)
- **[lucide-react](https://lucide.dev/)** for icons
- Fonts via `next/font/google` — **Fraunces** (headings) + **Inter** (body)
- Deploys statically to **Vercel** — no server or database

## Editing content

All site copy lives in one typed file:

```
src/data/content.ts
```

Identity, socials, publications, experience, projects, skills, education, awards, and certifications are all defined there. Edit that file and everything on the page updates — no component changes needed.

## Project structure

```
src/
  app/
    layout.tsx            # fonts, metadata, OG tags, theme init script
    page.tsx              # section composition + JSON-LD structured data
    globals.css           # theme tokens (light/dark) + base styles
    icon.svg              # favicon (AP monogram)
    opengraph-image.tsx   # generated 1200×630 OG image
    robots.ts / sitemap.ts
  components/
    nav.tsx               # sticky nav, active-section highlight, mobile menu
    theme-provider.tsx    # localStorage-persisted dark/light, no-FOUC script
    theme-toggle.tsx
    reveal.tsx            # Framer Motion whileInView wrapper
    back-to-top.tsx
    section-heading.tsx
    icons.tsx
    ui/                   # button, card, badge
    sections/            # hero, about, publications, experience,
                          #   projects, skills, education, awards, footer
  data/
    content.ts            # ← all content lives here
  lib/
    utils.ts              # cn() class helper
```

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build   # type-checks, lints, and prerenders every route as static
npm run start   # serve the production build locally
```

The build should complete with **no TypeScript or lint errors**; all routes prerender as static content.

## Deploying to Vercel

The site is static-friendly and needs no environment variables. See the deployment steps below (also printed after setup):

1. Push to a new GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js.
3. Deploy. To add a custom domain later: **Vercel dashboard → your project → Settings → Domains**.

> After deploying, update the `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` to your final production domain so Open Graph tags, the sitemap, and canonical URLs point to the right place.

## Accessibility & SEO

- Semantic landmarks, ordered headings, skip-to-content link, visible focus rings, `aria-label`s, and alt/aria text throughout.
- `prefers-reduced-motion` disables transforms, looping motion, and smooth scroll.
- Metadata API: title/description, Open Graph + Twitter cards, generated OG image, favicon, canonical URL, `robots.txt`, `sitemap.xml`, and Person JSON-LD.
