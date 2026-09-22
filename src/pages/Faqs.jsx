import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import FaqList from '../components/FaqList.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import { SITE } from '../data/content.js';

export default function Faqs() {
  useMeta({
    title: 'FAQ | Reine Fondange AI - Your Questions, Answered Plainly',
    description:
      'Deposits, withdrawals, security, KYC, fees and more - the most common Reine Fondange AI questions answered in plain English.',
    path: '/faq',
    keywords: ['Reine Fondange AI FAQ', 'trading platform questions', 'minimum deposit Australia'],
  });

  return (
    <div className="section section--deep">
      <div className="container" style={{ maxWidth: 860 }}>
        <Reveal>
          <span className="section-label">FAQ</span>
          <h1 className="section-title" style={{ marginBottom: 16 }}>
            Questions, Answered Plainly
          </h1>
          <p className="section-lead" style={{ marginBottom: 48 }}>
            Everything members ask us most - before you sign up, not after.
          </p>
        </Reveal>
        <Reveal>
          <FaqList />
        </Reveal>
        <FaqSchema />
        <Reveal style={{ textAlign: 'center', marginTop: 56 }}>
          <p className="section-lead" style={{ marginBottom: 20 }}>
            Still curious? Email {SITE.email} - a human replies within one business day.
          </p>
          <Link className="btn btn--cyan" to="/sign-up">
            Sign Up now
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
