import { useEffect, useRef, useState } from 'react';
import { MARKET_TICKER } from '../data/content.js';

// Live-feel ticker: a seamless scrolling marquee of indicative quotes whose
// prices random-walk around their base values every few seconds.
// Display purposes only - clearly not real market data.

const parseVal = (s) => parseFloat(s.replace(/[^0-9.]/g, ''));

const fmt = (n, d) =>
  `A$${n.toLocaleString('en-AU', { minimumFractionDigits: d, maximumFractionDigits: d })}`;

export default function MarketTicker() {
  const ref = useRef(null);

  // Marquee only runs while the strip is on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle('is-playing', entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const [quotes, setQuotes] = useState(() =>
    MARKET_TICKER.map((t) => ({
      ...t,
      base: parseVal(t.v),
      price: parseVal(t.v),
    }))
  );

  // Simulate live quotes: small random steps, gently mean-reverting so the
  // change % never drifts far from the starting figures.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setQuotes((qs) =>
        qs.map((q) => {
          let delta = (Math.random() - 0.5) * 0.009;
          const next = q.price * (1 + delta);
          const pct = ((next - q.base) / q.base) * 100;
          if (pct > 3.5) delta -= 0.009;
          if (pct < -3.5) delta += 0.009;
          const price = q.price * (1 + delta);
          const change = ((price - q.base) / q.base) * 100;
          return {
            ...q,
            price,
            dir: change >= 0 ? 'up' : 'down',
            change: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`,
          };
        })
      );
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // Render the list twice so the translateX(-50%) loop is seamless.
  const items = [...quotes, ...quotes];

  return (
    <div className="market-ribbon ticker" ref={ref} aria-hidden="true">
      <div className="ticker__viewport">
        {items.map((t, i) => (
          <span className="ticker__item" key={i}>
            <img className="ticker__coin" src={t.icon} alt={`${t.k} logo`} loading="lazy" />
            <b>{t.k}</b>
            <span className="ticker__price">{fmt(t.price, t.d)}</span>
            <span className={`ticker__change ${t.dir}`}>{t.change}</span>
            <span className="ticker__sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
