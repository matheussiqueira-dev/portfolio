import type { Metadata } from "next";

import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);

  return {
    title: "Data Analyst",
    description:
      locale === "pt-BR"
        ? "Projetos e estudos de caso em an\u00e1lise de dados."
        : "Data analysis projects and case studies.",
  };
}

export default async function DataAnalystPage({ params }: Props) {
  const locale = await resolveLocale(params);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Data Analyst</h1>
      <p>
        {locale === "pt-BR"
          ? "P\u00e1gina em constru\u00e7\u00e3o"
          : "Page under construction"}
      </p>
    </div>
  );
}