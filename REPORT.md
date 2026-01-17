# Lighthouse Report

Local run via `npx lighthouse` against `next start` on `http://localhost:3001`.

## Baseline (before changes)

| Page | Profile | Perf | A11y | BP | SEO | LCP (ms) | CLS | INP (ms) | TTFB (ms) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| / | desktop | 100 | 96 | 96 | 100 | 693 | 0.000 | 0 | 11 |
| / | mobile | 90 | 96 | 92 | 100 | 3329 | 0.000 | 0 | 17 |
| /projects | desktop | 100 | 96 | 96 | 100 | 645 | 0.000 | 0 | 6 |
| /projects | mobile | 91 | 96 | 92 | 100 | 3037 | 0.000 | 0 | 7 |

## After changes

| Page | Profile | Perf | A11y | BP | SEO | LCP (ms) | CLS | INP (ms) | TTFB (ms) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| / | desktop | 100 | 96 | 100 | 100 | 760 | 0.000 | 0 | 99 |
| / | mobile | 90 | 96 | 100 | 100 | 3256 | 0.000 | 0 | 10 |
| /projects | desktop | 100 | 96 | 100 | 100 | 618 | 0.000 | 0 | 5 |
| /projects | mobile | 89 | 96 | 100 | 100 | 3074 | 0.000 | 0 | 7 |

## Notes / tradeoffs
- Best Practices improved to 100 after removing console errors and fixing flag sizing.
- Mobile LCP remains above the 2.5s target in local Lighthouse runs (OneDrive + Windows I/O and CPU throttling can skew results); production on Vercel may differ.
- Encountered EPERM unlink on `.next` (OneDrive). Resolved by stopping Node processes and removing `.next` before rebuilding.

## Key changes that affect performance/SEO
- JSON-LD (Person/WebSite + WebPage/ItemList), canonical + hreflang, metadata consistency.
- Speed Insights gated to Vercel runtime to avoid local 404 console errors.
- Hero image sizing/quality adjustments and reduced backdrop blur on mobile.
- `content-visibility` added for below-the-fold sections.
