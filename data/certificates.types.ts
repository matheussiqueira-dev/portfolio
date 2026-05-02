export type CertificateIssuer = "Alura" | "Assimov" | "Ulife" | "Infinity School" | "UNINASSAU";

export type CertificateModule = {
  title: string;
  subtitle?: string;
  description: string;
};

export type CertificateDetails = {
  summaryLabel: string;
  modules: CertificateModule[];
};

export type CertificateIssueDate =
  | {
      kind: "known";
      value: string;
      label?: string;
    }
  | {
      kind: "unknown";
    };

export type CertificateArea = "technology" | "marketing";

export type CertificateAreaContent = {
  title: string;
  description: string;
};

type CertificateBase = {
  id: string;
  title: string;
  issuer: CertificateIssuer;
  areaTags: string[];
  language?: "pt" | "en";
  details?: CertificateDetails;
};

type CertificateWithPdf = {
  pdfUrl: string;
  fileUrl?: string;
};

type CertificateWithFile = {
  fileUrl: string;
  pdfUrl?: string;
};

export type CertificateSource = CertificateBase &
  (CertificateWithPdf | CertificateWithFile) & {
    area?: CertificateArea;
    verificationUrl?: string;
    thumbnailUrl?: string;
    issuedAt?: CertificateIssueDate;
    weight?: number;
  };

export type Certificate = CertificateBase & {
  area: CertificateArea;
  pdfUrl?: string;
  fileUrl: string;
  verificationUrl: string;
  thumbnailUrl: string;
  issuedAt: CertificateIssueDate;
  weight: number;
};

export type CertificatesPageContent = {
  title: string;
  description: string;
  searchPlaceholder: string;
  filterLabel: string;
  categoryFilterLabel: string;
  allLabel: string;
  openLabel: string;
  downloadLabel: string;
  issuerLabel: string;
  issueDateLabel: string;
  unknownIssueDateLabel: string;
  areas: Record<CertificateArea, CertificateAreaContent>;
  unavailableLabel: string;
  emptyLabel: string;
};
