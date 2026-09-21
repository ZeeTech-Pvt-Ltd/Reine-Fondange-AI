import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqList from '../components/FaqList.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import Icon from '../components/Icon.jsx';
import { FAQS } from '../data/content.js';

// Homepage teaser: the five questions members ask most. Full list lives on /faq.
const FAQS_HOME = FAQS.slice(0, 5);

export default function FaqSection() {
  return (
    <section className="section section--surface">
      <div className="container" style={{ maxWidth: 860 }}>
        <SectionHead
          title="Questions, answered plainly"
          lead="The five things members ask most - before you sign up, not after."
        />
        <Reveal>
          <FaqList items={FAQS_HOME} />
        </Reveal>
        <Reveal className="faq__more">
          <Link className="btn btn--ghost" to="/faq">
            See all FAQs
            <Icon name="arrow-right" size={16} />
          </Link>
        </Reveal>
        <FaqSchema items={FAQS_HOME} />
      </div>
    </section>
  );
}
