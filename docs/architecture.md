# Architecture

## Overview

ENCOM Enterprise Portfolio is organized in modular layers:

- `app/`: Next.js App Router routes, layouts, metadata, APIs
- `core/`: framework-independent domain utilities (i18n, seo, analytics)
- `ui/`: reusable UI components (`ui/components/*`)
- `system/`: feature modules (`dashboard`, `projects`)
- `data/`: typed static content and contracts
- `public/`: static assets (`thumbnails`, `media`, project assets)
- `tests/`: automated test files
- `scripts/`: utility automation scripts

## Layering Rules

- `app` composes screens and routes.
- `system` encapsulates feature composition.
- `ui` exposes reusable visual primitives.
- `core` does not depend on route-level modules.
- `data` remains strongly typed and framework-agnostic.

## Runtime-critical Root Files

These root files are intentionally kept because Next.js/Sentry load them by convention:

- `instrumentation.ts`
- `instrumentation-client.ts`
- `proxy.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`
