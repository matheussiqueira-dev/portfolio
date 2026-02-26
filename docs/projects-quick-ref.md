# Quick Reference - Projects Page Implementation

> **Project**: Portfolio Projects Page Redesign + Light Theme Accessibility  
> **Status**: ✅ Implemented - **READY FOR TESTING**  
> **Checklist**: Use this for development workflow

---

## 🚀 Quick Start

### 1. Start Development Server
```bash
npm run dev
# Opens http://localhost:3000
```

### 2. View Projects Page
- **Portuguese**: http://localhost:3000/projetos
- **English**: http://localhost:3000/en/projects

### 3. Test Mode
```bash
# Lint check
npm run lint

# Format check
npm run format

# Full validation (lint + format + build)
npm run validate

# Build for production
npm run build
```

---

## 📂 File Reference

### New Components (Use Reference Only - No Edits)
```
system/projects/
├── ProjectCard.tsx              ← Expandable card (231 lines)
├── ProjectCard.module.css       ← Card styling (280+ lines)
├── ProjectCardDetails.tsx       ← Expanded content (97 lines)
├── ProjectCardDetails.module.css ← Details styling (180+ lines)
├── ProjectList.tsx              ← Container with filters (94 lines)
└── ProjectList.module.css       ← Container styling (200+ lines)
```

### Data Files (Edit to Add Projects)
```
data/
├── projects-card.types.ts       ← Interface definitions (READ ONLY)
└── projects-card.ts             ← EDIT HERE to add projects
                                   (currently 3 samples: PT + EN)
```

### Page Files (Integrated)
```
app/[locale]/projects/
├── page.tsx                     ← Server component (UPDATED)
├── projects-content.tsx         ← Client wrapper (NEW)
└── projects-page.module.css     ← Page styling (NEW)
```

### Documentation (Reference)
```
docs/
├── theme-light-improvements.md  ← Color decision rationale
├── projects-manual-test.md      ← 100+ test cases
├── IMPLEMENTATION-SUMMARY.md    ← This phase summary
└── projects-quick-ref.md        ← This file
```

---

## 🎨 Color Tokens (Light Theme - Updated)

### CSS Variables (in `app/globals.css`)
```css
/* Light Theme */
html[data-theme="light"] {
  --background: #f5f7f9;          /* Off-white page bg */
  --foreground: #1a1f24;          /* Dark text (8.5:1 contrast) */
  --accent: #0052cc;              /* Blue interactive (5.5:1 contrast) */
  --muted-foreground: #5a6f7d;    /* Secondary text (4.8:1) */
  --card: #ffffff;                /* White card backgrounds */
  --border: #e0e6eb;              /* Light gray borders */
}
```

### Usage in Components
```tsx
// Use CSS variables in modules:
.button {
  color: var(--foreground);
  background-color: var(--card);
  border: 1px solid var(--border);
}

.active {
  color: var(--accent);          /* Blue for active states */
}

.disabled {
  color: var(--muted-foreground); /* Gray for disabled */
}
```

---

## 📊 Adding a New Project

### Step 1: Create Data Entry
Edit `data/projects-card.ts`:

```typescript
export const projectsCardPt: ProjectCard[] = [
  {
    slug: "my-new-project",           // Used in URL & filenames
    id: "my-new-project",             // Unique identifier
    title: {
      pt: "Meu Novo Projeto",
      en: "My New Project"
    },
    tagline: {
      pt: "Uma descrição curta",
      en: "A short description"
    },
    description: {
      pt: "Descrição média...",
      en: "Medium description..."
    },
    fullDescription: {
      pt: "Descrição completa detalhada...",
      en: "Complete detailed description..."
    },
    thumbnail: {
      pt: "/thumbnails/pt/my-new-project.png",
      en: "/thumbnails/en/my-new-project.png"
    },
    videos: [
      {
        type: "local",                // or "youtube", "vimeo"
        src: "/my-video.mp4",         // Path to video file
        poster: "/thumbnails/pt/my-new-project.png",
        caption: "Video caption here"
      }
    ],
    stack: ["React", "TypeScript", "Node.js"],  // Tech stack
    role: "Full Stack Developer",
    context: {
      pt: "Contexto do projeto...",
      en: "Project context..."
    },
    highlights: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3"
    ],
    links: {
      repo: "https://github.com/...",
      live: "https://...",
      demo: "https://...",
      caseStudy: "/projetos/my-new-project"
    },
    featured: false,                // true = shows at top
    order: 4                         // Display order
  }
];
```

