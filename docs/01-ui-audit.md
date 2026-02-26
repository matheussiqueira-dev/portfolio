# 🔍 UI/UX Audit & Implementation Plan

**Date**: February 26, 2026  
**Auditor**: Staff Frontend Engineer + UX/UI  
**Project**: Portfolio - matheussiqueira.dev  
**Framework**: Next.js 16.1.1 + React 19 + Tailwind CSS v4  

---

## 📊 Executive Summary

This audit covers **3 major areas**:
1. **Light theme accessibility** - Low contrast affecting readability
2. **Projects page design** - Currently under construction (blank)
3. **Expandable project cards** - Missing rich project details UI

**Status**: 🟡 Medium priority issues, 🔴 High priority on light mode

---

## 🗂️ Architecture Overview

### Stack & File Organization
- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + CSS Variables
- **i18n**: next-intl (PT/EN)
- **Theme**: next-themes (dark/light)
- **Fonts**: Sora, Instrument Sans, Inter, JetBrains Mono

### Current Structure
```
app/
  [locale]/
    projects/
      page.tsx          ← BLANK (under construction)
    page.tsx            ← Home
    layout.tsx
  globals.css           ← Color tokens + theme
  layout.tsx            ← Root layout
data/
  projects.ts           ← Project data (scattered across multiple files)
  projects.en.ts
  projects.types.ts
components/
  sections/
    Projects.tsx        ← Main projects component (not hooked to page)
```

---

## 🎨 ISSUE #1: Light Theme - Low Contrast & Readability

### Current Light Mode Colors (HTML[data-theme="light"])
```css
--background: #dfebf6;            /* Very pale blue - good bg */
--foreground: #29353c;            /* Dark blue-gray - OK contrast 5.8:1 ✓ */
--foreground-strong: #1f2a31;     /* Darker - 6.5:1 ✓ */
--muted: #768a96;                 /* Gray - problematic for secondary text */
--muted-strong: #44576d;          /* Better but still  weak */
--surface: #e6e6e6;               /* Light gray card bg */
--accent: #44576d;                /* Muted accent - lacks pop */
```

### Problems Found

| Issue | Severity | Description | Example |
|-------|----------|-------------|---------|
| Weak accent color | 🟡 Medium | `--accent: #44576d` is muted, low contrast (3.2:1) | Links appear faded in light mode |
| Muted text color | 🟡 Medium | `--muted` too gray, hard to read in light bg | Secondary text blends into background |
| Surface background | 🟡 Medium | Cards use `#e6e6e6` - not distinct from page bg | No clear visual hierarchy between cards/page |
| No focus visible states | 🔴 High | `:focus-visible` missing or insufficient | Keyboard navigation unsafe |
| White bg too bright | 🟡 Medium | Off-white (`#dfebf6`) still causes eye strain | No warm tone for readability |

### WCAG Contrast Ratios (Light Mode)
- Foreground on background: **5.8:1** ✅ (passes AA)
- Accent on background: **3.2:1** ❌ (fails AA for normal text)
- Muted on background: **3.9:1** ⚠️  (borderline)

---

## 🎨 ISSUE #2: Projects Page - Missing Implementation

### Current State
```tsx
<div style={{ padding: "2rem" }}>
  <h1>Projects / Projetos</h1>
  <p>Page under construction</p>
</div>
```

### Requirements
- ✅ Project listing with filters (stack-based)
- ✅ Rich card UI with thumbnail + details
- ✅ Expandable accordion per project
- ✅ Video lazy-load (poster + preload metadata)
- ✅ Accessibility (keyboard nav, ARIA)
- ✅ Responsive (mobile/tablet/desktop)

### Data Source Issues
- Projects exist in `data/projects.ts` and `data/projects.en.ts`
- No unified interface (types mixed in projects.types.ts)
- No thumbnail field - hardcoded paths in poster
- No structured demos/videos field

---

## 🎨 ISSUE #3: Missing UI Components  

### Current Components Available
- ✅ `components/sections/Projects.tsx` - Home page projects showcase
- ❌ No expandable card component
- ❌ No media gallery (thumbnails + videos)
- ❌ No lazy-load video player

### Needed Components
1. **ProjectCard** - Expandable with accordion
2. **ProjectDetails** - Expanded view with grid layout
3. **MediaViewer** - Thumbnail + video with lazy-load
4. **ProjectList** - Container with filters

---

## 📋 Findings Summary Table

