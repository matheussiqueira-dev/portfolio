import type { Metadata } from "next";
import Resume from "../../components/sections/Resume";

export const metadata: Metadata = {
  title: "Currículo | Matheus Siqueira",
  description:
    "Currículo profissional de Matheus Siqueira, com foco em desenvolvimento web, dados e tecnologia.",
  openGraph: {
    title: "Currículo | Matheus Siqueira",
    description:
      "Currículo profissional de Matheus Siqueira, com foco em desenvolvimento web, dados e tecnologia.",
    url: "/resume",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Currículo de Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Currículo | Matheus Siqueira",
    description:
      "Currículo profissional de Matheus Siqueira, com foco em desenvolvimento web, dados e tecnologia.",
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
