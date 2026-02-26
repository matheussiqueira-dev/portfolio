# ENCOM System - Developer Guide

Complete implementation guide for the ENCOM Dashboard system.

## 🎯 Quick Reference

### Start Development
```bash
npm run dev
# http://localhost:3000 → automatically redirects to /pt
```

### Build & Validate
```bash
npm run validate  # lint + type-check + build
npm run build     # production build
```

---

## 🏗️ Architecture Overview

ENCOM follows these core principles:

1. **Server-First**: Use server components by default
2. **Client-Light**: Only "use client" when necessary (hooks, interactivity)
3. **Type-Safe**: Strict TypeScript configuration
4. **CSS Modular**: Components encapsulated with `.module.css`
5. **i18n Custom**: No external library, custom Dictionary system
6. **Theme Global**: CSS variables for dark/light switching

### Data Flow
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

## 📱 Component Structure

### Page Components (Server)
- Located: `app/[locale]/*/page.tsx`
- Must export async default function
- Receive `params: Promise<{ locale: Locale }>`
- Load dictionary with `await getDictionary(locale)`
- Pass data to client components

### Client Components
Files with `'use client'` directive:
- `PageTransition.tsx` - Route overlay
- `SystemStatus.tsx` - Metrics display
- `DataBlock.tsx` - Data cards
- `ThemeToggle.tsx` - Theme switcher
- `LanguageToggle.tsx` - Language switcher
- `EncomLayoutClient.tsx` - Theme/language portal

### Layout Hierarchy
```
html (app/[locale]/layout.tsx wrapper)
  ├── PageTransition (client, route overlay)
  ├── EncomLayout (server, sidebar + topbar)
  │   ├── EncomLayoutClient (client, theme portal)
  │   ├── Sidebar (nav links)
  │   ├── Topbar (status + toggles)
  │   └── Content (children)
```

---

## 🎨 Theming System

### How Theming Works

1. **CSS Variables** in `styles/global.css`:
   ```css
   :root {
     --bg-primary: #0a0e27;
     --accent: #00f0ff;
   }
   html[data-mode='light'] {
     --bg-primary: #f3f4f6;
     --accent: #ff003c;
   }
   ```

2. **useTheme Hook**:
   ```typescript
   const { theme, toggleTheme } = useTheme()
   // theme: 'dark' | 'light'
   // Updates html[data-mode] attribute
   // Persists to localStorage
   ```

3. **Automatic Color Switching**:
   - All CSS uses variables
   - 300ms smooth transition
   - Works across entire app

### Adding Custom Styles

Use CSS variables in components:
```css
.myComponent {
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
}

.myComponent:hover {
  box-shadow: 0 0 10px var(--accent);
}
```

---

## 🌍 Bilingual System

### Dictionary Structure
```typescript
// locales/index.ts
type Dictionary = {
  dashboard: string
  projects: string
  cpu: string
  memory: string
  // ... 28+ more keys
}

const dictionaries: Record<Locale, Dictionary> = {
  pt: { /* Portuguese */ },
  en: { /* English */ },
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
```

### Using Dictionary in Components

**Server component**:
```typescript
const dictionary = await getDictionary(locale)

<h1>{dictionary.dashboard}</h1>
```

**Client component**:
```typescript
const { locale } = useLocale()
const [dictionary, setDictionary] = useState<Dictionary | null>(null)

useEffect(() => {
  getDictionary(locale).then(setDictionary)
}, [locale])

return <h1>{dictionary?.dashboard}</h1>
```

### Adding New Translations

1. Open `locales/index.ts`
2. Add key to `Dictionary` type
3. Add translation to both `dictionaries.pt` and `dictionaries.en`
4. Use in components via `dictionary.newKey`

---

## 🔄 Locale Switching

### Middleware Handles:
- Detects Accept-Language header
- Redirects `/` → `/pt` (Portuguese default)
- Redirects `/path` → `/pt/path` (with locale)

### Client Navigation:
```typescript
// In client component
const { locale, changeLocale } = useLocale()

const switchToEnglish = () => {
  changeLocale('en')
}
```

Routes automatically:
- `/pt` → `/en`
- `/pt/projects` → `/en/projects`
- `/pt/projects/my-project` → `/en/projects/my-project`

---

## 📊 Adding New Pages

