import Link from 'next/link';
import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { HERO } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="section-label">{HERO.label}</span>
            <h1 className="hero__title">{HERO.h1}</h1>

            <p className="hero__sub">{HERO.sub}</p>

            <div className="hero__cta">
              <Link className="btn btn--cyan" href={HERO.ctaPrimary.to}>
                {HERO.ctaPrimary.label}
                <Icon name="arrow-right" size={17} />
              </Link>
            </div>

            <p className="hero__micro">{HERO.micro}</p>
          </div>

          <div className="hero__visual">
            <div className="invitation">
              <RegistrationForm
                idPrefix="hero"
                notice={HERO.formNotice}
                buttonLabel={HERO.formButton}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
