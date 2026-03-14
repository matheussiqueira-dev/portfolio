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
    title: "SQL Python",
    description:
      locale === "pt-BR" ? "Projetos SQL e Python" : "SQL and Python projects",
  };
}

export default async function SqlPythonPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const uiLocale = locale === "en" ? "en" : "pt";
  const projects = getProjectsCard(uiLocale).filter((project) =>
    project.stack.some((item) =>
      ["sql", "python", "pandas", "airflow", "postgresql", "etl", "flask"].includes(
        item.toLowerCase()
      )
    )
  );

  return (
    <CapabilityRoutePage
      locale={uiLocale}
      eyebrow="SQL + Python"
      title={
        uiLocale === "pt"
          ? "Pipelines, automacao e engenharia de dados aplicada"
          : "Pipelines, automation, and applied data engineering"
      }
      description={
        uiLocale === "pt"
          ? "Modulo orientado a ETL, APIs, validacao e processamento orientado a operacao."
          : "A module focused on ETL, APIs, validation, and operation-oriented processing."
      }
      focusAreas={uiLocale === "pt" ? ["SQL", "Python", "ETL", "APIs"] : ["SQL", "Python", "ETL", "APIs"]}
      projects={projects}
    />
  );
}
