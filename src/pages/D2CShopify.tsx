import { ArrowUpRight, ShoppingBag, Mobile, Refresh, Card } from 'reicon-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { useModal } from '../hooks/useModal';
import { getD2CShopifySchema } from '../utils/schemas';
import './ServiceDetail.css';

const DELIVERABLES = [
  {
    icon: <ShoppingBag size={22} weight="Outline" />,
    title: "Bespoke Shopify Theme Engineering",
    desc: "Engineered from scratch using Shopify Liquid & Hydrogen without bloated marketplace templates or conflicting third-party scripts."
  },
  {
    icon: <Mobile size={22} weight="Outline" />,
    title: "Mobile-First Fluid Commerce UI",
    desc: "Over 82% of premium D2C transactions happen on smartphones. We architect sticky thumb-zone checkout trays, instant variant galleries, and zero layout shift."
  },
  {
    icon: <Card size={22} weight="Outline" />,
    title: "High-AOV Upsell & Dynamic Cart Engines",
    desc: "Slide-out intelligent cart drawers featuring tiered free-shipping thresholds, automated 1-click bundle recommendations, and seamless checkout pipelines."
  },
  {
    icon: <Refresh size={22} weight="Outline" />,
    title: "Global Multi-Currency & Subscription Portals",
    desc: "Shopify Markets localization, geolocation-aware currency pricing, and frictionless recurring subscription management integrations."
  }
];

const D2CShopify = () => {
  const { openModal } = useModal();

  const seoProps = useSEO({
    title: "Custom Shopify & Headless D2C Stores — WebDevGuru",
    description: "Custom Shopify stores and headless e-commerce architectures engineered for sub-second speed, brand prestige, and maximum average order value.",
    schema: getD2CShopifySchema()
  });

  return (
    <div className="service-detail-page">
      <SEO {...seoProps} />

      <section className="service-hero-section">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Capabilities', href: '/#services' },
            { label: 'Headless Shopify D2C' }
          ]} />

          <div className="service-hero-content">
            <span className="label-mono">HIGH-PERFORMANCE COMMERCE PLATFORMS</span>
            <h1 className="heading-display service-title">
              Custom Shopify &amp; <br />
              <span className="wavy-accent">Headless D2C Stores.</span>
            </h1>
            <p className="text-body-lg service-lead">
              Modern digital commerce is won on mobile responsiveness and zero-friction purchase flows. We engineer custom Shopify storefronts that turn casual visitors into loyal repeat customers with industry-leading checkout velocity.
            </p>

            <div className="service-cta-row">
              <button 
                onClick={() => {
                  openModal(null);
                }} 
                className="btn btn-primary"
              >
                <span>Book E-Commerce Scope Call</span>
                <ArrowUpRight size={16} weight="Outline" />
              </button>
              <a href="#deliverables" className="btn btn-secondary">
                <span>Review Commerce Features</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section id="deliverables" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="label-mono">COMMERCE DELIVERABLES</span>
            <h2 className="heading-h2" style={{ marginTop: '8px' }}>
              Engineered for Maximum Average <span className="wavy-accent">Order Value.</span>
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

          <div className="service-faq-strip obsidian-card text-center">
            <h3 className="heading-h2">Sub-Second Mobile Checkout Guarantee</h3>
            <p className="text-body" style={{ maxWidth: '640px', margin: '12px auto 28px' }}>
              Every 100ms improvement in site speed increases customer conversion by up to 1%. We eliminate third-party script latency to give your buyers an effortless, instant shopping journey.
            </p>
            <button 
              onClick={() => {
                openModal(null);
              }} 
              className="btn btn-primary"
            >
              <span>Schedule Storefront Audit</span>
              <ArrowUpRight size={16} weight="Outline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default D2CShopify;
