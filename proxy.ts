import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

const CANONICAL_HOST = "www.matheussiqueira.dev";
const VERCEL_PREVIEW_SUFFIX = ".vercel.app";

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const host = request.nextUrl.hostname.toLowerCase();
  const isLocal =
    host.startsWith("localhost") ||
    host.startsWith("127.") ||
    host.startsWith("0.0.0.0");
  const isPreview = host.endsWith(VERCEL_PREVIEW_SUFFIX);
  const isProduction = process.env.VERCEL_ENV === "production";

  if (isProduction && !isLocal && !isPreview && host !== CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.hostname = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