### Step 2: Add Images
```
public/thumbnails/
├── pt/
│   └── my-new-project.png        (PT thumbnail)
└── en/
    └── my-new-project.png        (EN thumbnail)
```

### Step 3: Add Video (Optional)
```
public/
└── my-video.mp4                  (Video file)
```

### Step 4: Test
```bash
npm run dev
# Visit: http://localhost:3000/projetos
# Click card to expand and verify video loads
```

---

## ♿ Accessibility Checklist (Per Component)

### For ProjectCard
- ✅ Card button has `aria-expanded="true|false"`
- ✅ Card button has `aria-controls="details-{id}"`
- ✅ Card button has `aria-labelledby` pointing to title
- ✅ Focus visible on card button (2px outline)
- ✅ Enter/Space keys toggle expand
- ✅ Tab order preserved (no jumping)

### For ProjectList
- ✅ Filter buttons have `aria-pressed="true|false"`
- ✅ Filter buttons labeled (content or aria-label)
- ✅ Result count updates when filters change
- ✅ Empty state message is semantic

### For Video
- ✅ Video has `controls` attribute (play, pause, etc.)
- ✅ Video has `preload="metadata"` (not "auto")
- ✅ Poster image visible before video loads
- ✅ Video not preloaded (lazy-load = no network until expand)

---

## 🧪 Testing Commands

### Automated Testing
```bash
# Check for lint errors
npm run lint

# Auto-fix lint errors
npm run lint:fix

# Check code formatting
npm run format

# Run all validations (lint + format + build)
npm run validate
```

### Manual Testing (Checklist)
See `docs/projects-manual-test.md` for full 100+ item checklist.

**Quick test** (5 minutes):
1. **Load page**: http://localhost:3000/projetos
2. **Click card**: Should expand smoothly (no jump)
3. **Video**: Should NOT load until expand
4. **Keyboard**: Press Tab → Enter → should expand
5. **Filter**: Click stack filter → results update
6. **Mobile**: DevTools → Phone size (480px) → responsive?
7. **Dark mode**: Toggle theme → colors look good?
8. **Accessibility**: Right-click → Inspect → axe DevTools → run scan

---

## 🔧 Customization Examples

### Change Card Color
In `system/projects/ProjectCard.module.css`:
```css
.card {
  background: var(--card);        /* White */
  border: 1px solid var(--border);
}

.card:hover {
  border-color: var(--accent);    /* Blue on hover */
}
```

### Change Animation Speed
In `system/projects/ProjectCard.module.css`:
```css
.detailsAnimation {
  transition: max-height 500ms cubic-bezier(0.4, 0, 0.2, 1);
  /* Change 500ms to faster/slower: 300ms, 800ms, etc. */
}
```

### Change Filter Layout
In `system/projects/ProjectList.module.css`:
```css
.filters {
  display: flex;
  gap: 0.5rem;        /* Space between buttons */
  flex-wrap: wrap;    /* Stack on mobile */
  justify-content: center;
  /* Or: justify-content: flex-start (left-align) */
}
```

### Change Video Aspect Ratio
In `system/projects/ProjectCardDetails.module.css`:
```css
.video {
  aspect-ratio: 16/9;   /* Change to 4/3, 1/1, 21/9, etc. */
  width: 100%;
  height: auto;
  border-radius: 8px;
}
```

---

## 📱 Responsive Breakpoints

The design uses 3 key breakpoints:

