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
 * Track custom events
 * @param action - Event action (e.g., 'view_resume', 'click_github')
 * @param category - Event category (e.g., 'navigation', 'engagement', 'outbound')
 * @param label - Optional event label (e.g., project slug, button location)
 */
export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};

/**
 * Track page views
 * @param url - Page URL path
 */
export const trackPageView = (url: string) => {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: url,
    event_category: "navigation",
  });
};

/**
 * Track scroll to sections
 * @param section - Section ID or name (e.g., 'about', 'projects', 'contact')
 */
export const trackScroll = (section: string) => {
  trackEvent("scroll_to_section", "engagement", section);
};

/**
 * Track file downloads
 * @param fileName - Name of the downloaded file
 */
export const trackDownload = (fileName: string) => {
  trackEvent("download", "engagement", fileName);
};

/**
 * Track CTA (Call-to-Action) clicks
 * @param action - CTA action (e.g., 'view_resume', 'contact')
 * @param location - Where the CTA is located (e.g., 'hero', 'footer', 'navbar')
 */
export const trackCTA = (action: string, location: string) => {
  trackEvent(action, "cta", location);
};

export { };
