import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://www.matheussiqueira.dev",
    sitemap: "https://www.matheussiqueira.dev/sitemap.xml",
  };
}
