import { FAQS } from '../data/content.js';

// FAQPage structured data - makes the FAQ eligible for Google rich results.
// Schema must mirror the items actually rendered on the page.
export default function FaqSchema({ items = FAQS }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
