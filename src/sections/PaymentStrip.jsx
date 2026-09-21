import Reveal from '../components/Reveal.jsx';
import { PAYMENTS } from '../data/content.js';

// Simplified brand-style marks drawn inline (no external assets).
const MARKS = {
  Visa: (
    <svg viewBox="0 0 70 22" aria-hidden="true">
      <text
        x="35"
        y="17"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontStyle="italic"
        fontSize="18"
        fill="#e9eef5"
      >
        VISA
      </text>
    </svg>
  ),
  Mastercard: (
    <svg viewBox="0 0 40 24" aria-hidden="true">
      <circle cx="14" cy="12" r="10" fill="#eb001b" />
      <circle cx="26" cy="12" r="10" fill="#f79e1b" />
      <path
        d="M20 5.5a10 10 0 010 13 10 10 0 000-13z"
        fill="#ff5f00"
        fillOpacity="0.85"
      />
    </svg>
  ),
  PayPal: (
    <svg viewBox="0 0 80 22" aria-hidden="true">
      <text
        x="40"
        y="17"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontStyle="italic"
        fontSize="18"
      >
        <tspan fill="#dfe7f2">Pay</tspan>
        <tspan fill="#4db8ff">Pal</tspan>
      </text>
    </svg>
  ),
  'Bank transfer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="#16c784" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10v8M10 10v8M14 10v8M19 10v8" />
      <path d="M3 20h18" />
    </svg>
  ),
};

export default function PaymentStrip() {
  return (
    <section className="section section--surface payments">
      <div className="container">
        <Reveal className="payments__inner">
          <p className="payments__title">{PAYMENTS.title}</p>
          <div className="payments__row">
            {PAYMENTS.methods.map((m) => (
              <span className="payments__chip" key={m}>
                {MARKS[m] || null}
                <span>{m}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
