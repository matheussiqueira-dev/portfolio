/**
 * Theme Configuration
 * Dark = Legacy (Azul neon cinematográfico)
 * Light = Ares (Cinza técnico + Vermelho refinado)
 */

export type ThemeMode = 'dark' | 'light'

export const THEME_KEY = 'encom-theme'
export const DEFAULT_THEME: ThemeMode = 'dark'

export const themeConfig = {
  dark: {
    label: 'Legacy Interface',
    value: 'dark',
    colors: {
      bgPrimary: '#0a0e27',
      bgSecondary: '#1a1f3a',
      accent: '#00f0ff',
      accentSoft: 'rgba(0, 240, 255, 0.2)',
      textPrimary: '#e6f7ff',
      textSecondary: '#a8d5ff',
      borderSubtle: 'rgba(0, 240, 255, 0.1)',
      gridColor: 'rgba(0, 240, 255, 0.05)',
    },
  },
  light: {
    label: 'Ares Interface',
    value: 'light',
    colors: {
      bgPrimary: '#f3f4f6',
      bgSecondary: '#e5e7eb',
      accent: '#FF003C',
      accentSoft: 'rgba(255, 0, 60, 0.1)',
      textPrimary: '#1f2937',
      textSecondary: '#6b7280',
      borderSubtle: 'rgba(255, 0, 60, 0.05)',
      gridColor: 'rgba(255, 0, 60, 0.02)',
    },
  },
}
