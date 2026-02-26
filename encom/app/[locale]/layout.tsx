import { ReactNode } from 'react'
import type { Locale } from '@/encom/core/i18n/i18n.types'
import { PageTransition } from '@/encom/ui/layout/PageTransition'
import { Cursor } from '@/encom/ui/layout/Cursor'
import '@/encom/styles/global.css'

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="encom-app">
        <PageTransition />
        <Cursor />
        {children}
      </body>
    </html>
  )
}
