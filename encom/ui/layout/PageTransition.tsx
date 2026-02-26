/**
 * PageTransition Component
 * UI component for route change feedback
 * Visual overlay during navigation
 * 
 * @architecture UI Layer
 */

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { APP_CONFIG } from '@/encom/core/config/app.config'
import styles from './PageTransition.module.css'

export function PageTransition() {
  const pathname = usePathname()
  const prevPath = useRef<string>(pathname)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!APP_CONFIG.features.enablePageTransitions) return undefined

    if (prevPath.current !== pathname) {
      setIsTransitioning(true)
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 600)

      prevPath.current = pathname

      return () => clearTimeout(timer)
    }
    return undefined
  }, [pathname])

  if (!isTransitioning) return null

  return <div className={styles.overlay} aria-hidden="true" />
}
