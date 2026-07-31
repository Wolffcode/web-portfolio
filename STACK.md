# Stack técnico — Portfolio Astro

## Objetivo del setup
Configurar el proyecto Astro con las integraciones y estructura necesarias para: contenido vía Content Collections, i18n, y deploy en Vercel. Versión 1 sin formulario de contacto (ver Fase 2 más abajo) — el objetivo es tener v1 desplegada y funcionando primero.

## Framework
- **Astro**, output estático por defecto (`output: 'static'` salvo por el API route del formulario, que corre como función serverless vía adapter).

## Integraciones a instalar/configurar
- `@astrojs/tailwind` — estilos.
- `@astrojs/sitemap` — sitemap.xml automático.
- `@astrojs/vercel` — adapter de deploy (serverless functions para el API route).
- `astro:assets` — ya incluido en core, usar `<Image />`/`<Picture />`, imágenes en `src/assets/`.
- `astro:i18n` — routing nativo, sin librerías externas de i18n.
- `@fontsource/*` — self-host de fuentes (evitar requests externos a Google Fonts).

## Content Collections (`src/content/`)
- **`projects`**: schema Zod con `title`, `description`, `image`, `tags` (array, para el filtro por tecnología), `link`, `repo`. Debe soportar contenido en dos idiomas — usar campo `lang` en frontmatter o carpetas separadas por idioma (a definir cuál conviene mejor con Content Layer API de Astro).
- **`blog`**: schema Zod definido desde ahora (`title`, `date`, `description`, `tags`, `draft: boolean`), pero **sin ruta pública activa todavía** — no crear `/blog/[slug].astro` hasta indicación explícita.

## i18n (`astro.config.mjs`)
- `defaultLocale` y `locales`: inglés y español.
- Definir modo de prefijo de URL (con o sin prefijo en el idioma default) — pendiente de decidir, pero debe quedar configurado en el objeto `i18n` de Astro config.
- Diccionarios de textos de interfaz en `src/i18n/en.ts` y `src/i18n/es.ts` (no van en Content Collections, son solo para labels/nav/UI).

## Deploy — Vercel
- Adapter `@astrojs/vercel` configurado desde el inicio, aunque v1 no tenga funciones serverless activas (deja el proyecto listo para cuando se agregue el API route de Fase 2).
- Dominio propio ya configurado, conectar directo en el dashboard de Vercel.
- Confirmar si hace falta algún ajuste específico de build/output para que el adapter funcione correctamente con Content Collections e i18n (routing por locale debe generarse bien en el build de Vercel).

## Fase 2 (NO implementar en v1) — Formulario de contacto
Pendiente de decidir si se implementa o no. V1 se da por completa y desplegada sin esto — no bloquear ni extender el alcance de v1 por el formulario. Si más adelante se decide continuar, la propuesta técnica sería:

- Ruta: `src/pages/api/contact.ts`, vía adapter de Vercel (serverless).
- Validación server-side con **Zod**.
- **Honeypot field** en el formulario del frontend.
- **Resend** para envío de email (`RESEND_API_KEY` como env var en Vercel).
- **Cloudflare Turnstile** para protección anti-bot (site key pública en frontend, `TURNSTILE_SECRET_KEY` como env var en Vercel para verificación server-side).
- Sin servicio adicional de rate limiting (no Redis/Upstash) — mantener el stack simple.
