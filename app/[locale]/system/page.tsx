import type { Metadata } from "next";

import DeploymentNodesList from "@/system/projects/DeploymentNodesList";

import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);

  return {
    title: locale === "en" ? "System Metrics" : "Metricas do Sistema",
    description:
      locale === "en"
        ? "System architecture and project metrics overview."
        : "Visao geral de arquitetura e metricas dos projetos.",
  };
}

export default async function SystemPage({ params }: Props) {
  await resolveLocale(params);

  return (
    <main className="section-inner py-12">
      <DeploymentNodesList />
    </main>
  );
}