export type CertificateIssuer = "Alura" | "Assimov" | "Ulife";

export type Certificate = {
  id: string;
  title: string;
  issuer: CertificateIssuer;
  areaTags: string[];
  pdfUrl: string;
  language?: "pt" | "en";
};

export type CertificatesPageContent = {
  title: string;
  description: string;
  searchPlaceholder: string;
  filterLabel: string;
  allLabel: string;
  openLabel: string;
  downloadLabel: string;
  emptyLabel: string;
};
