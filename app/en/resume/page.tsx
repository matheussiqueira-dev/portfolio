import type { Metadata } from "next";
import ResumeEn from "@/components/sections/ResumeEn";

export const metadata: Metadata = {
  title: "Resume | Matheus Siqueira",
  description:
    "Resume of Matheus Siqueira, Junior Data Analyst in BI, Power BI, SQL, and Python, with experience in public data, ETL, and dashboards for clear managerial decisions.",
  alternates: {
    languages: {
      "pt-BR": "/resume",
      "en-US": "/en/resume",
    },
  },
  openGraph: {
    title: "Resume | Matheus Siqueira",
    description:
      "Resume of Matheus Siqueira, Junior Data Analyst in BI, Power BI, SQL, and Python, with experience in public data, ETL, and dashboards for clear managerial decisions.",
    url: "/en/resume",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Resume of Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Matheus Siqueira",
    description:
      "Resume of Matheus Siqueira, Junior Data Analyst in BI, Power BI, SQL, and Python, with experience in public data, ETL, and dashboards for clear managerial decisions.",
    images: ["/og.png"],
  },
};

export default function ResumeEnPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <ResumeEn />
    </main>
  );
}
