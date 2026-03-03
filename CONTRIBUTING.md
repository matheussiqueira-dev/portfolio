# Contributing

## Development Flow
1. Create a branch from `main`.
2. Implement focused changes.
3. Run quality checks:
   - `npm run lint`
   - `npm run type-check`
   - `npm run build`
4. Open a Pull Request with clear scope and validation evidence.

## Commit Convention
Use conventional prefixes:
- `feat:`
- `fix:`
- `refactor:`
- `perf:`
- `docs:`
- `chore:`
- `release:`

Reference template: `.github/commit-template.md`

## Guardrails
- Do not break i18n (`pt/en`) routes.
- Do not break dark/light mode.
- Do not remove tracking or analytics tags.
- Keep `/projects` and `/system` behavior intact.
