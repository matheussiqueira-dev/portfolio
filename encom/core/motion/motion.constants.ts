/**
 * ENCOM Motion Constants
 * Centralized animation configuration
 * Used across UI components for consistency
 */

export const MOTION = {
  // Durations (milliseconds)
  duration: {
    instant: 100,
    fast: 200,
    normal: 300,
    slow: 600,
    verySlow: 1000,
  },

  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Delays
  delay: {
    none: 0,
    short: 100,
    medium: 200,
    long: 400,
  },

  // Stagger (for sequential animations)
  stagger: {
    children: 100,
    items: 50,
  },
} as const

export const ANIMATION_CLASSES = {
  fadeIn: 'animate-fade-in',
  fadeOut: 'animate-fade-out',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  scaleIn: 'animate-scale-in',
  pulse: 'animate-pulse',
} as const
