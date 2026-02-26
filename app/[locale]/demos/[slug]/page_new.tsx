import type { Metadata } from "next";

type RouteParams = Promise<{ locale: string; slug: string }>;

type Props = {
  params: RouteParams;
};

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Demo",
    description: "Interactive demo",
  };
}

export default async function DemoDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>
        {locale === "en" ? "Demo" : "Demo"} - {slug}
      </h1>
      <p>
        {locale === "en"
          ? "Page under construction"
          : "Página em construção"}
      </p>
    </div>
  );
}
