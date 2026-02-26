# ENCOM Quick Start Guide

## 🎯 5-Minute Setup

- [ ] Ensure you're in the portfolio root directory
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`
- [ ] Browser redirects to `/pt` (Portuguese)

## 🧪 Testing the System

### Theme Features
- [ ] Click ☀️ button (top right) to switch to light mode
- [ ] Click 🌙 button to switch back to dark mode
- [ ] Observe color transitions (smooth 300ms)
- [ ] Refresh page - theme persists (localStorage)

### Language Features
- [ ] Click 🇧🇷 button to view Portuguese content
- [ ] Click 🇺🇸 button to view English content
- [ ] Observe route changes (`/pt` → `/en`)
- [ ] Click nav items - locale preserved

### Navigation
- [ ] Click "Dashboard" - view system metrics
- [ ] Click "Projects" - see project grid
- [ ] Click on a project - view project detail
- [ ] Observe sidebar active states
- [ ] Test responsive design (F12 DevTools)

### Responsive Design
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar
- [ ] Test desktop view (sidebar on left)
- [ ] Test tablet view (adjusted layout)
- [ ] Test mobile view (navigation at bottom)

## 📁 File Structure Reference

```
portfolio/
├── app/[locale]/              ← Routes with locale parameter
│   ├── page.tsx              ← Dashboard home
│   ├── projects/
│   │   ├── page.tsx          ← Projects listing
│   │   └── [slug]/
│   │       └── page.tsx      ← Project detail
│   └── layout.tsx            ← Locale layout wrapper
│
├── core/                       ← Pure logic layers
│   ├── theme/                ← Theme engine
│   ├── i18n/                 ← i18n engine
│   ├── motion/               ← Animation constants
│   └── config/               ← App configuration
│
├── ui/                        ← UI components
│   ├── components/           ← Button, Card, Badge, DataBlock
│   └── layout/               ← Sidebar, Topbar, toggles
│
├── system/                    ← Feature modules
│   ├── dashboard/           ← SystemStatus, MetricsPanel
│   └── projects/            ← ProjectCard, ProjectList
│
├── data/                      ← Static data
├── docs/                      ← Documentation (this file)
├── public/                    ← Static assets
└── [config files]             ← next.config.ts, tsconfig.json, etc.
```

## 🔧 Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build
npm run validate     # Lint + type-check + build
npm run lint         # Check code style
npm run lint:fix     # Auto-fix style issues
npm run format       # Format code with Prettier
npm run clean        # Clear build cache
```

## 🎨 Changing Colors

Edit `app/globals.css`:

```css
:root {
  --bg-primary: #0a0e27;
  --accent: #00f0ff;          /* Dark mode accent */
  /* ... other variables */
}

html[data-mode='light'] {
  --bg-primary: #f3f4f6;
  --accent: #ff003c;          /* Light mode accent */
  /* ... other variables */
}
```

## 🌍 Adding Translations

Edit `core/i18n/dictionaries.ts`:

```typescript
export type Dictionary = {
  // ... existing keys
  myNewKey: string            // Add new key
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    // ... existing translations
    myNewKey: 'Minha Nova Chave'
  },
  en: {
    // ... existing translations
    myNewKey: 'My New Key'
  }
}
```

Then use in components:
```typescript
const dictionary = await getDictionary(locale)
<p>{dictionary.myNewKey}</p>
```

## ➕ Adding a New Page

### 1. Create page file
```typescript
// app/[locale]/mynewpage/page.tsx
import { getDictionary } from '@/core/i18n/dictionaries'

export default async function MyNewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dictionary = await getDictionary(locale as any)
  
  return (
    <div>
      <h1>My New Page</h1>
      {/* content here */}
    </div>
  )
}
```

### 2. Add to navigation
Edit `core/config/app.config.ts` or the navigation array in `ui/layout/Sidebar.tsx`:
```typescript
{ label: 'My New Page', href: '/mynewpage' }
```

### 3. Add translation
Edit `core/i18n/dictionaries.ts` with the page label in both PT and EN.

## 🧩 Creating a UI Component

```typescript
// ui/components/MyComponent.tsx
import styles from './MyComponent.module.css'

interface MyComponentProps {
  title: string
  children: React.ReactNode
}

export function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
```

