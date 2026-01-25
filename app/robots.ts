import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const base = baseUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",
          "/*favicon*",
          "/*.woff",
          "/*.woff2",
          "/*.ttf",
          "/*.otf",
          "/*.map",
        ],
      },
    ],
    host: base,
    sitemap: `${base}/sitemap.xml`,
  };
}
