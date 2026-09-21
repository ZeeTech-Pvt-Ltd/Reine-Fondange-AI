import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { ABOUT_SUMMARY } from '../data/content.js';

// Three-column ledger with gold rules - no tabs, everything visible at once.
export default function AboutSummary() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={ABOUT_SUMMARY.title} lead={ABOUT_SUMMARY.lead} />
        <div className="ledger">
          {ABOUT_SUMMARY.groups.map((g, i) => (
            <Reveal className="ledger__col" delay={i * 80} key={g.title}>
              <h3>
                <Icon name={g.icon} size={20} />
                {g.title}
              </h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
