import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { SIGNALS_WORK } from '../data/content.js';

// Vertical process flow - dashed gold thread linking the four stages.
export default function SignalFlow() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={SIGNALS_WORK.title} lead={SIGNALS_WORK.lead} />
        <Reveal className="timeline timeline--center">
          {SIGNALS_WORK.items.map((s, i) => (
            <div className="timeline__row" key={s.title}>
              <span className="timeline__node">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
