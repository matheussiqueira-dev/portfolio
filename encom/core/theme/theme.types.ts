/**
 * ENCOM Theme Types
 * Enterprise-grade theme system type definitions
 */

export type ThemeMode = 'dark' | 'light'

export interface ThemeColors {
  bgPrimary: string
  bgSecondary: string
  borderSubtle: string
  textPrimary: string
  textSecondary: string
  textTertiary: string
  accent: string
  accentLight: string
  accentSoft: string
  gridColor: string
  glow: string
}

export interface Theme {
  mode: ThemeMode
  colors: ThemeColors
}

export interface ThemeEngine {
  getMode: () => ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
  initialize: () => void
}
