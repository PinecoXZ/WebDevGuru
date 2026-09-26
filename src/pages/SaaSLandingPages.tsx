import { ArrowUpRight, Bolt, ChartBar, Users, Lock } from 'reicon-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { useModal } from '../hooks/useModal';
import { getSaaSLandingPagesSchema } from '../utils/schemas';
import './ServiceDetail.css';

const DELIVERABLES = [
  {
    icon: <Bolt size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Interactive Product Simulation",
    desc: "Demonstrate software value in 3 seconds. We build interactive feature walkthroughs and mock UI demos directly inside the marketing page."
  },
  {
    icon: <ChartBar size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Dynamic ROI & Value Calculators",
    desc: "Allow prospective buyers to calculate time or dollars saved. Interactive calculators create high-intent commitment before signup."
  },
  {
    icon: <Users size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "High-Status Social Proof Modules",
    desc: "Wall of Love testimonials, interactive customer logo carousels, and verified rating badges engineered for B2B credibility."
  },
  {
    icon: <Lock size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Seamless Auth & Stripe Checkout",
    desc: "One-click trial signup flows integrated directly with Clerk, Supabase, Auth0, or Stripe Checkout for zero friction."
  }
];

const SaaSLandingPages = () => {
  const { openModal } = useModal();

  const seoProps = useSEO({
    title: "High-Impact SaaS Growth Engines — WebDevGuru Studio",
    description: "Precision-engineered landing pages and growth funnels turning cold traffic into recurring revenue for venture-backed SaaS.",
    schema: getSaaSLandingPagesSchema()
  });

  return (
    <div className="service-detail-page">
      <SEO {...seoProps} />

      <section className="service-hero-section">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Capabilities', href: '/#services' },
            { label: 'SaaS Growth Engines' }
          ]} />

          <div className="service-hero-content">
            <div className="sticker-badge mb-3">
              <span className="badge-pulse-dot" />
              <span>HIGH-VELOCITY SOFTWARE POSITIONING</span>
            </div>

            <h1 className="heading-display service-title">
              High-Impact <br />
              <span className="gradient-text">SaaS Growth Engines.</span>
            </h1>

            <p className="text-body-lg service-lead">
              Transform complex software capability into visceral commercial value. We engineer SaaS marketing sites that maximize paid acquisition ROAS and accelerate trial-to-paid velocity.
            </p>

            <div className="service-cta-row">
              <button 
                onClick={() => {
                  openModal(null);
                }} 
                className="btn btn-primary"
              >
                <span>Initiate SaaS Scope Sprint</span>
                <ArrowUpRight size={18} weight="Outline" />
              </button>
              <a href="#deliverables" className="btn btn-secondary">
                <span>View Architecture Stack</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section id="deliverables" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="label-mono">ENGINEERING SCOPE</span>
            <h2 className="heading-h2" style={{ marginTop: '8px' }}>
              Engineered to Turn Visitors into <span className="gradient-text">Paying Accounts.</span>
            </h2>
          </div>

          <div className="deliverables-grid">
            {DELIVERABLES.map((item, idx) => (
              <div key={idx} className="deliverable-card obsidian-card">
                <div className="deliverable-icon">{item.icon}</div>
                <h3 className="deliverable-title">{item.title}</h3>
                <p className="text-body" style={{ fontSize: '0.94rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="service-faq-strip obsidian-card text-center" style={{ marginTop: '48px' }}>
            <span className="label-mono">PROVEN TRACK RECORD</span>
            <h3 className="heading-h2" style={{ marginTop: '10px' }}>Tested Across Millions in Tracked Acquisition Spend</h3>
            <p className="text-body" style={{ maxWidth: '640px', margin: '12px auto 28px' }}>
              Our conversion frameworks are battle-tested against high-intent B2B and consumer paid traffic channels with sub-second LCP.
            </p>
            <button 
              onClick={() => {
                openModal(null);
              }} 
              className="btn btn-primary"
            >
              <span>Schedule Architecture Review</span>
              <ArrowUpRight size={18} weight="Outline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSLandingPages;
