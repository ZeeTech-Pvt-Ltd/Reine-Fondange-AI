import RegistrationForm from '../components/RegistrationForm.jsx';
import useMeta from '../hooks/useMeta.js';
import Icon from '../components/Icon.jsx';
import { SITE } from '../data/content.js';

export default function SignUp() {
  useMeta({
    title: 'Sign Up | Open a Reine Fondange AI Account Today',
    description:
      'Open your Reine Fondange AI account in minutes. Join 42M+ members worldwide, fund from A$250 and let guided trading do the heavy lifting.',
    path: '/sign-up',
    keywords: [
      'Reine Fondange AI sign up',
      'open trading account Australia',
      'AI trading registration',
      'Reine Fondange AI register',
    ],
  });

  return (
    <section className="section section--deep">
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="page-hero__glow" />
      </div>
      <div className="container" style={{ maxWidth: 520 }}>
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: 28, marginBottom: 32 }}>
          Open your Reine Fondange AI account
        </h1>
        <div className="invitation">
          <span className="invitation__ornament">
            <Icon name="crown-solid" size={24} />
          </span>
          <RegistrationForm idPrefix="signup" />
        </div>
        <p className="form__note" style={{ marginTop: 20 }}>
          {SITE.tagline} · Minimum deposit A$250
        </p>
      </div>
    </section>
  );
}
