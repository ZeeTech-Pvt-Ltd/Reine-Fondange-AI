import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqList from '../components/FaqList.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import Icon from '../components/Icon.jsx';
import { HOME_FAQS } from '../data/content.js';

// Homepage FAQ block - the brief's nine questions. Full list lives on /faq.
export default function FaqSection() {
  return (
    <section className="section section--surface">
      <div className="container" style={{ maxWidth: 860 }}>
        <SectionHead
          title="FAQs"
          lead="The things members ask us most - before you sign up, not after."
        />
        <Reveal>
          <FaqList items={HOME_FAQS} />
        </Reveal>
        <Reveal className="faq__more">
          <Link className="btn btn--ghost" href="/faq">
            See all FAQs
            <Icon name="arrow-right" size={16} />
          </Link>
        </Reveal>
        <FaqSchema items={HOME_FAQS} />
      </div>
    </section>
  );
}
