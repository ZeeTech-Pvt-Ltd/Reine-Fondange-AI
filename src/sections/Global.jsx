import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { GLOBAL } from '../data/content.js';

// Three ring columns - gold-circled icons, no card borders.
export default function Global() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={GLOBAL.title} lead={GLOBAL.lead} />
        <div className="ring-cols">
          {GLOBAL.items.map((f, i) => (
            <Reveal className="ring-cols__col" delay={i * 70} key={f.title}>
              <span className="ring-cols__icon">
                <Icon name={f.icon} size={26} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
