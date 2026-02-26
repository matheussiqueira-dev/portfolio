/**
 * ENCOM Enterprise Architecture Refactor
 * 
 * This file documents the module organization separated into:
 * - /core: Framework & utilities
 * - /system: Business logic & features
 * - /app: Next.js routing
 * - /components: UI components (aliased as /ui)
 */

// ============================================
// CORE LAYER (Framework & Configuration)
// ============================================

/**
 * /core/theme
 * - tokens.ts: CSS variable definitions & type-safe exports
 * - (future) provider.tsx: Theme context wrapper
 * 
 * Usage:
 *   import { themeTokens, getCSSVar } from '@/core/theme/tokens'
 */

/**
 * /core/i18n
 * - request.ts: next-intl server config
 * - routing.ts: Available locales & defaults
 * - locales/: JSON translation files
 * - (future) engine.ts: Centralized i18n logic
 * 
 * Usage:
 *   import { routing } from '@/core/i18n/routing'
 *   const t = await getTranslations('namespace')
 */

/**
 * /core/seo
 * - Metadata generation
 * - JSON-LD structured data
 * - Sitemap/robots.txt config
 */

/**
 * /core/hooks
 * - useLocale()
 * - useTranslations()
 * - (future) useTheme()
 * - (future) useDictionary()
 */

/**
 * /core/utils
 * - Helper functions
 * - Type utilities
 * - Media resolvers
 */

// ============================================
// SYSTEM LAYER (Business Logic & Features)
// ============================================

/**
 * /system/projects
 * - ProjectCard.tsx: Expandable card component
 * - ProjectCardDetails.tsx: Expanded content
 * - ProjectList.tsx: Grid + filtering container
 * 
 * These components are business-logic heavy
 * and tied to the projects data structure
 * 
 * Usage:
 *   import { ProjectCard } from '@/system/projects'
 */

/**
 * /system/dashboard (PLANNED)
 * - page.tsx: /system route handler
 * - StatsBlock.tsx: Metric display
 * - SystemMetrics.tsx: Status indicators
 * 
 * Usage:
 *   Next.js route: /[locale]/system/
 */

// ============================================
// UI/COMPONENTS LAYER (Reusable Components)
// ============================================

/**
 * /components/layout
 * - Header.tsx
 * - Footer.tsx
 * - (NEW) SignatureBar.tsx: Fixed bottom-left signature
 * - (NEW) WhatsAppButton.tsx: Fixed bottom-right button
 * - LanguageSwitch.tsx
 * - MobileMenu.tsx
 * 
 * These are structural components used across pages
 */

/**
 * /components/ui
 * - Button.tsx (if exists)
 * - Card.tsx (if exists)
 * - Input.tsx (if exists)
 */

/**
 * /components/sections
 * - Hero.tsx
 * - About.tsx
 * - Contact.tsx
 * - (etc.)
 * 
 * These are full-page sections
 */

/**
 * /components/interactive
 * - Cursor.tsx: Custom sci-fi cursor
 * - PageTransition.tsx: Page overlay transition
 * - (future) EnhancedCursor.tsx: Refactored cursor with ripple
 * - (etc.)
 */

/**
 * /components/seo
 * - JsonLd.tsx
 * - Breadcrumbs.tsx
 * - (etc.)
 */

/**
 * /components/demo
 * - Demo components for showcase
 */

// ============================================
// DATA LAYER (/data)
// ============================================

/**
 * /data/projects.ts & /data/projects-card.ts
 * - Central project database
 * - Type definitions in projects-card.types.ts
 * 
 * Usage:
 *   import { getProjectsCard } from '@/data/projects-card'
 *   const projects = getProjectsCard('pt')
 */

/**
 * /data/deployment-nodes.ts
 * - Deployment node definitions
 * - Types in deployment.types.ts
 */

/**
 * /data/site.pt.ts & /data/site.en.ts
 * - Static copy/messages (if not using JSON)
 */

// ============================================
// APP LAYER (Next.js Routes)
// ============================================

/**
 * /app/layout.tsx
 * - Global layout
 * - Theme provider setup
 * - Font loading
 * - GTM/Sentry setup
 * - Don't modify: Scripts, head management
 */

/**
 * /app/[locale]/
 * - Locale-specific routes
 * - Dynamic [locale] parameter
 * - Handled by next-intl middleware
 */

/**
 * /app/[locale]/projects/
 * - Projects page
 * - Uses ProjectsContent wrapper
 * - Delegates to /system/projects/ProjectList
 */

/**
 * /app/[locale]/system/ (PLANNED)
 * - System dashboard page
 * - Shows metrics & status
 */

