import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { CTA_BAND } from '../data/content.js';

// Crest composition - gold-ringed crown seal over a burgundy band.
export default function FinalCta() {
  return (
    <section className="section final-cta">
      <div className="container">
        <Reveal>
          <span className="crest">
            <Icon name="crown" size={40} />
          </span>
          <h2 className="section-title">{CTA_BAND.title}</h2>
          <p className="section-lead">{CTA_BAND.lead}</p>
          <div className="final-cta__actions">
            <Link className="btn btn--cyan" to={CTA_BAND.cta.to}>
              {CTA_BAND.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
            <Link className="btn btn--ghost" to="/faq">
              Read the FAQ
            </Link>
          </div>
          <p className="form__note final-cta__note">{CTA_BAND.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
