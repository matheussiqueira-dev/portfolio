# ENCOM Dashboard v3 🔷
---
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
## ✨ Features
```
### 🎨 Theme System
- **Custom theme engine** (no external deps)
- Dark/Light modes with localStorage persistence
- No FOUC (Flash of Unstyled Content)
- CSS custom properties for easy customization
│       System Layer (Features)           │  Business logic modules
### 🌐 i18n System
- **Custom i18n engine** (type-safe, no next-intl)
- Portuguese + English support
- Locale detection from URL path
- 32 translation keys
│        UI Layer (Components)            │  Pure React components
### 📊 Real-time Dashboard
- System metrics (CPU, memory, uptime, requests)
- Project overview panel
- Interactive project list with filters

### 🎯 UI Components
- Button (3 variants, 3 sizes)
- DataBlock (4 accent colors)
- Card (3 variants)
- Badge (5 variants)
- Sidebar (responsive)
- Topbar with controls
- **Accent Glow**: Cyan neon shadow
### 🔀 Visual Effects
- Page transitions (secure wipe animation)
- Custom cursor with glow
- Hover effects on all interactive elements
- Smooth animations (controlled by feature flags)
- **Secondary**: White `#ffffff`
---
- **Typography**: Same monospace, reduced glow effect
## 🚀 Quick Start
- **Type-safe Dictionary** interface with 32+ translation keys
### Installation
- Portuguese (default): `/`, `/pt/`, `/pt/projects`, `/pt/status`
```bash
# Clone repository
git clone https://github.com/matheussiqueira-dev/portfolio.git
cd portfolio/encom
const { theme, toggleTheme, mounted } = useTheme()
# Install dependencies
npm install
// Returns: 'dark' | 'light'
# Start development server
npm run dev
```

Open [http://localhost:3000/encom](http://localhost:3000/encom)

### Build for Production

### System Status Monitoring
### Navigation
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

---

## 📁 Project Structure

```
encom/
├── core/                    # Pure logic (engines, config)
│   ├── theme/              # Theme engine
│   ├── i18n/               # i18n engine
│   ├── motion/             # Animation constants
│   └── config/             # App configuration
│
├── ui/                      # Pure React components
│   ├── components/         # Button, Card, Badge, etc.
│   └── layout/             # Sidebar, Topbar, etc.
│
├── system/                  # Feature modules
│   ├── dashboard/          # SystemStatus, MetricsPanel
│   └── projects/           # ProjectCard, ProjectList
│
├── app/                     # Next.js routes
│   ├── [locale]/           # Localized routes
│   └── layout.tsx          # Root layout
│
├── ARCHITECTURE.md          # Architecture documentation
└── README.md               # This file
```

---

## 🎯 Usage Examples

### Using Theme Engine

```typescript
import { themeEngine } from '@/encom/core/theme/theme.engine'

// Initialize theme
themeEngine.initialize()

// Get current mode
const mode = themeEngine.getMode() // 'dark' | 'light'

// Toggle theme
themeEngine.toggleMode()

// Set specific mode
themeEngine.setMode('dark')
```

### Using i18n Engine

```typescript
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'

// Get dictionary for locale
const dictionary = i18nEngine.getDictionary('pt')

// Use translations
<h1>{dictionary.dashboard}</h1>
<p>{dictionary.online}</p>
```

### Using UI Components

```typescript
import { Button } from '@/encom/ui/components/Button'
import { Card } from '@/encom/ui/components/Card'
import { Badge } from '@/encom/ui/components/Badge'

<Card variant="elevated" padding="large">
	<Badge variant="success">Active</Badge>
	<Button variant="primary" size="large">
		Click Me
	</Button>
</Card>
```

### Using System Modules

```typescript
import { SystemStatus, MetricsPanel } from '@/encom/system'

export default function Page() {
	const dictionary = i18nEngine.getDictionary()
  
	return (
		<>
			<SystemStatus dictionary={dictionary} />
			<MetricsPanel
				dictionary={dictionary}
				projectsCount={15}
				certificatesCount={28}
				stackCount={42}
			/>
		</>
	)
}
```

---

## 📚 Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)**: Complete architecture guide
- **[MIGRATION.md](./MIGRATION.md)**: Migrating from old architecture (planned)
- **API Reference**: Check each layer's index.ts for exports

---

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details

---

## 🔗 Links

- **Portfolio**: [matheussiqueira.dev](https://matheussiqueira.dev)
- **GitHub**: [@matheussiqueira-dev](https://github.com/matheussiqueira-dev)
- **LinkedIn**: [Matheus Siqueira](https://linkedin.com/in/matheussiqueira-dev)

---

**ENCOM Dashboard v3** - Enterprise Portfolio System  
Built with 💙 by Matheus Siqueira
