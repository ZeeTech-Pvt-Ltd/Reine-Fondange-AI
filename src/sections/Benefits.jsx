import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { BENEFITS } from '../data/content.js';

// Editorial numbered list - like a table of contents, not a card grid.
export default function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <div className="editorial">
          <Reveal className="editorial__side">
            <span className="section-label">Why members stay</span>
            <h2 className="section-title">{BENEFITS.title}</h2>
            <p className="section-lead">{BENEFITS.lead}</p>
            <Link className="btn btn--cyan" to="/sign-up">
              Sign Up now
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>

          <div className="editorial__rows">
            {BENEFITS.items.map((f, i) => (
              <Reveal className="editorial__row" delay={i * 60} key={f.title}>
                <span className="editorial__num">{String(i + 1).padStart(2, '0')}</span>
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
