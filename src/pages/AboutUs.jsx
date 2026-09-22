import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { STATS } from '../data/content.js';

const PILLARS = [
  {
    icon: 'shield-check',
    title: 'Security First',
    text: 'Every decision starts from one question: what keeps member assets safest? Custody, encryption and controls follow from there.',
  },
  {
    icon: 'eye',
    title: 'Radical Transparency',
    text: 'Real-time statements, published fees and third-party audits. If we would not show it to our own families, we do not ship it.',
  },
  {
    icon: 'users',
    title: 'Built For Humans',
    text: 'Plain English, honest risk notes and support from real people. Trading platforms should calm you down, not hype you up.',
  },
];

export default function AboutUs() {
  useMeta({
    title: 'About Us | Reine Fondange AI - Elegant Trading for Australia',
    description:
      'Reine Fondange AI was built to make trading structured, secure and composed - for everyone in Australia, not just insiders.',
    path: '/about-us',
    keywords: ['about Reine Fondange AI', 'Australian trading company', 'secure trading platform Australia'],
  });

  return (
    <div className="section section--deep">
      <div className="container">
        <Reveal>
          <span className="section-label">About us</span>
          <h1 className="section-title" style={{ maxWidth: 720, marginBottom: 20 }}>
            Trading Should Feel <em>Composed, Clear And Fair</em> - For Everyone
          </h1>
          <p className="section-lead" style={{ maxWidth: 720 }}>
            Reine Fondange AI was founded on a simple frustration: trading platforms were either
            chaotic casinos or faceless apps. We built the platform we wished existed -
            clear risk settings, regulated standards and copy a normal person can actually read.
          </p>
        </Reveal>

        <div className="stats section--transparent" style={{ marginTop: 120 }}>
          <div className="stats__grid">
            {STATS.map((s, i) => (
              <Reveal className="stats__cell" delay={i * 80} key={s.label}>
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 64 }}>
        <SectionHead title="What We Stand On" lead="Three principles run through every product, page and policy." />
        <div className="cards-grid cards-grid--3">
          {PILLARS.map((p, i) => (
            <Reveal className="card" delay={i * 70} key={p.title}>
              <span className="card__icon">
                <Icon name={p.icon} size={24} />
              </span>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__text">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ textAlign: 'center', marginTop: 56 }}>
          <Link className="btn btn--cyan" to="/sign-up">
            Join Reine Fondange AI
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
