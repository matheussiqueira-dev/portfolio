/**
 * DataBlock Component
 * Pure UI component for displaying metrics and data
 * 
 * @architecture UI Layer
 */

import React from 'react'
import styles from './DataBlock.module.css'

export interface DataBlockProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: string
  accent?: 'primary' | 'secondary' | 'success' | 'warning' | 'critical'
  className?: string
}

export function DataBlock({
  title,
  value,
  subtitle,
  icon,
  accent = 'primary',
  className = '',
}: DataBlockProps) {
  return (
    <div className={`${styles.dataBlock} ${styles[accent]} ${className}`}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </div>
  )
}
