import Reveal from '../components/Reveal.jsx';
import { EXCHANGES } from '../data/content.js';

// Partner badge images in a static row.
export default function PartnersStrip() {
  return (
    <section className="exchanges" aria-label="Supported exchanges">
      <div className="container">
        <Reveal>
          <p className="exchanges__label">{EXCHANGES.label}</p>
          <div className="exchanges__row">
            {EXCHANGES.partners.map((src, i) => (
              <img
                className="exchanges__badge"
                key={src}
                src={src}
                alt={`Partner ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
