import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { SECURITY_TRANSPARENCY } from '../data/content.js';

// Security cards + mandatory risk notice + CTA, per the approved brief.
export default function SecurityTransparency() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={SECURITY_TRANSPARENCY.title} />
        <div className="cards-grid cards-grid--4">
          {SECURITY_TRANSPARENCY.items.map((item, i) => (
            <Reveal className="card" delay={i * 70} key={item.title}>
              <span className="card__icon">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="risk-note">{SECURITY_TRANSPARENCY.riskNote}</p>
        </Reveal>

        <Reveal style={{ textAlign: 'center', marginTop: 36 }}>
          <Link className="btn btn--cyan" href={SECURITY_TRANSPARENCY.cta.to}>
            {SECURITY_TRANSPARENCY.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
