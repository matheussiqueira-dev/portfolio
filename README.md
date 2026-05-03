# Matheus Siqueira Portfolio

![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100%2F100%2F100-success)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

This is a bilingual PT/EN portfolio built to position me as a product-minded developer operating at the intersection of business, data, software engineering, and applied AI.

The site is designed around static, typed content and a highly optimized App Router architecture so the portfolio stays fast, accessible, and easy to evolve.

## Architecture

The codebase is organized around a narrow set of responsibilities:

- `app/` contains routes, locale-aware layouts, metadata, and page composition.
- `core/` holds routing, SEO, analytics, and other cross-cutting foundations.
- `data/` stores all typed content, including the bilingual site copy, resume data, project metadata, and case studies.
- `ui/` contains reusable components and presentation primitives.
- `system/` contains feature modules used by the projects and dashboards views.
- `public/` contains images, videos, PDFs, and other static assets.
- `docs/` documents architecture and engineering decisions.

Key references:

- [Architecture notes](docs/architecture.md)
- [Deployment notes](docs/deployment.md)
- [Project case studies data](data/project-case-studies.ts)

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS v4
- next-intl-style locale routing in `core/i18n`
- Sentry for error tracking
- Vercel for deployment and preview environments

## CI and Quality Gates

The repository is set up to enforce a simple production-safe pipeline in GitHub Actions:

- `npm run lint`
- `npm run test --if-present`
- `npm run type-check`
- `npm run build`

The workflow lives in [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## Local Setup

```bash
npm ci
npm run dev
```

Useful commands:

```bash
npm run lint
npm run type-check
npm run format:check
npm run build
npm run validate
```

## Performance and Accessibility

The portfolio is built to target Lighthouse 100/100/100/100 by default. The most important rules are:

- Use fixed `width` and `height` on media to prevent layout shift.
- Prefer `loading="lazy"` and modern formats like AVIF/WebP for images.
- Keep videos on `preload="metadata"` and provide a poster image.
- Use semantic landmarks and explicit ARIA attributes for interactive UI.
- Set the theme before first paint to avoid FOUC in dark mode.

### Image Pattern

```html
<picture>
	<source srcset="/images/project.avif" type="image/avif" />
	<source srcset="/images/project.webp" type="image/webp" />
	<img
		src="/images/project.jpg"
		alt="Project screenshot showing the main dashboard"
		width="1280"
		height="720"
		loading="lazy"
		decoding="async"
	/>
</picture>
```

### Video Pattern

```html
<video
	controls
	playsinline
	preload="metadata"
	poster="/videos/project-poster.webp"
	width="1280"
	height="720"
	aria-label="Project demo video"
>
	<source src="/videos/project.webm" type="video/webm" />
	<source src="/videos/project.mp4" type="video/mp4" />
</video>
```

### Semantic Navigation and Dialogs

```html
<nav aria-label="Primary navigation">
	<ul>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/resume">Resume</a></li>
	</ul>
</nav>

<button aria-expanded="false" aria-controls="language-menu">Language</button>

<div role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
	<h2 id="project-modal-title">Project details</h2>
</div>

<button aria-pressed="true">All projects</button>
```

### Dark Mode Boot Script

```html
<script>
	(() => {
		const storageKey = 'theme';
		const root = document.documentElement;
		const storedTheme = localStorage.getItem(storageKey);
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = storedTheme ?? (systemPrefersDark ? 'dark' : 'light');

		root.dataset.theme = theme;
		root.style.colorScheme = theme;

		if (!storedTheme) {
			const media = window.matchMedia('(prefers-color-scheme: dark)');
			media.addEventListener('change', (event) => {
				const nextTheme = event.matches ? 'dark' : 'light';
				root.dataset.theme = nextTheme;
				root.style.colorScheme = nextTheme;
			});
		}
	})();
</script>
```

## Engineering Decisions

The main engineering choices behind this portfolio are intentional:

- **Static content first**: the portfolio content lives in typed data files, which keeps rendering fast and makes copy updates safe.
- **Locale-aware routing**: PT/EN routes are mirrored so content stays consistent across languages.
- **Performance by default**: media is lazy-loaded, dimensions are explicit, and the page shell is lightweight.
- **SEO and social metadata**: metadata is generated per locale with structured content and canonical-aware routing.
- **Observability**: Sentry and analytics hooks are part of the foundation, not an afterthought.
- **Governance**: linting, formatting, type checking, and CI are designed to fail before a merge reaches `main`.

## Repository Layout

```text
.
├── app/
├── core/
├── data/
├── docs/
├── public/
├── system/
├── tests/
├── ui/
└── .github/
```

## Deployment

The portfolio is ready for Vercel deployment. Production and preview builds should pass the same lint, type, and build checks defined in CI.

## License

MIT. See [LICENSE](LICENSE).
