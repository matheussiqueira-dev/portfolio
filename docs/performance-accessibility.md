# Performance and Accessibility Patterns

These patterns document how media, navigation, dialogs, filters, and theme bootstrapping should be implemented across the portfolio.

## Responsive Image Pattern

Use intrinsic dimensions to avoid Cumulative Layout Shift and serve modern formats before the fallback image.

```tsx
<picture>
  <source srcSet="/projects/encom-cover.avif" type="image/avif" />
  <source srcSet="/projects/encom-cover.webp" type="image/webp" />
  <img
    src="/projects/encom-cover.jpg"
    alt="ENCOM Gesture Console showing webcam telemetry and real-time gesture metrics"
    width={1280}
    height={720}
    loading="lazy"
    decoding="async"
  />
</picture>
```

For Next.js components, prefer `next/image` with `sizes`, explicit dimensions, and `priority` only for above-the-fold media.

```tsx
<Image
  src="/projects/encom-cover.webp"
  alt="ENCOM Gesture Console showing webcam telemetry and real-time gesture metrics"
  width={1280}
  height={720}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
/>
```

## Video Pattern

Videos should keep a fixed 16:9 ratio, preload only metadata, and include controls.

```tsx
<video
  controls
  playsInline
  preload="metadata"
  poster="/videos/encom-poster.webp"
  width={1280}
  height={720}
  aria-label="ENCOM Gesture Console product demo"
>
  <source src="/videos/encom-demo.webm" type="video/webm" />
  <source src="/videos/encom-demo.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
</video>
```

## Semantic Navigation

```tsx
<nav aria-label="Primary navigation">
  <ul>
    <li>
      <Link href="/projects" aria-current={isProjects ? "page" : undefined}>
        Projects
      </Link>
    </li>
    <li>
      <Link href="/services" aria-current={isServices ? "page" : undefined}>
        Services
      </Link>
    </li>
  </ul>
</nav>
```

## Accessible Locale Menu

```tsx
<button
  type="button"
  aria-haspopup="menu"
  aria-expanded={isOpen}
  aria-controls="locale-menu"
  onClick={() => setIsOpen((value) => !value)}
>
  Language
</button>

<ul id="locale-menu" role="menu" hidden={!isOpen}>
  <li role="none">
    <Link role="menuitem" href="/en">
      English
    </Link>
  </li>
  <li role="none">
    <Link role="menuitem" href="/">
      Português
    </Link>
  </li>
</ul>
```

## Accessible Filters

Use real buttons, `aria-pressed`, and a live region for result count updates.

```tsx
<div role="group" aria-label="Project stack filters">
  {filters.map((filter) => (
    <button
      key={filter}
      type="button"
      aria-pressed={activeFilter === filter}
      onClick={() => setActiveFilter(filter)}
    >
      {filter}
    </button>
  ))}
</div>

<p aria-live="polite">
  Showing {visibleProjects.length} of {projects.length} projects
</p>
```

## Accessible Dialog

```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="project-dialog-title"
  aria-describedby="project-dialog-description"
>
  <h2 id="project-dialog-title">Project details</h2>
  <p id="project-dialog-description">
    Architecture, impact, technologies, and available links for this case study.
  </p>
  <button type="button" aria-label="Close project details">
    Close
  </button>
</div>
```

## Dark Mode Boot Script

This script should run before the app paints. It respects the system preference and avoids a flash of the wrong theme.

```html
<script>
  (() => {
    const storageKey = "theme";
    const root = document.documentElement;
    const storedTheme = localStorage.getItem(storageKey);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const theme = storedTheme || (media.matches ? "dark" : "light");

    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    if (!storedTheme) {
      media.addEventListener("change", (event) => {
        const nextTheme = event.matches ? "dark" : "light";
        root.dataset.theme = nextTheme;
        root.style.colorScheme = nextTheme;
      });
    }
  })();
</script>
```

## Lighthouse Checklist

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `article`, and `footer`.
- Keep heading order linear.
- Provide descriptive `alt` text for meaningful images.
- Prefer `loading="lazy"` for offscreen images.
- Use `preload="metadata"` for videos.
- Avoid layout shift with explicit dimensions or aspect-ratio containers.
- Keep focus states visible for keyboard navigation.
- Respect `prefers-reduced-motion` in scroll animations.
