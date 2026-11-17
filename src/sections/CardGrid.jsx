import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';

// Generic icon-card section: title + lead over a responsive card grid.
// `cols` maps to the cards-grid--N classes (2, 3 or 4 columns).
export default function CardGrid({ data, cols = 4, surface = false }) {
  return (
    <section className={`section${surface ? ' section--surface' : ''}`}>
      <div className="container">
        <SectionHead title={data.title} lead={data.lead} />
        <div className={`cards-grid cards-grid--${cols}`}>
          {data.items.map((item, i) => (
            <Reveal className="card" delay={i * 70} key={item.title}>
              {item.icon && (
                <span className="card__icon">
                  <Icon name={item.icon} size={24} />
                </span>
              )}
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
