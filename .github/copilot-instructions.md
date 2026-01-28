# AI Agent Instructions for Portfolio

## Project Overview
**Portfolio** is a bilingual (PT/EN) Next.js 16 portfolio with rich project case studies, local certificates, and SEO optimization. It showcases work in data, BI, and web development.

**Tech Stack:**
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + PostCSS
- Sentry (error tracking) + Google Analytics (GTM)
- Vercel deployment + Speed Insights

---

## Architecture Essentials

### Routing & i18n
- **App Router** structure in `app/`: rotas under `app/` (PT default), mirror under `app/en/` (EN)
- **Locale detection**: Done in middleware & client components via `usePathname()`
- **i18n utilities** (`lib/i18n.ts`): `getLocaleFromPath()`, `localizeHref()`, `stripLocalePrefix()`
- **Key pattern**: PT routes at `/resume`, `/projetos`, `/academico`; EN routes at `/en/resume`, `/en/projects`, `/en/academic`

### Data Structure (Static Content)
All content is **static data** (no CMS), organized in `data/`:

- `projects.ts` / `projects.en.ts` - Array of Project objects with full case studies
- `certificates.pt.ts` / `certificates.en.ts` - Certificate objects with PDF references
- `site.pt.ts` / `site.en.ts` - UI copy (eyebrows, titles, descriptions, buttons)
- **Type files** (`.types.ts`) define structures for type safety

**Key data pattern** (example from projects):
```typescript
// data/projects.ts
export const projects: Project[] = [
  {
    slug: "project-name",
    title: "Project Title",
    stack: ["React", "TypeScript"],
    screenshots: [{ src: "/projects/project-name/cover.svg", alt: "...", type: "image" }],
    intro: { title: "...", paragraphs: [...], sections: [...] },
    demoExperience: { kind: "video", src: "/project-name.mp4", poster: "..." },
    // ... more fields
  }
]
```

### Media Organization
- Images/videos in `public/projects/<slug>/` (e.g., `public/projects/touchless-web-gesture-interface/cover.svg`)
- Certificate PDFs in `public/certificates/<provider>/` (e.g., `public/certificates/alura/cert.pdf`)
- Reference in data files, not hardcoded in components

### Components Pattern
- **Client components** (`"use client"`): Used for interactivity (Projects.tsx with state, ProjectModal, etc.)
- **Dynamic imports with `ssr: false`**: For client-only modals/heavy features (see ProjectModal in Projects.tsx)
- **Section components** in `components/sections/`: Hero, About, Projects, Contact, Resume
- **Reusable UI** in `components/ui/`: ImageWithFallback, CursorGlow, VideoBackground, LanguageSwitch
- **Global styles** in `app/globals.css` (Tailwind + custom CSS variables)

---

## Bilingual Content Workflow

1. **Always update both** `data/projects.ts` AND `data/projects.en.ts` (or .pt/.en variants)
2. **Link locale-aware copy** using `usePathname()` to detect `/en` prefix:
   ```typescript
   const isEn = pathname.startsWith("/en");
   const content = isEn ? siteEn.copy : sitePt.copy;
   ```
3. **Navigate locale-aware** using `localizeHref()`:
   - `/resume` → `/en/resume` (EN)
   - `/projetos` → `/en/projects` (EN)
4. **Breadcrumbs & SEO** in `components/seo/Breadcrumbs.tsx` — must include locale path

---

## Critical Developer Workflows

### Local Development
```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run lint       # Run ESLint
npm run lint:fix   # Auto-fix linting issues
npm run format     # Format code (prettier)
npm run validate   # Lint + format check + build (CI-like validation)
npm run build      # Production build
npm run start      # Run production build locally
```