### 1. Create Page File
```typescript
// app/[locale]/newpage/page.tsx
import { Locale, getDictionary } from '@/encom/locales'

interface NewPageProps {
  params: Promise<{ locale: Locale }>
}

export const metadata = {
  title: 'New Page - ENCOM',
  description: 'Page description',
}

export default async function NewPage({ params }: NewPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <div className="new-page">
      <h1>{dictionary.newPage}</h1>
      {/* Content */}
    </div>
  )
}
```

### 2. Create CSS File
```css
/* app/[locale]/newpage/newpage.css */
.new-page {
  width: 100%;
}

.new-page h1 {
  color: var(--accent);
}
```

### 3. Add Navigation Link
Update `EncomLayout.tsx`:
```typescript
const navItems: Array<{ label: string; href: string }> = [
  { label: 'Dashboard', href: '/' },
  // ... other items
  { label: 'New Page', href: '/newpage' }, // ← Add here
]
```

### 4. Add Dictionary Entry
In `locales/index.ts`:
```typescript
type Dictionary = {
  // ... existing
  newPage: string
}

const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    // ... existing
    newPage: 'Nova Página',
  },
  en: {
    // ... existing
    newPage: 'New Page',
  },
}
```

---

## 🧩 Creating New Components

### Server Component (Default)
```typescript
// components/MyComponent.tsx
interface MyComponentProps {
  title: string
  data: any[]
}

export async function MyComponent({ title, data }: MyComponentProps) {
  // Server logic, database calls, etc.
  
  return (
    <div className="my-component">
      <h2>{title}</h2>
      {/* Content */}
    </div>
  )
}
```

### Client Component (With Interactivity)
```typescript
'use client'

import { useState, useEffect } from 'react'

export function MyComponent({ title, data }: MyComponentProps) {
  const [state, setState] = useState(false)
  const { locale } = useLocale()
  const [dictionary, setDictionary] = useState<Dictionary | null>(null)

  useEffect(() => {
    getDictionary(locale).then(setDictionary)
  }, [locale])

  return (
    <div className="my-component">
      <h2>{title}</h2>
      <button onClick={() => setState(!state)}>
        {dictionary?.toggleButton}
      </button>
    </div>
  )
}
```

### Component Styling (CSS Module)
```css
/* components/MyComponent.module.css */
.myComponent {
  padding: 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.myComponent:hover {
  border-color: var(--accent);
  box-shadow: 0 0 10px var(--accent-soft);
}

.myComponent h2 {
  color: var(--accent);
  margin-bottom: 16px;
}
```

---

## 🎛️ Using Hooks

### useTheme
```typescript
'use client'

import { useTheme } from '@/encom/hooks/useTheme'

export function ThemeSwitcher() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) return null // Avoid hydration mismatch

  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  )
}
```

### useLocale
```typescript
'use client'

import { useLocale } from '@/encom/hooks/useLocale'

export function LocaleSwitcher() {
  const { locale, changeLocale } = useLocale()

  return (
    <div>
      <p>Current: {locale}</p>
      <button onClick={() => changeLocale(locale === 'pt' ? 'en' : 'pt')}>
        Switch
      </button>
    </div>
  )
}
```

### useDictionary
```typescript
'use client'

import { useDictionary } from '@/encom/hooks/useDictionary'
import { useLocale } from '@/encom/hooks/useLocale'

export function MyComponent() {
  const { locale } = useLocale()
  const [dictionary, setDictionary] = useDictionary(locale)

  return <h1>{dictionary?.title}</h1>
}
```

---

## 📦 Data Management

### Project Data
Located: `data/projects.ts`

```typescript
export const systemData: SystemData = {
  cpuUsage: 45,
  memoryUsage: 62,
  activeNodes: 12,
  latency: 23,
  performanceScore: 94,
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'project-name',
    title: 'Project Title',
    description: 'Description',
    stack: ['React', 'TypeScript'],
    metrics: { performanceScore: 92, uptime: 99.9, latency: 20 },
    challenges: ['Challenge 1', 'Challenge 2'],
  },
]
```

### Updating Project Data

1. Edit `data/projects.ts`
2. Update `systemData` object
3. Update `projects` array
4. Changes immediately reflected in pages

---

## 🎨 CSS Conventions

### Naming
- Use kebab-case: `.section-title`
- Component modules: `.module.css`
- Global styles only in `global.css`

### Variables Usage
```css
/* Always use CSS variables for colors */
color: var(--text-primary);
background: var(--bg-secondary);
border: 1px solid var(--border-subtle);
box-shadow: 0 0 10px var(--accent);
```

