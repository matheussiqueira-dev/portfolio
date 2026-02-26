/**
 * Topbar Component
 * UI layout component for header controls
 * 
 * @architecture UI Layer
 */

import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { Dictionary } from '@/encom/core/i18n/i18n.types'
import styles from './Topbar.module.css'

export interface TopbarProps {
  dictionary: Dictionary
}

export function Topbar({ dictionary }: TopbarProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.status}>
        <span className={styles.indicator} />
        <span className={styles.statusText}>{dictionary.online}</span>
      </div>

      <div className={styles.controls}>
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  )
}
