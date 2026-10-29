import Hero from '../src/sections/Hero.jsx';
import MarketTicker from '../src/sections/MarketTicker.jsx';
import StatsBand from '../src/sections/StatsBand.jsx';
import Benefits from '../src/sections/Benefits.jsx';
import StressBand from '../src/sections/StressBand.jsx';
import Global from '../src/sections/Global.jsx';
import PartnersStrip from '../src/sections/PartnersStrip.jsx';
import ThreeSteps from '../src/sections/ThreeSteps.jsx';
import PaymentStrip from '../src/sections/PaymentStrip.jsx';
import Testimonials from '../src/sections/Testimonials.jsx';
import FaqSection from '../src/sections/FaqSection.jsx';
import AboutSummary from '../src/sections/AboutSummary.jsx';
import Features from '../src/sections/Features.jsx';
import FinalCta from '../src/sections/FinalCta.jsx';

export const metadata = {
  title: 'Reine Fondange AI: Elegant AI Trading Platform for Australia',
  description:
    "Reine Fondange AI is Australia's AI-guided trading platform. Crypto, forex and equities with curated signals, risk guardrails and layered security.",
  keywords:
    'Reine Fondange AI, AI trading platform, crypto trading Australia, AI trading signals, secure trading platform, AI trading Australia, crypto trading Australia, AI trading signals, forex trading platform, secure trading platform Australia',
  openGraph: {
    title: 'Reine Fondange AI: Elegant AI Trading Platform for Australia',
    description:
      "Reine Fondange AI is Australia's AI-guided trading platform. Crypto, forex and equities with curated signals, risk guardrails and layered security.",
    url: '/',
    type: 'website',
    siteName: 'Reine Fondange AI',
    locale: 'en_AU',
    images: ['/og-image.svg'],
  },
  twitter: {
    title: 'Reine Fondange AI: Elegant AI Trading Platform for Australia',
    description:
      "Reine Fondange AI is Australia's AI-guided trading platform. Crypto, forex and equities with curated signals, risk guardrails and layered security.",
    images: ['/og-image.svg'],
  },
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarketTicker />
      <StatsBand />
      <Benefits />
      <StressBand />
      <Global />
      <PartnersStrip />
      <ThreeSteps />
      <PaymentStrip />
      <Testimonials />
      <FaqSection />
      <AboutSummary />
      <Features />
      <FinalCta />
    </>
  );
}
