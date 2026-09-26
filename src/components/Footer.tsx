import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'reicon-react';
import { useModal } from '../hooks/useModal';
import './Footer.css';

const Footer = () => {
  const { openModal } = useModal();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="studio-footer">
      <div className="container">
        {/* Main Footer Links Grid */}
        <div className="studio-footer-grid">
          {/* Brand Info */}
          <div className="studio-footer-brand-col">
            <Link to="/" className="studio-brand" aria-label="WebDevGuru Studio Home">
              <div className="studio-logo-mark">
                <span className="studio-logo-glyph">W</span>
                <span className="studio-logo-dot"></span>
              </div>
              <div className="studio-brand-text">
                <span className="studio-brand-name">
                  WEBDEV<span className="studio-brand-accent">GURU</span>
                </span>
                <span className="studio-brand-tag">HIGH-PERFORMANCE STUDIO</span>
              </div>
            </Link>

            <p className="studio-footer-desc">
              We design and engineer bespoke digital flagships, high-converting SaaS growth engines, and headless Shopify storefronts with sub-second React architecture.
            </p>

            <div className="studio-system-status">
              <span className="badge-pulse-dot" />
              <span className="studio-status-text">GLOBAL EDGE CDN ACTIVE • 99.99% UPTIME</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="studio-footer-col">
            <h4 className="studio-footer-heading">Navigation</h4>
            <ul className="studio-footer-list">
              <li><Link to="/work">Signature Builds</Link></li>
              <li><a href="/#services">Core Capabilities</a></li>
              <li><a href="/#comparison">Why WebDevGuru</a></li>
              <li><a href="/#process">21-Day Sprint Pipeline</a></li>
              <li><Link to="/about">About Studio</Link></li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="studio-footer-col">
            <h4 className="studio-footer-heading">Capabilities</h4>
            <ul className="studio-footer-list">
              <li><Link to="/services/conversion-websites">High-Converting Flagships</Link></li>
              <li><Link to="/services/saas-landing-pages">SaaS Growth Engines</Link></li>
              <li><Link to="/services/d2c-shopify">Headless Shopify D2C</Link></li>
              <li><a href="/#vitals-preview">Performance Engineering</a></li>
            </ul>
          </div>

          {/* Direct Connect Column */}
          <div className="studio-footer-col">
            <h4 className="studio-footer-heading">Start a Build</h4>
            <ul className="studio-footer-list">
              <li>
                <button 
                  onClick={() => openModal(null)} 
                  className="studio-footer-btn-link"
                >
                  <span>Project Consultation</span>
                  <ArrowUpRight size={14} weight="Outline" />
                </button>
              </li>
              <li>
                <a href="mailto:founder@webdevguru.tech" className="studio-footer-link">
                  <span>founder@webdevguru.tech</span>
                </a>
              </li>
              <li>
                <span className="studio-footer-muted-item">Response Time: Under 24h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="studio-footer-bottom">
          <div className="studio-footer-copy">
            &copy; {currentYear} WebDevGuru Studio. All rights reserved. 100% intellectual property transfer guaranteed.
          </div>

          <div className="studio-footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="divider">•</span>
            <Link to="/terms-of-service">Terms of Service</Link>
            <span className="divider">•</span>
            <Link to="/refund">Refund Guarantee</Link>
            <span className="divider">•</span>
            <Link to="/cookies">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
