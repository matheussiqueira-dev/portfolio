import type { Metadata } from "next";
import { siteName } from "@/lib/seo";

const pageTitle = "Academic | Matheus Siqueira";
const pageDescription =
  "Education, certifications and skills — Junior Data Analyst | Power BI | SQL | Python | BI.";

const education = [
  "Computer Science (BSc) — UNIFG — 3rd semester (2025–2029)",
  "Full Stack A.I. Programming — Infinity School (2023–2025)",
  "MBA in Digital Media, Performance and Analytics — UNINASSAU (2023–2024)",
  "Marketing (Bachelor's) — UNIFG (2015–2017)",
  "ESL — English as a Second Language (C1) — City College of San Francisco (2019–2020)",
];

const postGrad = [
  "Cloud & Edge Computing — UNIFG (2025)",
  "Information Security — UNIFG (2025)",
  "Artificial Intelligence and Data Science — UNIFG (2025)",
];

const certificates = {
  Alura: [
    "Databases and SQL",
    "BI with Excel: Getting to know Power Query",
    "BI with Excel: Building databases with spreadsheets",
    "BI with Excel: Building dashboards with Power Pivot",
    "BI with Excel: Building a dashboard without complications",
    "BI with Excel: Working with pivot tables using Power Pivot",
    "Data Analysis Career: Welcome and first steps",
    "AI Specialist Career: Welcome and first steps",
    "Starting in Programming: Career and first steps",
    "Programming logic: Dive into programming with JavaScript",
    "MySQL: Getting to know the tool",
    "Power BI: Building calculations with DAX",
    "Power BI Desktop: Building my first dashboard",
    "Power BI Desktop: ETL with Power Query",
    "Power BI: Data modeling",
    "Power BI: Visualizing and analyzing data",
    "Practicing Excel: Using math formulas",
    "Practicing Python: if, elif, and else conditionals",
    "UX Design: Understanding the User Experience field",
  ],
  Asimov: [
    "AI Applications — Start here",
    "Learning Python: Basic concepts",
    "Data Engineering Concepts",
    "Setting up your Python development environment",
    "Dashboards with Dash",
    "Prompt Engineering",
    "AI and Machine Learning Fundamentals",
    "Introduction to Programming Logic",
    "Inside LLMs: How models like ChatGPT work",
    "Python for Excel users",
  ],
  Ulife: [
    "Edge Computing and Internet of Things",
    "Data Engineering, Preparation, and Visualization",
    "User Experience and AI",
    "Cloud Services Management and Governance",
    "Knowledge Management and Competitive Intelligence",
    "Software Modeling",
    "Big Data Processing and Learning Models",
    "Programming Computational Solutions",
    "Information Security for Cloud and Edge Computing",
    "Theory of Computation and Compilers",
  ],
};

const skillGroups = [
  {
    title: "Data & BI",
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
      "Data Modeling",
      "Data Governance",
    ],
  },
  {
    title: "Programming & Engineering",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "REST APIs",
      "Backend",
      "Frontend",
      "Full Stack",
      "Dash",
      "Shell Script",
      "Git/GitHub",
      "Algorithms",
    ],
  },
  {
    title: "Cloud & Security",
    items: [
      "Cloud Computing",
      "Oracle Cloud",
      "Information Security",
      "Oracle Database",
    ],
  },
  {
    title: "AI & Analytics",
    items: [
      "Machine Learning",
      "Data Science",
      "Big Data",
      "Predictive Analytics",
      "MLOps",
      "Artificial Intelligence",
      "Exploratory Analysis",
      "Statistics",
    ],
  },
  {
    title: "Methods & Management",
    items: [
      "Scrum",
      "Kanban",
      "OKR",
      "A/B Testing",
      "Agile Methods",
    ],
  },
  {
    title: "Languages & Soft Skills",
    items: [
      "English C1",
      "Stakeholder communication",
      "Analytical thinking",
      "Data organization",
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/en/academico",
    languages: {
      "pt-BR": "/academico",
      "en-US": "/en/academico",
      "x-default": "/academico",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/en/academico",
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

export default function AcademicoPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Academic
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-200">
            Education, specializations, courses, and technical skills
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-4xl">
            Junior Data Analyst | Power BI | SQL | Python | BI | Business
            Intelligence | ETL | DAX | Power Query.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Education</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Postgraduate Studies and Specializations
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {postGrad.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">
            Certificates and Courses
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
