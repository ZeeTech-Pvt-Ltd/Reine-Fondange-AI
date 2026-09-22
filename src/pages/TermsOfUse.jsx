import LegalPage from '../components/LegalPage.jsx';

const CONTENT = {
  title: 'Terms of Use',
  updated: 'Last updated: September 2026',
  keywords: ['Reine Fondange AI terms of use', 'platform terms Australia'],
  sections: [
    {
      h: '1. Agreement',
      p: 'By using reinefondange-ai.com and the Reine Fondange AI platform you agree to these Terms of Use. If you do not agree, please do not use the service. These terms apply alongside our Privacy Policy and Risk Disclosure, which form part of the agreement between us.',
    },
    {
      h: '2. Eligibility',
      p: 'You must be at least 18 years old and a verified resident of Australia to open an account. By registering you confirm that all information you provide is accurate, current and complete, and that you are not acting on behalf of a sanctioned person or entity.',
    },
    {
      h: '3. Your Account',
      p: 'You are responsible for keeping your sign-in link and credentials secure and for all activity under your account. Notify us immediately of any unauthorised access. We may suspend an account where we suspect fraud, misuse or a breach of these terms.',
    },
    {
      h: '4. Deposits And Withdrawals',
      p: 'The minimum deposit is A$250. Deposits are credited once cleared, and withdrawals are returned only to an account in your name. Withdrawal requests are usually processed within one business day, subject to security checks and identity verification.',
    },
    {
      h: '5. Fees',
      p: 'Opening an account is free. Product fees are shown transparently before you commit, and any change to a fee you are already paying is notified in advance. Full fee details for each product are set out on its page at the time of purchase.',
    },
    {
      h: '6. Your Responsibilities',
      p: 'You are responsible for your own tax affairs, for keeping your contact details current, and for using the platform lawfully. You agree not to attempt to disrupt, reverse-engineer or gain unauthorised access to the platform.',
    },
    {
      h: '7. Intellectual Property',
      p: 'All content on this site - text, graphics, logos and software - belongs to Reine Fondange AI or its licensors. You may view and use it for personal, non-commercial purposes only.',
    },
    {
      h: '8. No Financial Advice',
      p: 'Nothing on this site or in our communications is financial, investment or tax advice. Content is provided for information only, and any decision to invest is yours alone. Always consider the Risk Disclosure before investing.',
    },
    {
      h: '9. Limitation Of Liability',
      p: 'To the maximum extent permitted by law, Reine Fondange AI is not liable for losses arising from market movements, your use of the service, or events outside our reasonable control. Nothing in these terms limits liability for fraud or for anything that cannot be limited by Australian law.',
    },
    {
      h: '10. Changes And Termination',
      p: 'We may update these terms from time to time; the current version always applies. You may close your account at any time, and we may terminate service where required by law or these terms.',
    },
    {
      h: '11. Governing Law',
      p: 'These terms are governed by the laws of New South Wales, Australia, and disputes are subject to the exclusive jurisdiction of the courts of New South Wales.',
    },
  ],
};

export default function TermsOfUse() {
  return <LegalPage content={CONTENT} path="/terms-of-use" />;
}
