import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import type { Locale } from '@/encom/locales'

const SUPPORTED_LOCALES: Locale[] = ['pt', 'en']

export const metadata: Metadata = {
  title: 'ENCOM Dashboard',
  description: 'Advanced system management and analytics platform',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
  }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    notFound()
  }

  return children
}
