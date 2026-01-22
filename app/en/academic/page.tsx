import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { siteName } from "@/lib/seo";

const pageTitle = "Academic | Matheus Siqueira";
const pageDescription =
  "Education, certifications and skills — Junior Data Analyst | Power BI | SQL | Python | BI.";

const education = [
  "Computer Science (UNIFG) in progress (3rd semester 2025–2029)",
  "Postgraduate: Cloud & Edge Computing (UNIFG, 2025)",
  "Postgraduate: Information Security (UNIFG, 2025)",
  "Postgraduate: AI and Data Science (UNIFG, 2025)",
  "Technical: FullStack A.I. Programming (Infinity School, 2023–2025)",
  "MBA: Digital Media, Performance and Analytics (UNINASSAU, 2023–2024)",
  "Bachelor's: Marketing (UNIFG, 2015–2017)",
  "ESL C1 (City College of San Francisco, 2019–2020)",
];

const certificates = {
  Alura: [
    "Banco de dados e SQL",
    "BI com Excel conhecendo o Power Query",
    "BI com Excel criando bancos de dados com planilhas",
    "BI com Excel criando Dashboard com Power Pivot",
    "BI com Excel criando um Dashboard sem complicação",
    "BI com Excel trabalhando com tabelas dinâmicas com Power Pivot",
    "Carreira Análise de Dados Boas-vindas e primeiros passos",
    "Carreira Especialista em IA Boas-vindas e primeiros passos",
    "Começando em Programação carreira e primeiros passos",
    "Lógica de programação mergulhe em programação com JavaScript",
    "MySQL conhecendo a ferramenta",
    "Power BI construindo cálculos com DAX",
    "Power BI Desktop construindo meu primeiro dashboard",
    "Power BI Desktop realizando ETL no Power Query",
    "Power BI modelagem de dados",
    "Power BI visualizando e analisando dados",
    "Praticando Excel utilizando fórmulas matemáticas",
    "Praticando Python condicionais if, elif e else",
    "UX Design entenda a área da User Experience",
  ],
  Assimov: [
    "Aplicações IA – Comece por aqui",
    "Aprendendo Python Conceitos Básicos",
    "Conceitos de Engenharia de Dados",
    "Criando seu Setup para Programação Python",
    "Dashboards com Dash",
    "Engenharia de Prompts",
    "Fundamentos de AI e Machine Learning",
    "Introdução à Lógica de Programação",
    "Por dentro das LLMs – como funcionam modelos como o ChatGPT",
    "Python para Usuários de Excel",
  ],
  Ulife: [
    "EDGE COMPUTING E INTERNET DAS COISAS",
    "ENGENHARIA, PREPARAÇÃO E VISUALIZAÇÃO DE DADOS",
    "EXPERIÊNCIA DO USUÁRIO E IA",
    "GERENCIAMENTO E GOVERNANÇA DE SERVIÇOS NA NUVEM",
    "GESTÃO DO CONHECIMENTO E INTELIGÊNCIA COMPETITIVA",
    "Modelagem de software",
    "PROCESSAMENTO DE DADOS MASSIVOS E MODELOS DE APRENDIZADO",
    "Programação de soluções computacionais",
    "SEGURANÇA DA INFORMAÇÃO PARA CLOUD E EDGE COMPUTING",
    "TEORIA DA COMPUTAÇÃO E COMPILADORES",
  ],
};

const skillGroups = [
  {
    title: "Data/BI",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Tableau",
      "KPIs",
      "Data Visualization",
      "Business Intelligence",
      "Dashboards",
    ],
  },
  {
    title: "SQL/DB",
    items: ["SQL", "Data Warehouse", "Oracle DB", "MongoDB", "Data Modeling"],
  },
  {
    title: "Python/Data",
    items: ["Python", "Pandas", "Dash", "Automation", "ETL"],
  },
  {
    title: "Engineering/Cloud/Security",
    items: [
      "Cloud Computing",
      "Oracle Cloud",
      "Information Security",
      "Shell Script",
    ],
  },
  {
    title: "Web/Dev",
    items: ["JavaScript", "TypeScript", "Node.js", "React", "HTML5", "CSS", "APIs"],
  },
  {
    title: "Methods/Process",
    items: ["Scrum", "Kanban", "OKR", "A/B test", "Governance"],
  },
];

const driveUrl =
  "https://drive.google.com/drive/folders/1K8uDtOCro_xvMWiukIr4GOiWwAEz8RM7";

const certificateExtensions = new Set([
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
]);

const getCertificateFiles = () => {
  const basePath = path.join(process.cwd(), "public", "certificates");
  try {
    if (!fs.existsSync(basePath)) {
      return [];
    }

    const folders = fs
      .readdirSync(basePath, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    const files = folders.flatMap((folder) => {
      const folderPath = path.join(basePath, folder);
      return fs
        .readdirSync(folderPath, { withFileTypes: true })
        .filter(
          (entry) =>
            entry.isFile() &&
            certificateExtensions.has(path.extname(entry.name).toLowerCase()),
        )
        .map((entry) => ({
          href: `/certificates/${folder}/${entry.name}`,
          name: entry.name,
        }));
    });

    return files.sort((a, b) => a.name.localeCompare(b.name, "en-US"));
  } catch {
    return [];
  }
};

const formatFileLabel = (fileName: string) => {
  const base = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ");
  return base.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/en/academic",
    languages: {
      "pt-BR": "/academico",
      "en-US": "/en/academic",
      "x-default": "/academico",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/en/academic",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Academic background and certificates of Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og.png"],
  },
};

export default function AcademicPage() {
  const certificateFiles = getCertificateFiles();

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Academic
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[color:var(--muted-strong)]">
            Education, certifications, and technical skills
          </h2>
          <p className="text-base md:text-lg text-[color:var(--muted)] max-w-4xl">
            Junior Data Analyst | Power BI | SQL | Python | BI | Business
            Intelligence | ETL | DAX | Power Query.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Education</h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Certificates</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(certificates).map(([issuer, items]) => (
              <div key={issuer} className="space-y-3">
                <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {issuer}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-[color:var(--muted)]">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="card p-6 space-y-3"
              >
                <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {group.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-[color:var(--muted)]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Files</h2>
          {certificateFiles.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certificateFiles.map((file) => (
                <a
                  key={file.href}
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)] transition hover:border-[color:var(--accent)]/40"
                >
                  {formatFileLabel(file.name)}
                </a>
              ))}
            </div>
          ) : (
            <a
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-fit"
            >
              View full folder on Drive
            </a>
          )}
        </section>
      </div>
    </main>
  );
}
