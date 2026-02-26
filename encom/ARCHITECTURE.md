# ENCOM Enterprise Architecture

## Overview
ENCOM Dashboard v3 uses a **layered enterprise architecture** with clear separation of concerns:

```
Core Layer (Logic)
    ↓
UI Layer (Components)
    ↓
System Layer (Features)
    ↓
App Layer (Pages)
```

---

## Layer Responsibilities

### 🔷 Core Layer (`encom/core/`)
**Pure TypeScript logic, no JSX, no external dependencies**

#### Theme Engine (`core/theme/`)
- `theme.types.ts` - Type definitions (ThemeMode, Theme, ThemeEngine)
- `theme.constants.ts` - Color palettes, storage keys
- `theme.engine.ts` - **Singleton** engine with localStorage persistence
  - `getMode()`, `setMode()`, `toggleMode()`, `initialize()`
  - DOM manipulation for `<html data-mode="...">`
  - No FOUC, tracking-safe

#### i18n Engine (`core/i18n/`)
- `i18n.types.ts` - Locale type, Dictionary interface (32 keys)
- `dictionaries.ts` - PT/EN translations
- `i18n.engine.ts` - **Singleton** locale detection & dictionary retrieval
  - `getLocale()`, `getDictionary()`, `parseHeader()`, `parsePath()`
  - Type-safe, no next-intl dependency

#### Motion Configuration (`core/motion/`)
- `motion.constants.ts` - Animation durations, easing, delays, CSS classes

#### App Configuration (`core/config/`)
- `app.config.ts` - Centralized settings (metadata, routes, navigation, feature flags)

**Usage:**
```typescript
import { themeEngine } from '@/encom/core/theme/theme.engine'
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'

const mode = themeEngine.getMode()
const dictionary = i18nEngine.getDictionary('pt')
```

---

### 🔷 UI Layer (`encom/ui/`)
**Pure React components, stateless when possible, CSS modules**

#### Components (`ui/components/`)
- `Button.tsx` - Variants: primary/secondary/ghost, sizes: small/medium/large
- `DataBlock.tsx` - Metric display with accent colors
- `Card.tsx` - Container with variants: default/elevated/outlined
- `Badge.tsx` - Status indicators with variants
- `Divider.tsx` - Horizontal/vertical separators

#### Layout (`ui/layout/`)
- `Sidebar.tsx` - Navigation (vertical desktop, horizontal mobile)
- `Topbar.tsx` - Header with status + controls
- `ThemeToggle.tsx` - Consumes theme engine
- `LanguageToggle.tsx` - Next.js router navigation
- `PageTransition.tsx` - Route change overlay
- `Cursor.tsx` - Custom cursor effect

**Usage:**
```typescript
import { Button } from '@/encom/ui/components/Button'
import { Sidebar } from '@/encom/ui/layout/Sidebar'

<Button variant="primary" size="large">Click</Button>
<Sidebar />
```

---

### 🔷 System Layer (`encom/system/`)
**Feature modules that compose Core + UI**

#### Dashboard Modules (`system/dashboard/`)
- `SystemStatus.module.tsx` - Real-time metrics (CPU, memory, uptime, requests)
  - Composes 4× `DataBlock` with dynamic accent colors
  - Client component with 5s refresh interval
- `MetricsPanel.module.tsx` - Project overview (projects, certificates, stack count)
  - Static data composition

#### Project Modules (`system/projects/`)
- `ProjectCard.module.tsx` - Individual project display
  - Composes `Card` + `Badge` + `Button`
  - Status-based badge variants
- `ProjectList.module.tsx` - Grid with filters
  - Client component with filter state
  - Responsive grid layout

**Usage:**
```typescript
import { SystemStatus, MetricsPanel } from '@/encom/system'

<SystemStatus dictionary={dictionary} />
<MetricsPanel 
  dictionary={dictionary}
  projectsCount={15}
  certificatesCount={28}
  stackCount={42}
/>
```

---

## Architecture Benefits

### ✅ Separation of Concerns
- **Core**: Reusable logic, testable, framework-agnostic
- **UI**: Visual building blocks, no business logic
- **System**: Feature composition, business rules

### ✅ No External Dependencies (Core/UI)
- Theme engine: No emotion, no styled-components
- i18n engine: No next-intl, no react-i18next
- UI components: Pure CSS modules

### ✅ Type Safety
- All layers use TypeScript strict mode
- Interface-driven design at Core layer
- Prop types for UI/System components

### ✅ Performance
- Singleton engines (theme, i18n) - single instance
- CSS modules - scoped styles, no global conflicts
- Client components only where needed

### ✅ Maintainability
- Clear file structure: `core/`, `ui/`, `system/`, `app/`
- Consistent naming: `*.module.tsx` for System, `*.tsx` for UI
- Centralized configuration in `APP_CONFIG`

---

## File Structure

