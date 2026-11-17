import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { SIGNAL_FEATURES } from '../data/content.js';

// Bento grid: the hero feature leads wide, the rest tile two-per-row.
export default function FeatureList() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={SIGNAL_FEATURES.title} />
        <div className="bento">
          {SIGNAL_FEATURES.items.map((f, i) => (
            <Reveal
              className={`bento__cell${i === 0 ? ' bento__cell--feature' : ''}`}
              delay={i * 70}
              key={f.title}
            >
              <span className="bento__icon">
                <Icon name={f.icon} size={i === 0 ? 28 : 22} />
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
