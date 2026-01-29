"use client";

import { useEffect, useState } from "react";

/**
 * Common breakpoints used in the application
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Custom hook for responsive media queries
 * 
 * Provides a clean way to handle responsive behavior in React components
 * without cluttering CSS or using inline styles.
 * 
 * @param query - CSS media query string
 * @returns Boolean indicating if the media query matches
 * 
 * @example
 * ```tsx
 * function ResponsiveComponent() {
 *   const isMobile = useMediaQuery('(max-width: 768px)');
 *   const isDesktop = useMediaQuery('(min-width: 1024px)');
 *   const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 *   
 *   return (
 *     <div>
 *       {isMobile ? <MobileNav /> : <DesktopNav />}
 *       {!prefersReducedMotion && <AnimatedBackground />}
 *     </div>
 *   );
 * }
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);

    // Define listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
    
    // Legacy browsers - addListener/removeListener are deprecated but needed for older browsers
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, [query]);

  // Return false during SSR to avoid hydration mismatch
  if (!mounted) {
    return false;
  }

  return matches;
}

/**
 * Hook for checking if viewport is mobile size
 * 
 * @returns True if viewport width is below 768px
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMobile = useIsMobile();
 *   
 *   return isMobile ? <MobileView /> : <DesktopView />;
 * }
 * ```
 */
export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`);
}

/**
 * Hook for checking if viewport is tablet size
 * 
 * @returns True if viewport width is between 768px and 1023px
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isTablet = useIsTablet();
 *   
 *   return isTablet && <TabletOptimizedView />;
 * }
 * ```
 */
export function useIsTablet(): boolean {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`
  );
}

/**
 * Hook for checking if viewport is desktop size
 * 
 * @returns True if viewport width is 1024px or above
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isDesktop = useIsDesktop();
 *   
 *   return isDesktop && <DesktopFeatures />;
 * }
 * ```
 */
export function useIsDesktop(): boolean {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
}

/**
 * Hook for checking user's motion preferences
 * 
 * @returns True if user prefers reduced motion
 * 
 * @example
 * ```tsx
 * function AnimatedComponent() {
 *   const prefersReducedMotion = usePrefersReducedMotion();
 *   
 *   return (
 *     <motion.div
 *       animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
 *     >
 *       Content
 *     </motion.div>
 *   );
 * }
 * ```
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * Hook for checking user's color scheme preference
 * 
 * @returns True if user prefers dark mode
 * 
 * @example
 * ```tsx
 * function ThemedComponent() {
 *   const prefersDark = usePrefersDarkMode();
 *   
 *   return (
 *     <div className={prefersDark ? 'dark-theme' : 'light-theme'}>
 *       Content
 *     </div>
 *   );
 * }
 * ```
 */
export function usePrefersDarkMode(): boolean {
  return useMediaQuery("(prefers-color-scheme: dark)");
}
