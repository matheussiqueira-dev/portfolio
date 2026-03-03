# Cleanup Log

## Scope
Structural cleanup and consolidation for Next.js + TypeScript repository, preserving:

- dark/light mode
- pt/en bilingual routing/content
- `/projects`
- `/system`
- global signature and WhatsApp CTA
- tracking tags (GTM)

## Files Removed
- `app/[locale]/projects/page_new.tsx`
- `app/[locale]/projects/[slug]/page_new.tsx`
- `app/[locale]/demos/[slug]/page_new.tsx`
- `app/[locale]/data-analyst/page_new.tsx`
- `core/demos.ts`
- `core/media.ts`
- `core/utils.ts`
- `_project_extract.json`

Removed dead/legacy UI modules:
- `components/TronDemoSection.tsx`
- `components/demo/DemoLauncher.tsx`
- `components/demos/*` (entire folder)
- `components/projects/*` (entire folder)
- `components/sections/*` (entire folder)
- `components/seo/Breadcrumbs.tsx`
- `components/seo/FAQSchema.tsx`
- `components/ui/CertificatesClient.tsx`
- `components/ui/CopyButton.tsx`
- `components/ui/ErrorBoundary.tsx`
- `components/ui/ImageWithFallback.tsx`
- `components/ui/LiquidCard.tsx`
- `components/ui/MediaGallery.tsx`
- `components/ui/PrintButton.tsx`

Documentation cleanup:
- removed all redundant docs (`COMMIT-*.md`, `DEPLOYMENT_*.md`, session/progress reports, quickstarts, duplicate audits/checklists)

## Folders Removed
- `demos/`
- `scripts/`
- `components/interactive/` (empty)
- legacy `components/` replaced by `ui/components/`

## Dependencies Removed
Removed from `package.json`:
- `@vercel/speed-insights`
- `html2pdf.js`

## Structural Consolidation
### Final architectural layout
- `app/`
- `core/`
- `ui/components/`
- `system/`
- `data/`
- `public/`
- `docs/`

### Docs consolidated to canonical set
- `docs/architecture.md`
- `docs/ui-audit.md`
- `docs/projects.md`
- `docs/deployment.md`
- `docs/changelog.md`
- `docs/cleanup-log.md`

## Build / Bundle Impact
Build completed successfully after cleanup:
- Next.js production build: success
- Static pages generated: 31

Local artifact sizes observed after validation build:
- `.next`: `664M`
- `node_modules`: `678M`

## Functional Validation
Executed checks:
- `npm run lint` -> pass
- `npm run build` -> pass
- `npm run start -p 3000` -> pass after build

HTTP smoke checks:
- `/` -> `200`
- `/projects` -> `307` redirect to `/projetos`
- `/system` -> `200`
- `/en` -> `200`
- `/en/projects` -> `200`
- `/en/system` -> `200`
- `/pt-BR/projects` -> `307` redirect to `/projetos`
- `/projetos` -> `200`

HTML marker checks:
- GTM script/noscript present
- WhatsApp link present (`wa.me/5581999203683`)
- projects/system pages render expected bilingual labels and expandable-card markers
- theme toggle markup present (`data-theme`/toggle controls)

## Notes
- `npx ts-prune` was executed in the cleanup flow. The report includes many expected Next.js route/config exports (`default`, `metadata`, route handlers), which are runtime-discovered by Next and appear as false positives for static export pruning.
- Git commits could not be created in this workspace because it does not contain a `.git` directory.
