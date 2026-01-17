type TrackParams = Record<string, string | number | boolean | null | undefined>;

type Gtag = (command: "event", eventName: string, params?: TrackParams) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export const track = (eventName: string, params?: TrackParams) => {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
};

export {};
