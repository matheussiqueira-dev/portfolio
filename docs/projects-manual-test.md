# Projects Page Manual Testing Checklist

> Document updated: $(date)
> Purpose: Ensure ProjectCard component system meets accessibility and usability standards
> Coverage: Keyboard navigation, visual design, responsive layout, media lazy-loading

---

## 📋 Test Categories

### 1. **Functional Testing**

#### 1.1 Card Expansion/Collapse
- [ ] Click/tap card header → Details expand smoothly (no layout shift, CLS = 0)
- [ ] Click/tap expanded card again → Details collapse smoothly
- [ ] Multiple cards can be expanded simultaneously
- [ ] Collapse one while another is expanded → Works independently
- [ ] Expand/collapse animation duration is ~500ms (perceptible but not slow)

#### 1.2 Video Lazy-Loading
- [ ] Thumbnails load and display immediately on page load
- [ ] Videos are **NOT** loaded until card is expanded
- [ ] Poster image visible before video loads
- [ ] Video controls appear (play, pause, volume, fullscreen)
- [ ] Video playback is smooth without stuttering
- [ ] Network tab confirms video only loads on expand (dev tools check)

#### 1.3 Filter Interaction
- [ ] All filter buttons appear on load
- [ ] Clicking filter button activates it (visual feedback: background color change)
- [ ] Active filter shows distinct styling
- [ ] Filter combines multiple stack selections (AND logic or visible behavior clear)
- [ ] "All" button resets filters and shows all projects
- [ ] Result count updates dynamically: "X of Y projects"
- [ ] Empty state displays when no projects match filters

#### 1.4 Thumbnail Display
- [ ] Portuguese thumbnails load from `/thumbnails/pt/[slug].png`
- [ ] English thumbnails load from `/thumbnails/en/[slug].png`
- [ ] Fallback image displays if thumbnail missing (no broken image icon)
- [ ] Image scaling: 1x on load, 1.05x on hover (smooth transition)
- [ ] Image aspect ratio preserved (no distortion)

#### 1.5 Bilingual Content
- [ ] Portuguese locale shows PT text (title, tagline, description)
- [ ] English locale (`/en/projects`) shows EN text
- [ ] Language toggle switches locale correctly
- [ ] All bilingual fields populated (title, tagline, description, context)

---

### 2. **Accessibility Testing (WCAG 2.1 AA)**

#### 2.1 Keyboard Navigation
- [ ] **Tab order**: Page title → Filters → First card button → ... → Last card details → Footer
- [ ] **Tab into card**: Focus outline visible on card header button
- [ ] **Enter key**: Opens/closes card (keyboard event handled)
- [ ] **Space key**: Opens/closes card (keyboard event handled)
- [ ] **Shift+Tab**: Reverse navigation works smoothly
- [ ] **Arrow keys**: Consider for filter buttons (left/right cycle filters)
- [ ] **Escape key**: Optional - consider binding to close all cards
- [ ] Focus visible on all interactive elements (buttons, links, filters)

#### 2.2 Screen Reader Testing (NVDA/JAWS/VoiceOver)
- [ ] Page title announced: "Projects" / "Projetos"
- [ ] Card button ARIA label: `aria-expanded="true|false"` read aloud
- [ ] Card ARIA label includes project title (semantic context)
- [ ] Filter button `aria-pressed="true|false"` announced
- [ ] Video landmark announced (alt text or caption)
- [ ] Stack tags read as list (no duplicate/confusing announcement)
- [ ] Result count announced when filters change
- [ ] Empty state message fully accessible

#### 2.3 Color & Contrast (Light Mode)
- [ ] Text on background: Min 4.5:1 contrast (AA standard)
- [ ] Foreground text (`#1a1f24`) on background (`#f5f7f9`): Check ratio = 8.5:1 ✅ AAA
- [ ] Accent color (`#0052cc`) on white: Check ratio = 5.5:1 ✅ AA
- [ ] Muted text (`#5a6f7d`) on background: Check ratio = 4.8:1 ✅ AA
- [ ] Button focus outline: Luminosity contrast sufficient (3:1 minimum)
- [ ] No information conveyed by color alone (icon + text present)

