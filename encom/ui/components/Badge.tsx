/**
 * Badge Component
 * Pure UI component for status indicators
 * 
 * @architecture UI Layer
 */

import React from 'react'
import styles from './Badge.module.css'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export function Badge({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
}: BadgeProps) {
  const classes = [styles.badge, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{children}</span>
}
