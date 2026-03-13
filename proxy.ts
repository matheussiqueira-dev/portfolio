import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.matheussiqueira.dev";
const VERCEL_PREVIEW_SUFFIX = ".vercel.app";
const INTERNAL_LOCALE_PREFIX = /^\/(pt-BR|en)(\/|$)/;

const defaultLocaleStaticRewrites: Record<string, string> = {
  "/sobre": "/pt-BR/about",
  "/academico": "/pt-BR/academic",
  "/contrate": "/pt-BR/hire",
  "/projetos": "/pt-BR/projects",
  "/certificados": "/pt-BR/certificates",
  "/contato": "/pt-BR/contact",
  "/resume": "/pt-BR/resume",
  "/data-analyst": "/pt-BR/data-analyst",
  "/power-bi": "/pt-BR/power-bi",
  "/sql-python": "/pt-BR/sql-python",
  "/demos": "/pt-BR/demos",
  "/system": "/pt-BR/system",
};

function rewritePath(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.rewrite(url);
}

export function proxy(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;
  const host = hostname.toLowerCase();
  const isLocal =
    host.startsWith("localhost") || host.startsWith("127.") || host.startsWith("0.0.0.0");
  const isPreview = host.endsWith(VERCEL_PREVIEW_SUFFIX);
  const isProduction = process.env.VERCEL_ENV === "production";

  if (isProduction && !isLocal && !isPreview && host !== CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.hostname = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/") {
    return NextResponse.next();
  }

  if (INTERNAL_LOCALE_PREFIX.test(pathname)) {
    return NextResponse.next();
  }

  const projectMatch = pathname.match(/^\/projetos\/([^/]+)$/);
  if (projectMatch?.[1]) {
    return rewritePath(request, `/pt-BR/projects/${projectMatch[1]}`);
  }

  const demoMatch = pathname.match(/^\/demos\/([^/]+)$/);
  if (demoMatch?.[1]) {
    return rewritePath(request, `/pt-BR/demos/${demoMatch[1]}`);
  }

  const staticRewrite = defaultLocaleStaticRewrites[pathname];
  if (staticRewrite) {
    return rewritePath(request, staticRewrite);
  }

  return rewritePath(request, `/pt-BR${pathname}`);
}

export const config = {
  matcher: ["/((?!api|_next|monitoring|.*\\..*).*)"],
};