// ============================================
// IMPORT PATHS (PATH ALIASES)
// ============================================

/**
 * tsconfig.json paths:
 * "@/*": ["./*"]  ← Everything aliased under @/
 * 
 * Examples:
 *   @/core/theme/tokens
 *   @/core/i18n/routing
 *   @/system/projects/ProjectCard
 *   @/components/layout/Header
 *   @/data/projects-card
 */

// ============================================
// DEPENDENCY FLOW (ALLOWED)
// ============================================

/**
 * app → components + sections (UI layer)
 * app → system (business logic)
 * app → data (static content)
 * 
 * system → components (uses UI building blocks)
 * system → core (uses utilities, i18n, theme)
 * system → data (reads project data)
 * 
 * components → core (uses utils, i18n, theme)
 * components → data (may read static copy)
 * 
 * core → (no dependencies on other layers)
 * data → (no dependencies on other layers)
 */

// ============================================
// ANTI-PATTERNS (FORBIDDEN)
// ============================================

/**
 * ❌ Circular dependencies (A→B→A)
 * ❌ Components importing from app/
 * ❌ app/ importing from components without good reason
 * ❌ system/ importing from app/
 * ❌ Core depending on business logic
 * ❌ Hardcoding copy in components (use /data or i18n)
 * ❌ Hardcoding strings in components (use i18n)
 */

// ============================================
// FILE NAMING CONVENTIONS
// ============================================

/**
 * Components:
 *   PascalCase.tsx
 *   Example: ProjectCard.tsx, WhatsAppButton.tsx
 * 
 * Hooks:
 *   useHookName.ts or camelCase.ts
 *   Example: useTranslations.ts, useLocale.ts
 * 
 * Utilities:
 *   camelCase.ts
 *   Example: tokens.ts, routing.ts, media.ts
 * 
 * Data:
 *   plural or domain-based name
 *   Example: projects.ts, projectsCard.ts, deploymentNodes.ts
 * 
 * Styles:
 *   ComponentName.module.css
 *   Example: ProjectCard.module.css
 */

// ============================================
// CSS MODULE SCOPING
// ============================================

/**
 * All styles in .module.css files
 * No global CSS outside app/globals.css
 * Class names are automatically scoped
 * 
 * Example:
 *   // ProjectCard.module.css
 *   .card { ... }
 *   .cardExpanded { ... }
 *   
 *   // ProjectCard.tsx
 *   className={styles.card}
 *   className={isExpanded ? styles.cardExpanded : ''}
 */

// ============================================
// COMPONENT COMPOSITION RULES
// ============================================

/**
 * 1. Separate Server & Client Components
 *    - Page.tsx (server by default)
 *    - "use client" for interactive components
 *    - Don't mix without clear reason
 * 
 * 2. Props > Context
 *    - Pass data down via props
 *    - Use context only for global state (theme, locale)
 * 
 * 3. Keep Components Pure
 *    - Side effects in useEffect
 *    - No logic in JSX
 *    - Extract into helper functions
 * 
 * 4. Type Everything
 *    - Props interface
 *    - Return types on functions
 *    - Generic types where applicable
 */

// ============================================
// PERFORMANCE RULES
// ============================================

/**
 * 1. Lazy-load heavy children
 *    - Video/iframes: only load on user interaction
 *    - Images: Next.js Image component
 * 
 * 2. Memoize expensive calculations
 *    - useMemo for derived state
 *    - useCallback for event handlers if needed
 * 
 * 3. Minimize re-renders
 *    - Lift state up only as much as needed
 *    - Split components to isolate updates
 * 
 * 4. Code-split routes
 *    - Next.js App Router does this by default
 *    - Use dynamic imports for heavy components
 */

// ============================================
// ACCESSIBILITY RULES
// ============================================

/**
 * 1. Semantic HTML
 *    - <button> for buttons (not <div>)
 *    - <nav> for navigation
 *    - <article> for cards/content
 * 
 * 2. ARIA Labels
 *    - aria-label: button text if not visible
 *    - aria-expanded: for toggles
 *    - aria-pressed: for pressed buttons
 *    - aria-disabled: for disabled states
 * 
 * 3. Keyboard Navigation
 *    - Tab, Enter, Space: handle all
 *    - Focus visible: always have outline
 *    - No keyboard traps
 * 
 * 4. Color & Contrast
 *    - Light mode: 8.5:1 body text (AAA)
 *    - Light mode: 5.5:1 accent (AA+)
 *    - Color not sole differentiator
 */

// ============================================
// THIS IS NOT CODE — It's Architecture Documentation
// To use this, import actual modules from their paths shown above
// ============================================

export type ArchitectureGuide = typeof import("./ARCHITECTURE.md");
