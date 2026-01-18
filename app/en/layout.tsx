import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Junior Data Analyst | Power BI | SQL | Python | BI`,
    template: `%s | ${siteName}`,
  },
  description:
    "Professional portfolio of a Junior Data Analyst focused on Business Intelligence, Power BI, SQL, and Python. Dashboards, analytics automation, and data projects.",
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: `${siteName} | Junior Data Analyst | Power BI | SQL | Python | BI`,
    description:
      "Professional portfolio of a Junior Data Analyst focused on Business Intelligence, Power BI, SQL, and Python. Dashboards, analytics automation, and data projects.",
    url: "/en",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Junior Data Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Junior Data Analyst | Power BI | SQL | Python | BI`,
    description:
      "Professional portfolio of a Junior Data Analyst focused on Business Intelligence, Power BI, SQL, and Python. Dashboards, analytics automation, and data projects.",
    images: ["/og.png"],
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectSpeedInsights = process.env.VERCEL === "1";

  return (
    <section lang="en-US">
      {children}
      {shouldInjectSpeedInsights ? <SpeedInsights /> : null}
    </section>
  );
}
