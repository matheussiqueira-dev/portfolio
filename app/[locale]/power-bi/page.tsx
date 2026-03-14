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
    title: "Power BI",
    description:
      locale === "pt-BR" ? "Projetos Power BI" : "Power BI projects",
  };
}

export default async function PowerBiPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const uiLocale = locale === "en" ? "en" : "pt";
  const projects = getProjectsCard(uiLocale).filter((project) =>
    project.stack.some((item) =>
      ["power bi", "dax", "power query", "excel", "data analysis"].includes(
        item.toLowerCase()
      )
    )
  );

  return (
    <CapabilityRoutePage
      locale={uiLocale}
      eyebrow="Power BI"
      title={
        uiLocale === "pt"
          ? "Dashboards executivos e modelagem orientada a leitura rapida"
          : "Executive dashboards and modeling built for rapid reading"
      }
      description={
        uiLocale === "pt"
          ? "Interface dedicada a ativos de BI, storytelling e monitoramento de metas."
          : "A dedicated interface for BI assets, storytelling, and target monitoring."
      }
      focusAreas={uiLocale === "pt" ? ["Power BI", "DAX", "Power Query", "Storytelling"] : ["Power BI", "DAX", "Power Query", "Storytelling"]}
      projects={projects}
    />
  );
}
