# UI Audit

## Scope
Consolidated audit of key UI quality dimensions:

- Accessibility and contrast
- Theme parity (dark/light)
- Bilingual UX consistency (pt/en)
- Projects experience and interaction quality
- Tracking and conversion instrumentation visibility

## Findings Summary
- Light theme contrast issues were previously identified and improved with accessible tokens.
- Dark theme must remain visually and behaviorally stable.
- Projects flow requires expandable cards, lazy media behavior, and responsive consistency.
- Keyboard navigation and focus states are required for interactive controls.

## Non-Negotiable Behaviors
- Theme toggle works in all major routes.
- Language switch preserves route intent and content consistency.
- `/projects` and `/system` render without regressions.
- Global signature and WhatsApp button remain visible/functional.
- Tracking tags remain loaded in layout and CTA events remain emitted.

## Accessibility Baseline
- Visible `:focus-visible` states for all actionable controls.
- Semantic headings and interactive element roles.
- Keyboard access for expandable content and filters.
- Reduced-motion behavior respected where animation exists.

## QA Smoke Checklist
- Open `/`, `/projects`, `/system`.
- Toggle pt/en and dark/light.
- Expand/collapse project cards and confirm no console errors.
- Confirm video lazy load behavior on project details.
- Confirm signature, WhatsApp CTA, and analytics tag presence.
