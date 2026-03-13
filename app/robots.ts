import type { MetadataRoute } from "next";

import { siteConfig } from "@/core/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/en",
          "/sobre",
          "/projetos",
          "/academico",
          "/certificados",
          "/contrate",
          "/contato",
          "/en/about",
          "/en/projects",
          "/en/academic",
          "/en/certificates",
          "/en/hire",
          "/en/contact",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/monitoring",
          "/system",
          "/en/system",
          "/sentry-example-page",
          "/matheussiqueira-dev",
        ],
      },
    ],
    host: siteConfig.siteUrl,
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
