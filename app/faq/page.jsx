import Link from 'next/link';
import Reveal from '../../src/components/Reveal.jsx';
import FaqList from '../../src/components/FaqList.jsx';
import FaqSchema from '../../src/components/FaqSchema.jsx';
import BreadcrumbSchema from '../../src/components/BreadcrumbSchema.jsx';
import { SITE } from '../../src/data/content.js';

export const metadata = {
  title: 'FAQ | Reine Fondange AI - Your Questions, Answered Plainly',
  description:
    'Deposits, withdrawals, security, KYC, fees and more - the most common Reine Fondange AI questions answered in plain English.',
  keywords:
    'Reine Fondange AI, AI trading platform, crypto trading Australia, AI trading signals, secure trading platform, Reine Fondange AI FAQ, trading platform questions, minimum deposit Australia',
  openGraph: {
    title: 'FAQ | Reine Fondange AI - Your Questions, Answered Plainly',
    description:
      'Deposits, withdrawals, security, KYC, fees and more - the most common Reine Fondange AI questions answered in plain English.',
    url: '/faq',
    type: 'website',
    siteName: 'Reine Fondange AI',
    locale: 'en_AU',
    images: ['/og-image.svg'],
  },
  twitter: {
    title: 'FAQ | Reine Fondange AI - Your Questions, Answered Plainly',
    description:
      'Deposits, withdrawals, security, KYC, fees and more - the most common Reine Fondange AI questions answered in plain English.',
    images: ['/og-image.svg'],
  },
  alternates: { canonical: '/faq' },
};

export default function Faqs() {
  return (
    <>
      <BreadcrumbSchema path="/faq" label="FAQ" />
      <div className="section section--deep">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <span className="section-label">FAQ</span>
            <h1 className="section-title" style={{ marginBottom: 16 }}>
              Questions, Answered Plainly
            </h1>
            <p className="section-lead" style={{ marginBottom: 48 }}>
              Everything members ask us most - before you sign up, not after.
            </p>
          </Reveal>
          <Reveal>
            <FaqList />
          </Reveal>
          <FaqSchema />
          <Reveal style={{ textAlign: 'center', marginTop: 56 }}>
            <p className="section-lead" style={{ marginBottom: 20 }}>
              Still curious? Email {SITE.email} - a human replies within one business day.
            </p>
            <Link className="btn btn--cyan" href="/sign-up">
              Sign Up now
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  );
}