#### 2.4 Color & Contrast (Dark Mode)
- [ ] All contrast ratios verified in dark theme
- [ ] No regressions from light theme update
- [ ] Focus states visible in dark mode

#### 2.5 Motion & Animation
- [ ] **prefers-reduced-motion: reduce** honored:
  - [ ] Card expand animation removed (instant state change)
  - [ ] Thumbnail hover scale removed (no 1x → 1.05x transition)
  - [ ] Filter fade effects removed
  - [ ] Page entrance animation absent
- [ ] Motion preference tested via browser DevTools
- [ ] Test on macOS Accessibility settings
- [ ] Test on Windows Ease of Access settings

#### 2.6 Focus Management
- [ ] Focus visible on all buttons (outline or background change)
- [ ] Focus trap absent (can tab out of card, can tab back in)
- [ ] Focus not hijacked by modals (if any - here: none)
- [ ] Focus returns to filter button after changing (expected behavior)

---

### 3. **Visual & Design Testing**

#### 3.1 Light Theme Colors
- [ ] Background (`#f5f7f9`): Off-white, clean, no harsh contrast
- [ ] Accent (`#0052cc`): Saturated blue, prominent, readable
- [ ] Foreground (`#1a1f24`): Dark, clear text
- [ ] Muted (`#5a6f7d`): Readable secondary text
- [ ] Surface colors: Card backgrounds distinct from page background
- [ ] No color banding or posterization

#### 3.2 Card Design
- [ ] Card border/shadow: 1px solid border + subtle shadow
- [ ] Card padding: Comfortable whitespace inside
- [ ] Card border-radius: ~8-12px (smooth, not harsh)
- [ ] Card title readable (size, color, weight)
- [ ] Card tag line (tagline/eyebrow) distinguished from main title
- [ ] Featured badge visible and well-positioned
- [ ] Card hover state: Subtle lift or shadow increase

#### 3.3 Expanded Details
- [ ] Details section appears below card header (not overlay)
- [ ] Full description wraps properly (no horizontal scroll)
- [ ] Video displays full width (or container-width)
- [ ] Grid layout for role/stack/highlights: 2-3 columns on desktop
- [ ] Stack tags styled consistently (color, size, spacing)
- [ ] Divider lines between sections (if any) visible

#### 3.4 Animation Quality
- [ ] Expand animation: Smooth, easing (cubic-bezier ease-out)
- [ ] No jank or frame drops during animation
- [ ] Animation completes in ~500ms (not instant, not slow)
- [ ] chevron/toggle icon rotates with card expand (180deg rotation)

---

### 4. **Responsive Design Testing**

#### 4.1 Mobile (480px and below)
```
┌─────────────────┐
│   Title + Desc  │
├─────────────────┤
│   Filter Btns ← scroll if needed
│   (wrap or scrollable)
├─────────────────┤
│   [Card 1]      │  Full width
│   Thumbnail     │
│   Title         │
│ [Toggle button] │
│   (Details)     │
├─────────────────┤
│   [Card 2]      │
└─────────────────┘
```

- [ ] Cards stack in 1 column (100% width)
- [ ] Filters wrap or horizontal scroll (no overflow text)
- [ ] Thumbnail scales to container width (100%)
- [ ] Video aspect ratio maintained (16:9)
- [ ] Padding/margins appropriate for small screen
- [ ] Toggle button (expand icon) easily tappable (min 44x44px)
- [ ] Text sizes readable (no microscopic font)

#### 4.2 Tablet (768px)
```
┌──────────────────────┐
│   Title + Desc       │
├──────────────────────┤
│   [Filter Buttons]   │
├──────────────────────┤
│  [Card 1]     │      │
│  Thumbnail    │      │
└──────────────────────┘
```

- [ ] Cards in 1-2 column grid (depending on design)
- [ ] Filters horizontal (no wrap or minimal wrap)
- [ ] Padding balanced for medium screen
- [ ] Video visible at full width

