# ENCOM Dashboard System

A modern, bilingual (PT/EN) dashboard system built with Next.js 14+, React 18, and TypeScript. Features a corporate dark/light theme system with system status monitoring and project management interface.

## 🏗️ Architecture

### Core Structure
```
encom/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Dynamic locale routes
│   │   ├── page.tsx         # Dashboard home
│   │   ├── layout.tsx       # Locale layout with sidebar
│   │   ├── error.tsx        # Error boundary
│   │   ├── not-found.tsx    # 404 page
│   │   ├── projects/        # Project listing & details
│   │   ├── status/          # System status
│   │   └── settings/        # User settings
│   └── layout.tsx           # Root layout with locale validation
├── components/              # React components
│   ├── PageTransition.tsx   # Route transition overlay
│   ├── SystemStatus.tsx     # System metrics display
│   ├── DataBlock.tsx        # Reusable data blocks
│   ├── ThemeToggle.tsx      # Dark/light theme switcher
│   ├── LanguageToggle.tsx   # PT/EN language switcher
│   ├── EncomLayout.tsx      # Main layout (server)
│   └── EncomLayoutClient.tsx # Layout client wrapper
├── hooks/                   # React hooks
│   ├── useTheme.ts         # Theme state management
│   ├── useLocale.ts        # Locale switching
│   └── useDictionary.ts    # i18n dictionary loading
├── styles/                  # Global styles
│   └── global.css          # CSS variables, themes, base styles
├── config/
│   └── theme.ts            # Theme configuration (colors, vars)
├── data/
│   └── projects.ts         # System data & project mockdata
├── locales/
│   └── index.ts            # i18n Dictionary & translations
├── middleware.ts           # Locale detection & routing
├── next.config.ts          # Next.js configuration
└── tailwind.config.ts      # Tailwind config (optional)
```

## 🎨 Design Themes

### Dark Mode (Legacy Theme)
- **Primary**: Azure Neon Blue `#00F0FF`
- **Background**: Deep black `#0a0e27`
- **Secondary**: Dark gray `#1a1f3a`
- **Accent Glow**: Cyan neon shadow
- **Typography**: Monospace (Courier New), uppercase, high contrast

### Light Mode (Ares Theme)
- **Primary**: Crimson Red `#FF003C`
- **Background**: Light gray `#f3f4f6`
- **Secondary**: White `#ffffff`
- **Borders**: Subtle gray `#e5e7eb`
- **Typography**: Same monospace, reduced glow effect

## 🔄 Bilingual System (PT/EN)

### Implementation
- **No external i18n library** (lightweight custom solution)
- **Type-safe Dictionary** interface with 32+ translation keys
- **Async dictionary loading** via `getDictionary(locale: Locale)`
- **Locale detection** via middleware (Accept-Language header fallback)
- **Client-side locale switching** with `useLocale` hook

### Routes
- Portuguese (default): `/`, `/pt/`, `/pt/projects`, `/pt/status`
- English: `/en/`, `/en/projects`, `/en/status`, `/en/settings`

## 🎛️ State Management

### Theme (`useTheme` hook)
```typescript
const { theme, toggleTheme, mounted } = useTheme()
// Persists to localStorage under key 'encom-theme'
// Returns: 'dark' | 'light'
```

### Locale (`useLocale` hook)
```typescript
const { locale, changeLocale } = useLocale()
// Uses next/navigation for smooth transitions
// Reconstructs path prefix with new locale
```

### Dictionary (`useDictionary` hook)
```typescript
const dictionary = await useDictionary(locale)
// Async loading of translated content
```

## 🎯 Key Features

### System Status Monitoring
- Real-time metrics: CPU, Memory, Active Nodes, Latency
- Health status indicators: Healthy, Warning, Critical
- Animated progress bars with glow effects
- Responsive grid layout

### Project Management
- Node-based project cards (NODE-01, NODE-02, etc.)
- Project detail pages with metrics and challenges
- Technology stack display with badge styling
- Performance, reliability, and latency metrics

