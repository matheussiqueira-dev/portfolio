/**
 * ENCOM Theme Constants
 * Centralized design tokens for dark/light modes
 */

import { ThemeColors } from './theme.types'

export const THEME_STORAGE_KEY = 'encom-theme-mode'

export const THEME_COLORS: Record<'dark' | 'light', ThemeColors> = {
  dark: {
    bgPrimary: '#0a0e27',
    bgSecondary: '#1a1f3a',
    borderSubtle: '#2d3654',
    textPrimary: '#e0e0e0',
    textSecondary: '#9ca3af',
    textTertiary: '#6b7280',
    accent: '#00f0ff',
    accentLight: '#00ffff',
    accentSoft: 'rgba(0, 240, 255, 0.2)',
    gridColor: 'rgba(0, 240, 255, 0.05)',
    glow: '0 0 10px rgba(0, 240, 255, 0.5)',
  },
  light: {
    bgPrimary: '#f3f4f6',
    bgSecondary: '#ffffff',
    borderSubtle: '#e5e7eb',
    textPrimary: '#1f2937',
    textSecondary: '#6b7280',
    textTertiary: '#9ca3af',
    accent: '#ff003c',
    accentLight: '#ff6b7a',
    accentSoft: 'rgba(255, 0, 60, 0.1)',
    gridColor: 'rgba(255, 0, 60, 0.02)',
    glow: '0 0 8px rgba(255, 0, 60, 0.3)',
  },
}

export const THEME_ATTRIBUTE = 'data-mode'
export const DEFAULT_THEME: 'dark' | 'light' = 'dark'
