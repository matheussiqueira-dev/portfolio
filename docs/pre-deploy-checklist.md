# Pre-Deploy Checklist (2026-02-27)

## Scope
Comprehensive QA execution for encoding, copy review (PT/EN), local validation, performance baseline, git hygiene, and deploy readiness.

## 1) Encoding and Character Integrity
- [x] All tracked text files validated as UTF-8.
  - `bom_count: 0`
  - `invalid_utf8_count: 0`
- [x] `package.json`, `tsconfig.json`, `next.config.ts` reviewed and no mojibake patterns found.
- [x] Runtime `<head>` checked on `/` and includes a single charset tag.
  - `meta charSet="utf-8"` count: `1`
- [x] Dictionaries/data/hardcoded strings reviewed.
  - Files reviewed: `data/site.pt.ts`, `data/site.en.ts`, `data/resume.ts`, `data/resume.en.ts`, `data/projects.ts`, `data/projects.en.ts`, `core/i18n/locales/pt.json`, `core/i18n/locales/en.json`, `app/loading.tsx`.

## 2) Copy and Terminology Review (PT/EN)
- [x] PT-BR technical copy corrections applied (focus: `data/projects.ts` Eye Tracking section).
- [x] PT certificate title normalization applied (`data/certificates.pt.ts`).
- [x] EN terminology standardization applied (`data/resume.en.ts`: `A.I.` -> `AI`).
- [x] Terminology consistency check completed (`Full Stack` kept consistently).
- [x] Status labels reviewed (`STABLE`, `ACTIVE`, `ARCHIVED` found and consistent in deployment data).

## 3) Functional Local Validation
### Commands
- [x] `npm install` (completed)
- [x] `npm run dev` (server starts)
- [ ] `npm run build` (fails)
- [ ] `npm run start` (blocked by missing production build)

### HTTP Smoke Results (dev)
- [x] `/` -> `200`
- [x] `/en` -> `200`
- [ ] `/pt-BR/projects` -> redirects then fails (`500` at `/projetos`)
- [ ] `/en/projects` -> `500`
- [ ] `/system` routes -> `404`

### Tracking/Head Checks (dev)
- [x] GTM script present in head (`googletagmanager.com/gtm.js?id=`)
- [x] GTM noscript iframe present (`googletagmanager.com/ns.html?id=`)
- [x] Head charset unique and valid

### Blocking Build Errors (current codebase)
`npm run build` fails due unresolved modules and export mismatch:
- Missing aliases under `@/i18n-pages/*` from:
  - `app/[locale]/data-analyst/page.tsx`
  - `app/[locale]/demos/[slug]/page.tsx`
  - `app/[locale]/projects/[slug]/page.tsx`
- Invalid named import `ProjectList` in:
  - `app/[locale]/projects/projects-content.tsx` (target module exports default)

## 4) Performance (Lighthouse Local)
Source: `lighthouse-report.json`

- Performance: `42`
- Accessibility: `100`
- Best Practices: `92`
- SEO: `100`
- CLS: `0.0000022168`

Status against target thresholds:
- [ ] Performance >= 90
- [x] Accessibility >= 95
- [ ] Best Practices >= 95
- [x] SEO >= 95
- [x] CLS ~ 0

## 5) Git Hygiene
- [x] `.gitignore` includes:
  - `node_modules`
  - `.next`
  - `.env.local` via `.env*.local`
- [x] Quick secret pattern scan executed.
- [x] No temporary QA artifact kept for commit (local report can remain uncommitted if needed).

## 6) Deploy Readiness
- [ ] Deploy-ready build
- [ ] Production runtime validation
- [ ] Vercel deployment

Blocking reasons:
1. Build fails on unresolved route imports/export mismatch.
2. Vercel CLI not installed in environment (`vercel-cli-not-installed`).
3. Production start cannot run without successful build.

## 7) Next Required Actions Before Deploy
1. Fix missing `@/i18n-pages/*` imports or point routes to existing pages.
2. Fix `ProjectList` import in `app/[locale]/projects/projects-content.tsx` to match module export.
3. Re-run:
   - `npm run build`
   - `npm run start`
   - Lighthouse in production mode.
4. Execute final GitHub push + PR + deploy after build is green.
