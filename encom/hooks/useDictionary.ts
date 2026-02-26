'use client'

import { useEffect, useState } from 'react'
import { Locale, Dictionary, getDictionary } from '@/encom/locales'

export function useDictionary(locale: Locale) {
  const [dict, setDict] = useState<Dictionary | null>(null)

  useEffect(() => {
    getDictionary(locale).then(setDict)
  }, [locale])

  return dict
}
