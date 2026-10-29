import Link from 'next/link';
import Reveal from '../../src/components/Reveal.jsx';
import Icon from '../../src/components/Icon.jsx';
import BreadcrumbSchema from '../../src/components/BreadcrumbSchema.jsx';
import { SECURITY, FEATURES } from '../../src/data/content.js';

export const metadata = {
  title: 'Why Invest | Reine Fondange AI - Guarded on Every Side',
  description:
    'Segregated funds, regulated custodians, cold storage and audited controls - see why Australian members choose Reine Fondange AI for trading.',
  keywords:
    'Reine Fondange AI, AI trading platform, crypto trading Australia, AI trading signals, secure trading platform, why trade with Reine Fondange AI, secure crypto custody, Reine Fondange AI security',
  openGraph: {
    title: 'Why Invest | Reine Fondange AI - Guarded on Every Side',
    description:
      'Segregated funds, regulated custodians, cold storage and audited controls - see why Australian members choose Reine Fondange AI for trading.',
    url: '/why-invest',
    type: 'website',
    siteName: 'Reine Fondange AI',
    locale: 'en_AU',
    images: ['/og-image.svg'],
  },
  twitter: {
    title: 'Why Invest | Reine Fondange AI - Guarded on Every Side',
    description:
      'Segregated funds, regulated custodians, cold storage and audited controls - see why Australian members choose Reine Fondange AI for trading.',
    images: ['/og-image.svg'],
  },
  alternates: { canonical: '/why-invest' },
};

export default function WhyInvest() {
  return (
    <>
      <BreadcrumbSchema path="/why-invest" label="Why Invest" />
      <div className="section section--deep">
        <div className="container">
          <Reveal>
            <span className="section-label">Why invest with us</span>
            <h1 className="section-title" style={{ maxWidth: 720, marginBottom: 20 }}>
              One Account, <em>Guarded On Every Side</em>
            </h1>
            <p className="section-lead" style={{ maxWidth: 720 }}>
              Most platforms ask you to trust them. We built Reine Fondange AI so you do not have
              to - every layer is independently checkable.
            </p>
          </Reveal>

          <div className="cards-grid cards-grid--3" style={{ marginTop: 56 }}>
            {SECURITY.items.map((f, i) => (
              <Reveal className="card" delay={i * 70} key={f.title}>
                <span className="card__icon">
                  <Icon name={f.icon} size={24} />
                </span>
                <h3 className="card__title">{f.title}</h3>
                <p className="card__text">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="container" style={{ marginTop: 72 }}>
          <Reveal>
            <span className="section-label">More reasons</span>
            <h2 className="section-title" style={{ maxWidth: 720, marginBottom: 20 }}>
              Everything Your Trading Needs, In One Account
            </h2>
          </Reveal>
          <div className="cards-grid cards-grid--3" style={{ marginTop: 40 }}>
            {FEATURES.items.map((f, i) => (
              <Reveal className="card" delay={i * 70} key={f.title}>
                <span className="card__icon">
                  <Icon name={f.icon} size={24} />
                </span>
                <h3 className="card__title">{f.title}</h3>
                <p className="card__text">{f.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ textAlign: 'center', marginTop: 56 }}>
            <Link className="btn btn--cyan" href="/sign-up">
              Sign Up now
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  );
}