### Environment Variables
Set in `.env.local` (or Vercel):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_value
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_value
```

### Key Npm Scripts
- **Validation**: `npm run validate` checks lint, format, and build — **must pass before commit**
- **Clean cache**: `npm run clean` removes `.next`, node_modules cache, Turbo cache
- **Rebuild**: `npm run rebuild` = clean + build

---

## Code Quality Standards

### TypeScript Strictness
- `strict: true`, `strictNullChecks: true`, `noUncheckedIndexedAccess: true`
- **No explicit `any`**: ESLint rule `@typescript-eslint/no-explicit-any: error`
- **Unused variables**: Warn only if not prefixed with `_` (pattern: `_unused`)
- **Type all functions & variables** — leverage TS inference where possible

### Linting Rules (eslint.config.mjs)
- No unused variables (allow `_`-prefixed args/vars)
- No explicit `any` types
- Warn on console statements (allow `warn`, `error`)
- Prefer `const` over `let`
- React hooks exhaustive deps = warn

### Code Organization
- **Path aliases**: `@/*` maps to workspace root (e.g., `@/components/...`, `@/lib/...`)
- **Import structure**: Organize imports (Next, React, then local)
- **Server/Client split**: Mark interactivity with `"use client"`, keep defaults to Server Components

---

## Integration & Observability

### Sentry (Error Tracking)
- Configured in `instrumentation.ts` (runtime detection: nodejs vs edge)
- Separate configs: `sentry.server.config.ts` (Node), `sentry.edge.config.ts` (Edge)
- Captures request errors automatically via `onRequestError`
- API route for Sentry example: `app/api/sentry-example-api/route.ts`

### Analytics (Google Tag Manager)
- GTM ID: `GTM-WR93ZJ8C` (loaded in `app/layout.tsx`)
- Events tracked via `lib/analytics.ts` with `trackEvent(action, category, label?)`
- Used in Projects modal, resume download, navigation tracking

### Security Headers (next.config.ts)
- **CSP Report-Only**: Monitors violations without blocking (next step: switch to full CSP)
- Headers configured for OWASP baseline + Google Fonts, Analytics, Vercel Insights
- Vercel Edge runtime compatible

### Middleware (middleware.ts)
- **Canonical host enforcement**: Redirects non-www to `www.matheussiqueira.dev` (prod only)
- Skips local (`localhost`, `127.*`), preview (`.vercel.app`) environments
- Runs on all routes (`/:path*`)

---

## Common Workflows & Patterns

### Adding a New Project
1. Add entry to `data/projects.ts` (and `data/projects.en.ts`)
2. Create folder `public/projects/<slug>/` with media files
3. Reference media in project's `screenshots` array
4. Component automatically renders via Projects.tsx loop

### Updating Certificate
1. Upload PDF to `public/certificates/<provider>/`
2. Add/update entry in `data/certificates.pt.ts` and `data/certificates.en.ts`
3. Component reads data and links to PDF

### Adding a Route
1. Create folder/file in `app/` (e.g., `app/new-page/page.tsx`)
2. For EN version: mirror at `app/en/new-page/page.tsx`
3. Update nav/links using `localizeHref()` for proper locale routing
4. Add breadcrumb if needed (SEO)

### Client Interactivity
- Always use `"use client"` at component top
- Import state hooks from React
- Use `usePathname()` to detect locale
- Track events with `trackEvent(action, category, label)`

---

## File Reference Map

| Path | Purpose |
|------|---------|
| `app/layout.tsx` | Global layout, metadata, JSON-LD, GTM setup |
| `app/globals.css` | Tailwind + CSS variables, theme colors |
| `data/projects.ts` | All project case studies (PT) |
| `data/projects.types.ts` | Type definitions for projects |
| `lib/i18n.ts` | Locale routing utilities |
| `lib/analytics.ts` | Google Analytics event tracking |
| `lib/seo.ts` | SEO metadata, JSON-LD utilities |
| `components/sections/` | Major page sections (Hero, Projects, Resume) |
| `components/layout/` | Header, nav, mobile menu |
| `middleware.ts` | Canonical host redirect |
| `next.config.ts` | Security headers, Sentry integration |
| `instrumentation.ts` | Sentry runtime setup |
| `eslint.config.mjs` | Linting rules |

---

## Quick Troubleshooting

- **Build fails**: Run `npm run clean && npm run build` to clear cache
- **Locale not switching**: Check `usePathname()` and `localizeHref()` in nav components
- **Missing media**: Verify file path in `public/` matches reference in data file
- **Type errors**: Check TypeScript strict mode — no implicit `any`
- **Lint errors**: Run `npm run lint:fix` to auto-fix, then `npm run format`

---

## When to Ask for Clarification

- Exact wording for new certificate/project copy (provide context)
- New feature affecting multiple locales (confirm PT + EN requirements)
- Security/infrastructure changes (defer to domain expert)
- API integrations beyond Sentry/Analytics (clarify scope & error handling)
