export const demoSlugs = ["chatbot-ia-api"] as const;

export type DemoSlug = (typeof demoSlugs)[number];

export const isDemoSlug = (slug: string): slug is DemoSlug =>
  demoSlugs.includes(slug as DemoSlug);