#### 4.3 Desktop (1200px+)
```
┌──────────────────────────────────────┐
│   Title + Description (centered)     │
├──────────────────────────────────────┤
│  [Filters] [All] [React] [Python]... │
├──────────────────────────────────────┤
│  [Card 1]           │  [Card 2]    │
│  Thumbnail          │  Thumbnail   │
│  Title              │  Title       │
│  [Toggle]           │  [Toggle]    │
│  (Details expand)   │  (Details)   │
└──────────────────────────────────────┘
```

- [ ] 2-3 column grid layout
- [ ] Max-width constraint applied (1400px)
- [ ] Filters in horizontal row
- [ ] Generous padding/margins
- [ ] Card thumbnails appropriately sized

#### 4.4 Orientation Changes
- [ ] Rotated from portrait → landscape: Layout reflows correctly
- [ ] No content disappeared on orientation change
- [ ] No horizontal scroll introduced
- [ ] Video remains playable in both orientations

---

### 5. **Performance Testing**

#### 5.1 Page Load
- [ ] First Contentful Paint (FCP): < 2.5s
- [ ] Largest Contentful Paint (LCP): < 2.5s (with images)
- [ ] Cumulative Layout Shift (CLS): < 0.1 (no jank)
- [ ] Time to Interactive (TTI): < 3.5s

#### 5.2 Interaction Performance
- [ ] Card expand: Starts immediately (< 100ms response)
- [ ] Filter click: Updates view instantly (< 200ms)
- [ ] Scroll: Smooth 60fps (no stuttering)
- [ ] Video player: Responsive controls

#### 5.3 Media Optimization
- [ ] Thumbnails: Optimized images (under 200KB each)
- [ ] Videos: Not loaded until expand (lazy-load verified in Network tab)
- [ ] Video file size reasonable (under 5MB for demos)
- [ ] No preload attributes on `<video>` (only `preload="metadata"`)

#### 5.4 Network Activity
- [ ] Page loads with thumbnails only (no videos preloaded)
- [ ] Expand card → Video begins downloading
- [ ] No duplicate requests for same resource
- [ ] Cache headers properly set (static assets)

---

### 6. **Browser Compatibility**

#### 6.1 Modern Browsers
- [ ] Chrome/Edge 120+
- [ ] Firefox 121+
- [ ] Safari 17+ (macOS)
- [ ] Safari iOS 17+

#### 6.2 Features to Test per Browser
- [ ] CSS Grid alignment
- [ ] CSS Custom Properties (variables)
- [ ] CSS aspect-ratio
- [ ] Video element controls
- [ ] IntersectionObserver (if used for lazy-load)

#### 6.3 Known Browser Issues
- [ ] Safari: Video autoplay policies (expect no autoplay)
- [ ] Firefox: Grid gap rendering
- [ ] Edge: CSS gradient direction (vendor prefixes if needed)

---

### 7. **Edge Cases & Error Handling**

#### 7.1 Missing Data
- [ ] Project with no thumbnail → Fallback image or placeholder
- [ ] Project with no videos → Details section visible without video
- [ ] Project with empty description → Section omitted or "N/A" shown
- [ ] Project with no links → Link buttons hidden

#### 7.2 Content Overflow
- [ ] Very long project title → Wraps or truncates gracefully
- [ ] Very long description → Proper text wrapping, readable
- [ ] Many stack tags → Grid wraps, no horizontal scroll
- [ ] Many filter options → Horizontal scroll on mobile (if needed)

#### 7.3 Locale Edge Cases
- [ ] Portuguese with accented characters renders correctly
- [ ] English with long words (e.g., "Componentization") breaks properly
- [ ] Date/number formats don't appear (if not in data)
- [ ] RTL languages not needed (EN/PT are LTR)

#### 7.4 Network Issues
- [ ] Slow network: Thumbnail loads quickly, video delayed (expected)
- [ ] No internet: Fallback behavior (if offline page exists)
- [ ] Failing image: Alt text visible, doesn't break layout
- [ ] Failing video: Error message or graceful degradation

