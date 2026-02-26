'use client'

import { useEffect, useState } from 'react'
import { Locale } from '@/encom/locales'
import { Dictionary } from '@/encom/locales'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'

interface EncomLayoutClientProps {
  children: React.ReactNode
  locale: Locale
  dictionary: Dictionary
}

export function EncomLayoutClient({
  children,
  locale,
  dictionary,
}: EncomLayoutClientProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return children
  }

  return (
    <div className="encom-layout-wrapper">
      {children}

      <div className="encom-controls-portal">
        <ThemeToggle />
        <LanguageToggle currentLocale={locale} />
      </div>
    </div>
  )
}