```css
/* ui/components/MyComponent.module.css */
.container {
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
}

.title {
  margin: 0 0 1rem 0;
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
}

.content {
  color: var(--text-secondary);
}
```

Usage:
```typescript
import { MyComponent } from '@/ui/components/MyComponent'

<MyComponent title="Hello">
  <p>Content here</p>
</MyComponent>
```

## 🧩 Creating a System Module

```typescript
// system/myfeature/MyFeature.module.tsx
'use client'

import { Button } from '@/ui/components/Button'
import { Card } from '@/ui/components/Card'
import styles from './MyFeature.module.css'

interface MyFeatureProps {
  dictionary: any
  data?: string
}

export function MyFeature({ dictionary, data }: MyFeatureProps) {
  return (
    <Card variant="elevated">
      <div className={styles.container}>
        <h2>{dictionary.myFeature}</h2>
        <p>{data}</p>
        <Button variant="primary">Action</Button>
      </div>
    </Card>
  )
}
```

```css
/* system/myfeature/MyFeature.module.css */
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

## 🐛 Troubleshooting

### Theme not saving?
- Check browser DevTools > Application > LocalStorage
- Look for key: `encom-theme`
- Try clearing browser cache and hard refresh (Ctrl+Shift+R)

### Language not switching?
- Check URL - should change from `/pt` to `/en`
- Check browser console for errors (F12)
- Verify middleware.ts is handling locale routes

### CSS not loading?
- Make sure file is named `.module.css` (not `.css`)
- Import as: `import styles from './File.module.css'`
- Use as: `className={styles.className}` (not string)

### Dictionary error / Translation missing?
- Check key exists in both `pt` and `en` dictionaries
- Check spelling exactly (case-sensitive)
- Verify `Dictionary` type includes the new key
- Clear Next.js cache: `npm run clean`

### Build fails?
- Run `npm run clean && npm run build` to clear cache
- Check for TypeScript errors: `npm run validate`
- Verify all imports use `@/` path aliases

### Port 3000 already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

## 📚 Learning Path

1. **Explore the UI** (5 min)
   - Click around, test theme switching
   - Switch between PT/EN

2. **Read Architecture** (10 min)
   - See `docs/01-architecture.md`
   - Understand Core/UI/System layers

3. **Review Developer Guide** (15 min)
   - See `docs/02-developer-guide.md`
   - Learn component patterns

4. **Modify colors** (5 min)
   - Edit `app/globals.css`
   - Change CSS variables
   - Observe live updates

5. **Update translations** (5 min)
   - Edit `core/i18n/dictionaries.ts`
   - Add new translation keys
   - Use in components

6. **Create new component** (15 min)
   - Create `.tsx` and `.module.css` files
   - Follow examples above
   - Test in a page

7. **Build & deploy** (10 min)
   - Run `npm run build`
   - Deploy to Vercel or server
   - Verify in production

## ✅ Success Checklist

Your setup is ready when:

- [ ] `npm run dev` starts without errors
- [ ] Browser opens to `http://localhost:3000` automatically
- [ ] Theme toggle (☀️/🌙) works and persists
- [ ] Language toggle (🇧🇷/🇺🇸) changes routes
- [ ] All pages load correctly
- [ ] Sidebar navigation works
- [ ] Mobile responsive works (DevTools)
- [ ] `npm run build` completes with 0 errors
- [ ] `npm run validate` passes all checks
- [ ] No console errors in browser (F12)

## 🚀 Next Steps

Once setup is complete:

1. **Customize branding** - Update `core/config/app.config.ts`
2. **Add your projects** - Edit `data/projects.ts`
3. **Update content** - Modify `core/i18n/dictionaries.ts`
4. **Add pages** - Create new `app/[locale]/*/page.tsx` files
5. **Deploy** - Push to GitHub and connect to Vercel

## 📖 Documentation

- **Architecture**: `docs/01-architecture.md` - System design and structure
- **Developer Guide**: `docs/02-developer-guide.md` - How to develop and extend
- **Implementation**: `docs/03-implementation.md` - What was built
- **This File**: `docs/04-quickstart.md` - Getting started

## 💬 Questions?

Refer to the comprehensive docs:
- Troubleshooting → `docs/02-developer-guide.md`
- Architecture questions → `docs/01-architecture.md`
- Implementation details → `docs/03-implementation.md`
