# Pre-Deployment Checklist

> **Project**: Portfolio Projects Page Redesign + Light Theme Update  
> **Phase**: 4 (Complete)  
> **Purpose**: Verify all work before merging to main branch

---

## ✅ CRITICAL CHECKS (Must Pass)

### Code Quality
- [ ] Run `npm run lint` → **No errors**
- [ ] Run `npm run format` → **All files formatted**
- [ ] Run `npm run build` → **Build succeeds**
- [ ] Run `npm run validate` → **All checks pass**
- [ ] No console errors in browser (F12)
- [ ] No TypeScript errors (`npm run build` output)

### Accessibility
- [ ] ARIA labels on card buttons (`aria-expanded`, `aria-controls`)
- [ ] Filter buttons have `aria-pressed` state
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus visible on all interactive elements
- [ ] Color contrast meets WCAG AA minimum (axe DevTools)
- [ ] `prefers-reduced-motion: reduce` respected
- [ ] Screen reader test (NVDA/JAWS/VoiceOver) - semantic hierarchy clear

### Functionality
- [ ] `/projetos` page loads without errors
- [ ] `/en/projects` page loads without errors
- [ ] Cards expand/collapse on click
- [ ] Cards expand/collapse on Enter/Space keys
- [ ] Filters update project list in real-time
- [ ] Result count updates when filtering
- [ ] "All" filter resets to showing all projects
- [ ] Empty state displays when no projects match filter

### Media & Performance
- [ ] Thumbnails load immediately on page load
- [ ] Videos do NOT load until card expanded (verify Network tab)
- [ ] Poster image visible before video loads
- [ ] Video controls appear (play, pause, volume, fullscreen)
- [ ] Page load time < 2.5s (Lighthouse FCP)
- [ ] No layout shift on card expand (CLS < 0.1)
- [ ] Smooth animations (60fps, no jank)

### Responsive Design
- [ ] Mobile (480px): 1 column, compact layout
- [ ] Tablet (768px): 2 columns, medium spacing
- [ ] Desktop (1200px): 2-3 columns, generous spacing
- [ ] No horizontal scroll on any viewport
- [ ] Touch targets (buttons) min 44x44px on mobile
- [ ] Text readable at all sizes (no microscopic fonts)
- [ ] Orientation changes work (portrait ↔ landscape)

### Theming
- [ ] Light theme: All new colors applied
  - [ ] Background: `#f5f7f9` (off-white)
  - [ ] Foreground: `#1a1f24` (dark)
  - [ ] Accent: `#0052cc` (blue)
  - [ ] Muted: `#5a6f7d` (gray)
- [ ] Dark theme: No visual changes (verify unchanged)
- [ ] Theme toggle works (if available)
- [ ] No color bleeding between themes

---

## ✅ COMPONENT CHECKS

### ProjectCard Component
- [ ] Renders without errors
- [ ] Thumbnail displays correctly
- [ ] Title, tagline visible
- [ ] Featured badge shows for featured projects
- [ ] Chevron icon rotates on expand
- [ ] Card hover scale triggers (1 → 1.05)
- [ ] Staggered animation applied (index-based)
- [ ] Focus outline visible on card button

### ProjectCardDetails Component
- [ ] Details section renders when expanded
- [ ] Full description displays
- [ ] Context section bilingual (PT/EN correct)
- [ ] Video loads on expand (lazy-load verified)
- [ ] Video controls accessible
- [ ] Metadata grid displays:
    - [ ] Role
    - [ ] Stack (as tags)
    - [ ] Highlights (as bullet list)
- [ ] Links section displays (if project has links)

### ProjectList Container
- [ ] Filter buttons render
- [ ] Active filter highlighted
- [ ] Clicking filter updates visible projects
- [ ] Multiple filters can be selected (if supported)
- [ ] Result count updates dynamically
- [ ] Projects grid displays
- [ ] Empty state shows when no matches

### Page Styling
- [ ] Page title displays with gradient
- [ ] Page description shows
- [ ] Header centered and sized appropriately
- [ ] Container max-width applied
- [ ] Padding/margins consistent
- [ ] Responsive adjustments work at breakpoints

---

## ✅ BROWSER COMPATIBILITY

### Modern Browsers
- [ ] Chrome 125+ (latest)
  - [ ] Components render
  - [ ] Animations smooth
  - [ ] No console errors
- [ ] Firefox 121+ (latest)
  - [ ] Components render
  - [ ] Grid layout correct
  - [ ] Animations smooth
