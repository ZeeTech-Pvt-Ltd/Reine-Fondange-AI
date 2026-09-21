import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
  useMeta({
    title: 'Page Not Found | Reine Fondange AI',
    description: 'The page you were looking for does not exist.',
    path: '/404',
    keywords: [],
  });

  return (
    <section className="section section--deep" style={{ textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 560 }}>
        <h1 className="section-title" style={{ fontSize: 64, color: 'var(--cyan)' }}>
          404
        </h1>
        <p className="section-lead" style={{ marginBottom: 32 }}>
          This page has drifted off the charts. The homepage is still right where you left it.
        </p>
        <Link className="btn btn--cyan" to="/">
          Back to the homepage
          <Icon name="arrow-right" size={17} />
        </Link>
      </div>
    </section>
  );
}
