export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

const isEnglishPathname = (pathname: string) =>
  pathname === "/en" ||
  pathname.startsWith("/en/") ||
  pathname.startsWith("/resume/en");

export const getLocaleFromPath = (pathname: string): Locale =>
  isEnglishPathname(pathname) ? "en" : "pt";

export const stripLocalePrefix = (pathname: string) => {
  if (pathname.startsWith("/en/")) {
    return pathname.replace(/^\/en/, "");
  }
  if (pathname === "/en") {
    return "/";
  }
  if (pathname.startsWith("/resume/en")) {
    return "/resume";
  }
  return pathname;
};

const splitHref = (href: string) => {
  const [pathAndQuery = "", hash] = href.split("#");
  const [path, query] = pathAndQuery.split("?");
  return {
    path: path || "/",
    query: query ? `?${query}` : "",
    hash: hash ? `#${hash}` : "",
  };
};

export const localizeHref = (href: string, locale: Locale) => {
  const { path, query, hash } = splitHref(href);
  const basePath = stripLocalePrefix(path);

  if (locale === "pt") {
    return `${basePath}${query}${hash}`;
  }

  if (basePath === "/") {
    return `/en${query}${hash}`;
  }

  if (basePath === "/resume") {
    return `/resume/en${query}${hash}`;
  }

  return `/en${basePath}${query}${hash}`;
};
