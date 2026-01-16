import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.matheussiqueira.dev"),
  title: {
    default:
      "Matheus Siqueira | Analista de Dados Junior (Power BI, SQL, Python)",
    template: "%s | Matheus Siqueira",
  },
  description:
    "Portfolio de Matheus Siqueira, Analista de Dados Junior em Recife. BI com Power BI, analise SQL, automacao Python e dados publicos.",
  openGraph: {
    title: "Matheus Siqueira | Analista de Dados Junior (Power BI, SQL, Python)",
    description:
      "Portfolio de Matheus Siqueira, Analista de Dados Junior em Recife. BI com Power BI, analise SQL, automacao Python e dados publicos.",
    url: "/",
    siteName: "Matheus Siqueira",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira - Analista de Dados Junior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Siqueira | Analista de Dados Junior (Power BI, SQL, Python)",
    description:
      "Portfolio de Matheus Siqueira, Analista de Dados Junior em Recife. BI com Power BI, analise SQL, automacao Python e dados publicos.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0b0d10] text-slate-100 relative pt-16`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-40 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}