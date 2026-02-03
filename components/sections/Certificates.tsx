import CertificatesClient from "@/components/ui/CertificatesClient";
import type {
  Certificate,
  CertificatesPageContent,
} from "@/data/certificates.types";

type Props = {
  content: CertificatesPageContent;
  certificates: Certificate[];
};

export default function Certificates({ content, certificates }: Props) {
  return (
    <section className="page-section content-auto">
      <div className="section-inner">
        <header className="section-heading">
          <div className="section-heading__text">
            <h1 className="section-title">{content.title}</h1>
          </div>
          <p className="section-description max-w-3xl">
            {content.description}
          </p>
        </header>

        <CertificatesClient content={content} certificates={certificates} />
      </div>
    </section>
  );
}
