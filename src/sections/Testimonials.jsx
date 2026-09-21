import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { TESTIMONIALS } from '../data/content.js';

// Static editorial quote wall - serif pull-quotes on cream cards, no carousel.
export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHead title={TESTIMONIALS.title} lead={TESTIMONIALS.lead} />

        <div className="quote-grid">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal className="quote-card" delay={i * 60} key={t.name}>
              <span className="quote-card__mark" aria-hidden="true">
                &ldquo;
              </span>
              <div className="quote-card__stars" role="img" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, s) => (
                  <Icon
                    key={s}
                    name="star"
                    size={13}
                    style={{ color: s < t.stars ? 'var(--gold-bright)' : 'var(--line)' }}
                  />
                ))}
              </div>
              <p className="quote-card__text">{t.text}</p>
              <div className="quote-card__meta">
                <span className="quote-card__avatar">{t.name.charAt(0)}</span>
                <span>
                  <span className="quote-card__name">{t.name}</span>
                  <span className="quote-card__city">
                    {t.city} · Member since {t.since}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