```
encom/
├── core/                    # Pure logic (no JSX)
│   ├── theme/
│   │   ├── theme.types.ts
│   │   ├── theme.constants.ts
│   │   └── theme.engine.ts        (Singleton)
│   ├── i18n/
│   │   ├── i18n.types.ts
│   │   ├── dictionaries.ts
│   │   └── i18n.engine.ts         (Singleton)
│   ├── motion/
│   │   └── motion.constants.ts
│   └── config/
│       └── app.config.ts
│
├── ui/                      # Pure components
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   ├── DataBlock.tsx
│   │   ├── DataBlock.module.css
│   │   ├── Card.tsx
│   │   ├── Card.module.css
│   │   ├── Badge.tsx
│   │   ├── Badge.module.css
│   │   ├── Divider.tsx
│   │   └── Divider.module.css
│   └── layout/
│       ├── Sidebar.tsx
│       ├── Sidebar.module.css
│       ├── Topbar.tsx
│       ├── Topbar.module.css
│       ├── ThemeToggle.tsx
│       ├── ThemeToggle.module.css
│       ├── LanguageToggle.tsx
│       ├── LanguageToggle.module.css
│       ├── PageTransition.tsx
│       ├── PageTransition.module.css
│       ├── Cursor.tsx
│       └── Cursor.module.css
│
├── system/                  # Feature modules
│   ├── dashboard/
│   │   ├── SystemStatus.module.tsx
│   │   ├── SystemStatus.module.css
│   │   ├── MetricsPanel.module.tsx
│   │   └── MetricsPanel.module.css
│   ├── projects/
│   │   ├── ProjectCard.module.tsx
│   │   ├── ProjectCard.module.css
│   │   ├── ProjectList.module.tsx
│   │   └── ProjectList.module.css
│   └── index.ts                   (Barrel exports)
│
└── app/                     # Next.js pages
    └── [locale]/
        ├── layout.tsx             (Uses Sidebar, PageTransition, Cursor)
        ├── page.tsx               (Uses System modules)
        └── page.module.css
```

---

## Development Workflow

### Adding New Components

**1. UI Component:**
```typescript
// ui/components/MyComponent.tsx
export interface MyComponentProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function MyComponent({ variant = 'primary', children }: MyComponentProps) {
  return <div className={styles.root}>{children}</div>
}
```

**2. System Module:**
```typescript
// system/features/MyFeature.module.tsx
import { MyComponent } from '@/encom/ui/components/MyComponent'
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'

export function MyFeature({ dictionary }) {
  return <MyComponent variant="primary">{dictionary.title}</MyComponent>
}
```

**3. Page Integration:**
```typescript
// app/[locale]/page.tsx
import { MyFeature } from '@/encom/system/features/MyFeature.module'

export default function Page() {
  const dictionary = i18nEngine.getDictionary()
  return <MyFeature dictionary={dictionary} />
}
```

### Testing Strategy

**Core Layer (Unit Tests):**
- Test engine methods independently
- Mock localStorage for theme engine
- Test locale detection logic

**UI Layer (Component Tests):**
- Render with different props
- Test variant combinations
- Snapshot tests for visual regression

**System Layer (Integration Tests):**
- Test feature composition
- Mock Core engines
- Test user interactions (filters, toggles)

---

## Migration Guide

### From Old Architecture
```typescript
// OLD (monolithic)
import { useTheme } from '@/hooks/useTheme'
import { useDictionary } from '@/hooks/useDictionary'

// NEW (enterprise)
import { themeEngine } from '@/encom/core/theme/theme.engine'
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'
```

### Key Changes
1. **Hooks → Engines**: Replace React hooks with singleton engines
2. **Global CSS → CSS Modules**: Scoped styles per component
3. **Monolithic → Layered**: Separate Core/UI/System concerns
4. **Props drilling → Direct imports**: Use engines directly in System layer

---

## Performance Optimizations

### Singleton Pattern
- Single instance of theme/i18n engines
- No re-instantiation on every component mount

### CSS Modules
- Tree-shaking unused styles
- No runtime CSS-in-JS overhead
- Scoped class names prevent conflicts

### Lazy Loading
- System modules can be code-split
- PageTransition/Cursor only render when needed

### Static When Possible
- MetricsPanel is server component by default
- SystemStatus uses client only for real-time updates

---

## Feature Flags

Controlled via `APP_CONFIG.features`:
```typescript
{
  enablePageTransitions: true,
  enableCursor: true,
  enableAnimations: true,
}
```

Disable for reduced motion preferences or performance optimization.

---

## Best Practices

### ✅ DO
- Keep Core layer pure (no JSX, no React hooks)
- Use CSS modules for all UI/System components
- Export types from each layer
- Use descriptive prop names
- Leverage TypeScript strict mode

### ❌ DON'T
- Import UI components in Core layer
- Add business logic to UI components
- Use inline styles (use CSS modules)
- Create circular dependencies
- Use `any` type

---

## Roadmap

### Phase 1 (Complete)
- ✅ Core Layer: Theme + i18n engines
- ✅ UI Layer: Components + Layouts
- ✅ System Layer: Dashboard + Projects modules

### Phase 2 (Next)
- [ ] Refactor existing pages to use new architecture
- [ ] Add authentication system module
- [ ] Create admin dashboard features
- [ ] Add analytics integration

### Phase 3 (Future)
- [ ] Storybook for UI components
- [ ] Unit tests for Core engines
- [ ] E2E tests for System modules
- [ ] Performance monitoring dashboard

---

## Support

For questions or issues with the architecture:
1. Check `ARCHITECTURE.md` (this file)
2. Review `system/index.ts` for available modules
3. See `app/[locale]/refactored-page.example.tsx` for usage examples
4. Contact architecture team
