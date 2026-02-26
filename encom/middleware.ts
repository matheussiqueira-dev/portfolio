import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED_LOCALES = ['pt', 'en']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Get preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') ?? ''
  const preferredLocale = acceptLanguage
    .split(',')[0]
    ?.split('-')[0]
    ?.toLowerCase()
    ?? ''

  const locale = SUPPORTED_LOCALES.includes(preferredLocale)
    ? preferredLocale
    : 'pt'

  // Redirect to locale-prefixed URL
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  if (pathname === '') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!api|_next|public|favicon).*)'],
}
