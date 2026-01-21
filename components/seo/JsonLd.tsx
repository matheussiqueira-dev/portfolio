/**
 * Server Component for JSON-LD structured data.
 * Uses native <script> with dangerouslySetInnerHTML for guaranteed SSR.
 * This ensures Google can read the JSON-LD in the initial HTML response.
 */

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
