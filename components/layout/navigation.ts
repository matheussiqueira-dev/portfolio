import type { SiteContent } from "@/data/site.types";

type HashAnchor = "home" | "about" | "services" | "projects" | "contact";
type PagePath = "/resume" | "/academic" | "/certificates" | "/hire";

export type NavItem = {
  id: string;
  label: string;
  type: "anchor" | "page";
  pathname: "/" | PagePath;
  hash?: HashAnchor;
};

type NavConfigItem = {
  id: string;
  labelKey: keyof SiteContent["nav"];
  type: "anchor" | "page";
  pathname: "/" | PagePath;
  hash?: HashAnchor;
};

const NAV_CONFIG: NavConfigItem[] = [
  { id: "home", labelKey: "home", type: "anchor", pathname: "/", hash: "home" },
  { id: "about", labelKey: "about", type: "anchor", pathname: "/", hash: "about" },
  {
    id: "services",
    labelKey: "services",
    type: "anchor",
    pathname: "/",
    hash: "services",
  },
  {
    id: "projects",
    labelKey: "projects",
    type: "anchor",
    pathname: "/",
    hash: "projects",
  },
  {
    id: "resume",
    labelKey: "resume",
    type: "page",
    pathname: "/resume",
  },
  {
    id: "academic",
    labelKey: "academic",
    type: "page",
    pathname: "/academic",
  },
  {
    id: "certificates",
    labelKey: "certificates",
    type: "page",
    pathname: "/certificates",
  },
  { id: "hire", labelKey: "hire", type: "page", pathname: "/hire" },
  {
    id: "contact",
    labelKey: "contact",
    type: "anchor",
    pathname: "/",
    hash: "contact",
  },
];

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
};

export const buildNavItems = (labels: SiteContent["nav"]): NavItem[] =>
  NAV_CONFIG.map((item) => ({
    id: item.id,
    label: labels[item.labelKey],
    type: item.type,
    pathname: item.pathname,
    hash: item.hash,
  }));

export const getActiveNavId = (
  items: NavItem[],
  pathname: string,
  hash: string
): string | null => {
  const normalizedPath = normalizePath(pathname);
  const normalizedHash = hash ? (hash.startsWith("#") ? hash : `#${hash}`) : "";

  if (normalizedHash && normalizedPath === "/") {
    const matchByHash = items.find((item) => {
      if (item.type !== "anchor") {
        return false;
      }
      return `#${item.hash}` === normalizedHash;
    });
    if (matchByHash) {
      return matchByHash.id;
    }
  }

  const matchByPath = items.find((item) => {
    if (item.type !== "page") {
      return false;
    }
    const itemPath = normalizePath(item.pathname);
    return normalizedPath === itemPath || normalizedPath.startsWith(`${itemPath}/`);
  });

  if (matchByPath) {
    return matchByPath.id;
  }

  if (normalizedPath === "/" && items.some((item) => item.id === "home")) {
    return "home";
  }

  return null;
};
