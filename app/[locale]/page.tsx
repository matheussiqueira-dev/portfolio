import type { Metadata } from "next";

import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";
import { getProjectsCard } from "@/data/projects-card";

import { resolveLocale, type LocaleParams } from "./_lib";
import HomeContent from "./home-content";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const isPt = locale === "pt-BR";

  return {
    title: isPt ? "Inicio" : "Home",
    description: isPt
      ? "Pagina inicial com secoes sobre, servicos, projetos e contato."
      : "Home page with about, services, projects and contact sections.",
  };
}

export default async function Home({ params }: Props) {
  const locale = await resolveLocale(params);
  const uiLocale = locale === "en" ? "en" : "pt";
  const site = locale === "pt-BR" ? sitePt : siteEn;
  const projects = getProjectsCard(uiLocale).slice(0, 6);

  return <HomeContent site={site} projects={projects} locale={uiLocale} />;
}
