import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';

// Numbered four-step section (gold step badges) with an optional CTA.
export default function StepsGrid({ data, cta }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={data.title} lead={data.lead} />
        <div className="hiw-steps hiw-steps--4">
          {data.items.map((s, i) => (
            <Reveal className="hiw-steps__item" delay={i * 80} key={s.title}>
              <span className="hiw-steps__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.text}</p>
            </Reveal>
          ))}
        </div>
        {cta && (
          <Reveal style={{ textAlign: 'center', marginTop: 44 }}>
            <Link className="btn btn--cyan" href={cta.to}>
              {cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
