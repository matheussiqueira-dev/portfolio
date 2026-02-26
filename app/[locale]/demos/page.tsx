import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Demos" : "Demos",
    description:
      locale === "pt-BR" ? "Projetos e demos interativas" : "Interactive projects and demos",
  };
}

export default async function DemosPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Demos</h1>
      <p>
        {locale === "pt-BR"
          ? "Página em construção"
          : "Page under construction"}
      </p>
    </div>
  );
}

