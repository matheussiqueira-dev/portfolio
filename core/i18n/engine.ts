/**
 * ENCOM i18n Engine
 *
 * Centralized internationalization with type-safe message access,
 * locale detection, and integration with next-intl.
 *
 * Usage:
 *   // Server Components
 *   import { getI18nEngine } from '@/core/i18n/engine'
 *   const i18n = await getI18nEngine('pt-BR')
 *   const title = i18n.getMessage('projects.title')
 *
 *   // Client Components
 *   import { useI18n } from '@/core/i18n/engine'
 *   const i18n = useI18n()
 *   const copy = i18n.t('nav.about')
 */

import { getTranslations as getNextIntlTranslations } from 'next-intl/server';
import { useTranslations as useNextIntlTranslations } from 'next-intl';
import { routing } from './routing';

/**
 * Valid locale types
 */
export type Locale = (typeof routing.locales)[number];

/**
 * Message namespace types
 */
export type MessageNamespace = 'nav' | 'projects' | 'common' | 'sections' | 'footer';

/**
 * Message key type for compile-time message safety
 * Maps to keys in locale JSON files
 */
export interface MessageKeys {
  nav: {
    home: string;
    projects: string;
    academic: string;
    certificates: string;
    resume: string;
    hire: string;
    contact: string;
  };
  projects: {
    title: string;
    subtitle: string;
    empty: string;
    filter: string;
  };
  common: {
    loading: string;
    error: string;
    back: string;
    close: string;
  };
  sections: {
    hero: {
      greeting: string;
      headline: string;
    };
    about: {
      title: string;
    };
    contact: {
      title: string;
    };
  };
  footer: {
    copyright: string;
    year: string;
  };
}

/**
 * Get current locale
 * Can be used in both server and client contexts
 */
export function getLocale(): Locale {
  // This will be overridden by next-intl middleware
  // Safe default to Portuguese
  return 'pt-BR';
}

/**
 * Detect if locale is Portuguese
 */
export function isPortuguese(locale?: Locale): boolean {
  return (locale || getLocale()) === 'pt-BR';
}

/**
 * Detect if locale is English
 */
export function isEnglish(locale?: Locale): boolean {
  return (locale || getLocale()) === 'en';
}

/**
 * Get locale display name
 */
export function getLocaleDisplayName(locale: Locale): string {
  const names: Record<Locale, string> = {
    'pt-BR': 'Português',
    en: 'English',
  };
  return names[locale];
}

/**
 * Get locale flag emoji
 */
export function getLocaleFlag(locale: Locale): string {
  const flags: Record<Locale, string> = {
    'pt-BR': '🇧🇷',
    en: '🇺🇸',
  };
  return flags[locale];
}

/**
 * Validate if a string is a valid locale
 */
export function isValidLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}

/**
 * Get all available locales
 */
export function getAvailableLocales(): Locale[] {
  return [...routing.locales];
}

/**
 * Get default locale
 */
export function getDefaultLocale(): Locale {
  return routing.defaultLocale as Locale;
}

/**
 * Server-side i18n engine
 * Use in Server Components with 'use server'
 *
 * @example
 *   const i18n = getI18nEngine('pt-BR')
 *   const title = await i18n.getMessage('projects.title')
 */
export async function getI18nEngine(locale: Locale | string = getLocale()) {
  const resolvedLocale = isValidLocale(locale) ? locale : getDefaultLocale();

  // Get next-intl translations
  const t = await getNextIntlTranslations();

  return {
    /** Current locale */
    locale: resolvedLocale,

    /** Is Portuguese locale */
    isPt: isPortuguese(resolvedLocale),

    /** Is English locale */
    isEn: isEnglish(resolvedLocale),

    /**
     * Get translated message by dot-notation key
     * @example
     *   getMessage('projects.title')
     *   getMessage('sections.hero.greeting')
     */
    async getMessage(key: string, namespace?: MessageNamespace | string): Promise<string> {
      try {
        // Try with namespace first
        if (namespace) {
          return t(`${namespace}.${key}`);
        }
        return t(key);
      } catch {
        // Fallback to key itself if translation not found
        console.warn(`[i18n] Missing translation: ${key}`);
        return key;
      }
    },

    /**
     * Get all messages for a namespace
     * @example
     *   const navMessages = await getNamespace('nav')
     */
    async getNamespace<T extends Record<string, unknown>>(
      namespace: string
    ): Promise<T> {
      try {
        return t.raw(namespace) as T;
      } catch {
        console.warn(`[i18n] Missing namespace: ${namespace}`);
        return {} as T;
      }
    },

    /**
     * Get locale display name
     */
    getDisplayName: () => getLocaleDisplayName(resolvedLocale),

    /**
     * Get locale flag emoji
     */
    getFlag: () => getLocaleFlag(resolvedLocale),
  };
}

