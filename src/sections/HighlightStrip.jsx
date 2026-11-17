import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { QUICK_HIGHLIGHTS } from '../data/content.js';

// Borderless four-across strip - a fast skim, not another card wall.
export default function HighlightStrip() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={QUICK_HIGHLIGHTS.title} />
        <div className="highlight-strip">
          {QUICK_HIGHLIGHTS.items.map((item, i) => (
            <Reveal className="highlight" delay={i * 70} key={item.title}>
              <span className="highlight__icon">
                <Icon name={item.icon} size={20} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
