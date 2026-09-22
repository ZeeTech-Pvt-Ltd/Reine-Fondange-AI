// All site copy for Reine Fondange AI - single source of truth.
// Keyword: Reine Fondange AI. Target market: Australia.

export const SITE = {
  name: 'Reine Fondange AI',
  url: 'https://reinefondange-ai.com/',
  email: 'support@reinefondange-ai.com',
  offerName: 'ReineFondangeAI-Site',
  formEndpoint: 'https://apexai-experts.com/homeMailAction.php',
  tagline: 'AI-guided trading with royal composure',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Why Invest', to: '/why-invest' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const HERO = {
  titleLines: ['Reine Fondange AI', 'Trade With Royal Composure.'],
  sub: 'One elegant platform for crypto, forex and equities. Reine Fondange AI pairs around-the-clock market analysis with firm risk guardrails, so you stay calm while the markets move.',
  ctaPrimary: { label: 'Sign Up now', to: '/sign-up' },
  ctaSecondary: { label: 'See how it works', to: '/how-it-works' },
  formNotice: 'Joining takes about two minutes. An account manager will call you shortly.',
  formButton: 'Create Account',
  steps: [
    'Register in 2 minutes',
    'Verify your identity securely',
  ],
  trust: ['Regulated standards', 'Segregated funds', 'Support around the clock'],
};

// Market ticker - indicative prices, simulated live for display purposes only.
// `d` = decimal places shown for the price.
export const MARKET_TICKER = [
  { k: 'BTC', v: 'A$102,480', change: '+2.4%', dir: 'up', d: 0, icon: '/coins/bitcoin-btc.svg' },
  { k: 'ETH', v: 'A$5,290', change: '+1.1%', dir: 'up', d: 0, icon: '/coins/ethereum-eth.svg' },
  { k: 'SOL', v: 'A$312', change: '-0.8%', dir: 'down', d: 0, icon: '/coins/solana-sol.svg' },
  { k: 'XRP', v: 'A$3.42', change: '+4.2%', dir: 'up', d: 2, icon: '/coins/xrp-xrp.svg' },
  { k: 'BNB', v: 'A$1,180', change: '+0.6%', dir: 'up', d: 0, icon: '/coins/bnb-bnb.svg' },
  { k: 'ADA', v: 'A$1.87', change: '-1.3%', dir: 'down', d: 2, icon: '/coins/cardano-ada.svg' },
  { k: 'DOGE', v: 'A$0.52', change: '+3.1%', dir: 'up', d: 2, icon: '/coins/dogecoin-doge.svg' },
  { k: 'AVAX', v: 'A$58.40', change: '+0.9%', dir: 'up', d: 2, icon: '/coins/avalanche-avax.svg' },
];

// Indicative allocation of the flagship Balanced vault.
export const ALLOCATION = [
  { label: 'Bitcoin', pct: 40, color: '#8e2a52' },
  { label: 'Ethereum', pct: 30, color: '#a4552f' },
  { label: 'Stablecoins', pct: 15, color: '#c9a227' },
  { label: 'Alt coins', pct: 10, color: '#b8862f' },
  { label: 'Cash reserve', pct: 5, color: '#b3a08f' },
];

export const STATS = [
  { value: '70+', label: 'Assets under one roof' },
  { value: '42M+', label: 'Members worldwide' },
  { value: 'A$440M+', label: 'Monthly turnover' },
  { value: '24/7', label: 'Support every day' },
];

export const SECURITY = {
  title: 'Protection Woven Through Every Layer',
  lead: 'From the moment you register to the second a withdrawal lands in your bank, every step of your journey is protected by independent safeguards.',
  items: [
    {
      icon: 'shield-check',
      title: 'Qualified Custodians',
      text: 'Your assets sit with regulated third-party custodians, never on our own books.',
    },
    {
      icon: 'key',
      title: 'MPC Key Protection',
      text: 'Your keys are split across independent parties, so no single point of failure exists.',
    },
    {
      icon: 'snowflake',
      title: 'Cold Storage',
      text: 'The large majority of holdings stay offline, out of reach of online threats.',
    },
    {
      icon: 'lock',
      title: 'MFA Withdrawals',
      text: 'Every withdrawal needs multi-factor confirmation before a dollar moves.',
    },
    {
      icon: 'eye',
      title: 'Year-Round Audits',
      text: 'Independent firms review our controls and custody arrangements continuously.',
    },
    {
      icon: 'umbrella',
      title: 'Insurance Eligibility',
      text: 'Client holdings may qualify for cover through our custodial partners.',
    },
  ],
};

