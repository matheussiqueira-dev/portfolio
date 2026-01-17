type GtagEventParams = {
  event_category: string;
  event_label?: string;
};

type Gtag = (
  command: "event",
  action: string,
  params?: GtagEventParams
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

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

export {};
