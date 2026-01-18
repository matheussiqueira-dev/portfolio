import type { Metadata } from "next";
import { siteName } from "@/lib/seo";

const pageTitle = "Acadêmico | Matheus Siqueira";
const pageDescription =
  "Formação, especializações, certificados e skills de Matheus Siqueira — Analista de Dados Júnior | Power BI | SQL | Python | BI.";

const education = [
  "Ciência da Computação (Bacharelado) — UNIFG — 3º período (2025–2029)",
  "Programação Full Stack A.I. — Infinity School (2023–2025)",
  "MBA em Mídias Digitais, Performance e Analytics — UNINASSAU (2023–2024)",
  "Graduação em Marketing — UNIFG (2015–2017)",
  "ESL — English as a Second Language (C1) — City College of San Francisco (2019–2020)",
];

const postGrad = [
  "Cloud & Edge Computing — UNIFG (2025)",
  "Segurança da Informação — UNIFG (2025)",
  "Inteligência Artificial e Ciência de Dados — UNIFG (2025)",
];

const certificates = {
  Alura: [
    "Banco de dados e SQL",
    "BI com Excel conhecendo o Power Query",
    "BI com Excel criando bancos de dados com planilhas",
    "BI com Excel criando Dashboard com Power Pivot",
    "BI com Excel criando um Dashboard sem complicação",
    "BI com Excel trabalhando com tabelas dinâmicas com Power Pivot",
    "Carreira Análise de Dados: Boas-vindas e primeiros passos",
    "Carreira Especialista em IA: Boas-vindas e primeiros passos",
    "Começando em Programação: carreira e primeiros passos",
    "Lógica de programação: mergulhe em programação com JavaScript",
    "MySQL conhecendo a ferramenta",
    "Power BI construindo cálculos com DAX",
    "Power BI Desktop construindo meu primeiro dashboard",
    "Power BI Desktop realizando ETL no Power Query",
    "Power BI modelagem de dados",
    "Power BI visualizando e analisando dados",
    "Praticando Excel utilizando fórmulas matemáticas",
    "Praticando Python: condicionais if, elif e else",
    "UX Design: entenda a área da User Experience",
  ],
  Asimov: [
    "Aplicações IA — Comece por aqui",
    "Aprendendo Python: conceitos básicos",
    "Conceitos de Engenharia de Dados",
    "Criando seu setup para programação Python",
    "Dashboards com Dash",
    "Engenharia de Prompts",
    "Fundamentos de AI e Machine Learning",
    "Introdução à Lógica de Programação",
    "Por dentro das LLMs — como funcionam modelos como o ChatGPT",
    "Python para Usuários de Excel",
  ],
  Ulife: [
    "Edge Computing e Internet das Coisas",
    "Engenharia, preparação e visualização de dados",
    "Experiência do Usuário e IA",
    "Gerenciamento e governança de serviços na nuvem",
    "Gestão do conhecimento e inteligência competitiva",
    "Modelagem de software",
    "Processamento de dados massivos e modelos de aprendizado",
    "Programação de soluções computacionais",
    "Segurança da informação para cloud e edge computing",
    "Teoria da computação e compiladores",
  ],
};

const skillGroups = [
  {
    title: "Dados & BI",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL",
      "ETL",
      "Data Warehouse",
      "KPIs",
      "Data Visualization",
      "Business Intelligence",
      "Data Analytics",
      "Tableau",
      "Excel",
      "Modelagem de Dados",
      "Governança de Dados",
    ],
  },
  {
    title: "Programação & Engenharia",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "APIs REST",
      "Backend",
      "Frontend",
      "Full Stack",
      "Dash",
      "Shell Script",
      "Git/GitHub",
      "Algoritmos",
    ],
  },
  {
    title: "Cloud & Segurança",
    items: [
      "Cloud Computing",
      "Oracle Cloud",
      "Segurança da Informação",
      "Banco Oracle",
    ],
  },
  {
    title: "IA & Analytics",
    items: [
      "Machine Learning",
      "Data Science",
      "Big Data",
      "Analítica Preditiva",
      "MLOps",
      "Inteligência Artificial",
      "Análise Exploratória",
      "Estatística",
    ],
  },
  {
    title: "Métodos & Gestão",
    items: [
      "Scrum",
      "Kanban",
      "OKR",
      "Teste A/B",
      "Metodologias Ágeis",
    ],
  },
  {
    title: "Idiomas & Soft Skills",
    items: [
      "Inglês C1",
      "Comunicação com stakeholders",
      "Pensamento analítico",
      "Organização de dados",
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/academico",
    languages: {
      "pt-BR": "/academico",
      "en-US": "/en/academico",
      "x-default": "/academico",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/academico",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Formação e certificados de Matheus Siqueira",
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

export default function AcademicoPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Acadêmico
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-200">
            Formação, especializações, cursos e competências técnicas
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-4xl">
            Analista de Dados Júnior | Power BI | SQL | Python | BI | Business
            Intelligence | ETL | DAX | Power Query.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Formação Acadêmica
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Pós-graduações e Especializações
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {postGrad.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">
            Certificados e Cursos
          </h2>
          {Object.entries(certificates).map(([issuer, items]) => (
            <div key={issuer} className="space-y-3">
              <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
                {issuer}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3"
              >
                <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  {group.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
