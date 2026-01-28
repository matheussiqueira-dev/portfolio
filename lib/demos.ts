type DemoPathOptions = {
  locale: "pt" | "en";
  projectSlug: string;
  demoPath?: string;
};

const normalizePath = (path: string) =>
  path.startsWith("/") ? path : `/${path}`;

const stripEnPrefix = (path: string) =>
  path.startsWith("/en/") ? path.replace(/^\/en/, "") : path;

const ensureDemosPath = (path: string, projectSlug: string) => {
  const normalized = normalizePath(path);
  const fallback = `/demos/${projectSlug}`;

  if (!normalized.includes("/demos/")) {
    return fallback;
  }

  return normalized;
};

export const buildInternalDemoPath = ({
  locale,
  projectSlug,
  demoPath,
}: DemoPathOptions) => {
  const fallback = `/demos/${projectSlug}`;
  const candidate = demoPath?.trim() ? demoPath.trim() : fallback;
  const safePath = ensureDemosPath(candidate, projectSlug);

  if (locale === "en") {
    return safePath.startsWith("/en/") ? safePath : `/en${safePath}`;
  }

  return stripEnPrefix(safePath);
};
