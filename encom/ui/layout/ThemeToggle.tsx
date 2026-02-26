/**
 * ThemeToggle Component
 * UI component for theme switching
 * Uses theme engine from Core layer
 * 
 * @architecture UI Layer
 */

'use client'

import React, { useEffect, useState } from 'react'
import { themeEngine } from '@/encom/core/theme/theme.engine'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [mode, setMode] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    setMounted(true)
    themeEngine.initialize()
    setMode(themeEngine.getMode())
  }, [])

  const handleToggle = () => {
    themeEngine.toggleMode()
    setMode(themeEngine.getMode())
  }

  if (!mounted) return null

  return (
    <button
      onClick={handleToggle}
      className={styles.toggle}
      aria-label="Toggle theme"
      title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className={styles.icon}>{mode === 'dark' ? '☀️' : '🌙'}</span>
      <span className={styles.label}>{mode === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
