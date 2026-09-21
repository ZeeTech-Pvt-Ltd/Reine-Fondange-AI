import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { SECURITY } from '../data/content.js';

// Split layout: sticky intro on the left, security measures as a divider list on the right.
export default function Security() {
  return (
    <section className="section section--deep">
      <div className="container">
        <div className="security__grid">
          <div className="security__copy">
            <SectionHead align="left" title={SECURITY.title} lead={SECURITY.lead} />
            <Link className="btn btn--ghost" to="/why-invest">
              Why invest with us
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>

          <div className="security__list">
            {SECURITY.items.map((f, i) => (
              <Reveal className="security__row" delay={i * 60} key={f.title}>
                <span className="security__icon">
                  <Icon name={f.icon} size={20} />
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
