import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Certificados" : "Certificates",
    description:
      locale === "pt-BR" ? "Meus certificados" : "My certificates",
  };
}

export default async function CertificatesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{locale === "pt-BR" ? "Certificados" : "Certificates"}</h1>
      <p>
        {locale === "pt-BR"
          ? "Página em construção"
          : "Page under construction"}
      </p>
    </div>
  );
}

