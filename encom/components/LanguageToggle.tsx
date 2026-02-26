'use client'

import { useLocale } from '@/encom/hooks/useLocale'
import { Locale } from '@/encom/locales'
import styles from './LanguageToggle.module.css'

interface LanguageToggleProps {
  currentLocale: Locale
}

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const { changeLocale } = useLocale()
  const nextLocale: Locale = currentLocale === 'pt' ? 'en' : 'pt'

  return (
    <button
      onClick={() => changeLocale(nextLocale)}
      className={styles.toggle}
      aria-label={`Switch to ${nextLocale}`}
    >
      <span className={styles.flag}>
        {currentLocale === 'pt' ? '🇧🇷' : '🇺🇸'}
      </span>
      <span className={styles.label}>
        {currentLocale === 'pt' ? 'PT' : 'EN'}
      </span>
    </button>
  )
}