export const PORTFOLIO = {
  title: 'A Portfolio You Can See Into, Any Time',
  lead: 'Real-time balances, holdings and statements. Everything visible in one calm dashboard, not buried in menus.',
  chart: {
    label: 'Balanced vault · 5 years',
    ytd: '+12.4%',
    points: '0,96 40,88 80,90 120,78 160,80 200,66 240,70 280,52 320,58 360,40 400,46 440,26 480,32 520,14 560,22 600,4',
    // Normalised to a 600x100 viewBox; area fill reuses the same points.
  },
  cards: [
    { label: 'Growth vault', value: '+18.2% YTD', tone: 'up' },
    { label: 'Balanced vault', value: '+12.4% YTD', tone: 'up' },
    { label: 'Income mode', value: '6.1% yield', tone: 'gold' },
  ],
};

export const CALCULATOR = {
  title: 'Model Your Own Growth Plan',
  lead: 'Move the sliders to see how a structured plan could compound over time. Figures are illustrative, and returns are never guaranteed.',
  defaults: { deposit: 250, monthly: 200, years: 5, rate: 12 },
  ranges: {
    deposit: { min: 250, max: 9000, step: 50 },
    monthly: { min: 0, max: 29000, step: 100 },
  },
  note: 'Illustrative figures. Actual returns vary with market conditions and can be negative.',
};

export const THREE_STEPS = {
  title: 'From Signup To Your First Trade',
  lead: 'Six steps, one clear path from registration to your first position.',
  items: [
    {
      icon: 'user',
      title: 'Create Your Account',
      text: 'Just the basics. Name, email and a phone number.',
    },
    {
      icon: 'mail',
      title: 'Confirm Your Email',
      text: 'One click unlocks the charts, tools and dashboard.',
    },
    {
      icon: 'unlock',
      title: 'Enter The Platform',
      text: 'Fund from A$250. Bigger amounts are optional, and fees are always shown first.',
    },
    {
      icon: 'card',
      title: 'Add Funds Your Way',
      text: 'Bank transfer, e-wallet or card. Whatever suits you.',
    },
    {
      icon: 'sliders',
      title: 'Set Your Strategy',
      text: 'Pick risk levels and markets. AI signals suggest, never override.',
    },
    {
      icon: 'chart',
      title: 'Explore The Markets',
      text: 'Watch live prices and plan your trades in real time.',
    },
  ],
};

export const TRANSPARENCY = {
  title: 'Protection You Can See For Yourself',
  lead: 'We publish the things most platforms keep quiet: where your money sits, who audits it, and how you can leave whenever you like.',
  items: [
    { icon: 'file', title: 'Real-Time Statements', text: 'Every position, fee and movement, itemised and downloadable, day or night.' },
    { icon: 'shield', title: 'Segregated Client Funds', text: 'Your deposits are ring-fenced from company assets, by design and by law.' },
    { icon: 'search', title: 'Annual Third-Party Audits', text: 'Independent auditors review our systems, custody and capital controls each year.' },
    { icon: 'unlock', title: 'No Lock-In Periods', text: 'Withdraw any time. Most requests complete within one business day.' },
  ],
};

export const ANALYST = {
  title: 'Two Minds On Every Move',
  lead: 'Reine Fondange AI pairs a market-scanning engine with human judgement, so no position is taken on automation alone.',
  items: [
    {
      icon: 'cpu',
      title: 'The Engine Spots What Matters',
      text: 'Our engine watches markets around the clock and surfaces what deserves attention.',
    },
    {
      icon: 'verified',
      title: 'A Qualified Analyst Reviews It',
      text: 'Every flagged position is checked against your risk limits before it enters your account.',
    },
    {
      icon: 'check',
      title: 'You Stay In Control',
      text: 'You set your risk profile and can pause, adjust or withdraw at any time.',
    },
  ],
};

export const FEATURES = {
  title: 'Key Features Of The Platform',
  lead: 'Seven things traders ask for most, all built in from day one.',
  items: [
    {
      icon: 'cpu',
      title: 'AI-Driven Stack',
      text: 'Technology that keeps your trading fast, accurate and always on.',
    },
    {
      icon: 'card',
      title: 'Flexible Funding',
      text: 'Debit cards, bank transfers and PayPal. Top up however you like.',
    },
    {
      icon: 'devices',
      title: 'Trade On Any Device',
      text: 'The full platform on desktop, tablet and mobile.',
    },
    {
      icon: 'target',
      title: 'Up To 85% Signal Accuracy',
      text: 'Curated signals help you spot the moves worth acting on.',
    },
    {
      icon: 'globe',
      title: 'Every Instrument',
      text: 'Forex, equities, crypto and commodities in one place.',
    },
    {
      icon: 'headset',
      title: '24/7 Support',
      text: 'Real humans on standby around the clock.',
    },
  ],
};

