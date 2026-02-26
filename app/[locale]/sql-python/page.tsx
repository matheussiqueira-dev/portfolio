import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "SQL Python" : "SQL Python",
    description:
      locale === "pt-BR" ? "Projetos SQL e Python" : "SQL and Python projects",
  };
}

export default async function SqlPythonPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>SQL & Python</h1>
      <p>
        {locale === "pt-BR"
          ? "Página em construção"
          : "Page under construction"}
      </p>
    </div>
  );
}

