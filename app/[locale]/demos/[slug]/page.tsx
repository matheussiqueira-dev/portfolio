import type { Metadata } from "next";

import { isValidLocale } from "@/core/i18n/routing";

type RouteParams = Promise<{ locale: string; slug: string }>;

type Props = {
  params: RouteParams;
};

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    title: isEn ? "Demo" : "Demo",
    description: isEn ? "Interactive demo" : "Demo interativa",
  };
}

export default async function DemosSlugPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return null;
  }

  return (
    <main className="layout-container page-shell">
      <section className="page-placeholder">
        <h1>
          {locale === "en" ? "Demo" : "Demo"} - {slug}
        </h1>
        <p>
          {locale === "en"
            ? "Page under construction"
            : "P\u00e1gina em constru\u00e7\u00e3o"}
        </p>
      </section>
    </main>
  );
}
