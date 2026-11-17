import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { MARKETS } from '../data/content.js';

// Centered market tiles - gold-ring icons, no card chrome.
export default function Markets() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={MARKETS.title} lead={MARKETS.lead} />
        <div className="market-tiles">
          {MARKETS.items.map((m, i) => (
            <Reveal className="market-tile" delay={i * 80} key={m.title}>
              <span className="market-tile__icon">
                <Icon name={m.icon} size={26} />
              </span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
