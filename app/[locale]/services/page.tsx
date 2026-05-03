import type { Metadata } from "next";

import { getServiceExperience } from "@/data/services";

import { resolveLocale, type LocaleParams } from "../_lib";
import ServicesContent from "./services-content";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const isPt = locale === "pt-BR";

  return {
    title: isPt ? "Serviços" : "Services",
    description: isPt
      ? "Serviços de engenharia de software, dados, BI, automação, performance e arquitetura digital estratégica."
      : "Services across software engineering, data, BI, automation, performance and strategic digital architecture.",
  };
}

export default async function ServicesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const uiLocale = locale === "en" ? "en" : "pt";
  const services = getServiceExperience(uiLocale);

  return <ServicesContent services={services} locale={uiLocale} />;
}
