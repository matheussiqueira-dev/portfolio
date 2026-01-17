import type { Metadata } from "next";
import Resume from "@/components/sections/Resume";

export const metadata: Metadata = {
  title: "Curriculo | Matheus Siqueira",
  description:
    "Curriculo de Matheus Siqueira, Analista de Dados Junior em BI, Power BI, SQL e Python, com experiencia em dados publicos, ETL e dashboards para decisao gerencial.",
  alternates: {
    languages: {
      "pt-BR": "/resume",
      "en-US": "/en/resume",
    },
  },
  openGraph: {
    title: "Curriculo | Matheus Siqueira",
    description:
      "Curriculo de Matheus Siqueira, Analista de Dados Junior em BI, Power BI, SQL e Python, com experiencia em dados publicos, ETL e dashboards para decisao gerencial.",
    url: "/resume",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Curriculo de Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculo | Matheus Siqueira",
    description:
      "Curriculo de Matheus Siqueira, Analista de Dados Junior em BI, Power BI, SQL e Python, com experiencia em dados publicos, ETL e dashboards para decisao gerencial.",
    images: ["/og.png"],
  },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <Resume />
    </main>
  );
}
