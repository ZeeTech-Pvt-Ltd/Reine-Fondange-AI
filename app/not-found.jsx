import Link from 'next/link';
import Icon from '../src/components/Icon.jsx';

export default function NotFound() {
  return (
    <section className="section section--deep" style={{ textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 560 }}>
        <h1 className="section-title" style={{ fontSize: 64, color: 'var(--cyan)' }}>
          404
        </h1>
        <p className="section-lead" style={{ marginBottom: 32 }}>
          This page has drifted off the charts. The homepage is still right where you left it.
        </p>
        <Link className="btn btn--cyan" href="/">
          Back to the homepage
          <Icon name="arrow-right" size={17} />
        </Link>
      </div>
    </section>
  );
}
