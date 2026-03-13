# ENCOM Enterprise Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Build](https://img.shields.io/badge/Build-CI%20Enabled-success)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)
![License](https://img.shields.io/badge/License-MIT-green)

## 1. Project Overview

Bilingual (PT/EN) enterprise portfolio built with Next.js and TypeScript, focused on high-quality presentation of projects, credentials, and professional profile.

## 2. Live Demo

- Production: [matheussiqueira.dev](https://www.matheussiqueira.dev/)

## 3. Architecture

The project follows modular layers:

- `app/` routing and page composition
- `core/` i18n/seo/analytics foundations
- `ui/` reusable components
- `system/` feature modules
- `data/` typed content
- `public/` static assets
- `tests/` automated tests
- `scripts/` utility scripts

Detailed architecture: [`docs/architecture.md`](docs/architecture.md)

## 4. Tech Stack

- Next.js (App Router)
- React
- TypeScript
- next-intl
- next-themes
- Sentry
- ESLint + Prettier

## 5. Features

- PT/EN locale support
- Dark/Light themes
- Projects page with expandable cards and lazy media
- System dashboard route
- Global signature and WhatsApp CTA
- Tracking instrumentation preserved

## 6. Folder Structure

```text
.
├── app/
├── core/
├── ui/
├── system/
├── data/
├── public/
│   ├── thumbnails/
│   └── media/
├── docs/
├── tests/
├── scripts/
└── .github/
```

## 7. Local Development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run lint
npm run type-check
npm run build
npm run start
```

## 8. Deployment

See [`docs/deployment.md`](docs/deployment.md).

## 9. License

MIT. See [`LICENSE`](LICENSE).
