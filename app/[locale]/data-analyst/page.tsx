import type { Metadata } from "next";

import { getProjectsCard } from "@/data/projects-card";
import CapabilityRoutePage from "@/ui/components/pages/CapabilityRoutePage";

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
        ? "Projetos e estudos de caso em analise de dados."
        : "Data analysis projects and case studies.",
  };
}

export default async function DataAnalystPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const uiLocale = locale === "en" ? "en" : "pt";
  const projects = getProjectsCard(uiLocale).filter((project) =>
    project.stack.some((item) =>
      ["power bi", "sql", "python", "analytics", "data", "dax", "excel"].includes(
        item.toLowerCase()
      )
    )
  );

  return (
    <CapabilityRoutePage
      locale={uiLocale}
      eyebrow={uiLocale === "pt" ? "Data Analyst" : "Data Analyst"}
      title={
        uiLocale === "pt"
          ? "Camada analitica para KPIs, modelagem e decisao"
          : "Analytical layer for KPIs, modeling, and decision systems"
      }
      description={
        uiLocale === "pt"
          ? "Selecao de ativos orientados a modelagem, dashboards e pipelines analiticos."
          : "Selected assets focused on modeling, dashboards, and analytical pipelines."
      }
      focusAreas={uiLocale === "pt" ? ["SQL", "Python", "Power BI", "KPIs"] : ["SQL", "Python", "Power BI", "KPIs"]}
      projects={projects}
    />
  );
}
