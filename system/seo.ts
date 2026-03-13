import type { Metadata } from "next";

import { canonicalOrigin, siteConfig } from "@/core/config";
import type { ProjectCaseStudy, RouteKey, SiteLocale } from "@/core/types";
import { getAlternateLocale, getProjectRoute, getRoute } from "@/system/i18n";

type BreadcrumbItem = {
  name: string;
  item: string;
};

type PageMetadataOptions = {
  locale: SiteLocale;
  route: RouteKey;
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${canonicalOrigin}${normalized}`;
}

export function buildPageMetadata({
  locale,
  route,
  title,
  description,
  keywords = [],
  image = siteConfig.ogImage,
  type = "website",
}: PageMetadataOptions): Metadata {
  const canonicalPath = getRoute(route, locale);
  const alternateLocale = getAlternateLocale(locale);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      languages: {
        "pt-BR": absoluteUrl(getRoute(route, "pt-BR")),
        en: absoluteUrl(getRoute(route, "en")),
        "x-default": absoluteUrl(getRoute(route, "pt-BR")),
      },
    },
    openGraph: {
      type,
      locale: locale === "en" ? "en_US" : "pt_BR",
      alternateLocale: alternateLocale === "en" ? "en_US" : "pt_BR",
      title,
      description,
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function buildProjectMetadata(locale: SiteLocale, project: ProjectCaseStudy): Metadata {
  const canonicalPath = getProjectRoute(locale, project.slug);
  const alternateLocale = getAlternateLocale(locale);

  return {
    title: project.seo.title[locale],
    description: project.seo.description[locale],
    keywords: project.seo.keywords,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      languages: {
        "pt-BR": absoluteUrl(getProjectRoute("pt-BR", project.slug)),
        en: absoluteUrl(getProjectRoute("en", project.slug)),
        "x-default": absoluteUrl(getProjectRoute("pt-BR", project.slug)),
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "en" ? "en_US" : "pt_BR",
      alternateLocale: alternateLocale === "en" ? "en_US" : "pt_BR",
      title: project.seo.title[locale],
      description: project.seo.description[locale],
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      images: [
        {
          url: project.seo.ogImage,
          width: 1200,
          height: 630,
          alt: project.title[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title[locale],
      description: project.seo.description[locale],
      images: [project.seo.ogImage],
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}/#website`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description:
      "Technical portfolio focused on Data Analytics, Business Intelligence, Software Development, and AI solutions.",
    inLanguage: ["pt-BR", "en"],
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/")}/#person`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: siteConfig.jobTitles["en"],
    description: siteConfig.jobTitles["pt-BR"],
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: absoluteUrl("/profile.webp"),
    sameAs: [...siteConfig.sameAs],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "BR",
    },
    knowsAbout: [...siteConfig.recruiterFocus],
  };
}

export function buildWebPageSchema({
  locale,
  path,
  title,
  description,
}: {
  locale: SiteLocale;
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: locale,
    isPartOf: {
      "@id": `${absoluteUrl("/")}/#website`,
    },
    about: {
      "@id": `${absoluteUrl("/")}/#person`,
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}

export function buildProjectSchemas(
  locale: SiteLocale,
  project: ProjectCaseStudy,
  breadcrumbItems: BreadcrumbItem[]
) {
  const projectUrl = getProjectRoute(locale, project.slug);

  return [
    buildWebPageSchema({
      locale,
      path: projectUrl,
      title: project.seo.title[locale],
      description: project.seo.description[locale],
    }),
    {
      "@context": "https://schema.org",
      "@type": "Project",
      name: project.title[locale],
      description: project.shortDescription[locale],
      url: absoluteUrl(projectUrl),
      image: absoluteUrl(project.heroImage),
      creator: {
        "@id": `${absoluteUrl("/")}/#person`,
      },
      keywords: project.recruiterKeywords.join(", "),
      about: project.githubKeywords,
      inLanguage: locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: project.title[locale],
      description: project.repositorySummary[locale],
      codeRepository: project.githubUrl,
      programmingLanguage: project.stack,
      runtimePlatform: project.category,
      author: {
        "@id": `${absoluteUrl("/")}/#person`,
      },
      url: absoluteUrl(projectUrl),
      keywords: project.githubKeywords.join(", "),
    },
    buildBreadcrumbSchema(breadcrumbItems),
  ];
}
