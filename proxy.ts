import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, locales } from "./i18n/routing";

const CANONICAL_HOST = "www.matheussiqueira.dev";
const VERCEL_PREVIEW_SUFFIX = ".vercel.app";

const intlMiddleware = createMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix: "as-needed",
  localeDetection: false,
});

export function proxy(request: NextRequest) {
  const host = request.nextUrl.hostname.toLowerCase();
  const isLocal =
    host.startsWith("localhost") ||
    host.startsWith("127.") ||
    host.startsWith("0.0.0.0");
  const isPreview = host.endsWith(VERCEL_PREVIEW_SUFFIX);
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction || isLocal || isPreview) {
    return intlMiddleware(request);
  }

  const url = request.nextUrl.clone();
  const needsCanonicalHost = host !== CANONICAL_HOST;

  if (needsCanonicalHost) {
    url.protocol = "https";
    url.hostname = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
