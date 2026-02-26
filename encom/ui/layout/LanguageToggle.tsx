/**
 * LanguageToggle Component
 * UI component for locale switching
 * Uses Next.js navigation for routing
 * 
 * @architecture UI Layer
 */

'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/encom/core/i18n/i18n.types'
import styles from './LanguageToggle.module.css'

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale: Locale = pathname.startsWith('/en') ? 'en' : 'pt'
  const newLocale: Locale = currentLocale === 'pt' ? 'en' : 'pt'

  const handleToggle = () => {
    const segments = pathname.split('/').filter(Boolean)
    
    // Remove current locale if present
    if (segments[0] === 'pt' || segments[0] === 'en') {
      segments.shift()
    }
    
    // Build new path with new locale
    const newPath = `/${newLocale}${segments.length ? '/' + segments.join('/') : ''}`
    router.push(newPath)
  }

  return (
    <button
      onClick={handleToggle}
      className={styles.toggle}
      aria-label="Toggle language"
      title={`Switch to ${newLocale === 'pt' ? 'Portuguese' : 'English'}`}
    >
      <span className={styles.icon}>{currentLocale === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
      <span className={styles.label}>{currentLocale.toUpperCase()}</span>
    </button>
  )
}
