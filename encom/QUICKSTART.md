# ENCOM Quick Start Checklist

## 🎯 5-Minute Setup

- [ ] Navigate to `encom` folder
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
- [ ] Click "Status" - system status page
- [ ] Click "Settings" - configuration page

### Responsive Design
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar
- [ ] Test desktop view (sidebar on left)
- [ ] Test tablet view (adjusted layout)
- [ ] Test mobile view (navigation at bottom)

## 📝 File Structure Reference

```
encom/
├── app/[locale]/           ← Routes with locale parameter
├── components/             ← React components + CSS Modules
├── hooks/                  ← useTheme, useLocale, useDictionary
├── styles/global.css       ← Theme CSS variables
├── config/theme.ts         ← Color configuration
├── data/projects.ts        ← Mockdata
├── locales/index.ts        ← Dictionary (PT/EN)
├── middleware.ts           ← Locale detection
├── next.config.ts          ← Next.js config
├── tsconfig.json           ← TypeScript config
├── package.json            ← Dependencies
├── README.md               ← Full documentation
├── DEVELOPER_GUIDE.md      ← How to develop
└── IMPLEMENTATION.md       ← What was built
```

## 🔧 Common Commands

```bash
npm run dev          # Start development
npm run build        # Build for production
npm run validate     # Lint + type-check + build
npm run lint         # Check code style
npm run lint:fix     # Auto-fix style issues
```

## 🎨 Changing Colors

Edit `styles/global.css`:

```css
:root {
  --accent: #00f0ff;  /* Dark mode accent */
}

html[data-mode='light'] {
  --accent: #ff003c;  /* Light mode accent */
}
```

## 🌍 Adding Translations

Edit `locales/index.ts`:

```typescript
type Dictionary = {
  // Add new key
  myNewKey: string
}

dictionaries.pt: {
  myNewKey: 'Minha Nova Chave'
}

dictionaries.en: {
  myNewKey: 'My New Key'
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
// app/[locale]/newpage/page.tsx
export default async function NewPage({ params }) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  return <div>{dictionary.newPage}</div>
}
```

### 2. Add styles
```css
/* app/[locale]/newpage/newpage.css */
.new-page {
  /* styles here */
}
```

### 3. Add to navigation
Edit `components/EncomLayout.tsx`:
```typescript
{ label: 'New Page', href: '/newpage' }
```

### 4. Add translation
Edit `locales/index.ts`:
```typescript
type Dictionary = { newPage: string }
// Add to both pt and en
```

## 🧩 Creating a Component

```typescript
'use client'

import styles from './MyComponent.module.css'

export function MyComponent({ title, data }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {/* content */}
    </div>
  )
}
```

```css
/* components/MyComponent.module.css */
.container {
  padding: 20px;
  background: var(--bg-secondary);
  color: var(--text-primary);
}
```

## 🐛 Troubleshooting

### Theme not saving?
- Check browser DevTools > Application > LocalStorage
- Look for key: `encom-theme`

### Language not switching?
- Check URL - should change from `/pt` to `/en`
- Check browser console for errors

### CSS not loading?
- Make sure file is named `.module.css`
- Import as: `import styles from './File.module.css'`
- Use as: `className={styles.className}`

### Dictionary error?
- Check key exists in both `pt` and `en` objects
- Check spelling exactly (case-sensitive)

## 📚 Learning Path

1. **Explore the UI** (5 min) - Click around, test features
2. **Read README.md** (10 min) - Understand architecture
3. **Review STRUCTURE.md** (10 min) - See file inventory
4. **Check DEVELOPER_GUIDE.md** (20 min) - Learn patterns
5. **Modify colors** (5 min) - Edit `styles/global.css`
6. **Update translations** (5 min) - Edit `locales/index.ts`
7. **Create new component** (15 min) - Follow example above
8. **Build & validate** (5 min) - Run `npm run validate`

## ✅ Success Criteria

Your setup is ready when:

- [x] `npm run dev` starts without errors
- [x] Browser opens to `http://localhost:3000`
- [x] CSS grid background visible
- [x] Theme toggle works (colors change)
- [x] Language toggle works (URL changes)
- [x] Navigation sidebar visible with links
- [x] All pages load without errors
- [x] Mobile view works (resize browser)
- [x] `npm run validate` passes

## 🚀 Next Steps

1. **Read Full Docs** - Check README.md
2. **Explore Components** - Look at existing components
3. **Customize Colors** - Edit theme.ts or global.css
4. **Add Pages** - Follow the template above
5. **Deploy** - Ready for Vercel or own server

## 📞 Quick Reference

| Action | What to Edit | Where |
|--------|-------------|-------|
| Change colors | CSS variables | `styles/global.css` |
| Change text | Dictionary keys | `locales/index.ts` |
| Add page | Create page file | `app/[locale]/pagename/page.tsx` |
| Add component | Create .tsx + .module.css | `components/` |
| Change theme | Theme object | `config/theme.ts` |
| Update data | Project array | `data/projects.ts` |
| Update nav | navItems array | `components/EncomLayout.tsx` |

## 🎓 File You Should Know

| File | Purpose | Edit For |
|------|---------|----------|
| `styles/global.css` | Theme colors | Changing colors |
| `locales/index.ts` | Translations | Adding text |
| `data/projects.ts` | Project data | Updating projects |
| `components/EncomLayout.tsx` | Navigation | Adding menu items |
| `middleware.ts` | Locale routing | I18n settings |
| `next.config.ts` | Build settings | Security headers |

---

**System Status**: ✅ Ready to Use  
**Version**: 2.4.1  
**Last Updated**: 2024-01-15

**Questions? Check:**
1. [README.md](./README.md) - System overview
2. [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Development patterns
3. [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Implementation details
