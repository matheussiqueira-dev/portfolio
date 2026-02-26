import { ReactNode } from 'react'
import { Locale, getDictionary } from '@/encom/locales'
import { EncomLayout } from '@/encom/components/EncomLayout'
import { PageTransition } from '@/encom/components/PageTransition'
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
  const dictionary = await getDictionary(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="encom-app">
        <PageTransition>
          <EncomLayout locale={locale}>{children}</EncomLayout>
        </PageTransition>
      </body>
    </html>
  )
}
