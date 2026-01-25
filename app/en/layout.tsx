import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Full Stack Developer | Data & AI`,
    template: `%s | ${siteName}`,
  },
  description:
    "Professional portfolio of Matheus Siqueira — Full Stack Developer with a data and AI foundation. Web apps, APIs, automation, and analytics.",
  alternates: {
    ...buildAlternates({ pt: "/", en: "/en", canonical: "/en" }),
  },
  openGraph: {
    title: `${siteName} | Full Stack Developer | Data & AI`,
    description:
      "Professional portfolio of Matheus Siqueira — Full Stack Developer with a data and AI foundation. Web apps, APIs, automation, and analytics.",
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
    title: `${siteName} | Full Stack Developer | Data & AI`,
    description:
      "Professional portfolio of Matheus Siqueira — Full Stack Developer with a data and AI foundation. Web apps, APIs, automation, and analytics.",
    // Replace with your social sharing image (1200x630).
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