- [ ] Safari 17+ (macOS)
  - [ ] Components render
  - [ ] Video playback works
  - [ ] No rendering issues
- [ ] Edge 125+ (latest)
  - [ ] Components render
  - [ ] Consistent with Chrome
  - [ ] No issues

### Mobile Browsers
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Samsung Internet
- [ ] Firefox Mobile

**Test Matrix**:
```
├── Desktop
│   ├── Chrome 1920x1080
│   ├── Firefox 1920x1080
│   ├── Safari 1440x900
│   └── Edge 1920x1080
├── Tablet
│   ├── iPad (768x1024)
│   └── Android tablet (800x600)
└── Mobile
    ├── iPhone (390x844)
    └── Android (412x915)
```

---

## ✅ DATA VALIDATION

### Projects Data
- [ ] Portuguese projects exist (`projectsCardPt[]`)
- [ ] English projects exist (`projectsCardEn[]`)
- [ ] Each project has all required fields:
  - [ ] slug
  - [ ] id
  - [ ] title (pt/en)
  - [ ] tagline (pt/en)
  - [ ] description (pt/en)
  - [ ] fullDescription (pt/en)
  - [ ] thumbnail (pt/en paths)
  - [ ] stack
  - [ ] role
  - [ ] context (pt/en)
  - [ ] highlights
  - [ ] links
- [ ] Thumbnail paths match actual files in `/public/thumbnails`
- [ ] Video paths (if present) match actual files in `/public`
- [ ] No null/undefined required fields
- [ ] At least 3 projects in data

### Types & Interfaces
- [ ] `ProjectCard` interface typed correctly
- [ ] `ProjectVideo` interface has required fields
- [ ] All TypeScript errors resolved
- [ ] No explicit `any` types
- [ ] Strict mode enabled (tsconfig.json)

---

## ✅ DOCUMENTATION

### Code Comments
- [ ] ProjectCard.tsx has JSDoc
- [ ] ProjectCardDetails.tsx has JSDoc
- [ ] ProjectList.tsx has JSDoc
- [ ] exported functions documented
- [ ] Complex logic has inline comments

### External Documentation
- [ ] `docs/theme-light-improvements.md` complete
- [ ] `docs/projects-manual-test.md` comprehensive (100+ tests)
- [ ] `docs/IMPLEMENTATION-SUMMARY.md` detailed
- [ ] `docs/projects-quick-ref.md` developer-friendly
- [ ] `docs/FILE-STRUCTURE.md` complete reference

### README & Guides
- [ ] Main README.md updated (if needed)
- [ ] Commit messages follow convention
- [ ] CHANGELOG or release notes prepared (optional)
- [ ] Migration guide (if applicable)

---

## ✅ GIT & DEPLOYMENT

### Code Review
- [ ] All changes reviewed by team lead
- [ ] No merge conflicts
- [ ] Branch is up-to-date with main
- [ ] PR description complete (if using PR)

### Commits
- [ ] 4 logical commits prepared:
  1. [ ] `feat: update light theme colors to WCAG AA compliance`
  2. [ ] `feat: introduce ProjectCard types and sample data`
  3. [ ] `feat: implement expandable ProjectCard component system`
  4. [ ] `feat: integrate projects page with new card system`
- [ ] Each commit message is descriptive
- [ ] Commit scope clear (feat, fix, docs, style, etc.)
- [ ] No accidental changes (check git diff)

### Pre-merge Cleanup
- [ ] Remove any debugging code (console.log, etc.)
- [ ] Remove any commented-out code
- [ ] No temporary files left behind
- [ ] Cache cleaned (`npm run clean`)
- [ ] node_modules not included (check .gitignore)

---

## ✅ PERFORMANCE METRICS

### Lighthouse Audit
- [ ] Performance score: 80+
- [ ] Accessibility score: 95+
- [ ] Best Practices score: 90+
- [ ] SEO score: 90+
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] First Input Delay (FID): < 100ms

### Network Performance
- [ ] Page load time: < 3s (including images)
- [ ] Video lazy-load: Only on expand (verified)
- [ ] No waterfall delays (sequential requests)
- [ ] Cache headers set correctly
- [ ] CSS/JS properly compressed

### Rendering Performance
- [ ] Animations: 60fps (no drops)
- [ ] Expand/collapse: < 500ms
- [ ] Filter click response: < 200ms
- [ ] Scroll: Smooth (no jank)

---

## ✅ FINAL SANITY CHECKS

