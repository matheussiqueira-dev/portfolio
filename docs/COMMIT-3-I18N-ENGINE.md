# COMMIT 3: i18n Engine Wrapper

**Objective**: Centralize internationalization with type-safe message access and locale utilities

**Status**: ✅ Phase complete

## Changes Made

### New Files Created
- `core/i18n/engine.ts` — Type-safe i18n engine wrapper (420+ lines)
- `core/i18n/index.ts` — i18n module barrel export

### Key Features

#### Type-Safe Message Access
```typescript
// Server Components
const i18n = await getI18nEngine('pt-BR');
const title = await i18n.getMessage('projects.title');

// Client Components
const i18n = useI18n();
const copy = i18n.t('nav.about');
```

#### Locale Detection & Conversion
```typescript
import { extractLocaleFromPath, stripLocalePrefix, getLocaleHref } from '@/core/i18n';

// Extract locale from URL
const locale = extractLocaleFromPath('/en/projects'); // Returns 'en'

// Remove locale prefix
const cleanPath = stripLocalePrefix('/en/projects'); // Returns '/projects'

// Generate locale-aware href
const ptLink = getLocaleHref('/projects', 'pt-BR'); // Returns '/projetos'
```

#### Locale Validation & Helpers
```typescript
import { isValidLocale, isPortuguese, getLocaleDisplayName, getLocaleFlag } from '@/core/i18n';

if (isValidLocale(userLocale)) {
  console.log(getLocaleDisplayName(userLocale)); // "Português" or "English"
  console.log(getLocaleFlag(userLocale)); // "🇧🇷" or "🇺🇸"
}

if (isPortuguese()) {
  // PT-specific logic
}
```

## Architecture

### Server-Side (`getI18nEngine()`)
- Returns async engine for Server Components
- Full next-intl integration
- Message caching via import
- Locale resolution with fallback
- Namespace retrieval

### Client-Side (`useI18n()`)
- React hook for Client Components
- Gets locale from document.documentElement.lang
- Accesses next-intl context
- Safe fallbacks for missing translations
- Relative time formatting

### Locale Utilities
- `getLocale()` — Current locale
- `isPortuguese()` / `isEnglish()` — Locale checks
- `isValidLocale()` — Validation
- `getAvailableLocales()` — All supported locales
- `getDefaultLocale()` — 'pt-BR'
- `getLocaleDisplayName()` — Human-readable name
- `getLocaleFlag()` — Unicode flag emoji
- `getLocaleHref()` — URL generation for locale switching
- `extractLocaleFromPath()` — Parse pathname
- `stripLocalePrefix()` — Remove locale from path

## Integration Points

### With Next.js App Router
```typescript
// In app/[locale]/page.tsx
export default async function HomePage() {
  const i18n = await getI18nEngine();
  const title = await i18n.getMessage('sections.hero.greeting');
  return <h1>{title}</h1>;
}
```

### With Client Components
```typescript
// In "use client" component
import { useI18n } from '@/core/i18n';

export function Navigation() {
  const i18n = useI18n();
  return <nav>{i18n.t('nav.projects')}</nav>;
}
```

### With Page Transitions
```typescript
// Generate locale-aware navigation
import { getLocaleHref } from '@/core/i18n';

const navigateTo = (path: string) => {
  const localizedPath = getLocaleHref(path, userLocale);
  router.push(localizedPath);
};
```

## Type Safety

### MessageKeys Interface
Defines all available translation keys (stub interface, can be extended):
```typescript
interface MessageKeys {
  nav: { home: string; projects: string; ... };
  projects: { title: string; subtitle: string; ... };
  sections: { hero: { greeting: string; ... }; ... };
  // etc.
}
```

### Locale Type
Ensures only valid locales are used:
```typescript
type Locale = 'pt-BR' | 'en';

// TypeScript will error if trying to use 'fr' or other invalid locales
getLocaleHref('/projects', 'fr'); // ❌ Type Error
getLocaleHref('/projects', 'en'); // ✅ OK
```

## Migration Guide

### Before (Direct next-intl):
```typescript
import { getTranslations } from 'next-intl/server';
const t = await getTranslations('namespace');
const text = t('key');
```

### After (i18n Engine):
```typescript
import { getI18nEngine } from '@/core/i18n';
const i18n = await getI18nEngine();
const text = await i18n.getMessage('namespace.key');
// or use getMessage with explicit namespace:
const text = await i18n.getMessage('key', 'namespace');
```

**Benefits**:
- Centralized locale management
- Type-safe (if MessageKeys is properly extended)
- Consistent fallback behavior
- Utility functions for locale operations
- Server + Client unified interface

## Next Steps (Commit 4)

Expand projects data model with additional fields and properties:
- Add architecture[], challenges[], metrics{} fields
- Support more structured project information
- Expand from 3 → 5+ sample projects
- Ensure full bilingual completeness
- Validate types strictly

Files affected:
- `/data/projects-card.ts` (expand samples and add fields)
- `/data/projects-card.types.ts` (update ProjectCard interface)
- `/data/projects.ts` (extend if needed)

Commit message: `feat(projects): expand data model with architecture & metrics (5+ projects)`
