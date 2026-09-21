import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { HERO } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      {/* faint crown watermark behind the copy */}
      <svg
        className="hero__watermark"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#d4a017"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M22 64h56" />
        <path d="M26 64V40l14 9.5L50 26l10 23.5L74 40v24" />
        <circle cx="28" cy="36" r="2.6" />
        <circle cx="50" cy="22" r="2.6" />
        <circle cx="72" cy="36" r="2.6" />
      </svg>

      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="section-label">AI-guided trading · Australia</span>
            <h1 className="hero__title">
              <span className="hero__brand">{HERO.titleLines[0]}</span>
              <br />
              {HERO.titleLines[1]}
            </h1>

            <p className="hero__sub">{HERO.sub}</p>

            <div className="hero__cta">
              <Link className="btn btn--cyan" to={HERO.ctaPrimary.to}>
                {HERO.ctaPrimary.label}
                <Icon name="arrow-right" size={17} />
              </Link>
              <Link className="btn btn--ghost" to={HERO.ctaSecondary.to}>
                {HERO.ctaSecondary.label}
              </Link>
            </div>

            <div className="hero__steps">
              {HERO.steps.map((s, i) => (
                <span key={s}>
                  {i > 0 && <span className="hero__steps-sep">→</span>}
                  {s}
                </span>
              ))}
            </div>

            <div className="hero__trust">
              {HERO.trust.map((t) => (
                <span key={t}>
                  <Icon name="check" size={15} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="invitation">
              <span className="invitation__ornament">
                <Icon name="crown-solid" size={24} />
              </span>
              <RegistrationForm
                idPrefix="hero"
                notice={HERO.formNotice}
                buttonLabel={HERO.formButton}
              />
            </div>

            <div className="seal seal--rating">
              <b>4.7/5</b>
              <small>Member rating</small>
            </div>
            <div className="seal seal--cold">
              <b>97%</b>
              <small>Cold storage</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
