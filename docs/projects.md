# Projects Module

## Purpose

Defines data contracts and UI rendering for `/projects` in PT/EN.

## Main Sources

- `data/projects.ts`
- `data/projects.en.ts`
- `data/projects-card.ts`
- `system/projects/*`

## Media and Thumbnail Conventions

- Videos and downloadable media use `public/media/*`
- Card posters use `public/thumbnails/pt/*` and `public/thumbnails/en/*`

## Invariants

- Expand/collapse behavior preserved
- Lazy video loading preserved
- No route changes for localized projects pages
