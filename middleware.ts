import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.matheussiqueira.dev";
const VERCEL_PREVIEW_SUFFIX = ".vercel.app";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (!host) {
    return NextResponse.next();
  }

  const isLocal =
    host.startsWith("localhost") ||
    host.startsWith("127.") ||
    host.startsWith("0.0.0.0");
  const isPreview = host.endsWith(VERCEL_PREVIEW_SUFFIX);
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction || isLocal || isPreview) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const needsHttps = url.protocol !== "https";
  const needsCanonicalHost = host !== CANONICAL_HOST;

  if (needsHttps || needsCanonicalHost) {
    url.protocol = "https";
    url.hostname = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
