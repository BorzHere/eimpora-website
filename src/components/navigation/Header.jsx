import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Shield } from 'lucide-react';
import MegaMenu from './MegaMenu';
import Logo from '../common/Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveMega(null);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${scrolled
        ? 'bg-navy-950/90 backdrop-blur-xl  border-white/10 shadow-2xl py-3'
        : 'bg-navy-950/10 backdrop-blur-md py-4 border-navy-950/5'
        }`}
      onMouseLeave={() => setActiveMega(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setActiveMega(null)}
            className="group flex items-center hover:scale-[1.02] transition-transform"
          >
            <Logo variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setActiveMega('platform')}
            >
              <Link
                to="/platform"
                onClick={() => setActiveMega(null)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${activeMega === 'platform'
                  ? 'text-brand-300 bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                Platform
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMega === 'platform' ? 'rotate-180 text-brand-300' : 'text-slate-400'}`} />
              </Link>
            </div>

            <Link
              to="/ai"
              onMouseEnter={() => setActiveMega(null)}
              onClick={() => setActiveMega(null)}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              AI
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveMega('modules')}
            >
              <Link
                to="/modules"
                onClick={() => setActiveMega(null)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${activeMega === 'modules'
                  ? 'text-brand-300 bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                Modules
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMega === 'modules' ? 'rotate-180 text-brand-300' : 'text-slate-400'}`} />
              </Link>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMega('solutions')}
            >
              <Link
                to="/solutions"
                onClick={() => setActiveMega(null)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${activeMega === 'solutions'
                  ? 'text-brand-300 bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMega === 'solutions' ? 'rotate-180 text-brand-300' : 'text-slate-400'}`} />
              </Link>
            </div>

            <Link
              to="/integrations"
              onMouseEnter={() => setActiveMega(null)}
              onClick={() => setActiveMega(null)}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Integrations
            </Link>

            <Link
              to="/resources"
              onMouseEnter={() => setActiveMega(null)}
              onClick={() => setActiveMega(null)}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Resources
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveMega('more')}
            >
              <button
                type="button"
                onClick={() => setActiveMega(activeMega === 'more' ? null : 'more')}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer ${activeMega === 'more'
                  ? 'text-brand-300 bg-white/10'
                  : 'text-orange-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                More
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMega === 'more' ? 'rotate-180 text-brand-300' : 'text-orange-400'}`} />
              </button>

              {activeMega === 'more' && (
                <div
                  className="absolute right-0 top-full w-52 pt-2 z-50"
                  onMouseEnter={() => setActiveMega('more')}
                >
                  <div className="rounded-xl bg-navy-950/90 border border-white/10 bg-navy-900/98 p-2 shadow-2xl backdrop-blur-2xl">
                    <Link
                      to="/security"
                      onClick={() => setActiveMega(null)}
                      className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      Security & Governance
                    </Link>
                    <Link
                      to="/industries"
                      onClick={() => setActiveMega(null)}
                      className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      Industries
                    </Link>
                    <Link
                      to="/pricing"
                      onClick={() => setActiveMega(null)}
                      className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      Price & Scope 
                    </Link>
                    <Link
                      to="/careers"
                      onClick={() => setActiveMega(null)}
                      className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      Careers & Culture
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            

            <Link
              to="/book-demo"
              onClick={() => setActiveMega(null)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-glow transition-all shadow-cyan-glow hover:scale-[1.02]"
            >
              Book Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MegaMenu Dropdown */}
      <MegaMenu
        activeTab={activeMega === 'more' ? null : activeMega}
        onClose={() => setActiveMega(null)}
      />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-navy-950/95 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 shadow-2xl">
          <Link to="/platform" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Platform</Link>
          <Link to="/ai" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">AI Intelligence</Link>
          <Link to="/modules" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Modules (25 Catalog)</Link>
          <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Solutions</Link>
          <Link to="/industries" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Industries</Link>
          <Link to="/integrations" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Integrations</Link>
          <Link to="/security" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Security & Governance</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Pricing & Scope</Link>
          <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Resources</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white hover:text-brand-400">Careers & Culture</Link>
         
          <div className="pt-4 border-t border-white/10">
            <Link
              to="/book-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-navy-950 bg-brand-400"
            >
              Book Enterprise Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

