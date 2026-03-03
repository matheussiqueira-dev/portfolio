import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Contrate-me" : "Hire Me",
    description:
      locale === "pt-BR" ? "Contrate meus serviços" : "Hire my services",
  };
}

export default async function HirePage({ params }: Props) {
  const locale = await resolveLocale(params);
  return (
    <main className="layout-container page-shell">
      <section className="page-placeholder">
        <h1>{locale === "pt-BR" ? "Contrate-me" : "Hire Me"}</h1>
        <p>
          {locale === "pt-BR"
            ? "Página em construção"
            : "Page under construction"}
        </p>
      </section>
    </main>
  );
}
