import Link from 'next/link'
import { Locale } from '@/encom/locales'
import { Dictionary, getDictionary } from '@/encom/locales'
import { EncomLayoutClient } from './EncomLayoutClient'

interface EncomLayoutProps {
  children: React.ReactNode
  locale: Locale
}

const navItems: Array<{ label: string; href: string }> = [
  { label: 'Dashboard', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Status', href: '/status' },
  { label: 'Settings', href: '/settings' },
]

export async function EncomLayout({ children, locale }: EncomLayoutProps) {
  const dictionary = await getDictionary(locale)

  return (
    <EncomLayoutClient locale={locale} dictionary={dictionary}>
      <div className="encom-layout">
        <aside className="encom-sidebar">
          <div className="encom-logo">ENCOM</div>

          <nav className="encom-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                <span className="nav-icon">▶</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="version">v2.4.1</div>
            <div className="status-indicator-small online">●</div>
          </div>
        </aside>

        <main className="encom-main">
          <header className="encom-topbar">
            <div className="encom-status">
              <span className="status-indicator online">●</span>
              <span className="status-text">{dictionary.online}</span>
            </div>

            <div className="encom-controls">
              {/* Toggles will be injected by client component */}
            </div>
          </header>

          <div className="encom-content">{children}</div>
        </main>
      </div>
    </EncomLayoutClient>
  )
}
