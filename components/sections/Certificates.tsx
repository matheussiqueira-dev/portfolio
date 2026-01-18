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
    <section className="px-6 py-20 content-auto">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {content.title}
          </h1>
          <p className="text-base text-slate-300 max-w-3xl">
            {content.description}
          </p>
        </header>

        <CertificatesClient content={content} certificates={certificates} />
      </div>
    </section>
  );
}