### Locale Handling
- [ ] Portuguese (`/projetos`) works
- [ ] English (`/en/projects`) works
- [ ] Bilingual data switches correctly
- [ ] Links use correct locale prefix
- [ ] URL structure matches app router pattern

### Link Integrity
- [ ] Internal links navigate correctly
- [ ] External links (GitHub, etc.) open in new tab
- [ ] Case study links (if present) work
- [ ] Video/image links don't 404

### Styling Edge Cases
- [ ] Very long project title wraps correctly
- [ ] Very long description doesn't overflow
- [ ] Many stack tags wrap in grid
- [ ] Many projects paginate/scroll properly
- [ ] No text clipping at any size

### Error Handling
- [ ] Missing thumbnail: Fallback displays
- [ ] Missing video: Details show without video
- [ ] Missing data field: Graceful omission
- [ ] Network error: User sees error message (if applicable)

---

## ✅ DEPLOYMENT READINESS

### Environment Variables
- [ ] All required env vars present (.env.local or Vercel)
- [ ] No hardcoded API keys
- [ ] No localhost URLs in production config
- [ ] Google Analytics ID set (if used)

### Build Output
- [ ] Static files optimized (images, fonts)
- [ ] Source maps excluded from production (optional)
- [ ] No console logs in production code
- [ ] Bundle size reasonable (< 500KB total ~gzip)

### Monitoring Ready
- [ ] Sentry configured (error tracking)
- [ ] Google Analytics tracking active
- [ ] Error boundary implemented (if needed)
- [ ] Health check endpoints ready (if applicable)

---

## ✅ SIGN-OFF

### Developer
- [ ] **Name**: ________________________
- [ ] **Date**: ________________________
- [ ] **Notes**: 
  ```
  
  
  ```
- [ ] **All critical checks passed**: YES / NO

### QA/Tester
- [ ] **Name**: ________________________
- [ ] **Date**: ________________________
- [ ] **Test coverage**: [___] manual tests executed
- [ ] **Issues found**: ________________________
- [ ] **Approval**: APPROVED / NEEDS FIXES

### Accessibility Lead (if applicable)
- [ ] **Name**: ________________________
- [ ] **Date**: ________________________
- [ ] **WCAG Level**: AA / AAA / Failed
- [ ] **Issues remaining**: ________________________
- [ ] **Approval**: APPROVED / CONDITIONAL / REJECTED

### Tech Lead / Release Manager
- [ ] **Name**: ________________________
- [ ] **Date**: ________________________
- [ ] **Architecture review**: PASSED / FAILED
- [ ] **Performance review**: PASSED / FLAGGED
- [ ] **Deployment approval**: APPROVED / CONDITIONS

---

## 🚀 Deployment Steps

When all checks pass:

```bash
# 1. Update version (optional)
npm version patch  # or minor/major

# 2. Create release branch
git checkout -b release/projects-v1.0

# 3. Apply 4 commits
git commit -m "feat: update light theme colors..."
git commit -m "feat: introduce ProjectCard types..."
git commit -m "feat: implement expandable ProjectCard component..."
git commit -m "feat: integrate projects page..."

# 4. Push branch
git push origin release/projects-v1.0

# 5. Create Pull Request
# (link test results, screenshots, etc.)

# 6. Review & Merge
# (tech lead merges to main after approval)

# 7. Deploy to production
# (Vercel auto-deploys main branch, or manual deploy)

# 8. Monitor
# (check Sentry, Analytics, Core Web Vitals)
```

---

## 📊 Post-Deployment Checklist (Day 1)

- [ ] Page loads in production
- [ ] No errors in Sentry
- [ ] Analytics tracking active
- [ ] Core Web Vitals within targets
- [ ] Accessibility remains AA+ (re-check tools)
- [ ] No unintended color changes visible
- [ ] Mobile appears correct (spot check 2-3 phones)
- [ ] Performance metrics normal (compare to baseline)
- [ ] User feedback channels monitored

---

## 🎉 Success Criteria

> ✅ **Project is ready to deploy when:**
>
> 1. All CRITICAL CHECK items marked ✅
> 2. All CRITICAL CHECK failures **resolved**
> 3. All browsers tested ✅
> 4. Accessibility audit passed (WCAG AA minimum)
> 5. All documentation complete
> 6. All commits reviewed and approved
> 7. Team sign-off obtained
> 8. Performance metrics acceptable
> 9. No critical bugs discovered
> 10. Deployment plan confirmed

---

**Document Version**: 1.0  
**Last Updated**: [Current Date]  
**Deployment Date**: [To be filled]  
**Status**: ⏳ Awaiting QA Execution
