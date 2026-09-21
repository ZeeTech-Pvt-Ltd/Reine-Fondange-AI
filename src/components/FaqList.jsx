import { useState } from 'react';
import Icon from './Icon.jsx';
import { FAQS } from '../data/content.js';

// Panel-card accordion (Austerio Smart style): rounded cards, soft shadow,
// accent chevron that flips when open. Adapted to the dark cyan theme.
export default function FaqList({ items = FAQS }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq__list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
            <button
              className="faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <Icon name="chevron" size={18} className="faq__chevron" />
            </button>
            <div className="faq__a">
              <p className="faq__a-inner">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
