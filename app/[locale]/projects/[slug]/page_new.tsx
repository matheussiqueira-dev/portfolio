import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../../_lib";

type RouteParams = Promise<{ locale: string; slug: string }>;

type Props = {
  params: RouteParams;
};

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Project",
    description: "Project details",
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>
        {locale === "en" ? "Project" : "Projeto"} - {slug}
      </h1>
      <p>
        {locale === "en"
          ? "Page under construction"
          : "Página em construção"}
      </p>
    </div>
  );
}
