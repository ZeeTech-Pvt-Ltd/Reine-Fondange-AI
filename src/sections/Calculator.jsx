import { useState } from 'react';
import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { CALCULATOR } from '../data/content.js';

// A$ prefix matches the site's copy ("A$250" etc.) - en-AU renders plain "$".
const aud = (n) => `A$${new Intl.NumberFormat('en-AU', { maximumFractionDigits: 0 }).format(n)}`;

// Compound projection: monthly-compounded growth of the lump sum plus regular top-ups.
const project = ({ deposit, monthly, years, rate }) => {
  const r = rate / 100 / 12;
  const n = years * 12;
  const fv = deposit * Math.pow(1 + r, n) + monthly * ((Math.pow(1 + r, n) - 1) / r);
  const monthlyIncome = fv * (rate / 100) / 12;
  return { balance: Math.round(fv), income: Math.round(monthlyIncome) };
};

export default function Calculator() {
  const [deposit, setDeposit] = useState(CALCULATOR.defaults.deposit);
  const [monthly, setMonthly] = useState(CALCULATOR.defaults.monthly);

  // Return rate and horizon are fixed (as on the reference site).
  const { income } = project({
    deposit,
    monthly,
    years: CALCULATOR.defaults.years,
    rate: CALCULATOR.defaults.rate,
  });

  const sliders = [
    { key: 'deposit', label: 'Initial investment', value: deposit, fmt: aud(deposit), set: setDeposit, range: CALCULATOR.ranges.deposit },
    { key: 'monthly', label: 'Reinvestment', value: monthly, fmt: aud(monthly), set: setMonthly, range: CALCULATOR.ranges.monthly },
  ];

  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={CALCULATOR.title} lead={CALCULATOR.lead} />

        <Reveal className="calc">
          <div className="calc__controls">
            {sliders.map((s) => {
              const pct = ((s.value - s.range.min) / (s.range.max - s.range.min)) * 100;
              return (
                <div className="calc__row" key={s.key}>
                  <div className="calc__row-head">
                    <label htmlFor={`calc-${s.key}`}>
                      {s.label} <b>{s.fmt}</b>
                    </label>
                  </div>
                  <input
                    id={`calc-${s.key}`}
                    type="range"
                    min={s.range.min}
                    max={s.range.max}
                    step={s.range.step}
                    value={s.value}
                    onChange={(e) => s.set(Number(e.target.value))}
                    style={{
                      background: `linear-gradient(90deg, var(--cyan) ${pct}%, var(--surface-2) ${pct}%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="calc__output">
            <span className="calc__output-label">Projected monthly income</span>
            <span className="calc__output-value">{aud(income)}</span>
            <span className="calc__output-sub">
              With {aud(monthly)} reinvested · {aud(income)}/mo
            </span>
            <Link className="btn btn--cyan calc__cta" to="/sign-up">
              Sign Up now
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <p className="calc__note">{CALCULATOR.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
