import Link from 'next/link';
import Reveal from '../../src/components/Reveal.jsx';
import Icon from '../../src/components/Icon.jsx';
import RegistrationForm from '../../src/components/RegistrationForm.jsx';
import BreadcrumbSchema from '../../src/components/BreadcrumbSchema.jsx';
import { CONTACTS, SITE } from '../../src/data/content.js';

const CARDS = [
  { icon: 'mail', title: 'Email us', text: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'headset', title: 'Support hours', text: CONTACTS.support },
  { icon: 'lock', title: 'Security', text: CONTACTS.security },
];

export const metadata = {
  title: 'Contact Us | Reine Fondange AI - Talk to a Human',
  description:
    'Questions about Reine Fondange AI? Email our Australia-based support team - real humans reply within one business day.',
  keywords:
    'Reine Fondange AI, AI trading platform, crypto trading Australia, AI trading signals, secure trading platform, contact Reine Fondange AI, Reine Fondange AI support, trading platform help Australia',
  openGraph: {
    title: 'Contact Us | Reine Fondange AI - Talk to a Human',
    description:
      'Questions about Reine Fondange AI? Email our Australia-based support team - real humans reply within one business day.',
    url: '/contact-us',
    type: 'website',
    siteName: 'Reine Fondange AI',
    locale: 'en_AU',
    images: ['/og-image.svg'],
  },
  twitter: {
    title: 'Contact Us | Reine Fondange AI - Talk to a Human',
    description:
      'Questions about Reine Fondange AI? Email our Australia-based support team - real humans reply within one business day.',
    images: ['/og-image.svg'],
  },
  alternates: { canonical: '/contact-us' },
};

export default function Contacts() {
  return (
    <>
      <BreadcrumbSchema path="/contact-us" label="Contact Us" />
      <div className="section section--deep">
        <div className="container">
          <Reveal>
            <span className="section-label">Contact us</span>
            <h1 className="section-title" style={{ marginBottom: 16 }}>
              {CONTACTS.title}
            </h1>
            <p className="section-lead" style={{ marginBottom: 48 }}>
              {CONTACTS.lead}
            </p>
          </Reveal>

          <div className="contact">
            <div className="contact__info">
              {CARDS.map((c, i) => (
                <Reveal className="card card--link contact__card" delay={i * 80} key={c.title}>
                  <span className="card__icon">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="card__title">{c.title}</h3>
                    {c.href ? (
                      <a className="card__text card__mail" href={c.href}>
                        {c.text}
                      </a>
                    ) : (
                      <p className="card__text">{c.text}</p>
                    )}
                  </div>
                </Reveal>
              ))}

              <Reveal delay={240}>
                <p className="section-lead" style={{ marginBottom: 20 }}>
                  Most questions are already answered in our FAQ.
                </p>
                <Link className="btn btn--ghost" href="/faq">
                  Read the FAQ
                </Link>
              </Reveal>
            </div>

            <Reveal delay={120} className="contact__form">
              <div className="invitation">
                <RegistrationForm
                  idPrefix="contact"
                  title="Send Us A Message"
                  buttonLabel="Send Message"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
