import { Link } from 'react-router-dom';
import { ArrowRight, Home, Briefcase, Layers, User, Call } from 'reicon-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { useModal } from '../hooks/useModal';
import './NotFound.css';

const RECOVERY_LINKS = [
  {
    icon: <Home size={20} weight="Outline" />,
    title: "Flagship Home",
    desc: "Return to the flagship portal and explore our verified digital systems.",
    href: "/"
  },
  {
    icon: <Briefcase size={20} weight="Outline" />,
    title: "Signature Builds",
    desc: "Inspect our case studies, client testimonials, and performance metrics.",
    href: "/work"
  },
  {
    icon: <Layers size={20} weight="Outline" />,
    title: "Core Capabilities",
    desc: "Review our 3 core architectural offerings for high-growth brands.",
    href: "/#services"
  },
  {
    icon: <User size={20} weight="Outline" />,
    title: "Studio Manifesto",
    desc: "Learn about our founder-led engineering philosophy and design standard.",
    href: "/about"
  }
];

const NotFound = () => {
  const { openModal } = useModal();

  return (
    <div className="not-found-page">
      <SEO 
        title="404 — Page Not Found | WebDevGuru"
        description="The requested page could not be located on the WebDevGuru server. Explore our directory below."
        currentUrl="https://webdevguru.tech/404"
        noindex={true}
      />

      <section className="not-found-hero-section">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: '404 Error' }]} />

          <div className="not-found-header">
            <span className="not-found-number">404</span>
            <h1 className="heading-display" style={{ marginTop: '16px' }}>
              Lost In The <span className="gradient-text">Digital Ether.</span>
            </h1>
            <p className="text-body-lg" style={{ marginTop: '16px', maxWidth: '600px', color: 'var(--text-secondary)' }}>
              You ventured beyond charted coordinates. The requested URL does not exist or has been restructured. Use our directory below to navigate back to our flagship.
            </p>
          </div>

          <div className="recovery-grid grid-2" style={{ marginTop: '48px' }}>
            {RECOVERY_LINKS.map((link) => (
              <Link 
                key={link.title} 
                to={link.href} 
                className="recovery-card obsidian-card"
              >
                <div className="recovery-icon-box">{link.icon}</div>
                <div>
                  <h3 className="heading-h3" style={{ fontSize: '1.2rem' }}>{link.title}</h3>
                  <p className="text-body" style={{ fontSize: '0.9rem', marginTop: '6px' }}>{link.desc}</p>
                </div>
                <div className="recovery-arrow">
                  <ArrowRight size={18} weight="Outline" />
                </div>
              </Link>
            ))}
          </div>

          <div className="not-found-cta-strip obsidian-card text-center" style={{ marginTop: '48px' }}>
            <h3 className="heading-h3">Looking for a custom build?</h3>
            <p className="text-body" style={{ marginTop: '8px', fontSize: '0.94rem' }}>
              Consult directly with Principal Architect Fayez to define your system architecture in 20 minutes.
            </p>
            <div style={{ marginTop: '24px' }}>
              <button 
                onClick={() => {
                  openModal(null);
                }} 
                className="btn btn-primary"
              >
                <Call size={16} weight="Outline" />
                <span>Book Architecture Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
