import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, CloseCircle, ArrowUpRight } from 'reicon-react';
import { useModal } from '../hooks/useModal';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'Architecture', href: '/#comparison' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/about' }
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => setIsMobileOpen(false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`studio-navbar-wrap ${isScrolled ? 'scrolled' : ''}`}>
      <div className="studio-navbar container">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="studio-brand" 
          aria-label="WebDevGuru Studio Home"
        >
          <div className="studio-logo-mark">
            <span className="studio-logo-glyph">W</span>
            <span className="studio-logo-dot"></span>
          </div>
          <div className="studio-brand-text">
            <span className="studio-brand-name">
              WEBDEV<span className="studio-brand-accent">GURU</span>
            </span>
            <span className="studio-brand-tag">DIGITAL FLAGSHIPS</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="studio-nav-links" aria-label="Main Navigation">
          {NAV_LINKS.map((item) => {
            const isAnchor = item.href.startsWith('/#');
            if (isAnchor) {
              return (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="studio-nav-link"
                  onClick={() => handleLinkClick(item.href)}
                >
                  <span>{item.label}</span>
                </a>
              );
            }
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.label} 
                to={item.href}
                className={`studio-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.href)}
              >
                <span>{item.label}</span>
                {isActive && <span className="nav-active-pill" />}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls & CTA */}
        <div className="studio-nav-actions">
          {/* Availability Status Badge */}
          <div className="studio-status-pill hidden-mobile">
            <span className="badge-pulse-dot" />
            <span className="studio-status-label">Q2/Q3 SLOTS AVAILABLE</span>
          </div>

          {/* Primary CTA */}
          <button 
            onClick={() => openModal(null)}
            className="studio-nav-cta"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={18} weight="Outline" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="studio-mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? (
              <CloseCircle size={24} weight="Outline" />
            ) : (
              <Menu size={24} weight="Outline" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="studio-drawer-overlay" onClick={() => setIsMobileOpen(false)}>
          <div className="studio-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="studio-drawer-header">
              <Link to="/" className="studio-brand" onClick={() => setIsMobileOpen(false)}>
                <div className="studio-logo-mark">
                  <span className="studio-logo-glyph">W</span>
                  <span className="studio-logo-dot"></span>
                </div>
                <div className="studio-brand-text">
                  <span className="studio-brand-name">
                    WEBDEV<span className="studio-brand-accent">GURU</span>
                  </span>
                </div>
              </Link>
              <button 
                className="studio-drawer-close"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
              >
                <CloseCircle size={24} weight="Outline" />
              </button>
            </div>

            <nav className="studio-drawer-links">
              {NAV_LINKS.map((item) => {
                if (item.href.startsWith('/#')) {
                  return (
                    <a 
                      key={item.label} 
                      href={item.href}
                      className="studio-drawer-link"
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link 
                    key={item.label} 
                    to={item.href}
                    className={`studio-drawer-link ${location.pathname === item.href ? 'active' : ''}`}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="studio-drawer-footer">
              <button 
                onClick={() => {
                  setIsMobileOpen(false);
                  openModal(null);
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Start a Project</span>
                <ArrowUpRight size={18} weight="Outline" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
