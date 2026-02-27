# Pre-Deploy Checklist (2026-02-27)

## Scope
Complete QA execution for encoding, PT/EN copy, local validation, performance, git hygiene, and deploy readiness.

## 1) Encoding and Character Integrity
- [x] Tracked text files validated as UTF-8 (no BOM).
  - `text_files_checked: 198`
  - `bom_count: 0`
  - `invalid_utf8_count: 0`
- [x] `package.json`, `tsconfig.json`, `next.config.ts` reviewed.
- [x] Runtime `<head>` has single charset tag.
  - `meta charset count: 1`
  - `charset utf-8 present: true`
- [x] Dictionary/data/hardcoded strings reviewed and normalized in updated files.

## 2) Copy and Terminology Review (PT/EN)
- [x] PT/EN wording normalized in updated routes/components.
- [x] Terminology alignment applied (`Portfolio`, status labels, action labels).
- [x] Placeholder route copy standardized (PT/EN).

## 3) Local Functional Validation
### Commands
- [x] `npm run lint` (pass, no warnings)
- [x] `npm run build` (pass)
- [x] `npm run dev -- --port 3001` (server responds)
- [x] `npm run start -- -p 3000` (server responds)

### HTTP smoke (dev/start)
- [x] `/` -> `200`
- [x] `/en` -> `200`
- [x] `/projetos` -> `200`
- [x] `/en/projects` -> `200`
- [x] `/pt-BR/projects` -> `307` (expected locale redirect)
- [x] `/en/demos` -> `200`
- [x] `/en/demos/chatbot-ia-api` -> `200`
- [ ] `/system` -> `404` (route not implemented)

### Tracking and head checks
- [x] GTM script present (`googletagmanager.com/gtm.js`)
- [x] GTM noscript iframe present (`googletagmanager.com/ns.html`)
- [x] `/monitoring` no longer blocked by i18n middleware (`200`)

## 4) Performance (Lighthouse local)
Reports:
- `lighthouse-report.json` (mobile preset)
- `lighthouse-desktop-report.json` (desktop preset)

Scores:
- Mobile: Performance `50`, Accessibility `100`, Best Practices `96`, SEO `100`, CLS `0.0000022168`
- Desktop: Performance `98`, Accessibility `100`, Best Practices `96`, SEO `100`, CLS `0.0000003611`

Threshold status (requested):
- [ ] Performance >= 90 (mobile not met)
- [x] Accessibility >= 95
- [x] Best Practices >= 95
- [x] SEO >= 95
- [x] CLS ~ 0

## 5) Git Hygiene
- [x] `.gitignore` covers `node_modules`, `.next`, `.env.local` pattern.
- [x] No build artifacts or temporary runtime files staged.

## 6) Deploy Readiness
- [x] Build is green and production server runs locally.
- [ ] Vercel deployment from CLI.

Current deploy blocker:
- `npx vercel --prod --yes` -> `The specified token is not valid. Use vercel login to generate a new token.`

## 7) Final Blocking Items
1. Mobile Lighthouse Performance remains below target (`50 < 90`).
2. `/system` route is still `404`.
3. Vercel token is invalid, preventing deployment from this environment.