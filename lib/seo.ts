export const baseUrl = "https://www.matheussiqueira.dev";
export const siteName = "Matheus Siqueira";
export const sameAsLinks = [
  "https://www.linkedin.com/in/matheussiqueira-dev/",
  "https://github.com/matheussiqueira-dev",
];

const normalizedBaseUrl = baseUrl.replace(/\/$/, "");

export const toAbsoluteUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBaseUrl}${normalizedPath}`;
};

type AlternatesConfig = {
  pt: string;
  en: string;
  canonical?: string;
  xDefault?: string;
};

export const buildAlternates = ({
  pt,
  en,
  canonical,
  xDefault,
}: AlternatesConfig) => ({
  canonical: toAbsoluteUrl(canonical ?? pt),
  languages: {
    "pt-br": toAbsoluteUrl(pt),
    en: toAbsoluteUrl(en),
    "x-default": toAbsoluteUrl(xDefault ?? pt),
  },
});
