import type { Metadata } from "next";
import Certificates from "@/components/sections/Certificates";
import JsonLd from "@/components/seo/JsonLd";
import {
  certificatesEn,
  certificatesPageEn,
} from "@/data/certificates.en";
import { baseUrl, siteName } from "@/lib/seo";

const certificatesTitle = certificatesPageEn.title;
const certificatesMetaTitle =
  "Certificates | Junior Data Analyst | Power BI | SQL | Python | BI";
const certificatesDescription = certificatesPageEn.description;

const certificatesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: certificatesTitle,
  description: certificatesDescription,
  itemListElement: certificatesEn.map((certificate, index) => ({
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
    canonical: "/en/certificates",
    languages: {
      "pt-BR": "/certificates",
      "en-US": "/en/certificates",
      "x-default": "/certificates",
    },
  },
  openGraph: {
    title: certificatesMetaTitle,
    description: certificatesDescription,
    url: "/en/certificates",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Certificates of Matheus Siqueira",
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

export default function CertificatesEnPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={certificatesJsonLd} />
      <Certificates content={certificatesPageEn} certificates={certificatesEn} />
    </main>
  );
}
