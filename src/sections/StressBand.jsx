import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import { STRESS_BAND } from '../data/content.js';

const COINS = [
  { icon: '/coins/bitcoin-btc.svg', name: 'Bitcoin', ticker: 'BTC', price: 'A$102,480', change: '+2.4%', up: true },
  { icon: '/coins/ethereum-eth.svg', name: 'Ethereum', ticker: 'ETH', price: 'A$5,290', change: '+1.1%', up: true },
  { icon: '/coins/dogecoin-doge.svg', name: 'Dogecoin', ticker: 'DOGE', price: 'A$0.52', change: '+3.1%', up: true },
];

export default function StressBand() {
  return (
    <section className="section stress">
      <div className="container">
        <Reveal className="stress__head">
          <span className="section-label">Composure</span>
          <h2 className="section-title">{STRESS_BAND.title}</h2>
          <p className="section-lead">{STRESS_BAND.copy}</p>
        </Reveal>

        <div className="coin-plates">
          {COINS.map((c, i) => (
            <Reveal className="coin-plate" delay={i * 90} key={c.ticker}>
              <span className="coin-plate__sym">
                <img src={c.icon} alt={`${c.name} logo`} loading="lazy" />
              </span>
              <div className="coin-plate__id">
                {c.name}
                <small>{c.ticker}</small>
              </div>
              <div className="coin-plate__quote">
                <b>{c.price}</b>
                <span className={c.up ? 'up' : 'down'}>{c.change}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ textAlign: 'center', marginTop: 44 }}>
          <Link className="btn btn--cyan" to={STRESS_BAND.cta.to}>
            {STRESS_BAND.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
