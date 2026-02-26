import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Data Analyst" : "Data Analyst",
    description:
      locale === "pt-BR" ? "Data analyst projects" : "Data analyst projects",
  };
}

export default async function DataAnalystPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Data Analyst</h1>
      <p>
        {locale === "pt-BR"
          ? "Página em construção"
          : "Page under construction"}
      </p>
    </div>
  );
}
