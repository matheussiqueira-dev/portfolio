# Architecture

## Overview
The application follows a modular architecture centered on Next.js App Router with locale-first routing:

- `app/`: routes, layouts, metadata, API routes
- `core/`: reusable logic (i18n, SEO, analytics, utilities, hooks)
- `ui/`: reusable presentational components and UI primitives
- `system/`: feature modules composed from `core` + `ui`
- `data/`: typed static content (projects, certificates, resume, site copy)
- `public/`: static assets
- `docs/`: project documentation

## Routing and Product Constraints
Critical routes and behaviors that must remain stable:

- Home: `/`
- Projects: `/projects` and localized paths (`/en/projects`, `/projetos`)
- System dashboard: `/system` and localized path (`/en/system`)
- Locale switching: Portuguese/English
- Theme switching: dark/light
- Global signature, WhatsApp CTA, and tracking tags

## Layer Rules
- `core` must not depend on `app` or feature-level modules.
- `ui` contains reusable components with minimal business coupling.
- `system` contains domain behavior (e.g., projects module).
- `app` orchestrates data loading and route composition.
- `data` remains framework-agnostic and strongly typed.

## i18n and Theme
- i18n is driven by `core/i18n/*` and locale-segment routing.
- Theme behavior is token/CSS-variable based and must preserve dark/light parity.

## Build and Quality
Recommended checks before deploy:

```bash
npm run lint
npm run build
npm run start
```

If build changes architecture contracts, update this document.
