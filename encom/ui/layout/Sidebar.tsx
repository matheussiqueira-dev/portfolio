/**
 * Sidebar Component
 * UI layout component for navigation
 * 
 * @architecture UI Layer
 */

import React from 'react'
import Link from 'next/link'
import { APP_CONFIG } from '@/encom/core/config/app.config'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>{APP_CONFIG.name}</div>

      <nav className={styles.nav}>
        {APP_CONFIG.navigation.map((item) => (
          <Link key={item.href} href={item.href} className={styles.navLink}>
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navLabel}>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.version}>v{APP_CONFIG.version}</div>
        <div className={styles.statusDot} />
      </div>
    </aside>
  )
}
