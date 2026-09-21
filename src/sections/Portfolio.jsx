import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { PORTFOLIO, ALLOCATION } from '../data/content.js';

// Donut segments: circumference fractions stacked around the circle.
const R = 52;
const C = 2 * Math.PI * R;
let acc = 0;
const SEGMENTS = ALLOCATION.map((a) => {
  const frac = a.pct / 100;
  const seg = { ...a, dash: `${frac * C} ${C}`, offset: -acc * C };
  acc += frac;
  return seg;
});

export default function Portfolio() {
  const { points } = PORTFOLIO.chart;
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={PORTFOLIO.title} lead={PORTFOLIO.lead} />

        <Reveal className="portfolio">
          <div className="portfolio__chart">
            <div className="portfolio__chart-head">
              <span className="portfolio__chart-label">{PORTFOLIO.chart.label}</span>
              <span className="portfolio__chart-ytd">{PORTFOLIO.chart.ytd}</span>
            </div>
            <svg viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0db4e8" stopOpacity="0.22" />
                  <stop offset="1" stopColor="#0db4e8" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[30, 60, 90].map((y) => (
                <line key={y} x1="0" y1={y} x2="600" y2={y} className="portfolio__grid" />
              ))}
              <polygon points={`0,120 ${points} 600,120`} fill="url(#area-fill)" />
              <polyline points={points} className="portfolio__line" />
              <circle cx="600" cy="4" r="4" className="portfolio__dot" />
            </svg>
            <div className="portfolio__axis">
              <span>5 years ago</span>
              <span>Today</span>
            </div>

            <div className="portfolio__mini">
              {PORTFOLIO.cards.map((c) => (
                <div className="portfolio__mini-card" key={c.label}>
                  <span className="portfolio__card-label">{c.label}</span>
                  <span className={`portfolio__card-value tone-${c.tone}`}>{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="portfolio__donut">
            <h3 className="portfolio__donut-title">Balanced vault allocation</h3>
            <div className="portfolio__donut-body">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <circle
                  cx="60"
                  cy="60"
                  r={R}
                  fill="none"
                  stroke="var(--line-soft)"
                  strokeWidth="14"
                />
                {SEGMENTS.map((s) => (
                  <circle
                    key={s.label}
                    cx="60"
                    cy="60"
                    r={R}
                    fill="none"
                    stroke={s.color}
                    strokeWidth="14"
                    strokeDasharray={s.dash}
                    strokeDashoffset={s.offset}
                    transform="rotate(-90 60 60)"
                  />
                ))}
              </svg>
              <ul className="portfolio__legend">
                {ALLOCATION.map((a) => (
                  <li key={a.label}>
                    <span className="portfolio__legend-dot" style={{ background: a.color }} />
                    {a.label}
                    <b>{a.pct}%</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
