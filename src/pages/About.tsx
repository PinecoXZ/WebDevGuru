import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle, Code, ShieldCheck, Bolt } from 'reicon-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { useModal } from '../hooks/useModal';
import './About.css';

const PHILOSOPHIES = [
  {
    icon: <Code size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Engineering Rigor Over Agency Bloat",
    description: "We don't build passive digital brochures that gather digital dust. We engineer high-velocity conversion systems where every interaction, headline, and millisecond has a defined commercial objective."
  },
  {
    icon: <Bolt size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Velocity As Competitive Strategy",
    description: "Our 21-day sprint methodology isn't marketing fluff. In high-growth venture SaaS and category-defining ecommerce, momentum compounds. Launch fast, test hypotheses with live user traffic, and iterate with real conversion data."
  },
  {
    icon: <ShieldCheck size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "100% Intellectual Property Sovereignty",
    description: "Zero proprietary vendor lock-in. Full production codebases in Git, design systems in Figma, and DNS credentials transfer directly to your organization upon project launch. No monthly hostage retainers."
  }
];

const ENGINEERING_STANDARDS = [
  "Sub-second Time to First Byte (TTFB) across global edge networks",
  "Google Lighthouse 98+ Performance, Accessibility, Best Practices & SEO",
  "Zero layout shifts (CLS < 0.02) ensuring instantaneous visual stability",
  "Strict Schema.org structured data and canonical tags across every route",
  "100% type-checked React 19 & TypeScript with zero runtime overhead"
];

const About = () => {
  const { openModal } = useModal();

  const seoProps = useSEO({
    title: "About Studio & Engineering Manifesto — WebDevGuru Studio",
    description: "Learn how WebDevGuru operates as an elite boutique studio building high-conversion flagships with founder-led precision and zero agency bloat."
  });

  return (
    <div className="about-page">
      <SEO {...seoProps} />

      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Studio' }]} />

          <div className="sticker-badge mb-3">
            <span className="badge-pulse-dot" />
            <span>FOUNDER-LED DIGITAL ENGINEERING STUDIO</span>
          </div>

          <h1 className="heading-display about-title" style={{ marginTop: '16px' }}>
            Building The Web's <br />
            <span className="gradient-text">Highest-Performing Flagships.</span>
          </h1>

          <p className="text-body-lg about-subtitle" style={{ marginTop: '18px', color: 'var(--text-secondary)' }}>
            WebDevGuru is an elite boutique engineering studio operating at the intersection of technical precision, brand prestige, and conversion architecture. No junior handoffs. Direct access to principal engineers who write every line of code.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section-padding founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-media-card obsidian-card">
              <div className="founder-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Fayez - Founder and Lead Architect at WebDevGuru digital studio"
                  className="founder-portrait-image"
                  loading="lazy"
                />
              </div>
              <div className="founder-card-meta">
                <div>
                  <h3 className="founder-name">Fayez</h3>
                  <p className="founder-role text-muted">Founder &amp; Principal Systems Architect</p>
                </div>
                <div className="category-pill">SAN FRANCISCO &bull; REMOTE</div>
              </div>
            </div>

            <div className="founder-narrative">
              <div className="sticker-badge mb-2">
                <span className="badge-pulse-dot" />
                <span>THE STUDIO MANIFESTO</span>
              </div>
              <h2 className="heading-h2" style={{ marginTop: '10px' }}>
                Architected by Builders. <br />
                <span className="gradient-text">For Category Leaders.</span>
              </h2>

              <p className="text-body" style={{ marginTop: '18px' }}>
                I founded WebDevGuru because I watched brilliant venture-backed founders and scaling brands lose customers simply because their web platforms loaded like dial-up internet and converted like 2012 brochures.
              </p>

              <p className="text-body" style={{ marginTop: '14px' }}>
                Traditional agencies pitch clients with slick VP sales reps, only to hand the actual implementation off to offshore contractors and junior interns juggling twenty accounts. The result is bloated WordPress monoliths and Webflow templates laden with plugins.
              </p>

              <p className="text-body" style={{ marginTop: '14px' }}>
                At WebDevGuru, we inverted the agency model. We only take <strong>2 client flagships per month</strong>. When we partner on your project, our Principal Engineers personally architect your conversion funnels, write type-safe React code, and guarantee sub-second LCP on launch.
              </p>

              <div className="founder-actions" style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => {
                    openModal(null);
                  }} 
                  className="btn btn-primary"
                >
                  <span>Schedule Consultation with Fayez</span>
                  <ArrowUpRight size={18} weight="Outline" />
                </button>
                <Link to="/work" className="btn btn-secondary">
                  <span>Explore Selected Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="section-padding philosophy-section">
        <div className="container">
          <div className="text-center mb-12">
            <span className="label-mono">OPERATIONAL PRINCIPLES</span>
            <h2 className="heading-h2" style={{ marginTop: '8px' }}>
              How We Partner With <span className="gradient-text">Founders.</span>
            </h2>
          </div>

          <div className="philosophy-grid grid-3">
            {PHILOSOPHIES.map((p, idx) => (
              <div key={idx} className="philosophy-card obsidian-card">
                <div className="philosophy-icon-wrapper">
                  {p.icon}
                </div>
                <h3 className="heading-h3" style={{ marginTop: '16px' }}>
                  {p.title}
                </h3>
                <p className="text-body" style={{ marginTop: '10px', fontSize: '0.92rem' }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards Card */}
      <section className="section-padding standards-section">
        <div className="container">
          <div className="standards-card obsidian-card">
            <div className="standards-grid">
              <div>
                <span className="label-mono">TECHNICAL INTEGRITY</span>
                <h3 className="heading-h2" style={{ marginTop: '10px' }}>
                  Our Non-Negotiable <br />
                  <span className="gradient-text">Engineering Standards.</span>
                </h3>
                <p className="text-body" style={{ marginTop: '14px' }}>
                  We treat front-end development as precision software engineering. Every build complies with strict performance thresholds before touching production DNS.
                </p>
              </div>

              <ul className="standards-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {ENGINEERING_STANDARDS.map((std, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={18} weight="Filled" color="#10b981" style={{ flexShrink: 0 }} />
                    <span className="text-body" style={{ color: '#fff', fontSize: '0.94rem' }}>{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
