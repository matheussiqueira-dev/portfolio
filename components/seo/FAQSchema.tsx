export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    items: FAQItem[];
}

/**
 * FAQ Schema component for SEO
 * 
 * Generates FAQPage JSON-LD structured data for search engines.
 * This can help your content appear as rich snippets in search results.
 * 
 * @example
 * ```tsx
 * <FAQSchema 
 *   items={[
 *     {
 *       question: 'Quais tecnologias você domina?',
 *       answer: 'Power BI, SQL, Python, DAX, Power Query, ETL, e mais.'
 *     },
 *     {
 *       question: 'Você está disponível para novos projetos?',
 *       answer: 'Sim, estou aberto a oportunidades como Analista de Dados.'
 *     }
 *   ]}
 * />
 * ```
 */
export default function FAQSchema({ items }: FAQSchemaProps) {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': items.map((item) => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}
