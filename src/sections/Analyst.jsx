import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { ANALYST } from '../data/content.js';

// "Two minds" panel: engine and analyst face each other across a gradient
// rail with a spark; the control strip runs underneath. Also reused on
// the How It Works page via the named export.
export function AnalystFlow() {
  const [engine, human, control] = ANALYST.items;
  return (
    <Reveal className="analyst">
      <div className="analyst__side">
        <span className="analyst__badge">Engine</span>
        <span className="card__icon">
          <Icon name={engine.icon} size={24} />
        </span>
        <h3 className="card__title">{engine.title}</h3>
        <p className="card__text">{engine.text}</p>
      </div>

      <div className="analyst__mid">
        <div className="analyst__spark">
          <Icon name="zap" size={20} />
        </div>
      </div>

      <div className="analyst__side">
        <span className="analyst__badge">Human analyst</span>
        <span className="card__icon">
          <Icon name={human.icon} size={24} />
        </span>
        <h3 className="card__title">{human.title}</h3>
        <p className="card__text">{human.text}</p>
      </div>

      <div className="analyst__control">
        <Icon name="check" size={18} />
        <span>
          <b>{control.title}</b> - {control.text}
        </span>
      </div>
    </Reveal>
  );
}

export default function Analyst() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={ANALYST.title} lead={ANALYST.lead} />
        <AnalystFlow />
      </div>
    </section>
  );
}
