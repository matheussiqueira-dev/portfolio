import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Data Analyst & BI`,
    template: `%s | ${siteName}`,
  },
  description:
    "Data Analyst & BI focused on public data, Power BI, SQL, and Python. Strategic dashboards, ETL, and automation for reliable managerial decisions.",
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: `${siteName} | Data Analyst & BI`,
    description:
      "Data Analyst & BI focused on public data, Power BI, SQL, and Python. Strategic dashboards, ETL, and automation for reliable managerial decisions.",
    url: "/en",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Data Analyst & BI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Data Analyst & BI`,
    description:
      "Data Analyst & BI focused on public data, Power BI, SQL, and Python. Strategic dashboards, ETL, and automation for reliable managerial decisions.",
    images: ["/og.png"],
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section lang="en-US">{children}</section>;
}
