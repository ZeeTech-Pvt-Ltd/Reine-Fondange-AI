import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { TESTIMONIALS } from '../data/content.js';

const AUTOPLAY_MS = 5000;

// Editorial quote slider - serif pull-quotes on dark cards. One card on
// mobile, two on tablet, three on desktop, with arrows, dots and autoplay.
export default function Testimonials() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [paused, setPaused] = useState(false);
  const pageRef = useRef(0);

  // Visible cards per view comes from the --slides CSS custom property.
  const slides = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 1;
    return parseInt(getComputedStyle(track).getPropertyValue('--slides'), 10) || 1;
  }, []);

  // Distance between the start of one card and the start of the next.
  const step = useCallback(() => {
    const track = trackRef.current;
    const card = track && track.querySelector('.quote-card');
    if (!track || !card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || '24');
    return card.offsetWidth + gap;
  }, []);

  // Recalculate the page count whenever the breakpoint changes.
  useEffect(() => {
    const measure = () => {
      const next = Math.max(1, Math.ceil(TESTIMONIALS.items.length / slides()));
      setPages(next);
      setPage((p) => Math.min(p, next - 1));
      pageRef.current = Math.min(pageRef.current, next - 1);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [slides]);

  const goTo = useCallback(
    (next) => {
      const track = trackRef.current;
      const s = step();
      if (!track || !s) return;
      const clamped = Math.min(Math.max(next, 0), pages - 1);
      // Smooth between neighbours, but jump when autoplay wraps around.
      track.scrollTo({
        left: clamped * slides() * s,
        behavior: clamped === next ? 'smooth' : 'auto',
      });
      setPage(clamped);
      pageRef.current = clamped;
    },
    [pages, slides, step]
  );

  // Keep the active dot in sync with touch swipes and manual scrolling.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let t;
    const sync = () => {
      const s = step();
      if (!s) return;
      const idx = Math.round(track.scrollLeft / s / slides());
      const clamped = Math.min(Math.max(idx, 0), pages - 1);
      setPage(clamped);
      pageRef.current = clamped;
    };
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(sync, 100);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      track.removeEventListener('scroll', onScroll);
    };
  }, [pages, slides, step]);

  // Autoplay, paused while hovering or tabbing into the slider.
  useEffect(() => {
    if (paused || pages < 2) return;
    const id = setInterval(
      () => goTo(pageRef.current + 1 >= pages ? 0 : pageRef.current + 1),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused, pages, goTo]);

  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHead title={TESTIMONIALS.title} lead={TESTIMONIALS.lead} />

        <Reveal>
          <div
            className="quote-slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div
              ref={trackRef}
              className="quote-track"
              aria-roledescription="carousel"
              aria-label="Member testimonials"
            >
              {TESTIMONIALS.items.map((t, i) => (
                <article
                  className="quote-card"
                  aria-label={`Review ${i + 1} of ${TESTIMONIALS.items.length}`}
                  key={t.name}
                >
                  <span className="quote-card__mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <div className="quote-card__stars" role="img" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, s) => (
                      <Icon
                        key={s}
                        name="star"
                        size={13}
                        style={{ color: s < t.stars ? 'var(--gold-bright)' : 'var(--line)' }}
                      />
                    ))}
                  </div>
                  <p className="quote-card__text">{t.text}</p>
                  <div className="quote-card__meta">
                    <img
                      className="quote-card__avatar"
                      src={t.photo}
                      alt={`Portrait of ${t.name}`}
                      loading="lazy"
                      width="40"
                      height="40"
                    />
                    <span>
                      <span className="quote-card__name">{t.name}</span>
                      <span className="quote-card__city">
                        {t.city} · Member since {t.since}
                      </span>
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="quote-nav">
              <button
                type="button"
                className="quote-nav__arrow"
                aria-label="Previous testimonials"
                disabled={page === 0}
                onClick={() => goTo(page - 1)}
              >
                <Icon name="chevron-left" size={20} />
              </button>

              <div className="quote-dots">
                {Array.from({ length: pages }, (_, p) => (
                  <button
                    key={p}
                    type="button"
                    className={`quote-dot${p === page ? ' quote-dot--active' : ''}`}
                    aria-label={`Go to testimonials page ${p + 1}`}
                    aria-current={p === page ? 'true' : undefined}
                    onClick={() => goTo(p)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="quote-nav__arrow"
                aria-label="Next testimonials"
                disabled={page === pages - 1}
                onClick={() => goTo(page + 1)}
              >
                <Icon name="chevron-right" size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
