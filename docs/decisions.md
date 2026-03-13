# Architectural Decisions

## ADR-001: Keep Next/Sentry Convention Files at Root
Runtime convention files (`instrumentation*`, `proxy`, `sentry*`) remain at root to avoid framework integration breakage.

## ADR-002: Canonical Public Asset Paths
`public/media` and `public/thumbnails/{pt,en}` are canonical for media and card poster assets.

## ADR-003: Canonical Test Directory
`tests/` is the single top-level location for automated tests.

## ADR-004: Canonical Docs Set
`docs/` maintains a minimal set of stable documents focused on architecture, deployment, UI audit, projects, cleanup, and decisions.

## ADR-005: Default UX Boot State
Application boots in Portuguese (`pt-BR`) and dark theme by default to preserve brand behavior and user expectation.
