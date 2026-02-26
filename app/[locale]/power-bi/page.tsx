import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Power BI" : "Power BI",
    description:
      locale === "pt-BR" ? "Projetos Power BI" : "Power BI projects",
  };
}

export default async function PowerBiPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Power BI</h1>
      <p>
        {locale === "pt-BR"
          ? "Página em construção"
          : "Page under construction"}
      </p>
    </div>
  );
}

