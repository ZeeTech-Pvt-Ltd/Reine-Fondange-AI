import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { THREE_STEPS, HERO } from '../data/content.js';

// Gold-threaded timeline + invitation form side by side - the conversion
// point sits right against the steps instead of waiting for the page end.
export default function ThreeSteps() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={THREE_STEPS.title} lead={THREE_STEPS.lead} />
        <div className="steps-split">
          <Reveal className="timeline">
            {THREE_STEPS.items.map((s, i) => (
              <div className="timeline__row" key={s.title}>
                <span className="timeline__node">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="steps__form" delay={120}>
            <div className="invitation">
              <span className="invitation__ornament">
                <Icon name="crown-solid" size={24} />
              </span>
              <RegistrationForm
                idPrefix="steps"
                notice={HERO.formNotice}
                buttonLabel={HERO.formButton}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
