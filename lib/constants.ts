/**
 * Global constants for the portfolio application
 * 
 * This file centralizes all magic strings and constant values used across
 * the application, making it easier to maintain consistency and avoid typos.
 */

// ============================================================================
// LOCALES
// ============================================================================

export const LOCALES = {
  PT: 'pt',
  EN: 'en',
} as const;

export const LOCALE_PREFIX = {
  PT: '',
  EN: '/en',
} as const;

export const DEFAULT_LOCALE = LOCALES.PT;

// ============================================================================
// ROUTES
// ============================================================================

export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projetos',
  PROJECTS_EN: '/en/projects',
  PROJECT_DETAIL: (slug: string) => `/projetos/${slug}`,
  PROJECT_DETAIL_EN: (slug: string) => `/en/projects/${slug}`,
  RESUME: '/resume',
  RESUME_EN: '/en/resume',
  CERTIFICATES: '/certificates',
  CERTIFICATES_EN: '/en/certificates',
  ACADEMIC: '/academico',
  ACADEMIC_EN: '/en/academic',
  HIRE: '/contrate',
  HIRE_EN: '/en/hire',
  DEMOS: '/demos',
  DEMOS_EN: '/en/demos',
  DEMO_DETAIL: (slug: string) => `/demos/${slug}`,
  DEMO_DETAIL_EN: (slug: string) => `/en/demos/${slug}`,
} as const;

// ============================================================================
// ANALYTICS
// ============================================================================

export const ANALYTICS_EVENTS = {
  VIEW_RESUME: 'view_resume',
  DOWNLOAD_RESUME: 'download_resume',
  VIEW_CASE: 'view_case',
  VIEW_DEMO: 'view_demo',
  CLICK_GITHUB: 'click_github',
  CLICK_LINKEDIN: 'click_linkedin',
  CLICK_EMAIL: 'click_email',
  OPEN_PROJECT_MODAL: 'open_project_modal',
  CLOSE_PROJECT_MODAL: 'close_project_modal',
  CHANGE_LANGUAGE: 'change_language',
} as const;

export const ANALYTICS_CATEGORIES = {
  NAVIGATION: 'navigation',
  ENGAGEMENT: 'engagement',
  OUTBOUND: 'outbound',
  CONVERSION: 'conversion',
} as const;

// ============================================================================
// MEDIA
// ============================================================================

export const IMAGE_SIZES = {
  PROJECT_CARD: '(max-width: 1024px) 100vw, 520px',
  HERO: '(max-width: 768px) 100vw, 400px',
  SCREENSHOT: '(max-width: 768px) 100vw, 800px',
} as const;

export const IMAGE_QUALITY = {
  HIGH: 90,
  STANDARD: 85,
  LOW: 75,
} as const;

// ============================================================================
// EXTERNAL LINKS
// ============================================================================

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/matheussiqueira-dev/',
  GITHUB: 'https://github.com/matheussiqueira-dev',
} as const;

// ============================================================================
// SITE META
// ============================================================================

export const SITE_CONFIG = {
  NAME: 'Matheus Siqueira',
  BASE_URL: 'https://www.matheussiqueira.dev',
  DESCRIPTION: {
    PT: 'Portfolio de Matheus Siqueira - Desenvolvedor Full Stack, especialista em dados e BI',
    EN: 'Portfolio of Matheus Siqueira - Full Stack Developer, data and BI specialist',
  },
} as const;

// ============================================================================
// FALLBACKS
// ============================================================================

export const FALLBACKS = {
  IMAGE: '/placeholder.jpg',
  PROJECT_IMAGE: '/projects/placeholder.webp',
} as const;

// ============================================================================
// VALIDATION PATTERNS
// ============================================================================

export const VALIDATION = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;
