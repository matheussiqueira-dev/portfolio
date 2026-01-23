import { redirect } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectRedirectPage({ params }: PageProps) {
  redirect(`/projetos/${params.slug}`);
}
