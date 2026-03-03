# Projects

## Purpose
Defines the `/projects` experience and its data/UI contract.

## Core Capabilities
- Bilingual project catalog (pt/en)
- Expandable project cards
- Lazy-loaded media previews/videos
- Responsive grid and filter interactions
- Route stability for localized project pages

## Data Contracts
Primary types are maintained in:

- `data/projects.types.ts`
- `data/projects-card.types.ts`
- `data/deployment.types.ts`

Primary data sources:

- `data/projects.ts`
- `data/projects.en.ts`
- `data/projects-card.ts`
- `data/deployment-nodes.pt.ts`
- `data/deployment-nodes.en.ts`

## UI and System Modules
- Feature modules: `system/projects/*`
- Shared UI/media helpers: `ui/components/*` and `components/projects/*` (migrated during cleanup)

## Manual Validation Checklist
- `/projects` and `/en/projects` return 200.
- Cards expand/collapse by click and keyboard.
- Media loads on demand.
- No missing thumbnails/fallback breaks.
- Filters update visible results and empty state works.
