import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { RISK_MANAGEMENT } from '../data/content.js';

// Centered editorial band on risk - copy plus three guardrail pills.
export default function RiskManagement() {
  return (
    <section className="section section--surface">
      <div className="container" style={{ maxWidth: 860 }}>
        <Reveal style={{ textAlign: 'center' }}>
          <h2 className="section-title">{RISK_MANAGEMENT.title}</h2>
          <p className="section-lead">{RISK_MANAGEMENT.copy}</p>
          <div className="pill-row">
            {RISK_MANAGEMENT.pills.map((p) => (
              <span className="pill" key={p}>
                <Icon name="shield-check" size={15} />
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
