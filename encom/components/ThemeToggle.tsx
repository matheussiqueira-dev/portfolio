'use client'

import { useTheme } from '@/encom/hooks/useTheme'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme()

  if (!mounted) return null

  return (
    <button
      onClick={() => toggle()}
      className={styles.toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={theme === 'dark' ? 'Ares Mode' : 'Legacy Mode'}
    >
      <span className={styles.icon}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
      <span className={styles.label}>
        {theme === 'dark' ? 'Ares' : 'Legacy'}
      </span>
    </button>
  )
}
