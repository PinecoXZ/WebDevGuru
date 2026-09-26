import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import { track } from './utils/analytics';
import './App.css';

// Lazy-loaded routes for code-splitting
const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const About = lazy(() => import('./pages/About'));
const ConversionWebsites = lazy(() => import('./pages/ConversionWebsites'));
const SaaSLandingPages = lazy(() => import('./pages/SaaSLandingPages'));
const D2CShopify = lazy(() => import('./pages/D2CShopify'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Terms = lazy(() => import('./pages/legal/Terms'));
const Refund = lazy(() => import('./pages/legal/Refund'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));

const PageFallback = () => (
  <div style={{
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-noir)',
    color: 'var(--gold-primary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.82rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase'
  }}>
    <span>Loading &bull; WebDevGuru</span>
  </div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    track('page_view', { path: location.pathname });
  }, [location.pathname]);

  return (
    <ModalProvider>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        <main>
          <Suspense fallback={<PageFallback />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/services/conversion-websites" element={<ConversionWebsites />} />
              <Route path="/services/saas-landing-pages" element={<SaaSLandingPages />} />
              <Route path="/services/d2c-shopify" element={<D2CShopify />} />
              <Route path="/legal" element={<Navigate to="/privacy" replace />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms-of-service" element={<Terms />} />
              <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/cookie-policy" element={<Navigate to="/cookies" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  );
}

export default App;
