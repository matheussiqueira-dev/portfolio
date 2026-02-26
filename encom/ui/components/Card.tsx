/**
 * Card Component
 * Pure UI container component
 * 
 * @architecture UI Layer
 */

import React from 'react'
import styles from './Card.module.css'

export interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'small' | 'medium' | 'large'
  className?: string
}

export function Card({
  children,
  variant = 'default',
  padding = 'medium',
  className = '',
}: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
