import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    default: "Matheus Siqueira | Analista de Dados & BI",
    template: "%s | Matheus Siqueira",
  },
  description:
    "Analista de Dados e BI com foco em dados publicos, Power BI, SQL e Python. Dashboards estrategicos, ETL e automacao para decisoes gerenciais, eficiencia e transparencia.",
  openGraph: {
    title: "Matheus Siqueira | Analista de Dados & BI",
    description:
      "Analista de Dados e BI com foco em dados publicos, Power BI, SQL e Python. Dashboards estrategicos, ETL e automacao para decisoes gerenciais, eficiencia e transparencia.",
    url: "/",
    siteName: "Matheus Siqueira",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Analista de Dados & BI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Siqueira | Analista de Dados & BI",
    description:
      "Analista de Dados e BI com foco em dados publicos, Power BI, SQL e Python. Dashboards estrategicos, ETL e automacao para decisoes gerenciais, eficiencia e transparencia.",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
