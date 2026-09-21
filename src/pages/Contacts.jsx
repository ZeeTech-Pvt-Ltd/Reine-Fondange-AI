import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { CONTACTS, SITE } from '../data/content.js';

const CARDS = [
  { icon: 'mail', title: 'Email us', text: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'headset', title: 'Support hours', text: CONTACTS.support },
  { icon: 'lock', title: 'Security', text: CONTACTS.security },
];

export default function Contacts() {
  useMeta({
    title: 'Contact Us | Reine Fondange AI - Talk to a Human',
    description:
      'Questions about Reine Fondange AI? Email our Australia-based support team - real humans reply within one business day.',
    path: '/contact-us',
    keywords: ['contact Reine Fondange AI', 'Reine Fondange AI support', 'trading platform help Australia'],
  });

  return (
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
              <Link className="btn btn--ghost" to="/faq">
                Read the FAQ
              </Link>
            </Reveal>
          </div>

          <Reveal delay={120} className="contact__form">
            <div className="invitation">
              <span className="invitation__ornament">
                <Icon name="crown-solid" size={24} />
              </span>
              <RegistrationForm
                idPrefix="contact"
                title="Send us a message"
                buttonLabel="Send Message"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
