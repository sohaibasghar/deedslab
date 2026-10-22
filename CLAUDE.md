# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev          # next dev (Turbopack)
npm run build        # next build — also the only full type/prerender check
npm run lint         # eslint (flat config, eslint.config.mjs)
npx tsc --noEmit     # type-check without building
```

There is no test suite.

## What this is

Marketing site for Deeds Lab (AI-native product studio), ported from an earlier artifact build to Next.js 16 App Router + React 19. Pages are static; the only server code is the contact form's Server Action (`app/contact/actions.ts`), which emails enquiries to `contact@deedslab.co` through Resend. Fields and validation are shared with the browser in `lib/enquiry.ts`. It needs `RESEND_API_KEY` and `RESEND_EMAIL_DOMAIN` (set by the Vercel Resend integration; `vercel env pull` for local). Booking goes through an embedded Calendly widget.

Next 16 specifics in use (check `node_modules/next/dist/docs/` before changing them): `cacheComponents: true` and `partialPrefetching` in `next.config.ts`, global `PageProps<"/route">` / `LayoutProps<"/">` types, and `params` as a Promise. With Cache Components, reading `params` happens inside a `<Suspense>` child component (see `app/insights/[slug]/page.tsx`).

## Architecture

**Content is separate from presentation.**
- `content/*.ts` — typed copy and data (services, projects, team, about, ai-tools, social, company). Pages import these and pass them into components.
- `content/insights/*.md` — articles. Flat `key: value` front matter (no YAML parser; `lib/markdown-files.ts` splits it). The first paragraph becomes the hero lead; the rest renders via `components/content/markdown.tsx` (react-markdown + remark-gfm).
- `content/legal/*.md` — privacy and terms drafts. `lib/legal.ts` strips the H1, the "Last updated" line, lines starting `[Solicitor`, and everything after a `---` + "Drafting sources" heading before publishing.
- Markdown is read with `fs` at module scope so pages prerender. Any new route that reads markdown must be added to `outputFileTracingIncludes` in `next.config.ts`.

**`[[highlight]]` convention.** Titles are plain strings where `[[word]]` marks the green accent. `components/ds/highlight.tsx` renders it on-page, `lib/og.tsx` renders it in share images, and `plainTitle()` in `lib/seo.ts` strips it for metadata.

**Components.**
- `components/ds/` — design-system primitives (Hero, Section, Intro, Button, Offer, Steps, FAQ, CompareTable…). Server components unless they need state.
- `components/sections/` — composed page sections built from ds primitives.
- `components/site/` — chrome: header, footer, nav data (`nav.ts`, incl. `BOOK_CALL`), cookie banner, mobile booking bar, theme.
- `components/prototypes/` — animated fake-app demos shown on the site, with their own hooks (`use-demo-loop`, `use-in-view`, `use-reduced-motion`).
- `components/motion/` — GSAP-driven motion.

**Styling.** Tailwind v4 is wired in (via `@tailwindcss/turbopack`) but the site is styled by one hand-written design system in `app/globals.css` (~3.4k lines): CSS custom-property tokens plus BEM-ish `dl-*` classes (`dl-section`, `dl-section--sunken`, `dl-hero`, `dl-stack`…). Follow that convention rather than adding utility classes. `lib/cx.ts` joins class names.

**Theming.** `data-theme` on `<html>` is `"ink"` (dark, default) or `"light"`; a `Section tone="ink"` sets `data-theme="ink"` locally. `components/site/theme-script.ts` runs inline in `<head>` before paint to apply the saved theme (`localStorage` key `dl-theme`) and set `data-motion="on"` when reduced motion is not requested — CSS uses that attribute to hide entrance elements before GSAP reveals them. `components/site/theme.ts` is the client store (`useSyncExternalStore`).

**Motion.** Always import GSAP from `lib/gsap.ts` (registers ScrollTrigger, SplitText, useGSAP; refreshes ScrollTrigger after fonts/load) and use its `MOTION` media queries with `gsap.matchMedia()`, so reduced motion is respected. `components/motion/site-motion.tsx` is mounted by `Hero` and reveals elements by `dl-*` selectors on scroll plus hero parts marked `data-hero-part` inside `.dl-entrance`. `lib/hairline/` is a vendored plain-JS SVG drawing engine (eslint-ignored; don't refactor), mounted via `mountFigure()` from `components/ds/figure.tsx`.

**SEO.** Every page exports `metadata = pageMetadata({ title, description, path })` from `lib/seo.ts` (the layout appends " | Deeds Lab") and usually renders `<JsonLd data={breadcrumbJsonLd([...])} />`. Share images come from per-route `opengraph-image.tsx` files that call `renderOgImage()` in `lib/og.tsx` (fonts loaded from `assets/fonts/`). Site-wide facts live in `lib/site.ts`; organization schema in `lib/structured-data.ts`. `app/sitemap.ts` has a hand-maintained `PAGES` list — add new indexable routes there (articles are added automatically). Old paths `/pricing` and `/work` redirect in `next.config.ts`.

## Conventions

- Copy is British English (`en-GB`) and uses straight quotes/apostrophes; eslint's `react/no-unescaped-entities` is relaxed to allow them.
- Imports use the `@/` alias from the repo root.
- Project-local agent skills (GSAP, animation performance, frontend design, React best practices) are installed under `.claude/skills/`.
