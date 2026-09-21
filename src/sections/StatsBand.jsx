import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { STATS } from '../data/content.js';

// Counts from 0 up to the target when the cell scrolls into view.
function CountUp({ text }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  const m = text.match(/(.*?)([\d.,]+)(.*)/);
  const prefix = m ? m[1] : '';
  const target = m ? parseFloat(m[2].replace(/,/g, '')) : NaN;
  const suffix = m ? m[3] : '';

  useEffect(() => {
    if (isNaN(target)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 900;
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  const shown = isNaN(target)
    ? text
    : `${prefix}${new Intl.NumberFormat('en-AU', { maximumFractionDigits: target < 10 ? 1 : 0 }).format(val)}${suffix}`;

  return (
    <div className="stats__value" ref={ref}>
      {shown}
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <Reveal className="stats__cell" delay={i * 80} key={s.label}>
              <CountUp text={s.value} />
              <div className="stats__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