export const CTA_BAND = {
  title: 'Open Your Reine Fondange AI Account Today',
  lead: 'Registration takes two minutes. Your capital stays protected from the very first dollar.',
  cta: { label: 'Sign Up now', to: '/sign-up' },
  note: 'Capital at risk. Crypto assets are volatile and past performance is no guide to future returns.',
};

export const TESTIMONIALS = {
  title: 'What Our Members Say',
  lead: '4.7 stars from 124 member reviews, based on 337 ratings.',
  items: [
    {
      name: 'Charlotte D.',
      city: 'Sydney',
      since: '2023',
      stars: 5,
      text: 'I moved part of my savings across in an afternoon. The dashboard made the whole thing feel calm, not complicated.',
    },
    {
      name: 'William G.',
      city: 'Melbourne',
      since: '2024',
      stars: 5,
      text: 'Recurring buys took the emotion out of it. I check once a month and nothing is ever on fire.',
    },
    {
      name: 'Amelia K.',
      city: 'Brisbane',
      since: '2023',
      stars: 5,
      text: 'My first withdrawal landed in my bank the same day. That is what convinced me the platform was safe.',
    },
    {
      name: 'Henry P.',
      city: 'Perth',
      since: '2024',
      stars: 4,
      text: 'Support walked me through verification on a Saturday evening. Genuinely impressed by the patience.',
    },
    {
      name: 'Isabelle R.',
      city: 'Adelaide',
      since: '2023',
      stars: 5,
      text: 'The one-click tax report saved my accountant half a day. Worth it for that alone.',
    },
    {
      name: 'Oliver J.',
      city: 'Hobart',
      since: '2024',
      stars: 4,
      text: 'Started with A$250 and stayed for the signals. My balance grows quietly in the background.',
    },
  ],
};

export const FAQS = [
  {
    q: 'What Is The Minimum Deposit?',
    a: 'You can open an account for free and fund it from as little as A$250. There is no obligation to add more, and you can top up whenever you like.',
  },
  {
    q: 'How Quickly Can I Withdraw?',
    a: 'Most withdrawal requests are processed within one business day. Every withdrawal needs multi-factor confirmation, and funds are only ever sent to an account in your name.',
  },
  {
    q: 'How Is My Capital Protected?',
    a: 'Client assets sit with regulated third-party custodians, segregated from company funds, with most kept in cold storage. Independent auditors review our controls annually.',
  },
  {
    q: 'How Long Does Registration Take?',
    a: 'The form takes about two minutes. Identity verification usually completes the same day, and you can fund your account as soon as it is approved.',
  },
  {
    q: 'What Fees Does Reine Fondange AI Charge?',
    a: 'Opening an account is free and there are no hidden charges. Fees are shown before you commit to any product, and the full details live in our Terms of Use.',
  },
  {
    q: 'Is There A Minimum Age To Join?',
    a: 'Yes. You must be at least 18 years old and a verified resident of Australia to open an account.',
  },
  {
    q: 'Which Payment Methods Are Accepted?',
    a: 'We accept Australian bank transfers and major debit and credit cards. Deposits are credited once cleared, and withdrawals return to your registered account.',
  },
  {
    q: 'When Is Support Available?',
    a: 'Our Australia-based support team is online Monday to Friday, 9:00-18:00 AEST. Urgent security issues are monitored around the clock.',
  },
  {
    q: 'Am I Responsible For My Own Taxes?',
    a: 'Yes. Any gains or income from your holdings are yours to declare. Our one-click tax reports make that easier, but we cannot give tax advice.',
  },
  {
    q: 'What Documents Do I Need For KYC?',
    a: 'A government-issued photo ID and proof of Australian address, such as a recent utility bill or bank statement. Verification is encrypted and handled in minutes.',
  },
  {
    q: 'Do I Need Investment Experience?',
    a: 'Not at all. The platform is designed for first-timers, and every product page explains its risks in plain English before you invest.',
  },
  {
    q: 'Who Manages My Portfolio?',
    a: 'Our market-scanning engine flags opportunities and qualified analysts approve them against your risk profile. You always keep the final say.',
  },
  {
    q: 'Is Reine Fondange AI Regulated?',
    a: 'We operate under ASIC-regulated security standards with regulated custodians and audited controls. Full details are published in our Risk Disclosure.',
  },
  {
    q: 'Can I Add Funds Later?',
    a: 'Yes. You can top up any time by bank transfer or card, or set a recurring plan so it happens automatically.',
  },
];

