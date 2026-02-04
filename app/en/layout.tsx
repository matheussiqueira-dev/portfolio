import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";
import messages from "@/messages/en.json";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Matheus Siqueira | Full Stack Developer & Data Engineer",
    template: `%s | ${siteName}`,
  },
  description:
    "Full Stack Developer specialized in React, TypeScript, Python, SQL, Data Engineering, Power BI and Azure Cloud.",
  keywords: [
    "Matheus Siqueira",
    "Full Stack Developer",
    "Data Engineer",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "Python",
    "React.js",
    "Node.js",
    "SQL",
    "MongoDB",
    "Git",
    "GitHub",
    "HTML5",
    "CSS3",
    "Microsoft Azure",
    "Power BI",
    "Pandas",
    "REST API",
    "ETL",
    "Data Warehouse",
    "Tableau",
    "Oracle Database",
    "Shell Script",
  ],
  authors: [{ name: siteName, url: baseUrl }],
  robots: { index: true, follow: true },
  alternates: {
    ...buildAlternates({ pt: "/", en: "/en", canonical: "/en" }),
  },
  openGraph: {
    title: "Matheus Siqueira | Full Stack Developer & Data Engineer",
    description:
      "Full Stack Developer specialized in React, TypeScript, Python, SQL, Data Engineering, Power BI and Azure Cloud.",
    url: "/en",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        // Replace with your social sharing image (1200x630).
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Siqueira | Full Stack Developer & Data Engineer",
    description:
      "Full Stack Developer specialized in React, TypeScript, Python, SQL, Data Engineering, Power BI and Azure Cloud.",
    // Replace with your social sharing image (1200x630).
    images: ["/og.png"],
  },
  other: {
    language: "en-US",
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
      <NextIntlClientProvider locale="en" messages={messages}>
        {children}
      </NextIntlClientProvider>
      {shouldInjectSpeedInsights ? <SpeedInsights /> : null}
    </section>
  );
}