/**
 * Client-side i18n hook
 * Use in Client Components with 'use client'
 *
 * @example
 *   const i18n = useI18n()
 *   const title = i18n.t('projects.title')
 */
export function useI18n() {
  const t = useNextIntlTranslations();

  // Get locale from next-intl context (set by middleware)
  // Fallback to default if not available
  const locale = (typeof window !== 'undefined'
    ? document.documentElement.lang || getDefaultLocale()
    : getDefaultLocale()) as Locale;

  return {
    /** Current locale */
    locale,

    /** Is Portuguese locale */
    isPt: isPortuguese(locale),

    /** Is English locale */
    isEn: isEnglish(locale),

    /**
     * Translate by key (next-intl method)
     * @example
     *   t('projects.title')
     *   t('sections.hero.greeting', { name: 'John' })
     */
    t: <_T extends Record<string, unknown> | string = string>(
      key: string,
      values?: Record<string, string | number | boolean>
    ): string => {
      try {
        return t(key, values as Record<string, string | number | boolean>);
      } catch {
        console.warn(`[i18n] Missing translation: ${key}`);
        return key;
      }
    },

    /**
     * Get raw translation object (for namespaces)
     * @example
     *   const nav = t.raw('nav')
     */
    raw: (key: string) => {
      try {
        return t.raw(key);
      } catch {
        console.warn(`[i18n] Missing namespace: ${key}`);
        return {};
      }
    },

    /**
     * Get locale display name
     */
    getDisplayName: () => getLocaleDisplayName(locale),

    /**
     * Get locale flag emoji
     */
    getFlag: () => getLocaleFlag(locale),

    /**
     * Format relative time (requires intl support)
     * @example
     *   formatRelativeTime(new Date('2025-02-26'), 'en')
     */
    formatRelativeTime: (date: Date, unit: 'days' | 'hours' | 'minutes' | 'weeks' = 'days'): string => {
      const now = new Date();
      const diff = now.getTime() - date.getTime();
      const units: Record<string, number> = {
        minutes: 60 * 1000,
        hours: 60 * 60 * 1000,
        days: 24 * 60 * 60 * 1000,
        weeks: 7 * 24 * 60 * 60 * 1000,
      };

      const value = Math.floor(diff / units[unit]);
      return t('common.relativeTime', { value, unit });
    },
  };
}

/**
 * Locale switcher utility
 * Generates href for switching to different locale
 *
 * @example
 *   getLocaleHref('/projects', 'en') // Returns '/en/projects'
 *   getLocaleHref('/projects', 'pt-BR') // Returns '/projetos'
 */
export function getLocaleHref(pathname: string, locale: Locale): string {
  // Use next-intl's pathnames configuration
  // This is a simplified version - full implementation would use routing config
  const isRoot = pathname === '/' || pathname === '';

  if (isRoot) {
    return locale === getDefaultLocale() ? '/' : `/${locale}`;
  }

  // For other paths, prepend locale prefix if not default
  if (locale === getDefaultLocale()) {
    return pathname;
  }

  return `/${locale}${pathname}`;
}

/**
 * Extract locale from pathname
 *
 * @example
 *   extractLocaleFromPath('/en/projects') // Returns 'en'
 *   extractLocaleFromPath('/projects') // Returns 'pt-BR' (default)
 */
export function extractLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (isValidLocale(firstSegment)) {
    return firstSegment;
  }

  return getDefaultLocale();
}

/**
 * Remove locale prefix from pathname
 *
 * @example
 *   stripLocalePrefix('/en/projects') // Returns '/projects'
 *   stripLocalePrefix('/projetos') // Returns '/projetos'
 */
export function stripLocalePrefix(pathname: string): string {
  const locale = extractLocaleFromPath(pathname);

  if (locale === getDefaultLocale()) {
    return pathname;
  }

  return pathname.replace(`/${locale}`, '');
}

/**
 * Export all utilities collectively
 */
export const i18nEngine = {
  getLocale,
  isPortuguese,
  isEnglish,
  isValidLocale,
  getAvailableLocales,
  getDefaultLocale,
  getLocaleDisplayName,
  getLocaleFlag,
  getI18nEngine,
  useI18n,
  getLocaleHref,
  extractLocaleFromPath,
  stripLocalePrefix,
};
