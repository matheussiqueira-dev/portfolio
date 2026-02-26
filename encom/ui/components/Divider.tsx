/**
 * Divider Component
 * Pure UI component for visual separation
 * 
 * @architecture UI Layer
 */

import React from 'react'
import styles from './Divider.module.css'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  spacing?: 'none' | 'small' | 'medium' | 'large'
  className?: string
}

export function Divider({
  orientation = 'horizontal',
  spacing = 'medium',
  className = '',
}: DividerProps) {
  const classes = [
    styles.divider,
    styles[orientation],
    styles[`spacing-${spacing}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes} />
}
