import RegistrationForm from '../../src/components/RegistrationForm.jsx';
import BreadcrumbSchema from '../../src/components/BreadcrumbSchema.jsx';
import { SITE } from '../../src/data/content.js';

export const metadata = {
  title: 'Sign Up | Open a Reine Fondange AI Account Today',
  description:
    'Open your Reine Fondange AI account in minutes. Join 42M+ members worldwide, fund from A$250 and let guided trading do the heavy lifting.',
  keywords:
    'Reine Fondange AI, AI trading platform, crypto trading Australia, AI trading signals, secure trading platform, Reine Fondange AI sign up, open trading account Australia, AI trading registration, Reine Fondange AI register',
  openGraph: {
    title: 'Sign Up | Open a Reine Fondange AI Account Today',
    description:
      'Open your Reine Fondange AI account in minutes. Join 42M+ members worldwide, fund from A$250 and let guided trading do the heavy lifting.',
    url: '/sign-up',
    type: 'website',
    siteName: 'Reine Fondange AI',
    locale: 'en_AU',
    images: ['/og-image.svg'],
  },
  twitter: {
    title: 'Sign Up | Open a Reine Fondange AI Account Today',
    description:
      'Open your Reine Fondange AI account in minutes. Join 42M+ members worldwide, fund from A$250 and let guided trading do the heavy lifting.',
    images: ['/og-image.svg'],
  },
  alternates: { canonical: '/sign-up' },
};

export default function SignUp() {
  return (
    <>
      <BreadcrumbSchema path="/sign-up" label="Sign Up" />
      <section className="section section--deep">
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div className="page-hero__glow" />
        </div>
        <div className="container" style={{ maxWidth: 520 }}>
          <h1 className="section-title" style={{ textAlign: 'center', fontSize: 28, marginBottom: 32 }}>
            Open Your Reine Fondange AI Account
          </h1>
          <div className="invitation">
            <RegistrationForm idPrefix="signup" />
          </div>
          <p className="form__note" style={{ marginTop: 20 }}>
            {SITE.tagline} · Minimum deposit A$250
          </p>
        </div>
      </section>
    </>
  );
}
