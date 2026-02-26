/**
 * ENCOM i18n Engine
 * Lightweight internationalization without external dependencies
 * Handles locale detection, dictionary retrieval, and fallbacks
 * 
 * @architecture Core Layer - No JSX, pure logic
 */

import { Locale, Dictionary, I18nEngine } from './i18n.types'
import { DICTIONARIES, SUPPORTED_LOCALES, DEFAULT_LOCALE } from './dictionaries'

class I18nEngineImpl implements I18nEngine {
  private currentLocale: Locale = DEFAULT_LOCALE

  /**
   * Get current active locale
   */
  getLocale(): Locale {
    return this.currentLocale
  }

  /**
   * Set current locale
   */
  setLocale(locale: Locale): void {
    if (this.isValidLocale(locale)) {
      this.currentLocale = locale
    }
  }

  /**
   * Get dictionary for specific locale
   */
  getDictionary(locale: Locale): Dictionary {
    return DICTIONARIES[locale] || DICTIONARIES[DEFAULT_LOCALE]
  }

  /**
   * Type guard to check if string is valid locale
   */
  isValidLocale(locale: string): locale is Locale {
    return SUPPORTED_LOCALES.includes(locale as Locale)
  }

  /**
   * Detect locale from pathname
   * Used in middleware and server components
   */
  detectLocaleFromPath(pathname: string): Locale {
    const segments = pathname.split('/').filter(Boolean)
    const firstSegment = segments[0]

    if (firstSegment && this.isValidLocale(firstSegment)) {
      return firstSegment
    }

    return DEFAULT_LOCALE
  }

  /**
   * Detect locale from Accept-Language header
   * Fallback for middleware
   */
  detectLocaleFromHeader(acceptLanguage: string): Locale {
    const preferred = acceptLanguage
      .split(',')[0]
      ?.split('-')[0]
      ?.toLowerCase()

    if (preferred && this.isValidLocale(preferred)) {
      return preferred
    }

    return DEFAULT_LOCALE
  }
}

// Singleton instance
export const i18nEngine = new I18nEngineImpl()
