# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

Use `pnpm` as the package manager. Start the dev server in background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Other common commands:
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — preview the production build locally
- `astro check` — type-check `.astro` files and TypeScript

## Architecture

Static Astro site (v7) with TypeScript strict mode. The project is in early setup — currently just the Astro "basics" starter template.

**Planned tech stack (from STACK.md — not yet installed):**
- `@astrojs/tailwind` — styling
- `@astrojs/sitemap` — auto-generated sitemap
- `@astrojs/vercel` — deployment adapter (add from the start even though v1 has no serverless functions)
- `astro:i18n` — native routing-based i18n for English and Spanish
- `@fontsource/*` — self-hosted fonts (avoid Google Fonts requests)

**Routing:** File-based via `src/pages/`. Current routes: `/` only.

**i18n:** Use Astro's native `astro:i18n` integration. UI string dictionaries go in `src/i18n/en.ts` and `src/i18n/es.ts` — not in Content Collections.

## Content Collections

Two collections are planned in `src/content/`:

- **`projects`** — Zod schema: `title`, `description`, `image`, `tags` (array), `link`, `repo`. Must support two languages — approach (lang frontmatter field vs. separate language folders) is still to be decided.
- **`blog`** — Zod schema: `title`, `date`, `description`, `tags`, `draft: boolean`. **Do not create `/blog/[slug].astro` until explicitly instructed.** Define the schema now but keep the route inactive.

## Deployment

Target: Vercel. Configure `@astrojs/vercel` adapter in `astro.config.mjs` from the start. Output is `static` for v1; the adapter is added now so the project is ready for the Phase 2 contact form API route.

## Phase 2 (do not implement in v1)

Contact form via `src/pages/api/contact.ts` (Vercel serverless): Zod validation, honeypot field, Resend for email (`RESEND_API_KEY`), Cloudflare Turnstile anti-bot (`TURNSTILE_SECRET_KEY`). No rate limiting (no Redis/Upstash).

## Documentation

Full docs: https://docs.astro.build

Key guides:
- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling / Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
