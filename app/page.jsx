import Hero from '../src/sections/Hero.jsx';
import WhatIs from '../src/sections/WhatIs.jsx';
import SignalFlow from '../src/sections/SignalFlow.jsx';
import Versus from '../src/sections/Versus.jsx';
import HighlightStrip from '../src/sections/HighlightStrip.jsx';
import WhyChoose from '../src/sections/WhyChoose.jsx';
import StepsGrid from '../src/sections/StepsGrid.jsx';
import Markets from '../src/sections/Markets.jsx';
import FeatureList from '../src/sections/FeatureList.jsx';
import RiskManagement from '../src/sections/RiskManagement.jsx';
import CardGrid from '../src/sections/CardGrid.jsx';
import SecurityTransparency from '../src/sections/SecurityTransparency.jsx';
import Testimonials from '../src/sections/Testimonials.jsx';
import FaqSection from '../src/sections/FaqSection.jsx';
import FinalCta from '../src/sections/FinalCta.jsx';
import { GET_STARTED, WHO_FOR } from '../src/data/content.js';

export const metadata = {
  title: 'Reine Fondange AI: Plan Every Trade With AI Trading Signals',
  description:
    'Cut through market noise with alerts that show you exactly what to trade, where to enter, where to step out and the reason behind it. Reine Fondange AI helps you act with purpose instead of panic.',
  keywords:
    'Reine Fondange AI, AI trading platform, crypto trading, AI trading signals, secure trading platform, AI trading signals, trading alerts with entry and exit points, signal trading platform',
  openGraph: {
    title: 'Reine Fondange AI: Plan Every Trade With AI Trading Signals',
    description:
      'Cut through market noise with alerts that show you exactly what to trade, where to enter, where to step out and the reason behind it. Reine Fondange AI helps you act with purpose instead of panic.',
    url: '/',
    type: 'website',
    siteName: 'Reine Fondange AI',
    locale: 'en',
    images: ['/og-image.svg'],
  },
  twitter: {
    title: 'Reine Fondange AI: Plan Every Trade With AI Trading Signals',
    description:
      'Cut through market noise with alerts that show you exactly what to trade, where to enter, where to step out and the reason behind it. Reine Fondange AI helps you act with purpose instead of panic.',
    images: ['/og-image.svg'],
  },
  alternates: { canonical: '/' },
};

// Section order follows the approved signals brief, with a different layout
// per block so the page never reads as a wall of identical cards.
export default function Home() {
  return (
    <>
      <Hero />
      <WhatIs />
      <SignalFlow />
      <Versus />
      <HighlightStrip />
      <WhyChoose />
      <StepsGrid data={GET_STARTED} cta={GET_STARTED.cta} />
      <Markets />
      <FeatureList />
      <RiskManagement />
      <CardGrid data={WHO_FOR} cols={3} />
      <SecurityTransparency />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}
