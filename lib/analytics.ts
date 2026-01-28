import { ANALYTICS_EVENTS, ANALYTICS_CATEGORIES } from "./constants";

// ============================================================================
// TYPES
// ============================================================================

type GtagEventParams = {
  event_category: string;
  event_label?: string;
  value?: number;
  page_path?: string;
};

type Gtag = (
  command: "event" | "config",
  action: string,
  params?: GtagEventParams
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/**
 * Type-safe event actions from constants
 */
export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

/**
 * Type-safe event categories from constants
 */
export type AnalyticsCategory =
  (typeof ANALYTICS_CATEGORIES)[keyof typeof ANALYTICS_CATEGORIES];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Check if analytics is available and properly configured
 * @returns True if gtag is available, false otherwise
 */
const isAnalyticsAvailable = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  if (typeof window.gtag !== "function") {
    if (process.env.NODE_ENV === "development") {
      console.warn("Google Analytics not loaded. Event tracking disabled.");
    }
    return false;
  }

  return true;
};

/**
 * Track custom events with type safety and validation
 * 
 * @param action - Event action (use ANALYTICS_EVENTS constants)
 * @param category - Event category (use ANALYTICS_CATEGORIES constants)
 * @param label - Optional event label (e.g., project slug, button location)
 * @param value - Optional numeric value associated with the event
 * 
 * @example
 * ```typescript
 * trackEvent('view_resume', 'engagement', 'hero-section');
 * trackEvent('click_github', 'outbound', 'project-card');
 * ```
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!isAnalyticsAvailable()) {
    return;
  }

  try {
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Failed to track event:", error);
    }
  }
};

/**
 * Track page views with error handling
 * 
 * @param url - Page URL path
 * 
 * @example
 * ```typescript
 * trackPageView('/projects');
 * trackPageView('/en/resume');
 * ```
 */
export const trackPageView = (url: string) => {
  if (!isAnalyticsAvailable()) {
    return;
  }

  try {
    window.gtag?.("event", "page_view", {
      page_path: url,
      event_category: ANALYTICS_CATEGORIES.NAVIGATION,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Failed to track page view:", error);
    }
  }
};

/**
 * Track scroll to sections
 * 
 * @param section - Section ID or name (e.g., 'about', 'projects', 'contact')
 * 
 * @example
 * ```typescript
 * trackScroll('projects');
 * trackScroll('about');
 * ```
 */
export const trackScroll = (section: string) => {
  trackEvent("scroll_to_section", ANALYTICS_CATEGORIES.ENGAGEMENT, section);
};

/**
 * Track file downloads
 * 
 * @param fileName - Name of the downloaded file
 * @param fileType - Optional file type/extension
 * 
 * @example
 * ```typescript
 * trackDownload('resume.pdf', 'pdf');
 * trackDownload('certificate.pdf');
 * ```
 */
export const trackDownload = (fileName: string, fileType?: string) => {
  const label = fileType ? `${fileName} (${fileType})` : fileName;
  trackEvent("download", ANALYTICS_CATEGORIES.ENGAGEMENT, label);
};

/**
 * Track CTA (Call-to-Action) clicks with better organization
 * 
 * @param action - CTA action (e.g., 'view_resume', 'contact')
 * @param location - Where the CTA is located (e.g., 'hero', 'footer', 'navbar')
 * 
 * @example
 * ```typescript
 * trackCTA('view_resume', 'hero');
 * trackCTA('contact', 'footer');
 * ```
 */
export const trackCTA = (action: string, location: string) => {
  trackEvent(action, ANALYTICS_CATEGORIES.CONVERSION, location);
};

/**
 * Track external link clicks
 * 
 * @param destination - Destination URL or identifier
 * @param label - Optional additional context
 * 
 * @example
 * ```typescript
 * trackOutboundLink('github', 'project-repo');
 * trackOutboundLink('linkedin', 'profile');
 * ```
 */
export const trackOutboundLink = (destination: string, label?: string) => {
  trackEvent(`click_${destination}`, ANALYTICS_CATEGORIES.OUTBOUND, label);
};

export { };
