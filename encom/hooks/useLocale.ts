'use client'

import { useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Locale } from '@/encom/locales'

export function useLocale() {
  const router = useRouter()
  const pathname = usePathname()

  const changeLocale = useCallback(
    (newLocale: Locale) => {
      const segments = pathname.split('/')
      // Remove idioma atual se existir
      const filteredSegments = segments.filter(
        (seg) => seg !== 'pt' && seg !== 'en' && seg !== ''
      )
      const newPath = `/${newLocale}${filteredSegments.length > 0 ? '/' + filteredSegments.join('/') : ''}`
      router.push(newPath)
    },
    [pathname, router]
  )

  return { changeLocale }
}