### Navigation
- Fixed sidebar with main navigation
- Sticky topbar with system status
- Theme toggle (☀️/🌙) button
- Language toggle (🇧🇷/🇺🇸) button
- Mobile-responsive bottom navigation

## 📦 Component Library

### UI Components (`components/`)
- **PageTransition.tsx**: Route change overlay animation
- **SystemStatus.tsx**: System metrics dashboard
- **DataBlock.tsx**: Flexible metric/data display card
- **ThemeToggle.tsx**: Dark/light theme switcher
- **LanguageToggle.tsx**: Language switcher
- **EncomLayout.tsx**: Main layout wrapper
- **EncomLayoutClient.tsx**: Client-side layout enhanced

### Styling
- **CSS Modules** for component encapsulation (no global class conflicts)
- **CSS Variables** for theme colors (3s transitions on dark/light switch)
- **No Tailwind in components** (pure vanilla CSS)
- **Responsive design** with mobile breakpoints (768px, 640px)

## 🚀 Quick Start

```bash
# Development
npm run dev

# Open http://localhost:3000
# Automatically redirects to /pt (Portuguese)

# Switch locale in UI or URL
# /en for English
# /pt for Portuguese (default)

# Build
npm run build

# Start production server
npm start
```

## 📝 Environment Variables

None required for basic functionality. ENCOM is self-contained.

Optional (in `.env.local`):
```
NEXT_PUBLIC_APP_NAME=ENCOM
NEXT_PUBLIC_APP_VERSION=2.4.1
```

## 🔒 Security & Tracking

- **No interference with external tracking** (GA, Meta Pixel, Sentry)
- **XSS protection headers** via Next.js security headers config
- **Content Security Policy** ready (CSP headers in next.config)
- **No external API calls** (fully self-contained)
- **localStorage only** for theme persistence (no cookies/tracking)

## 🎬 Animations

- **Page transitions**: Secure wipe effect (0.6s ease-out)
- **Theme switch**: 300ms smooth color transitions
- **Component fades**: Staggered fadeInUp animations
- **Hover effects**: Border color, glow, transform (2px translateY)
- **Status pulses**: Continuous 2s opacity animation

## 📱 Responsive Breakpoints

- **Desktop**: Full sidebar + content layout
- **Tablet** (≤1024px): Adjusted grid columns
- **Mobile** (≤768px): Bottom navigation, full-width layout
- **Small Mobile** (≤640px): Single column grids, reduced font sizes

## 🔍 Type Safety

- **TypeScript strict mode**: `strict: true`
- **No implicit `any`**: Enforced via ESLint
- **Type-safe i18n**: Dictionary interface ensures all keys are translated
- **Component props**: Fully typed interfaces
- **Custom types** in `locales/index.ts`, `data/projects.ts`, `config/theme.ts`

## 📚 Dictionary Keys

32+ translation keys covering:
- Dashboard labels (CPU, Memory, Nodes, Latency)
- Navigation items
- System status messages
- Error messages
- Settings labels
- Section titles

## 🛠️ Development Tips

1. **Add new page**: Create folder in `app/[locale]/` with `page.tsx`
2. **Add new translation**: Update `locales/index.ts` (both pt & en)
3. **Change theme colors**: Edit `styles/global.css` CSS variables
4. **Update data**: Modify `data/projects.ts` (system data & projects)
5. **Create component**: Use CSS modules (`.module.css`) for encapsulation

## 📊 Performance

- **Zero client hydration issues** with proper SSR/SSG patterns
- **Static generation** for locale routes via `generateStaticParams`
- **Optimized images** configuration in next.config
- **CSS variables** eliminate runtime theme calculations
- **Minimal JavaScript** (form-free, state-light)

## 🎓 Learning Resources

- **Architecture**: See folder structure above
- **i18n system**: Review `locales/index.ts` and `hooks/useDictionary.ts`
- **Theming**: Study `styles/global.css` CSS variable system
- **Components**: Check `components/*.tsx` and `.module.css` pairs

---

**Version**: 2.4.1  
**Status**: Operational | Systems Nominal  
**Last Updated**: 2024-01-15
