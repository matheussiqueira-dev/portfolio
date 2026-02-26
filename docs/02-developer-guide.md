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

1. **CSS Variables** in `app/globals.css`:
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
// core/i18n/dictionaries.ts
export type Dictionary = {
  dashboard: string
  projects: string
  cpu: string
  memory: string
  // ... 28+ more keys
}

export const dictionaries: Record<Locale, Dictionary> = {
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

1. Open `core/i18n/dictionaries.ts`
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

## 🧩 Creating a Component

### New UI Component

```typescript
// ui/components/MyComponent.tsx
import styles from './MyComponent.module.css'

interface MyComponentProps {
  title: string
  data: string[]
}

export function MyComponent({ title, data }: MyComponentProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
```

```css
/* ui/components/MyComponent.module.css */
.container {
  padding: 20px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: 8px;
}
```

### New System Module

```typescript
// system/myfeature/MyFeature.module.tsx
'use client'

import { Button } from '@/ui/components/Button'
import styles from './MyFeature.module.css'

export function MyFeature() {
  return (
    <div className={styles.container}>
      <h1>My Feature</h1>
      <Button variant="primary">Action</Button>
    </div>
  )
}
```

---

## 🧪 Testing Patterns

### Test Structure
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from '@/ui/components/Button'

describe('Button Component', () => {
  it('renders with primary variant', () => {
    render(<Button variant="primary">Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

---

## ↔️ Imports & Path Aliases

All imports use the `@/` alias pattern:

```typescript
// ✅ Good
import { Button } from '@/ui/components/Button'
import { systemStatus } from '@/system/dashboard/SystemStatus'
import { getDictionary } from '@/core/i18n/dictionaries'

// ❌ Avoid
import { Button } from '../../../ui/components/Button'
```

---

## 🚀 Deployment

### Vercel Deployment
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push
4. Environment variables handled by Vercel

### Build Checklist
- [ ] `npm run validate` passes
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] All routes respond correctly
- [ ] Theme switching works
- [ ] Language switching works
- [ ] Page transitions render smoothly

---

## 📊 Performance Optimization

### Do's
- ✅ Use Server Components when possible
- ✅ Use CSS Modules for scoped styling
- ✅ Use singleton pattern for engines (theme, i18n)
- ✅ Lazy load heavy modules with `dynamic()`
- ✅ Use proper image optimization (`next/image`)

### Don'ts
- ❌ Don't use inline styles in components
- ❌ Don't import all translations in every component
- ❌ Don't use global CSS for component styles
- ❌ Don't make unnecessary client components
- ❌ Don't use external CSS-in-JS libraries

---

## 🐛 Common Issues & Solutions

### Theme not saving?
- Check browser DevTools > Application > LocalStorage
- Look for key: `encom-theme`
- Verify `theme.engine.ts` initialization

### Language not switching?
- Check URL changes from `/pt` to `/en`
- Check browser console for errors
- Verify middleware.ts is configured

### CSS not loading?
- Make sure file is named `.module.css`
- Import as: `import styles from './File.module.css'`
- Use as: `className={styles.className}`

### Dictionary error?
- Check key exists in both `pt` and `en` objects
- Check spelling (case-sensitive)
- Verify `Dictionary` type matches implementation

---

## 🏃 Performance Checklist

- [ ] Use Server Components for static pages
- [ ] Cache API responses when possible
- [ ] Use Image component for images
- [ ] Code-split dynamic components
- [ ] Minimize client-side JavaScript
- [ ] Use CSS Modules (scoped styles)
- [ ] Monitor performance with Web Vitals