```css
/* Desktop: 1200px and up */
@media (min-width: 1200px) {
  /* 2-3 column grid */
}

/* Tablet: 768px - 1199px */
@media (max-width: 1199px) {
  /* 1-2 column grid */
}

/* Mobile: 480px - 767px */
@media (max-width: 768px) {
  /* 1 column, smaller fonts */
}

/* Extra small: Below 480px */
@media (max-width: 480px) {
  /* Very compact */
}
```

To test:
1. DevTools → F12
2. Ctrl+Shift+M (responsive mode)
3. Drag width or select preset (iPhone, iPad, etc.)

---

## 🚨 Common Issues & Solutions

### Issue: Videos Don't Load
**Symptom**: Expand card, video shows black square  
**Check**:
1. Network tab (DevTools F12) → is `.mp4` file downloading?
2. File path in `projects-card.ts` → correct path?
3. File exists: `public/my-video.mp4` exists?
4. Browser permissions: Allow autoplay? (Some browsers block)

**Solution**: Check file path, verify video file exists, check browser console for errors

---

### Issue: Cards Don't Expand
**Symptom**: Click card, nothing happens  
**Check**:
1. Browser console (F12) → any JS errors?
2. Is `ProjectCard.tsx` rendering? (DevTools React tab)
3. Does card have `"use client"` directive?

**Solution**: Check console errors, run `npm run build` to catch TS errors

---

### Issue: Light Theme Looks Wrong
**Symptom**: Colors don't match design  
**Check**:
1. Theme selector → is light mode selected?
2. Browser cache → hard refresh (Ctrl+Shift+Delete)
3. `globals.css` → light theme block has updated colors?

**Solution**: Clear cache, verify CSS is loaded, check theme setting

---

### Issue: Accessibility Audit Fails
**Symptom**: axe DevTools shows violations  
**Check**:
1. Which violation? (contrast, ARIA, focus, etc.)
2. Which element? (use axe to highlight)
3. Which component file? (ProjectCard, ProjectList, etc.)

**Solution**: See `docs/projects-manual-test.md` for accessibility checklist

---

## 📝 Commit Message Template

When committing changes:

```bash
# General format
git commit -m "feat: [scope] - [description]"

# Examples
git commit -m "feat: projects - add new case study project"
git commit -m "fix: ProjectCard - fix video lazy-load timing"
git commit -m "docs: projects manual test - add edge case"
git commit -m "style: ProjectList - improve mobile filter layout"
```

---

## 🎓 Learning Resources

### Component Architecture
- See: `docs/IMPLEMENTATION-SUMMARY.md` section "Architecture & Integration"
- Component hierarchy diagram shows data flow

### Accessibility
- See: `docs/theme-light-improvements.md` section "WCAG Compliance"
- See: `docs/projects-manual-test.md` section "Accessibility Testing"
- External: [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### CSS Modules & Styling
- Each component: `.tsx` + `.module.css` pair
- CSS variables: `var(--accent)`, `var(--foreground)`, etc.
- Responsive: `@media (max-width: Xpx)` queries

### Performance
- Video lazy-load: See `ProjectCardDetails.tsx` useEffect
- Image lazy-load: `next/image` with `priority={false}` default
- CSS modules: Scoped, automatic minification

---

## 🔗 Quick Links

| Document | Purpose |
|----------|---------|
| `IMPLEMENTATION-SUMMARY.md` | Full project overview (start here) |
| `theme-light-improvements.md` | Color decision details |
| `projects-manual-test.md` | 100+ test cases |
| `01-ui-audit.md` | Original audit (context) |

---

## ✅ Pre-Deployment Checklist

- [ ] All lint errors fixed (`npm run lint:fix`)
- [ ] Code formatted (`npm run format`)
- [ ] Build succeeds (`npm run build`)
- [ ] Manual tests completed (see test checklist)
- [ ] Accessibility audit passed (axe DevTools)
- [ ] Responsive test passed (3 viewports)
- [ ] Dark mode verified (no regressions)
- [ ] Video lazy-load confirmed (Network tab)
- [ ] All 4 commits ready

---

**Version**: 1.0  
**Last Updated**: [Current Date]  
**Maintained by**: [Team Name]
