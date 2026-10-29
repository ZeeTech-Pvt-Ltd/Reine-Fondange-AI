import { SITE } from '../data/content.js';

// Server-side BreadcrumbList JSON-LD - replaces the client-side injection
// useMeta used to do. Home renders no breadcrumb (matches old behaviour).
export default function BreadcrumbSchema({ path, label }) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: label, item: `${SITE.url.replace(/\/$/, '')}${path}` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}