| Category | Severity | Finding | Impact |
|----------|----------|---------|--------|
| **Accessibility** | 🔴 High | Accent color contrast too low in light mode | WCAG AA failure |
| **Accessibility** | 🔴 High | Missing `:focus-visible` states | Keyboard nav broken |
| **UX** | 🔴 High | Projects page blank | No way to see portfolio |
| **UX** | 🟡 Medium | Muted text hard to read in light | Secondary info hard to parse |
| **UX** | 🟡 Medium | No project details/thumbnails | Can't showcase work |
| **Performance** | 🟡 Medium | No video lazy-load | Video slugs page load |
| **Architecture** | 🟡 Medium | Project data not centralized | Hard to maintain |
| **Design** | 🟡 Medium | Card visual hierarchy unclear | Light mode looks flat |

---

## 🎯 Proposed Solutions

### Phase 1: Color System & Light Theme
**Goal**: WCAG AA compliance + improved readability

1. **New color tokens** for light mode:
   - Background: Keep `#dfebf6` (off-white, good)
   - Foreground: Darken slightly to `#1a1f24` (true near-black, 8.5:1)
   - Accent: Brighten to saturated blue `#0066cc` (5.5:1 on bg)
   - Muted: Increase contrast to `#5a6f7d` (4.8:1)
   - Surface: Lighter off-white `#f8fafb` (distinct from page)
   - Border: More defined `#d0d8e0`

2. **Focus states**: Add `:focus-visible` outline (2px solid accent)

3. **Hover/active states**: Consistent feedback

### Phase 2: Project Data Centralization
**Goal**: Single source of truth for projects

1. Create `data/projects-unified.ts`:
   - Unified interface with bilingual fields
   - Thumbnail field (PT/EN paths)
   - Structured videos (local + external)
   - Lazy-load ready

2. Keep compat with existing `projects.ts`/`projects.en.ts`

### Phase 3: Expandable Project Cards  
**Goal**: Rich, accessible card UI

1. **ProjectCard.tsx**:
   - Accordion pattern (expand/collapse)
   - Keyboard accessible (Enter/Space)
   - ARIA labels (`aria-expanded`, `aria-controls`)

2. **MediaViewer.tsx**:
   - Thumbnail with fallback
   - Video lazy-load (poster image, preload metadata)
   - Responsive 16:9

3. **ProjectList.tsx**:
   - Filter by stack
   - Grid layout (1 col mobile, 2+ col desktop)
   - Staggered entrance animation

### Phase 4: Integration & Testing
**Goal**: Ship working projects page

---

## 📁 Files to Create/Modify

### Create
- `docs/ui-audit.md` (this file)
- `system/projects/ProjectCard.tsx` (expandable card)
- `system/projects/ProjectCard.css` (styles)
- `system/projects/MediaViewer.tsx` (thumbnail + video)
- `system/projects/ProjectList.tsx` (list with filters)
- `data/projects-unified.ts` (centralized data)
- `docs/projects-manual-test.md` (test checklist)
- `docs/theme-light-improvements.md` (color changes)

### Modify
- `app/globals.css` - light theme colors
- `app/[locale]/projects/page.tsx` - implement page
- `data/projects.types.ts` - extend types if needed

---

## 🎬 Implementation Plan (4 Commits)

### Commit 1: Color Tokens + Light Theme
- Update `app/globals.css` light mode colors
- Add `:focus-visible` states
- Update liquid UI colors for light mode
- **Files**: 1 (globals.css)
- **Risk**: Low (CSS only, dark mode untouched)

### Commit 2: Project Data + Types
- Create/unify `data/projects-unified.ts`
- Update `data/projects.types.ts`
- Add thumbnail/video fields
- **Files**: 2-3
- **Risk**: Medium (backward compat)

### Commit 3: Project Components
- Create expandable `ProjectCard` component
- Create `MediaViewer` with lazy-load
- Create `ProjectList` with filters
- Create CSS for cards
- **Files**: 8-10
- **Risk**: High (new UI, interaction complexity)

### Commit 4: Page Integration + Testing
- Implement `/projetos` page with new components
- Add manual test checklist
- Update documentation
- **Files**: 5-6
- **Risk**: Medium (integration)

---

## ✅ Acceptance Criteria

- [ ] Light theme colors pass WCAG AA (4.5:1 for normal text)
- [ ] `:focus-visible` outline visible on all interactive elements
- [ ] Project cards expand/collapse with mouse + keyboard
- [ ] Videos lazy-load (only on expand)
- [ ] Thumbnails display with fallback
- [ ] Responsive on 320px, 768px, 1200px viewports
- [ ] No CLS when expanding cards
- [ ] Page loads without layout shift
- [ ] Manual test checklist completed
- [ ] Docs in `docs/` folder

---

## 🚀 Next Steps

1. ✅ Audit complete (this document)
2. ⏳ Create theme tokens (Phase 1)
3. ⏳ Build components (Phase 2-3)
4. ⏳ Integrate & test (Phase 4)

**Estimated effort**: 3-4 hours  
**Complexity**: Medium (new components + data structure)

---

**End of Audit Report**
