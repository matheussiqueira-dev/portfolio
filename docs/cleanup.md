# Cleanup Summary

## Structural Changes
- Moved tests from `__tests__/` to `tests/`
- Standardized utility folder as `scripts/`
- Standardized media under `public/media/`
- Removed legacy thumbnail folder and kept canonical `public/thumbnails/{pt,en}`

## Documentation Cleanup
- Consolidated docs into canonical, non-redundant set
- Removed temporary progress/audit duplicates

## Repository Hygiene
- Added CI workflow
- Added commit template
- Added issue templates
- Rewritten README for enterprise onboarding
- Added `type-check` script and dedicated `tsconfig.typecheck.json`

## Dependency Hygiene
- Ran `npm prune` and `npm ls --depth=0`
- Removed extraneous package entry (`@emnapi/runtime`) from local install tree

## Functional Preservation
- Routing, i18n, theme, tracking, WhatsApp CTA, and major pages preserved
