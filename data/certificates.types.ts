export type CertificateIssuer = "Alura" | "Assimov" | "Ulife" | "Infinity School";

export type CertificateModule = {
  title: string;
  subtitle?: string;
  description: string;
};

export type CertificateDetails = {
  summaryLabel: string;
  modules: CertificateModule[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: CertificateIssuer;
  areaTags: string[];
  pdfUrl: string;
  language?: "pt" | "en";
  details?: CertificateDetails;
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
