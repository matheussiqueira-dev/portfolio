/**
 * Cursor Component
 * UI component for enhanced cursor effects
 * Optional feature controlled by app config
 * 
 * @architecture UI Layer
 */

'use client'

import React, { useEffect, useState } from 'react'
import { APP_CONFIG } from '@/encom/core/config/app.config'
import styles from './Cursor.module.css'

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!APP_CONFIG.features.enableCursor) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!APP_CONFIG.features.enableCursor || !isVisible) return null

  return (
    <div
      className={styles.cursor}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}
