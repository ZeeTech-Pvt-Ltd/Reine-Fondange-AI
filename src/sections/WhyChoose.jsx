import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { WHY_CHOOSE } from '../data/content.js';

// Sticky intro column beside a 2x2 grid of compact benefit cards.
export default function WhyChoose() {
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="why-split">
          <Reveal className="why-split__intro">
            <span className="section-label">Why choose us</span>
            <h2 className="section-title">{WHY_CHOOSE.title}</h2>
            <p className="section-lead">{WHY_CHOOSE.lead}</p>
            <Link className="btn btn--ghost" href="/sign-up">
              Create Your Free Account
              <Icon name="arrow-right" size={16} />
            </Link>
          </Reveal>

          <div className="why-cards">
            {WHY_CHOOSE.items.map((item, i) => (
              <Reveal className="why-card" delay={i * 80} key={item.title}>
                <span className="why-card__icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
