import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Icon from '../components/Icon.jsx';

export default function SignIn() {
  useMeta({
    title: 'Sign In | Reine Fondange AI',
    description:
      'Existing Reine Fondange AI members sign in through the secure link sent after registration.',
    path: '/sign-in',
    keywords: ['Reine Fondange AI sign in', 'Reine Fondange AI login'],
  });

  return (
    <section className="section section--deep">
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="page-hero__glow" />
      </div>
      <div className="container" style={{ maxWidth: 560 }}>
        <div className="card" style={{ textAlign: 'center', padding: 48 }}>
          <span className="card__icon" style={{ margin: '0 auto 16px' }}>
            <Icon name="lock" size={26} />
          </span>
          <h1 className="section-title" style={{ fontSize: 26, marginBottom: 12 }}>
            Secure sign-in
          </h1>
          <p className="card__text">
            After registration you receive a secure sign-in link by email. Members sign in
            through that link - there are no passwords to lose or reuse.
          </p>
          <p className="card__text" style={{ marginTop: 12 }}>
            New here? Opening an account takes two minutes.
          </p>
          <Link className="btn btn--cyan" to="/sign-up" style={{ marginTop: 24 }}>
            Sign Up now
            <Icon name="arrow-right" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
