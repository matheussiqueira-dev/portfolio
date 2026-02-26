'use client'

import styles from './DataBlock.module.css'

interface DataBlockProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: string
  accent?: 'primary' | 'secondary' | 'success' | 'warning' | 'critical'
  onClick?: () => void
}

export function DataBlock({
  title,
  value,
  subtitle,
  icon,
  accent = 'primary',
  onClick,
}: DataBlockProps) {
  return (
    <div
      className={`${styles.dataBlock} ${styles[accent]}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && <div className={styles.icon}>{icon}</div>}

      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>

      <div className={styles.terminal}>
        <span>{`→`}</span>
      </div>
    </div>
  )
}
