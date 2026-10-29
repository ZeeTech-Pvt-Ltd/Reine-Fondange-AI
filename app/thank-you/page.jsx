import Link from 'next/link';
import Icon from '../../src/components/Icon.jsx';
import BreadcrumbSchema from '../../src/components/BreadcrumbSchema.jsx';

const NEXT_STEPS = [
  'Check your inbox for a confirmation email',
  'Complete identity verification (usually same-day)',
  'Fund your vault from A$250 and choose your strategy',
];

export const metadata = {
  title: 'Thank You | Reine Fondange AI - Account Request Received',
  description: 'Your Reine Fondange AI account request has been received. Here is what happens next.',
  keywords:
    'Reine Fondange AI, AI trading platform, crypto trading Australia, AI trading signals, secure trading platform, Reine Fondange AI account created, Reine Fondange AI next steps',
  openGraph: {
    title: 'Thank You | Reine Fondange AI - Account Request Received',
    description: 'Your Reine Fondange AI account request has been received. Here is what happens next.',
    url: '/thank-you',
    type: 'website',
    siteName: 'Reine Fondange AI',
    locale: 'en_AU',
    images: ['/og-image.svg'],
  },
  twitter: {
    title: 'Thank You | Reine Fondange AI - Account Request Received',
    description: 'Your Reine Fondange AI account request has been received. Here is what happens next.',
    images: ['/og-image.svg'],
  },
  alternates: { canonical: '/thank-you' },
};

export default function ThankYou() {
  return (
    <>
      <BreadcrumbSchema path="/thank-you" label="Thank You" />
      <section className="section section--deep">
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div className="page-hero__glow" />
        </div>
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="card" style={{ textAlign: 'center', padding: 48 }}>
            <span className="card__icon" style={{ margin: '0 auto 16px', color: 'var(--green)' }}>
              <Icon name="check" size={30} />
            </span>
            <h1 className="section-title" style={{ fontSize: 28, marginBottom: 12 }}>
              Account Request Received
            </h1>
            <p className="card__text">
              Thank you for choosing Reine Fondange AI. Your details are on their way to our
              onboarding team. What happens next:
            </p>
            <ul className="thankyou__list">
              {NEXT_STEPS.map((s) => (
                <li key={s}>
                  <Icon name="check" size={15} />
                  {s}
                </li>
              ))}
            </ul>
            <Link className="btn btn--cyan" href="/" style={{ marginTop: 24 }}>
              Back to the homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
