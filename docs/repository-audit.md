# Repository Audit

## Scope

Audited repository layout, root files, docs structure, static assets, and test organization for enterprise-grade maintainability.

## Findings

| Problem                                                                         | Impact                                              | Decision                                                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------- |
| Tests were under `__tests__/` at root                                           | Inconsistent navigation and less explicit ownership | Moved to `tests/`                                                 |
| Media files mixed in `public/` root                                             | Hard to browse and maintain assets                  | Standardized under `public/media/`                                |
| Legacy thumbnail folder naming (`Thmbnail`) and duplicated assets               | Broken conventions and maintenance risk             | Migrated to `public/thumbnails/{pt,en}` and removed legacy folder |
| Docs had overlapping audit/progress files                                       | Redundant maintenance surface                       | Consolidated to canonical documentation set                       |
| Missing repository governance files (`CI`, commit template, contributing guide) | Lower onboarding and quality consistency            | Added CI workflow, commit template, and contribution guide        |
| README did not reflect current architecture                                     | Incorrect onboarding instructions                   | Rewritten with architecture, setup, and structure sections        |

## Non-breaking Constraints Preserved

- Dark/Light mode behavior
- PT/EN i18n routing and content
- `/projects` and `/system`
- Global signature
- WhatsApp CTA
- Tracking and analytics tags
