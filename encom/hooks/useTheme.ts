'use client'

import { useEffect, useState } from 'react'
import { ThemeMode, THEME_KEY, DEFAULT_THEME } from '@/encom/config/theme'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(DEFAULT_THEME)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Carregar tema do localStorage
    const stored = localStorage.getItem(THEME_KEY) as ThemeMode | null
    const initial = stored || DEFAULT_THEME

    setTheme(initial)
    document.documentElement.setAttribute('data-mode', initial)
    setMounted(true)
  }, [])

  const toggle = (newTheme?: ThemeMode) => {
    const nextTheme = newTheme || (theme === 'dark' ? 'light' : 'dark')
    setTheme(nextTheme)
    localStorage.setItem(THEME_KEY, nextTheme)
    document.documentElement.setAttribute('data-mode', nextTheme)
  }

  return { theme, toggle, mounted }
}
