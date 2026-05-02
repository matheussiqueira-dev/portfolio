import type { Certificate, CertificateArea, CertificateSource } from "./certificates.types";

const UNKNOWN_ISSUE_DATE = { kind: "unknown" } as const;
const FALLBACK_THUMBNAIL_URL = "/placeholder.jpg";
const DEFAULT_WEIGHT = 100;

const HIGH_IMPACT_CERTIFICATE_WEIGHTS: Record<string, number> = {
  "programacao-fullstack-ai": 1000,
  "diploma-ensino-superior-em-marketing": 980,
  "design-fullstack-ai": 950,
  "mba-midias-digitais-performance-analytics-uninassau": 940,
  "processamento-de-dados-massivos-e-modelos-de-aprendizado": 920,
  "seguranca-da-informacao-para-cloud-e-edge-computing": 910,
  "engenharia-preparacao-e-visualizacao-de-dados": 900,
  "carreira-especialista-em-ia-boas-vindas-e-primeiros-passos": 890,
  "por-dentro-das-llms-como-funcionam-modelos-como-o-chatgpt": 880,
  "fundamentos-de-ai-e-machine-learning": 870,
  "marketing-de-performance-uninassau": 860,
  "otimizacao-de-campanhas-em-midias-digitais-uninassau": 850,
  "banco-de-dados-e-sql": 840,
  "python-para-dados-trabalhando-com-funcoes-estruturas-de-dados-e-excecoes": 830,
  "power-bi-modelagem-de-dados": 820,
  "power-bi-visualizando-e-analisando-dados": 810,
  "big-data-e-analytics-uninassau": 800,
  "producao-de-conteudo-uninassau": 790,
  "edge-computing-e-internet-das-coisas": 790,
  "business-design-uninassau": 780,
  "gestao-de-talentos-uninassau": 760,
  "evolucao-da-gestao-uninassau": 740,
  "assessment-e-coaching-uninassau": 720,
};

const MARKETING_TAG_WEIGHTS: Record<string, number> = {
  Marketing: 18,
  "Digital Marketing": 18,
  "Performance Marketing": 18,
  "Campaign Optimization": 16,
  "Content Marketing": 14,
  Communication: 10,
  Business: 9,
  "Business Strategy": 9,
  Management: 8,
  "People Management": 8,
  Leadership: 8,
  Coaching: 6,
  "Design Thinking": 6,
};

const TECHNOLOGY_TAG_WEIGHTS: Record<string, number> = {
  AI: 20,
  IA: 20,
  "Machine Learning": 20,
  LLMs: 20,
  "Prompt Engineering": 18,
  "Data Analytics": 18,
  "Data Engineering": 18,
  "Big Data": 18,
  "Business Intelligence": 16,
  SQL: 16,
  Python: 16,
  JavaScript: 14,
  Java: 14,
  ".NET": 14,
  "C#": 14,
  "Full Stack": 16,
  Programação: 14,
  Programming: 14,
  "Programming Logic": 12,
  "Formação Técnica": 14,
  "Technical Training": 14,
  Ranking: 16,
  Destaque: 16,
  Achievement: 16,
  "Top 1": 18,
  "Top 2": 16,
  "Top 3": 14,
  "Cloud Computing": 18,
  "Edge Computing": 16,
  "Information Security": 18,
  "Power BI": 16,
  DAX: 14,
  ETL: 14,
  "Power Query": 12,
  Statistics: 12,
  Excel: 8,
  Technology: 14,
  Accessibility: 10,
  "Digital Product": 10,
  UX: 8,
  "UI Design": 8,
  Design: 6,
  Figma: 6,
  "Computer Graphics": 8,
};

const ISSUER_WEIGHTS: Record<CertificateSource["issuer"], number> = {
  Ulife: 34,
  "Infinity School": 32,
  UNINASSAU: 28,
  Assimov: 24,
  Alura: 20,
};

function thumbnailFromPdf(pdfUrl: string): string {
  return pdfUrl.replace("/certificates/", "/certificates/previews/").replace(/\.pdf$/i, ".jpg");
}

function normalizeForSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function scoreTags(tags: string[], weights: Record<string, number>): number {
  return tags.reduce((score, tag) => score + (weights[tag] ?? 0), 0);
}

function inferCertificateArea(source: CertificateSource): CertificateArea {
  const title = normalizeForSearch(source.title);
  const marketingScore =
    scoreTags(source.areaTags, MARKETING_TAG_WEIGHTS) +
    (/(marketing|midias digitais|campanha|conteudo|gestao|negocios|business|coaching|lideranca)/i.test(
      title
    )
      ? 16
      : 0);
  const technologyScore =
    scoreTags(source.areaTags, TECHNOLOGY_TAG_WEIGHTS) +
    (/(programacao|computacao|dados|data|python|java|sql|cloud|seguranca|machine|ia|ai|power bi|software|full stack)/i.test(
      title
    )
      ? 16
      : 0);

  return marketingScore > technologyScore ? "marketing" : "technology";
}

function inferCertificateWeight(source: CertificateSource, area: CertificateArea): number {
  const title = normalizeForSearch(source.title);
  const strategicSignal =
    (title.includes("diploma") ? 120 : 0) +
    (title.includes("curso tecnico") ? 110 : 0) +
    (title.includes("mba") ? 105 : 0) +
    (title.includes("carreira") ? 55 : 0) +
    (title.includes("ranking top 1") ? 80 : 0) +
    (title.includes("ranking top 2") ? 68 : 0) +
    (title.includes("ranking top 3") ? 56 : 0) +
    (title.includes("seguranca") ? 36 : 0) +
    (title.includes("machine learning") || title.includes("llm") ? 36 : 0) +
    (title.includes("performance") ? 28 : 0);
  const areaTagScore =
    area === "marketing"
      ? scoreTags(source.areaTags, MARKETING_TAG_WEIGHTS)
      : scoreTags(source.areaTags, TECHNOLOGY_TAG_WEIGHTS);

  return (
    HIGH_IMPACT_CERTIFICATE_WEIGHTS[source.id] ??
    DEFAULT_WEIGHT + ISSUER_WEIGHTS[source.issuer] + strategicSignal + areaTagScore
  );
}

export function normalizeCertificate(source: CertificateSource): Certificate {
  const fileUrl = source.fileUrl ?? source.pdfUrl;

  if (!fileUrl) {
    throw new Error(`Certificate "${source.id}" must define pdfUrl or fileUrl.`);
  }

  const area = source.area ?? inferCertificateArea(source);

  return {
    ...source,
    area,
    fileUrl,
    verificationUrl: source.verificationUrl ?? fileUrl,
    thumbnailUrl:
      source.thumbnailUrl ??
      (source.pdfUrl ? thumbnailFromPdf(source.pdfUrl) : FALLBACK_THUMBNAIL_URL),
    issuedAt: source.issuedAt ?? UNKNOWN_ISSUE_DATE,
    weight: source.weight ?? inferCertificateWeight(source, area),
  };
}

export function normalizeCertificates(sources: CertificateSource[]): Certificate[] {
  return sources.map(normalizeCertificate);
}
