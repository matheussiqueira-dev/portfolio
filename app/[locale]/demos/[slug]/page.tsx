import type { Metadata } from "next";
import { notFound } from "next/navigation";

import DemosSlugEn, {
  generateMetadata as generateEnMetadata,
  generateStaticParams as generateEnStaticParams,
} from "@/i18n-pages/en/demos/[slug]/page";
import DemosSlugPt, {
  generateMetadata as generatePtMetadata,
  generateStaticParams as generatePtStaticParams,
} from "@/i18n-pages/pt/demos/[slug]/page";
import { isValidLocale } from "@/i18n/routing";

type RouteParams = Promise<{ locale: string; slug: string }>;

type Props = {
  params: RouteParams;
};

export function generateStaticParams() {
  const pt = generatePtStaticParams().map(({ slug }) => ({
    locale: "pt-BR" as const,
    slug,
  }));
  const en = generateEnStaticParams().map(({ slug }) => ({
    locale: "en" as const,
    slug,
  }));

  return [...pt, ...en];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  if (locale === "en") {
    return generateEnMetadata({ params: { slug } });
  }

  return generatePtMetadata({ params: { slug } });
}

export default async function DemosSlugPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  if (locale === "en") {
    return <DemosSlugEn params={{ slug }} />;
  }

  return <DemosSlugPt params={{ slug }} />;
}

