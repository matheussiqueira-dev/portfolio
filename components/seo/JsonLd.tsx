import Script from "next/script";

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
};

const hashJson = (value: string) => {
  let hash = 5381;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 33) ^ value.charCodeAt(i);
  }

  return (hash >>> 0).toString(36);
};

export default function JsonLd({ data, id }: JsonLdProps) {
  const json = JSON.stringify(data);
  const scriptId = id ?? `jsonld-${hashJson(json)}`;

  return (
    <Script id={scriptId} type="application/ld+json" strategy="afterInteractive">
      {json}
    </Script>
  );
}