### Responsive Breakpoints
```css
/* Mobile first, then add larger screens */
.component {
  /* Mobile */
}

@media (min-width: 768px) {
  .component {
    /* Tablet & Desktop */
  }
}

@media (max-width: 640px) {
  .component {
    /* Small Mobile */
  }
}
```

---

## 🚀 Performance Tips

1. **Use Server Components** - Default for all components
2. **Lazy Load Client Components** - Only use 'use client' when needed
3. **Memoize Client Components** - Use `React.memo()` for expensive renders
4. **Optimize Images** - Use Next.js Image component
5. **CSS Variables** - Single source of truth for colors
6. **No External Dependencies** - Minimal bundle size

---

## 🔒 Type Safety

### Always Define Interfaces
```typescript
interface MyPageProps {
  params: Promise<{ locale: Locale }>
}

interface ComponentProps {
  title: string
  data: Project[]
  onSelect?: (id: number) => void
}
```

### Use Strict Mode
TypeScript strict mode is enabled:
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noImplicitReturns: true`

### Type the Dictionary
```typescript
const dictionary: Dictionary = await getDictionary(locale)
// IDE autocomplete for all keys
```

---

## 🧪 Testing

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
npm run lint:fix
```

### Build Test
```bash
npm run build
```

### Full Validation
```bash
npm run validate
```

---

## ⚡ Common Patterns

### Conditional Rendering Based on Theme
```typescript
'use client'

export function ThemeAwareComponent() {
  const { theme } = useTheme()
  
  return (
    <>
      {theme === 'dark' && <DarkModeContent />}
      {theme === 'light' && <LightModeContent />}
    </>
  )
}
```

### Bilingual Content
```typescript
export async function MyPage({ params }: MyPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const isPortuguese = locale === 'pt'
  
  return (
    <div>
      <h1>{isPortuguese ? 'Título' : 'Title'}</h1>
      {/* OR */}
      <h1>{dictionary.myTitle}</h1>
    </div>
  )
}
```

### Loading States
```typescript
'use client'

export function DataDisplay() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch data
    setLoading(false)
  }, [])

  if (loading) return <div className="loading">Loading...</div>
  
  return <div>{/* Display data */}</div>
}
```

---

## 📚 File Modification Quick Guide

### Add Translation
**File**: `locales/index.ts`
```typescript
// 1. Add to type
// 2. Add to dictionaries.pt
// 3. Add to dictionaries.en
```

### Change Theme Colors
**File**: `styles/global.css`
```css
:root {
  --accent: #00f0ff; /* Change this */
}

html[data-mode='light'] {
  --accent: #ff003c; /* And this */
}
```

### Update Navigation
**File**: `components/EncomLayout.tsx`
```typescript
const navItems = [
  // Add new item here
]
```

### Add New Page
1. Create `app/[locale]/pagename/page.tsx`
2. Create `app/[locale]/pagename/pagename.css`
3. Add entry to `locales/index.ts`
4. Add link to `components/EncomLayout.tsx`

---

## 🎯 Best Practices

1. ✅ Use server components by default
2. ✅ Keep client components small and focused
3. ✅ Always define TypeScript interfaces
4. ✅ Use CSS variables for all colors
5. ✅ Write semantic HTML
6. ✅ Test responsive design
7. ✅ Add proper error boundaries
8. ✅ Include metadata for all pages
9. ✅ Use descriptive variable names
10. ✅ Comment complex logic

---

## 🆘 Troubleshooting

### Hydration Mismatch
**Solution**: Add mounted check in useEffect
```typescript
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) return null
```

### Theme Not Switching
**Solution**: Check if `<html>` has `data-mode` attribute
```typescript
// In browser console
document.documentElement.dataset.mode // Should be 'dark' or 'light'
```

### Dictionary Not Loading
**Solution**: Check locale parameter
```typescript
const { locale } = await params
console.log(locale) // Should be 'pt' or 'en'
```

### CSS Not Applying
**Solution**: Check CSS module import
```typescript
import styles from './MyComponent.module.css'

<div className={styles.myComponent}>
```

---

## 📚 Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [React 18 Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

## 📝 Version & Status

**Version**: 2.4.1  
**Status**: Production Ready  
**Last Updated**: 2024-01-15

---

**Next Steps**:
1. Run `npm install`
2. Run `npm run dev`
3. Open http://localhost:3000
4. Explore `/pt` and `/en` routes
5. Test theme toggle
6. Test language switching
7. Create custom pages following the guide above

Good luck building with ENCOM! 🚀
