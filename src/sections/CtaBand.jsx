import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { CTA_BAND } from '../data/content.js';

export default function CtaBand() {
  return (
    <section className="section cta-band">
      <div className="container">
        <Reveal className="cta-band__inner">
          <h2 className="section-title">{CTA_BAND.title}</h2>
          <p className="section-lead">{CTA_BAND.lead}</p>
          <Link className="btn btn--cyan" to={CTA_BAND.cta.to}>
            {CTA_BAND.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
          <p className="form__note cta-band__note">{CTA_BAND.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
