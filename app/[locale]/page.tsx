import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "./_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Home" : "Home",
    description: locale === "pt-BR" ? "Página inicial" : "Home page",
  };
}

export default async function Home({ params }: Props) {
  const locale = await resolveLocale(params);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{locale === "pt-BR" ? "Bem-vindo" : "Welcome"}</h1>
      <p>
        {locale === "pt-BR"
          ? "Página em construção"
          : "Page under construction"}
      </p>
    </div>
  );
}

