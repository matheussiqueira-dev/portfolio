/**
 * ENCOM Theme Engine
 * Centralized theme management without external dependencies
 * Handles persistence, DOM updates, and mode switching
 * 
 * @architecture Core Layer - No JSX, pure logic
 */

import { ThemeMode, ThemeEngine } from './theme.types'
import { THEME_STORAGE_KEY, THEME_ATTRIBUTE, DEFAULT_THEME } from './theme.constants'

class ThemeEngineImpl implements ThemeEngine {
  private currentMode: ThemeMode = DEFAULT_THEME

  /**
   * Get current theme mode
   */
  getMode(): ThemeMode {
    return this.currentMode
  }

  /**
   * Set theme mode and persist
   */
  setMode(mode: ThemeMode): void {
    this.currentMode = mode
    this.applyToDOM(mode)
    this.persistToStorage(mode)
  }

  /**
   * Toggle between dark and light modes
   */
  toggleMode(): void {
    const newMode = this.currentMode === 'dark' ? 'light' : 'dark'
    this.setMode(newMode)
  }

  /**
   * Initialize theme from storage or system preference
   * Should be called once on app mount
   */
  initialize(): void {
    if (typeof window === 'undefined') return

    // Try localStorage first
    const stored = this.getFromStorage()
    if (stored) {
      this.currentMode = stored
      this.applyToDOM(stored)
      return
    }

    // Fallback to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const systemMode = prefersDark ? 'dark' : 'light'
    this.setMode(systemMode)
  }

  /**
   * Apply theme to DOM by setting data attribute on html element
   * @private
   */
  private applyToDOM(mode: ThemeMode): void {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute(THEME_ATTRIBUTE, mode)
  }

  /**
   * Persist theme preference to localStorage
   * @private
   */
  private persistToStorage(mode: ThemeMode): void {
    if (typeof localStorage === 'undefined') return
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode)
    } catch (error) {
      console.warn('Failed to persist theme:', error)
    }
  }

  /**
   * Retrieve theme from localStorage
   * @private
   */
  private getFromStorage(): ThemeMode | null {
    if (typeof localStorage === 'undefined') return null
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY)
      if (stored === 'dark' || stored === 'light') {
        return stored
      }
    } catch (error) {
      console.warn('Failed to retrieve theme:', error)
    }
    return null
  }
}

// Singleton instance
export const themeEngine = new ThemeEngineImpl()
