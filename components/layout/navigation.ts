import type { SiteContent } from "@/data/site.types";

export type NavItem = {
  id: string;
  label: string;
  href: string;
  type: "anchor" | "page";
};

type NavConfigItem = {
  id: string;
  labelKey: keyof SiteContent["nav"];
  type: "anchor" | "page";
  ptHref: string;
  enHref: string;
};

const NAV_CONFIG: NavConfigItem[] = [
  { id: "home", labelKey: "home", type: "anchor", ptHref: "/#home", enHref: "/en#home" },
  { id: "about", labelKey: "about", type: "anchor", ptHref: "/#about", enHref: "/en#about" },
  {
    id: "services",
    labelKey: "services",
    type: "anchor",
    ptHref: "/#services",
    enHref: "/en#services",
  },
  {
    id: "projects",
    labelKey: "projects",
    type: "anchor",
    ptHref: "/#projects",
    enHref: "/en#projects",
  },
  {
    id: "resume",
    labelKey: "resume",
    type: "page",
    ptHref: "/resume",
    enHref: "/en/resume",
  },
  {
    id: "academic",
    labelKey: "academic",
    type: "page",
    ptHref: "/academico",
    enHref: "/en/academic",
  },
  {
    id: "certificates",
    labelKey: "certificates",
    type: "page",
    ptHref: "/certificates",
    enHref: "/en/certificates",
  },
  { id: "hire", labelKey: "hire", type: "page", ptHref: "/contrate", enHref: "/en/hire" },
  {
    id: "contact",
    labelKey: "contact",
    type: "anchor",
    ptHref: "/#contact",
    enHref: "/en#contact",
  },
];

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
};

export const buildNavItems = (isEn: boolean, labels: SiteContent["nav"]): NavItem[] =>
  NAV_CONFIG.map((item) => ({
    id: item.id,
    label: labels[item.labelKey],
    href: isEn ? item.enHref : item.ptHref,
    type: item.type,
  }));

export const getActiveNavId = (
  items: NavItem[],
  pathname: string,
  hash: string
): string | null => {
  const normalizedPath = normalizePath(pathname);
  const normalizedHash = hash ? (hash.startsWith("#") ? hash : `#${hash}`) : "";

  if (normalizedHash && (normalizedPath === "/" || normalizedPath === "/en")) {
    const matchByHash = items.find((item) => {
      if (item.type !== "anchor") {
        return false;
      }
      const itemHash = item.href.split("#")[1] ?? "";
      return `#${itemHash}` === normalizedHash;
    });
    if (matchByHash) {
      return matchByHash.id;
    }
  }

  const matchByPath = items.find((item) => {
    if (item.type !== "page") {
      return false;
    }
    const itemPath = normalizePath(item.href);
    return normalizedPath === itemPath || normalizedPath.startsWith(`${itemPath}/`);
  });

  if (matchByPath) {
    return matchByPath.id;
  }

  if ((normalizedPath === "/" || normalizedPath === "/en") && items.some((item) => item.id === "home")) {
    return "home";
  }

  return null;
};
