import type { Metadata } from "next";
import Certificates from "@/components/sections/Certificates";
import JsonLd from "@/components/seo/JsonLd";
import {
  certificatesPagePt,
  certificatesPt,
} from "@/data/certificates.pt";
import { baseUrl, siteName } from "@/lib/seo";

const certificatesTitle = certificatesPagePt.title;
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
  title: certificatesTitle,
  description: certificatesDescription,
  alternates: {
    canonical: "/certificates",
    languages: {
      "pt-BR": "/certificates",
      "en-US": "/en/certificates",
      "x-default": "/certificates",
    },
  },
  openGraph: {
    title: certificatesTitle,
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
    title: certificatesTitle,
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
