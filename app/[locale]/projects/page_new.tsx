import type { Metadata } from "next";

import { resolveLocale, type LocaleParams } from "../_lib";

type SearchParams = {
  stack?: string;
};

type Props = {
  params: LocaleParams;
  searchParams?: SearchParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);

  return {
    title: locale === "en" ? "Projects" : "Projetos",
    description: locale === "en" ? "My projects and portfolio" : "Meus projetos e portf\u00f3lio",
  };
}

export default async function ProjectsPage({
  params,
  searchParams: _searchParams,
}: Props) {
  const locale = await resolveLocale(params);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{locale === "en" ? "Projects" : "Projetos"}</h1>
      <p>
        {locale === "en"
          ? "Page under construction"
          : "P\u00e1gina em constru\u00e7\u00e3o"}
      </p>
    </div>
  );
}