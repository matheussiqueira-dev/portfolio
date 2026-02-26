/**
 * @/core/i18n
 * Centralized internationalization engine with type-safe message access
 *
 * Usage:
 *   // Server Components
 *   import { getI18nEngine, extractLocaleFromPath } from '@/core/i18n'
 *
 *   // Client Components
 *   import { useI18n } from '@/core/i18n'
 */

// Core routing configuration
export { routing } from './routing';

// Engine and utilities
export {
  getI18nEngine,
  useI18n,
  i18nEngine,
  getLocale,
  isPortuguese,
  isEnglish,
  isValidLocale,
  getAvailableLocales,
  getDefaultLocale,
  getLocaleDisplayName,
  getLocaleFlag,
  getLocaleHref,
  extractLocaleFromPath,
  stripLocalePrefix,
  type Locale,
  type MessageNamespace,
  type MessageKeys,
} from './engine';

// Note: request.ts is used internally by next-intl middleware
// Not typically imported directly in components
