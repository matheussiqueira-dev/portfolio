/**
 * @/core/theme
 * Centralized theme token access layer
 * 
 * Usage:
 *   import { themeTokens, lightModeColors } from '@/core/theme'
 */

export {
  themeTokens,
  lightModeColors,
  darkModeColors,
  getCSSVar,
  getColorValue,
  THEME_TOKENS_CONFIG,
} from './tokens';

export type { ThemeToken, ColorToken } from './tokens';
