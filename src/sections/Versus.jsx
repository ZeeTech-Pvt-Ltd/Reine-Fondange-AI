import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { VERSUS } from '../data/content.js';

// With vs without comparison - muted column against the gold-accented one.
export default function Versus() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={VERSUS.title} />
        <div className="versus">
          <Reveal className="versus__side versus__side--without">
            <h3>Without Reine Fondange AI</h3>
            <ul>
              {VERSUS.without.map((item) => (
                <li key={item}>
                  <Icon name="close" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="versus__side versus__side--with" delay={100}>
            <h3>With Reine Fondange AI</h3>
            <ul>
              {VERSUS.with.map((item) => (
                <li key={item}>
                  <Icon name="check" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
