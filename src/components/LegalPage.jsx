import useMeta from '../hooks/useMeta.js';
import Icon from './Icon.jsx';
import { SITE } from '../data/content.js';

// Template legal copy - needs lawyer review before launch.

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export default function LegalPage({ content, path }) {
  useMeta({
    title: content.seoTitle || `${content.title} | ${SITE.name}`,
    description:
      content.description ||
      `${content.title} for the ${SITE.name} trading platform - secure crypto investing for Australia.`,
    path,
    keywords: content.keywords || [],
  });

  return (
    <div className="section section--deep">
      <div className="container legal">
        <article className="legal__body">
          <header className="legal__head">
            <span className="section-label">{content.title}</span>
            <h1 className="section-title">{content.title}</h1>
            <span className="legal__updated">
              <Icon name="clock" size={14} />
              {content.updated}
            </span>
          </header>

          {content.sections.map((s, i) => (
            <section key={s.h} id={slugify(s.h)} className="legal__section">
              <div className="legal__section-head">
                <span className="legal__num">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.h.replace(/^\d+\.\s*/, '')}</h2>
              </div>
              <p>{s.p}</p>
              {s.items && (
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <p className="legal__help">
            Questions about this document? Email{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </article>
      </div>
    </div>
  );
}
