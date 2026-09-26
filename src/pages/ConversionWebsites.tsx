import { ArrowUpRight, TrendUp, ShieldCheck, Bolt, Sparkles } from 'reicon-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { useModal } from '../hooks/useModal';
import { getConversionWebsitesSchema } from '../utils/schemas';
import './ServiceDetail.css';

const DELIVERABLES = [
  {
    icon: <TrendUp size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Conversion Architecture & Wireframing",
    desc: "Every viewport is structured around buyer psychology. We design intuitive paths to conversion, eliminate choice paralysis, and optimize hierarchy."
  },
  {
    icon: <Sparkles size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Bespoke High-Status Aesthetics",
    desc: "Custom high-status typography, curated iconography, and tailored art direction in Figma that positions your brand definitively above competitors."
  },
  {
    icon: <Bolt size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Sub-Second Global Performance",
    desc: "Engineered with React 19, Vite, and Cloudflare Edge CDN. 98+ Google Lighthouse scores with zero layout shift and instantaneous page loads."
  },
  {
    icon: <ShieldCheck size={22} weight="Outline" color="var(--accent-vermilion)" />,
    title: "Enterprise SEO & Analytics Schema",
    desc: "Complete JSON-LD schema implementation, semantic HTML5, automated sitemaps, and PostHog privacy-compliant event tracking instrumentation."
  }
];

const ConversionWebsites = () => {
  const { openModal } = useModal();

  const seoProps = useSEO({
    title: "High-Conversion Enterprise Websites — WebDevGuru Studio",
    description: "Bespoke full-stack web platforms engineered for maximum commercial conversion, sub-second load times, and market authority.",
    schema: getConversionWebsitesSchema()
  });

  return (
    <div className="service-detail-page">
      <SEO {...seoProps} />

      <section className="service-hero-section">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Capabilities', href: '/#services' },
            { label: 'Conversion Websites' }
          ]} />

          <div className="service-hero-content">
            <div className="sticker-badge mb-3">
              <span className="badge-pulse-dot" />
              <span>BESPOKE ARCHITECTURAL WEB ENGINEERING</span>
            </div>

            <h1 className="heading-display service-title">
              High-Conversion <br />
              <span className="gradient-text">Enterprise Platforms.</span>
            </h1>

            <p className="text-body-lg service-lead">
              Your website is your highest-leverage commercial asset. We replace outdated, bloated templates with bespoke high-performance flagships that turn traffic into enterprise pipeline and revenue.
            </p>

            <div className="service-cta-row">
              <button 
                onClick={() => {
                  openModal(null);
                }} 
                className="btn btn-primary"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight size={18} weight="Outline" />
              </button>
              <a href="#deliverables" className="btn btn-secondary">
                <span>Review Core Deliverables</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section id="deliverables" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="label-mono">STANDARDIZED DELIVERABLES</span>
            <h2 className="heading-h2" style={{ marginTop: '8px' }}>
              What Is Included in Every <span className="gradient-text">Build.</span>
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
            <span className="label-mono">TIME-TO-MARKET GUARANTEE</span>
            <h3 className="heading-h2" style={{ marginTop: '10px' }}>21-Day Guaranteed Delivery Sprint</h3>
            <p className="text-body" style={{ maxWidth: '640px', margin: '12px auto 28px' }}>
              We don't take months to launch. Our structured 21-day sprint methodology ensures your new platform goes live on time with zero scope creep and sub-second LCP.
            </p>
            <button 
              onClick={() => {
                openModal(null);
              }} 
              className="btn btn-primary"
            >
              <span>Schedule Discovery Session</span>
              <ArrowUpRight size={18} weight="Outline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConversionWebsites;
