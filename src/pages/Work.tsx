import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'reicon-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { useModal } from '../hooks/useModal';
import { ALL_PROJECTS } from '../data/projects';
import './Work.css';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { openModal } = useModal();

  const seoProps = useSEO({
    title: "Signature Builds & Case Studies — WebDevGuru Studio",
    description: "Explore our archive of high-conversion digital flagships, viral SaaS growth engines, and headless Shopify builds delivering peak ROI."
  });

  const categories = ['All', 'AI & SaaS', 'Luxury D2C', 'Fintech & Web App', 'Biotech D2C', 'Hardware & SaaS', 'Heritage Luxury'];

  const filteredProjects = activeCategory === 'All' 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="work-page">
      <SEO {...seoProps} />

      <section className="work-hero-section">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Signature Builds' }]} />

          <div className="sticker-badge mb-3">
            <span className="badge-pulse-dot" />
            <span>PRODUCTION PORTFOLIO ARCHIVE</span>
          </div>

          <h1 className="heading-display" style={{ marginTop: '12px', maxWidth: '850px' }}>
            Engineered For <br />
            <span className="gradient-text">Measurable Conversion.</span>
          </h1>

          <p className="text-body-lg" style={{ marginTop: '16px', maxWidth: '640px', color: 'var(--text-secondary)' }}>
            Every platform we ship is custom-architected to convert cold traffic, eliminate bounce rates, and showcase brand prestige. Explore our selected production flagships below.
          </p>

          {/* Filter Bar */}
          <div className="work-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`work-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="work-grid-section">
        <div className="container">
          <div className="work-cards-grid grid-2">
            {filteredProjects.map((project) => (
              <article key={project.id} className="work-item-card obsidian-card" style={{ padding: 0, overflow: 'hidden' }}>
                {/* Architectural Browser Mockup Chrome */}
                <div className="browser-mockup-bar">
                  <div className="browser-dots">
                    <span className="b-dot close" />
                    <span className="b-dot min" />
                    <span className="b-dot max" />
                  </div>
                  <div className="browser-url-pill">
                    <span className="browser-lock-icon">🔒</span>
                    <span className="browser-url-text">{project.id}.webdevguru.tech</span>
                  </div>
                  <div className="browser-badge-edge">
                    <span className="b-pulse" />
                    <span>EDGE P99</span>
                  </div>
                </div>

                <div className="work-item-media">
                  <img 
                    src={project.image} 
                    alt={project.alt} 
                    className="work-item-image"
                    loading="lazy"
                  />
                  <div className="work-item-badges">
                    <span className="category-pill">{project.category}</span>
                    <span className="category-pill">{project.year}</span>
                  </div>
                </div>

                <div className="work-item-body" style={{ padding: '28px' }}>
                  <div className="project-metric-pill">
                    <span>{project.metric}</span>
                  </div>

                  <h2 className="heading-h3" style={{ marginTop: '14px', fontSize: '1.4rem' }}>
                    {project.name}
                  </h2>

                  <p className="text-body" style={{ fontSize: '0.92rem', marginTop: '8px' }}>
                    {project.summary}
                  </p>

                  <div style={{ marginTop: '24px' }}>
                    <Link to={`/project/${project.id}`} className="btn-link">
                      <span>View Architectural Deep-Dive</span>
                      <ArrowRight size={16} weight="Outline" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="work-cta-card obsidian-card text-center">
            <span className="label-mono">LIMITED SPRINT SLOTS</span>
            <h3 className="heading-h2" style={{ marginTop: '10px' }}>
              Need a high-converting build for your business?
            </h3>
            <p className="text-body" style={{ marginTop: '10px', maxWidth: '560px', marginInline: 'auto' }}>
              We partner with just 2 client flagships per month to maintain zero-compromise code execution and founder-level focus.
            </p>
            <div style={{ marginTop: '28px' }}>
              <button 
                onClick={() => {
                  openModal(null);
                }}
                className="btn btn-primary"
              >
                <span>Initiate Your Project</span>
                <ArrowUpRight size={18} weight="Outline" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
