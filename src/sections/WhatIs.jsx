import Reveal from '../components/Reveal.jsx';
import { WHAT_IS } from '../data/content.js';

// Split definition: copy on the left, a real-looking signal alert on the
// right so the product explains itself at a glance.
export default function WhatIs() {
  const ex = WHAT_IS.example;
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="what-split">
          <Reveal>
            <span className="section-label">What is Reine Fondange AI</span>
            <h2 className="section-title">{WHAT_IS.title}</h2>
            <p className="section-lead">{WHAT_IS.definition}</p>
            <p className="section-lead">{WHAT_IS.copy}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="signal-card">
              <div className="signal-card__head">
                <span className="signal-card__pair">{ex.pair}</span>
                <span className="signal-card__badge">{ex.action}</span>
              </div>
              <div className="signal-card__levels">
                <div>
                  <small>Entry</small>
                  <b>{ex.entry}</b>
                </div>
                <div>
                  <small>Stop-loss</small>
                  <b className="down">{ex.stopLoss}</b>
                </div>
                <div>
                  <small>Take-profit</small>
                  <b className="up">{ex.takeProfit}</b>
                </div>
              </div>
              <p className="signal-card__reason">
                <strong>Why:</strong> {ex.reason}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
