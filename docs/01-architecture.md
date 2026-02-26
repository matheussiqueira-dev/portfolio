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

### 🔷 Core Layer (`core/`)
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
import { themeEngine } from '@/core/theme/theme.engine'
import { i18nEngine } from '@/core/i18n/i18n.engine'

const mode = themeEngine.getMode()
const dictionary = i18nEngine.getDictionary('pt')
```

---

### 🔷 UI Layer (`ui/`)
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
import { Button } from '@/ui/components/Button'
import { Sidebar } from '@/ui/layout/Sidebar'

<Button variant="primary" size="large">Click</Button>
<Sidebar />
```

---

### 🔷 System Layer (`system/`)
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
import { SystemStatus, MetricsPanel } from '@/system'

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
portfolio/
├── app/                     # Next.js App Router
│   └── [locale]/           # Locale-based routes
│       ├── layout.tsx       # Locale layout wrapper
│       └── page.tsx         # Dashboard home
│
├── core/                    # Pure logic (no JSX)
│   ├── theme/              # Theme engine & config
│   ├── i18n/               # i18n engine & dictionaries
│   ├── motion/             # Animation constants
│   └── config/             # App configuration
│
├── ui/                      # Pure React components
│   ├── components/         # Reusable components (Button, Card, Badge)
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
│   └── layout/             # Layout components (Sidebar, Topbar, etc.)
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
│   ├── dashboard/          # Dashboard features
│   │   ├── SystemStatus.module.tsx
│   │   ├── SystemStatus.module.css
│   │   ├── MetricsPanel.module.tsx
│   │   └── MetricsPanel.module.css
│   └── projects/           # Project features
│       ├── ProjectCard.module.tsx
│       ├── ProjectCard.module.css
│       ├── ProjectList.module.tsx
│       └── ProjectList.module.css
│
├── data/                    # Static data
├── docs/                    # Documentation (this file)
├── public/                  # Static assets
└── [config files]           # next.config.ts, tsconfig.json, etc.
```

---

## Architecture Principles

1. **Server-First**: Use Server Components by default
2. **Client-Light**: Only "use client" when necessary (hooks, interactivity)
3. **Type-Safe**: Strict TypeScript configuration
4. **CSS Modular**: Components encapsulated with `.module.css`
5. **i18n Custom**: No external library, custom Dictionary system
6. **Theme Global**: CSS variables for dark/light switching
7. **Pure Layers**: Core has no dependencies, UI has no business logic

---

## Data Flow

```
Middleware (locale detection)
  ↓
App Router [locale] parameter
  ↓
getDictionary(locale) async
  ↓
Components render with translated content
  ↓
useTheme hook manages localStorage
```

---

## Component Hierarchy

```
html (app/[locale]/layout.tsx wrapper)
  ├── PageTransition (client, route overlay)
  ├── EncomLayout (server, sidebar + topbar)
  │   ├── EncomLayoutClient (client, theme portal)
  │   ├── Sidebar (nav links)
  │   ├── Topbar (status + toggles)
  │   └── Content (children)
```
