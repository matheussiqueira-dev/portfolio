/**
 * ENCOM Application Configuration
 * Centralized app-wide constants and settings
 */

export const APP_CONFIG = {
  // Application metadata
  name: 'ENCOM',
  version: '2.4.1',
  description: 'Enterprise Network Control Monitor',

  // Routes
  routes: {
    home: '/',
    dashboard: '/',
    projects: '/projects',
    status: '/status',
    settings: '/settings',
  },

  // Navigation items
  navigation: [
    { label: 'Dashboard', href: '/', icon: '▶' },
    { label: 'Projects', href: '/projects', icon: '▶' },
    { label: 'Status', href: '/status', icon: '▶' },
    { label: 'Settings', href: '/settings', icon: '▶' },
  ],

  // System configuration
  system: {
    refreshInterval: 30000, // 30 seconds
    maxRetries: 3,
    timeout: 10000,
  },

  // UI configuration
  ui: {
    sidebarWidth: 280,
    topbarHeight: 64,
    gridSize: 50,
  },

  // Feature flags
  features: {
    enableAnimations: true,
    enableCursor: true,
    enablePageTransitions: true,
    enableGridBackground: true,
  },
} as const

export type AppConfig = typeof APP_CONFIG
