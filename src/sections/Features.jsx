import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { FEATURES } from '../data/content.js';

// Compact icon-first tiles (no white card borders) - visually distinct
// from the card grids used elsewhere on the page.
export default function Features() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={FEATURES.title} lead={FEATURES.lead} />
        <div className="features">
          {FEATURES.items.map((f, i) => (
            <Reveal className="features__tile" delay={i * 60} key={f.title}>
              <span className="card__icon">
                <Icon name={f.icon} size={22} />
              </span>
              <div>
                <h3 className="card__title">{f.title}</h3>
                <p className="card__text">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