export const BENEFITS = {
  title: 'Why Members Stay With Reine Fondange AI',
  lead: 'Modern traders choose us for protection, clarity, AI tools and a clean interface.',
  items: [
    {
      icon: 'shield-check',
      title: 'Bank-Grade Protection',
      text: 'Encrypted from login to withdrawal, with your funds held apart from ours.',
    },
    {
      icon: 'user',
      title: 'Trading That Fits You',
      text: 'Risk settings, markets and pace, all shaped around your goals.',
    },
    {
      icon: 'cpu',
      title: 'Smarter AI Tools',
      text: 'Analytics that surface what matters instead of burying you in noise.',
    },
    {
      icon: 'zap',
      title: 'Automation That Runs All Day',
      text: 'Bots keep working around the clock, following rules you set.',
    },
    {
      icon: 'chart',
      title: 'Signals You Can Act On',
      text: 'Clear, timely alerts for the moves worth your attention.',
    },
    {
      icon: 'devices',
      title: 'An Interface That Never Fights You',
      text: 'Clean screens and simple flows, from first click to daily use.',
    },
  ],
};

export const STRESS_BAND = {
  title: 'Trading Without The Stress',
  copy: 'Hold Bitcoin, Ethereum and Dogecoin with confidence. Our tools handle the noise while you keep the controls.',
  cta: { label: 'Get Started', to: '/sign-up' },
};

export const GLOBAL = {
  title: 'Built To Grow Worldwide',
  lead: 'Speed, precision and reach, wherever you trade from.',
  items: [
    {
      icon: 'globe',
      title: 'One Login, Every Market',
      text: 'Crypto, forex, stocks and commodities together under one roof.',
    },
    {
      icon: 'zap',
      title: 'Orders That Fill Fast',
      text: 'Low-latency execution keeps your entries and exits sharp.',
    },
    {
      icon: 'chart',
      title: 'Analytics In Real Time',
      text: 'Live feeds and indicators update as the market moves.',
    },
  ],
};

export const EXCHANGES = {
  label: "Trade across the world's leading exchanges",
  partners: Array.from({ length: 8 }, (_, i) => `/partners/partner-${i + 1}.svg`),
};

export const PAYMENTS = {
  title: 'We Accept Payments From All Over The World',
  methods: ['Visa', 'Mastercard', 'PayPal', 'Bank transfer'],
};

export const ABOUT_SUMMARY = {
  title: 'About The Platform',
  lead: 'One international platform, one unified workflow. Low-latency performance, layered security and a design built for beginners and advanced users alike.',
  groups: [
    {
      icon: 'globe',
      title: 'Markets',
      items: [
        'Top and emerging crypto assets',
        'Forex with live feeds',
        'Global stocks and equity options',
        'Commodities',
      ],
    },
    {
      icon: 'zap',
      title: 'Performance',
      items: [
        'Fast order processing',
        'Continuous market data',
        'Analytics built in',
        'Manual and automated support',
      ],
    },
    {
      icon: 'shield-check',
      title: 'Security',
      items: [
        'Encrypted communication',
        'Identity verification and multi-layer protocols',
        'Monitored transactions',
        'Dependable global infrastructure',
      ],
    },
  ],
};

export const RATING = {
  stars: 4.7,
  meta: '124 client reviews · 337 ratings',
  quote: 'An intuitive platform with automation built in and real learning resources alongside it.',
};

export const FOOTER = {
  blurb:
    'Reine Fondange AI is an AI-guided trading platform for verified Australian residents. Segregated funds, cold storage and audited controls, protected at every layer.',
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Use', to: '/terms-of-use' },
    { label: 'Risk Disclosure', to: '/risk-disclosure' },
  ],
  disclaimer:
    'Capital at risk. Crypto assets are volatile and can fall as well as rise. Past performance is no guide to future returns. Nothing on this site is financial advice.',
};

export const CONTACTS = {
  title: 'Talk To A Human',
  lead: 'Questions before you join? Our Australia-based support team is online Monday to Friday, 9:00-18:00 AEST.',
  email: 'support@reinefondange-ai.com',
  support: 'Mon-Fri 9:00-18:00 AEST',
  security: 'Security issues monitored 24/7',
};
