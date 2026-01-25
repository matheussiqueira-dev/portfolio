import { permanentRedirect } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectRedirectPage({ params }: PageProps) {
  permanentRedirect(`/projetos/${params.slug}`);
}
