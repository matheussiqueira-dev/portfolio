import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Acadêmico" : "Academic",
    description:
      locale === "pt-BR"
        ? "Educação e certificações"
        : "Education and certifications",
  };
}

export default async function AcademicPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const title = locale === "pt-BR" ? "Acadêmico" : "Academic";

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{title}</h1>
      <p>
        {locale === "pt-BR"
          ? "Página em construção"
          : "Page under construction"}
      </p>
    </div>
  );
}

