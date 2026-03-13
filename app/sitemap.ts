import type { MetadataRoute } from "next";

import { siteConfig } from "@/core/config";
import { allProjects } from "@/core/projects";
import { getProjectRoute, getRoute } from "@/system/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticUrls = [
    getRoute("home", "pt-BR"),
    getRoute("home", "en"),
    getRoute("about", "pt-BR"),
    getRoute("about", "en"),
    getRoute("projects", "pt-BR"),
    getRoute("projects", "en"),
    getRoute("academic", "pt-BR"),
    getRoute("academic", "en"),
    getRoute("certificates", "pt-BR"),
    getRoute("certificates", "en"),
    getRoute("hire", "pt-BR"),
    getRoute("hire", "en"),
    getRoute("contact", "pt-BR"),
    getRoute("contact", "en"),
  ];

  return [
    ...staticUrls.map((path, index) => ({
      url: `${siteConfig.siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: index < 2 ? 1 : 0.8,
    })),
    ...allProjects.flatMap((project) => [
      {
        url: `${siteConfig.siteUrl}${getProjectRoute("pt-BR", project.slug)}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: project.featured ? 0.9 : 0.7,
      },
      {
        url: `${siteConfig.siteUrl}${getProjectRoute("en", project.slug)}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: project.featured ? 0.85 : 0.65,
      },
    ]),
  ];
}