---

### 8. **Integration Testing**

#### 8.1 Component Integration
- [ ] ProjectCard renders within ProjectList
- [ ] ProjectCardDetails opens/closes with parent state
- [ ] Filter buttons update projected displayed (parent → child sync)
- [ ] Language prop flows through all components (locale/locale correctness)

#### 8.2 Page Integration
- [ ] `/projects` (EN) loads correctly
- [ ] `/projetos` (PT) loads correctly
- [ ] Metadata (title, description) set per locale
- [ ] No hydration mismatch (Server Component → Client Component)

#### 8.3 Data Flow
- [ ] Projects data maps correctly from projects-card.ts
- [ ] Bilingual fields (pt/en) resolve correctly per locale
- [ ] Thumbnails resolve to correct paths
- [ ] Video array hydrates without errors

#### 8.4 Styling Integration
- [ ] CSS modules imported correctly
- [ ] Global styles (`globals.css`) applied without conflicts
- [ ] Theme colors (light/dark) resolve from CSS variables
- [ ] No style conflicts with other pages

---

### 9. **Documentation & Completeness**

#### 9.1 Code Documentation
- [ ] ProjectCard component has JSDoc comments
- [ ] ProjectCardDetails component has JSDoc comments
- [ ] ProjectList component has JSDoc comments
- [ ] types (projects-card.types.ts) have detailed comments

#### 9.2 README Updates
- [ ] docs/theme-light-improvements.md created
- [ ] Includes contrast ratios before/after
- [ ] Includes WCAG AA/AAA compliance matrix
- [ ] Includes browser support notes

#### 9.3 Project Data
- [ ] projects-card.ts populated with 3+ real projects
- [ ] Each project has complete bilingual data
- [ ] Thumbnails exist at specified paths
- [ ] Video paths valid or noted as "coming soon"

---

## ✅ Sign-Off Checklist

### Pre-Merge Requirements
- [ ] All "Functional Testing" items passed
- [ ] All "Accessibility Testing" items passed (critical for AA compliance)
- [ ] All "Responsive Design" items passed (mobile, tablet, desktop)
- [ ] Performance metrics acceptable (CLS < 0.1, FCP < 2.5s)
- [ ] No console errors or warnings
- [ ] No dark mode regressions

### Testing Environment
- [ ] Tested on Windows (primary development OS)
- [ ] Tested on macOS (team member or simulator)
- [ ] Tested on iOS Safari (if possible)
- [ ] Tested on Android Chrome

### Git Readiness
- [ ] All files committed: components, CSS modules, data, docs
- [ ] Commit messages follow convention
- [ ] Branch reviewed by team lead
- [ ] No merge conflicts

---

## 📝 Test Execution Log

### Session 1: $(date)
- Tester: [Name]
- Environment: Chrome 125, macOS 14.2, 1920x1080
- Results:
  - [ ] Feature flag: Passed
  - [ ] Accessibility: Passed
  - [ ] Responsive: Passed
  - Notes: [Any issues found]

### Session 2: [Future session]
- Tester: [Name]
- Environment: [Browser, OS, Resolution]
- Results:
  - [ ] Feature flag: Passed
  - [ ] Accessibility: Passed
  - [ ] Responsive: Passed
  - Notes: [Any issues found]

---

## 🐛 Known Issues & Resolutions

### Issue #1: [Title]
- **Found in**: [Component/browser/OS]
- **Severity**: [Critical/High/Medium/Low]
- **Status**: [Open/Resolved/Deferred]
- **Resolution**: [What was done or why deferred]

---

## 🎯 Next Steps

1. [ ] Execute full test suite on all browsers
2. [ ] Gather accessibility audit from external tool (axe, WAVE)
3. [ ] Performance audit with Lighthouse
4. [ ] User testing with target audience
5. [ ] Final QA sign-off before production deployment

---

Generated: $(date)
Last Updated: [Add timestamp when updating]
