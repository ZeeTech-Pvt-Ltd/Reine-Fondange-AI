import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { TRANSPARENCY } from '../data/content.js';

// One cohesive panel split into four vertical cells instead of four separate cards.
export default function Transparency() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={TRANSPARENCY.title} lead={TRANSPARENCY.lead} />
        <Reveal className="transparency__panel">
          {TRANSPARENCY.items.map((f) => (
            <div className="transparency__cell" key={f.title}>
              <span className="card__icon">
                <Icon name={f.icon} size={22} />
              </span>
              <h3 className="card__title">{f.title}</h3>
              <p className="card__text">{f.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
