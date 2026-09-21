import { Routes, Route, Navigate, useLocation } from 'react-router';
import { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

// Route-level code splitting: only the homepage bundle loads up front.
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));
const HowItWorks = lazy(() => import('./pages/HowItWorks.jsx'));
const WhyInvest = lazy(() => import('./pages/WhyInvest.jsx'));
const Faqs = lazy(() => import('./pages/Faqs.jsx'));
const Contacts = lazy(() => import('./pages/Contacts.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));
const SignIn = lazy(() => import('./pages/SignIn.jsx'));
const ThankYou = lazy(() => import('./pages/ThankYou.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse.jsx'));
const RiskDisclosure = lazy(() => import('./pages/RiskDisclosure.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Hover prefetch: warm the route chunk while the pointer is on the link,
// so navigation feels instant instead of flashing the loader.
const PREFETCH = {
  '/about-us': () => import('./pages/AboutUs.jsx'),
  '/how-it-works': () => import('./pages/HowItWorks.jsx'),
  '/why-invest': () => import('./pages/WhyInvest.jsx'),
  '/faq': () => import('./pages/Faqs.jsx'),
  '/contact-us': () => import('./pages/Contacts.jsx'),
  '/sign-up': () => import('./pages/SignUp.jsx'),
  '/sign-in': () => import('./pages/SignIn.jsx'),
  '/thank-you': () => import('./pages/ThankYou.jsx'),
  '/privacy-policy': () => import('./pages/PrivacyPolicy.jsx'),
  '/terms-of-use': () => import('./pages/TermsOfUse.jsx'),
  '/risk-disclosure': () => import('./pages/RiskDisclosure.jsx'),
};

export function prefetchPage(path) {
  PREFETCH[path]?.();
}

function PageLoader() {
  return (
    <div className="page-loader">
      <span className="page-loader__spinner" aria-hidden="true" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-invest" element={<WhyInvest />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/contact-us" element={<Contacts />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/risk-disclosure" element={<RiskDisclosure />} />
            {/* legacy slugs redirect to the new ones */}
            <Route path="/product" element={<Navigate to="/how-it-works" replace />} />
            <Route path="/why" element={<Navigate to="/why-invest" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
