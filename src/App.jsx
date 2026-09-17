import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';

const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const PlatformDetail = lazy(() => import('./pages/Platform/Detail'));
const AI = lazy(() => import('./pages/AI'));
const Modules = lazy(() => import('./pages/Modules'));
const ModuleDetail = lazy(() => import('./pages/Modules/Detail'));
const Solutions = lazy(() => import('./pages/Solutions'));
const SolutionDetail = lazy(() => import('./pages/Solutions/Detail'));
const Industries = lazy(() => import('./pages/Industries'));
const IndustryDetail = lazy(() => import('./pages/Industries/Detail'));
const Integrations = lazy(() => import('./pages/Integrations'));
const Security = lazy(() => import('./pages/Security'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Resources = lazy(() => import('./pages/Resources'));
const ResourceDetail = lazy(() => import('./pages/Resources/Detail'));
const BookDemo = lazy(() => import('./pages/BookDemo'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Legal/Privacy'));
const Terms = lazy(() => import('./pages/Legal/Terms'));
const Cookies = lazy(() => import('./pages/Legal/Cookies'));

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-brand-500 selection:text-navy-950">
        <Header />
        <main className="flex-grow">
          <Suspense
            fallback={(
              <div className="flex min-h-[50vh] items-center justify-center bg-navy-950 text-sm text-brand-300">
                Loading Eimpora...
              </div>
            )}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/platform/:slug" element={<PlatformDetail />} />
              <Route path="/ai" element={<AI />} />

              <Route path="/modules" element={<Modules />} />
              <Route path="/modules/:slug" element={<ModuleDetail />} />

              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:slug" element={<SolutionDetail />} />

              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />

              <Route path="/integrations" element={<Integrations />} />
              <Route path="/security" element={<Security />} />
              <Route path="/pricing" element={<Pricing />} />

              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:slug" element={<ResourceDetail />} />

              <Route path="/book-demo" element={<BookDemo />} />

              <Route path="/careers" element={<Careers />} />

              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />

              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
