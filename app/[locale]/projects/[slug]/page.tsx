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
    title: isEn ? "Project" : "Projeto",
    description: isEn ? "Project details" : "Detalhes do projeto",
  };
}

export default async function ProjectsSlugPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return null;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>
        {locale === "en" ? "Project" : "Projeto"} - {slug}
      </h1>
      <p>
        {locale === "en"
          ? "Page under construction"
          : "P\u00e1gina em constru\u00e7\u00e3o"}
      </p>
    </div>
  );
}