import { Fragment } from 'react';

export interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

/**
 * Breadcrumbs component with Schema.org structured data
 * 
 * Improves SEO and site navigation by providing:
 * - BreadcrumbList JSON-LD for search engines
 * - Visual breadcrumb trail for users
 * - Accessible navigation with ARIA labels
 * 
 * @example
 * ```tsx
 * <Breadcrumbs 
 *   items={[
 *     { name: 'Home', url: '/' },
 *     { name: 'Projetos', url: '/projetos' },
 *     { name: 'Power BI Dashboard', url: '/projetos/power-bi' }
 *   ]}
 * />
 * ```
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const breadcrumbsSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': items.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.name,
            'item': item.url,
        })),
    };

    return (
        <>
            {/* JSON-LD for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
            />

            {/* Visual breadcrumbs for users */}
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--muted)]">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <Fragment key={item.url}>
                                <li>
                                    {isLast ? (
                                        <span
                                            className="text-[color:var(--foreground)] font-medium"
                                            aria-current="page"
                                        >
                                            {item.name}
                                        </span>
                                    ) : (
                                        <a
                                            href={item.url}
                                            className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </li>
                                {!isLast && (
                                    <li aria-hidden="true" className="text-[color:var(--border)]">
                                        /
                                    </li>
                                )}
                            </Fragment>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
