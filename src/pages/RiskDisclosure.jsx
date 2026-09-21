import LegalPage from '../components/LegalPage.jsx';

const CONTENT = {
  title: 'Risk Disclosure',
  updated: 'Last updated: September 2026',
  keywords: ['Reine Fondange AI risk disclosure', 'crypto investment risk Australia'],
  sections: [
    {
      h: '1. Capital at risk',
      p: 'Crypto assets are highly volatile. Their value can fall as well as rise, sometimes sharply and within hours. You could lose some or all of the money you invest. Never invest money you cannot afford to lose.',
    },
    {
      h: '2. No guaranteed returns',
      p: 'No product on this platform guarantees a return. Projections, examples and illustrations - including any calculator outputs - are hypothetical and do not predict future performance. Past performance is no guide to future results.',
    },
    {
      h: '3. Not protected like bank deposits',
      p: 'Crypto assets held through this platform are not protected by the Australian Government\'s Financial Claims Scheme in the same way as deposits with an authorised deposit-taking institution. Segregation and custody arrangements are described on this site, but no protection scheme is absolute.',
    },
    {
      h: '4. Regulatory status',
      p: 'Crypto asset services in Australia are subject to evolving regulation under ASIC and AUSTRAC rules. Reine Fondange AI operates with regulated custodial partners and audited controls, but crypto assets themselves remain largely unregulated instruments. Rules may change and affect your holdings.',
    },
    {
      h: '5. Platform and technology risks',
      p: 'Digital platforms face risks including outages, cyberattacks and technical failure. We maintain bank-grade encryption, cold storage and independent security audits to reduce these risks, but they cannot be eliminated entirely.',
    },
    {
      h: '6. Liquidity risks',
      p: 'Some assets or vaults may be harder to sell quickly, particularly in stressed markets. Withdrawal processing times may extend during periods of high demand or unusual market conditions.',
    },
    {
      h: '7. Tax',
      p: 'You are responsible for your own tax position. Gains from crypto assets may be subject to capital gains or income tax in Australia. We provide reporting tools but not tax advice - consult a qualified adviser.',
    },
    {
      h: '8. Your responsibility',
      p: 'By investing, you confirm that you understand these risks, that you have considered your own circumstances, and that you are not relying on any statement on this site as advice. If anything here is unclear, contact support before investing.',
    },
  ],
};

export default function RiskDisclosure() {
  return <LegalPage content={CONTENT} path="/risk-disclosure" />;
}
