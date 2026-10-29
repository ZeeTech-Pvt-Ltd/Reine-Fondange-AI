import { Inter, IBM_Plex_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import 'intl-tel-input/dist/css/intlTelInput.min.css';
import '../src/styles/global.css';
import { SITE } from '../src/data/content.js';

// Self-hosted fonts, non-blocking (display: optional matches the old
// preload + print-swap trick). Variables bridge into global.css tokens.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'optional',
  variable: '--font-inter',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'optional',
  variable: '--font-plex-mono',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Reine Fondange AI: Elegant AI Trading Platform for Australia',
  description:
    "Reine Fondange AI is Australia's AI-guided trading platform. Crypto, forex and equities with curated signals, risk guardrails and layered security.",
  keywords:
    'Reine Fondange AI, AI trading platform, crypto trading Australia, AI trading signals, secure trading platform',
  icons: { icon: '/favicon.svg' },
  verification: { google: '7AkxJ4yKcmQAm_s-Et1nDkiYcKp0Zg5gr5sLZvcB8zE' },
  openGraph: {
    siteName: SITE.name,
    locale: 'en_AU',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = { themeColor: '#0d1622' };

// Static JSON-LD blocks, ported verbatim from the old index.html.
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Reine Fondange AI',
  url: 'https://reinefondange-ai.com/',
  logo: 'https://reinefondange-ai.com/favicon.svg',
  description:
    "Reine Fondange AI is Australia's AI-guided trading platform. Crypto, forex and equities with curated signals, risk guardrails and layered security.",
  areaServed: { '@type': 'Country', name: 'Australia' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@reinefondange-ai.com',
    availableLanguage: 'English',
  },
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Reine Fondange AI',
  url: 'https://reinefondange-ai.com/',
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'Product'],
  name: 'Reine Fondange AI Trading Platform',
  description:
    "Reine Fondange AI is Australia's AI-guided trading platform for crypto, forex and equities, with curated signals, risk guardrails and bank-grade security.",
  url: 'https://reinefondange-ai.com/',
  image: 'https://reinefondange-ai.com/og-image.svg',
  category: 'Financial Services',
  provider: {
    '@type': 'Organization',
    name: 'Reine Fondange AI',
    url: 'https://reinefondange-ai.com/',
  },
  areaServed: { '@type': 'Country', name: 'Australia' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    bestRating: '5',
    ratingCount: '337',
    reviewCount: '124',
  },
  offers: {
    '@type': 'Offer',
    price: '250',
    priceCurrency: 'AUD',
    description: 'Open an account free of charge with a minimum first funding of A$250.',
    availability: 'https://schema.org/InStock',
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'AUD',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'AU',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 1,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 1,
          unitCode: 'DAY',
        },
      },
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'AU',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 14,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Without JS the reveal animation would leave content invisible. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>

        {/* React 19 hoists this into <head>. */}
        <link rel="ai-catalog" href="/.well-known/ai-catalog.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
        />

        <GoogleAnalytics gaId="G-8BVCD9Y2XN" />
      </body>
    </html>
  );
}
