import type { Metadata } from "next";
import Certificates from "@/components/sections/Certificates";
import JsonLd from "@/components/seo/JsonLd";
import {
  certificatesPagePt,
  certificatesPt,
} from "@/data/certificates.pt";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const certificatesTitle = certificatesPagePt.title;
const certificatesMetaTitle =
  "Certificados | Analista de Dados Júnior | Power BI | SQL | Python | BI";
const certificatesDescription = certificatesPagePt.description;

const certificatesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: certificatesTitle,
  description: certificatesDescription,
  itemListElement: certificatesPt.map((certificate, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: certificate.title,
      provider: {
        "@type": "Organization",
        name: certificate.issuer,
      },
      url: `${baseUrl}${certificate.pdfUrl}`,
    },
  })),
};

export const metadata: Metadata = {
  title: certificatesMetaTitle,
  description: certificatesDescription,
  alternates: {
    ...buildAlternates({ pt: "/certificates", en: "/en/certificates", canonical: "/certificates" }),
  },
  openGraph: {
    title: certificatesMetaTitle,
    description: certificatesDescription,
    url: "/certificates",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Certificados de Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: certificatesMetaTitle,
    description: certificatesDescription,
    images: ["/og.png"],
  },
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={certificatesJsonLd} />
      <Certificates content={certificatesPagePt} certificates={certificatesPt} />
    </main>
  );
}
