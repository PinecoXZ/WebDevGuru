import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ChevronDown, 
  ArrowRight, 
  ArrowUpRight, 
  Bolt, 
  Sparkles, 
  ShieldCheck, 
  TrendUp, 
  Code, 
  ShoppingBag, 
  Layers 
} from 'reicon-react';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { getLocalBusinessSchema } from '../utils/schemas';
import { useModal } from '../hooks/useModal';
import { ALL_PROJECTS } from '../data/projects';
import './Home.css';

interface PerformanceMetric {
  label: string;
  corporateVal: string;
  guruVal: string;
  improvement: string;
}

const PERFORMANCE_METRICS: PerformanceMetric[] = [
  {
    label: "Largest Contentful Paint (LCP)",
    corporateVal: "4.8s (Poor)",
    guruVal: "0.38s (Sub-Second)",
    improvement: "12.6x Faster"
  },
  {
    label: "Google Lighthouse Score",
    corporateVal: "38 / 100",
    guruVal: "99 / 100",
    improvement: "+61 Points"
  },
  {
    label: "Cumulative Layout Shift (CLS)",
    corporateVal: "0.38 (Jumpy)",
    guruVal: "0.00 (Zero Shift)",
    improvement: "100% Stable"
  },
  {
    label: "Client-Side Payload Size",
    corporateVal: "6.2 MB (Bloated)",
    guruVal: "180 KB (Optimized)",
    improvement: "97% Lighter"
  }
];

const COMPARISON_ROWS = [
  {
    dimension: "Delivery Velocity",
    agency: "4–6 months of discovery decks, stakeholder committees, and multi-tier account managers.",
    guru: "21-day disciplined sprint speedrun from initial wireframe audit to edge production DNS launch."
  },
  {
    dimension: "Code Architecture",
    agency: "Patchwork WordPress templates with 40+ third-party PHP plugins that slow down mobile checkouts.",
    guru: "Sub-second pure React 19 & Vite architecture, zero bloated runtime libraries, and edge CDN distribution."
  },
  {
    dimension: "Commercial Conversion",
    agency: "Generic marketing templates that look pretty but convert under 1.2% of high-intent paid traffic.",
    guru: "Conversion-engineered architecture with sticky action bars, narrative flow, and high-converting buyer funnels."
  },
  {
    dimension: "Engineering Access",
    agency: "Sold by senior partners, then handed off to junior interns and outsourced offshore subcontractors.",
    guru: "Direct daily access to Senior Principal Engineers who design, architect, and write every line of production code."
  },
  {
    dimension: "Asset Sovereignty",
    agency: "Proprietary CMS lock-in, recurring monthly license fees, and hostages over your domain credentials.",
    guru: "100% intellectual property, Figma master design files, and Git repositories transferred directly upon completion."
  }
];

const ARSENAL_CARDS = [
  {
    badge: "DIGITAL FLAGSHIP",
    title: "High-Converting Web Platforms",
    desc: "Bespoke digital platforms engineered for category leaders. Custom design systems, fluid typography, and sub-second page performance that converts visitors into enterprise pipeline.",
    metrics: ["0.38s Global LCP", "99 Lighthouse", "+240% Pipeline Velocity"],
    link: "/services/conversion-websites",
    icon: Layers
  },
  {
    badge: "SAAS GROWTH ENGINE",
    title: "SaaS Landing Pages & Demos",
    desc: "Positioning architecture, narrative-driven product showcases, interactive ROI calculators, and friction-free sign-up flows that accelerate trial-to-paid velocity.",
    metrics: ["3.8x Trial Signups", "Zero Form Lag", "Embedded Product Tours"],
    link: "/services/saas-landing-pages",
    icon: Bolt
  },
  {
    badge: "HEADLESS COMMERCE",
    title: "Headless Shopify D2C Storefronts",
    desc: "Ultra-fast direct-to-consumer flagship storefronts. Dynamic bundle builders, instant drawer cart, single-tap Apple Pay / UPI checkout, and sub-second mobile page speed.",
    metrics: ["+310% D2C Revenue", "Sub-0.5s Transitions", "Zero Cart Friction"],
    link: "/services/d2c-shopify",
    icon: ShoppingBag
  }
];

const SPRINT_STAGES = [
  {
    step: "01",
    phase: "Week 1",
    name: "Positioning & Architecture Audit",
    deliverables: ["Commercial Conversion Audit", "Wireframe & Storyboard", "Tech Stack Architecture Spec"]
  },
  {
    step: "02",
    phase: "Week 2",
    name: "High-Fidelity Design System",
    deliverables: ["Awwwards-Grade UI Design", "Interactive Motion Prototypes", "Figma Design Token Library"]
  },
  {
    step: "03",
    phase: "Week 3",
    name: "Sub-Second React 19 Build",
    deliverables: ["Type-Safe React Architecture", "Edge CDN Fast Routing", "Lighthouse 99 Verification"]
  },
  {
    step: "04",
    phase: "Day 21",
    name: "Production DNS Launch",
    deliverables: ["Global DNS Cutover", "PostHog Analytics Integration", "100% Full IP Transfer"]
  }
];

const TESTIMONIALS = [
  {
    quote: "WebDevGuru rebuilt our SaaS platform in 18 days flat. Our mobile bounce rate plummeted from 48% to 14%, and enterprise demo requests jumped 3.8x in the first month.",
    author: "Alexander Chen",
    role: "VP of Product",
    company: "Lumina Systems",
    metric: "+380% Pipeline"
  },
  {
    quote: "The speed difference is night and day. Going from our bloated Shopify theme to a headless React storefront reduced our checkout lag to under 0.5s. Our revenue numbers speak for themselves.",
    author: "Elena Rostova",
    role: "Founder & Creative Director",
    company: "Verve Atelier",
    metric: "+290% Checkout CVR"
  },
  {
    quote: "Working directly with principal engineers who understand both high-converting commercial design and sub-second architecture saved us months of endless agency meetings.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Chronos Capital",
    metric: "0.32s Edge Latency"
  }
];

const FAQS = [
  {
    q: "Why do you emphasize sub-second React architecture over WordPress or Webflow?",
    a: "Google's official web vitals data shows that 53% of mobile visits are abandoned if pages take over 3 seconds to load. Standard templates and builders load megabytes of unminified CSS, jQuery, and tracking scripts. Our custom React 19 builds deliver content in under 0.5s globally, which directly multiplies visitor-to-customer conversion rates."
  },
  {
    q: "How does the 21-day sprint timeline work in practice?",
    a: "We work with a strictly capped roster of clients at any given time. There are no junior hand-offs or corporate bureaucracy. We follow a military-disciplined sprint cadence: Week 1 for commercial strategy and wireframing, Week 2 for high-fidelity UI design, and Week 3 for pure production code, Lighthouse optimization, and global DNS deployment."
  },
  {
    q: "Do we retain full ownership of our code and design files?",
    a: "100%. Upon project launch, all intellectual property, production Git repositories, Figma design files, and deployment credentials are fully transferred to your company. We do not charge recurring hostage fees or lock you into proprietary builders."
  },
  {
    q: "Can you integrate our existing CRM, Stripe checkout, or Shopify backend?",
    a: "Yes. We build modern headless frontends that connect seamlessly to your existing infrastructure via high-performance APIs, including Shopify Storefront API, Stripe Elements, HubSpot, PostHog, and custom REST/GraphQL endpoints."
  },
  {
    q: "What is your satisfaction guarantee?",
    a: "We guarantee sub-second LCP (<0.8s on 4G) and a Google Lighthouse score of 95+ on launch, or we continue optimizing at zero additional cost until the benchmark is verified."
  }
];

const Home = () => {
  const { openModal } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [monthlyVisitors, setMonthlyVisitors] = useState(25000);
  const [currentConversion, setCurrentConversion] = useState(1.4);
  const [averageOrderValue, setAverageOrderValue] = useState(2800);
  const [projectFilter, setProjectFilter] = useState('All');

  const visitorsInputId = useId();
  const conversionInputId = useId();
  const orderValueInputId = useId();

  const seoProps = useSEO({
    title: "WebDevGuru — Bespoke Digital Flagships & Sub-Second Engineering",
    description: "We engineer high-impact digital flagships, SaaS growth engines, and headless Shopify storefronts designed to convert visitors into pipeline and revenue.",
    schema: getLocalBusinessSchema()
  });

  // ROI Calculator Math
  const currentMonthlyRevenue = Math.round(monthlyVisitors * (currentConversion / 100) * averageOrderValue);
  const projectedConversion = (currentConversion * 2.2).toFixed(1);
  const projectedMonthlyRevenue = Math.round(monthlyVisitors * (parseFloat(projectedConversion) / 100) * averageOrderValue);
  const monthlyRevenueGain = projectedMonthlyRevenue - currentMonthlyRevenue;

  const filteredProjects = projectFilter === 'All' 
    ? ALL_PROJECTS.slice(0, 4) 
    : ALL_PROJECTS.filter(p => p.category.toLowerCase().includes(projectFilter.toLowerCase())).slice(0, 4);

  return (
    <div className="home-page-root">
      <SEO {...seoProps} />

      {/* =====================================================================
          1. AWWWARDS STATEMENT HERO SECTION
          ===================================================================== */}
      <section className="studio-hero-section">
        <div className="studio-hero-mesh" aria-hidden="true" />

        <div className="container studio-hero-container">
          {/* Eyebrow Status Badge */}
          <div className="sticker-badge mb-3">
            <span className="badge-pulse-dot" />
            <span className="desktop-only-inline">BESPOKE DIGITAL FLAGSHIPS &amp; SUB-SECOND ARCHITECTURE</span>
            <span className="mobile-only-inline">BESPOKE DIGITAL FLAGSHIPS</span>
          </div>

          {/* Main Statement Display Headline */}
          <h1 className="heading-display studio-hero-headline">
            We Engineer <br className="mobile-only-br" />High-Impact <br />
            <span className="editorial-serif">Digital Flagships</span> <br className="mobile-only-br" />That Convert.
          </h1>

          {/* High-Converting Narrative Subtitle */}
          <p className="text-body-lg studio-hero-subtitle">
            Boutique web engineering studio building sub-second React platforms, high-velocity SaaS growth engines, and headless Shopify storefronts for category leaders. Zero template bloat. 100% intellectual property sovereignty.
          </p>

          {/* Primary & Secondary Dual CTAs */}
          <div className="studio-hero-actions">
            <button 
              onClick={() => openModal(null)}
              className="btn btn-primary studio-hero-primary-btn"
            >
              <span>Schedule Discovery Sprint</span>
              <ArrowUpRight size={18} weight="Outline" />
            </button>

            <a 
              href="#signature-builds" 
              className="btn btn-secondary studio-hero-secondary-btn"
            >
              <span>Explore Selected Work</span>
              <ArrowRight size={18} weight="Outline" />
            </a>
          </div>

          {/* Interactive 3D Telemetry Stage (Vengeance & Skiper UI inspired) */}
          <div className="hero-interactive-stage">
            <div className="stage-top-bar">
              <div className="stage-dots">
                <span className="stage-dot active" />
                <span className="stage-dot" />
                <span className="stage-dot" />
              </div>
              <span className="stage-title-mono">SYS // SUB-SECOND RUNTIME ARCHITECTURE</span>
              <span className="stage-badge-live">
                <span className="badge-pulse-dot" style={{ background: '#34d399' }} />
                <span>LIVE EDGE P99</span>
              </span>
            </div>

            <div className="stage-body-grid">
              <div className="stage-telemetry-panel">
                <span className="telemetry-tag">EDGE RUNTIME ENGINE &bull; REACT 19</span>
                <h3 className="telemetry-heading">
                  Sub-0.4s Global LCP. <br />
                  Zero Hydration Bottlenecks.
                </h3>
                <div className="telemetry-metrics-row">
                  <div className="telemetry-stat-card">
                    <span className="telemetry-val vermilion">0.38s</span>
                    <span className="telemetry-label">Global LCP</span>
                  </div>
                  <div className="telemetry-stat-card">
                    <span className="telemetry-val emerald">99/100</span>
                    <span className="telemetry-label">Lighthouse</span>
                  </div>
                  <div className="telemetry-stat-card">
                    <span className="telemetry-val">180 KB</span>
                    <span className="telemetry-label">Edge Bundle</span>
                  </div>
                </div>
              </div>

              <div className="stage-isometric-viewport">
                <div className="iso-blueprint-card">
                  <div className="iso-card-header">
                    <span className="iso-card-status">
                      <span className="badge-pulse-dot" style={{ background: '#34d399' }} />
                      PROD CLUSTER
                    </span>
                    <span className="iso-speed-badge">0.38s</span>
                  </div>
                  <div className="iso-chart-bars">
                    <div className="iso-bar" style={{ height: '35%' }} />
                    <div className="iso-bar" style={{ height: '55%' }} />
                    <div className="iso-bar" style={{ height: '40%' }} />
                    <div className="iso-bar" style={{ height: '70%' }} />
                    <div className="iso-bar peak" style={{ height: '95%' }} />
                    <div className="iso-bar" style={{ height: '60%' }} />
                    <div className="iso-bar" style={{ height: '45%' }} />
                  </div>
                  <div className="iso-card-footer">
                    <span>DNS: 12ms</span>
                    <span>TTFB: 32ms</span>
                    <span>CLS: 0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proof Upfront: Verified Performance Ribbon */}
          <div className="hero-metrics-ribbon">
            <div className="metric-ribbon-card">
              <span className="metric-ribbon-val">0.38s</span>
              <span className="metric-ribbon-label">AVERAGE GLOBAL LCP</span>
            </div>
            <div className="metric-ribbon-card">
              <span className="metric-ribbon-val">99 / 100</span>
              <span className="metric-ribbon-label">LIGHTHOUSE PERFORMANCE</span>
            </div>
            <div className="metric-ribbon-card">
              <span className="metric-ribbon-val">+240%</span>
              <span className="metric-ribbon-label">AVG PIPELINE CONVERSION</span>
            </div>
            <div className="metric-ribbon-card">
              <span className="metric-ribbon-val">₹150M+</span>
              <span className="metric-ribbon-label">CLIENT REVENUE GENERATED</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. INTERACTIVE ARCHITECTURE & SPEED BENCHMARK
          ===================================================================== */}
      <section id="vitals-preview" className="section-padding benchmark-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="label-mono">
              <Bolt size={14} weight="Filled" />
              MEASURABLE ENGINEERING RIGOR
            </span>
            <h2 className="heading-h2" style={{ marginTop: '10px' }}>
              Why Sub-Second Performance Is <span className="editorial-serif">Commercial Strategy.</span>
            </h2>
            <p className="text-body" style={{ maxWidth: '680px', margin: '14px auto 0' }}>
              Every 100ms of latency reduction drives up to an 8% lift in customer checkout conversion. See how our bespoke React architecture outperforms standard corporate agency templates.
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="benchmark-grid">
            {PERFORMANCE_METRICS.map((item, idx) => (
              <div key={idx} className="obsidian-card benchmark-card">
                <div className="benchmark-card-header">
                  <span className="benchmark-metric-name">{item.label}</span>
                  <span className="benchmark-badge">{item.improvement}</span>
                </div>

                <div className="benchmark-bars-wrap">
                  <div className="benchmark-bar-row">
                    <span className="bar-label-tag">Standard Agency</span>
                    <div className="bar-track">
                      <div className="bar-fill bar-fill-bad" style={{ width: '85%' }}></div>
                    </div>
                    <span className="bar-val-text bad-val">{item.corporateVal}</span>
                  </div>

                  <div className="benchmark-bar-row">
                    <span className="bar-label-tag">WebDevGuru</span>
                    <div className="bar-track">
                      <div className="bar-fill bar-fill-good" style={{ width: '20%' }}></div>
                    </div>
                    <span className="bar-val-text good-val">{item.guruVal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. SIGNATURE BUILDS SHOWCASE (SELECTED WORK)
          ===================================================================== */}
      <section id="signature-builds" className="section-padding signature-work-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="label-mono">
                <Sparkles size={14} weight="Filled" />
                PRODUCTION ARCHIVE
              </span>
              <h2 className="heading-h2" style={{ marginTop: '10px' }}>
                Featured <span className="editorial-serif">Signature Builds.</span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="filter-pill-row">
              {['All', 'AI & SaaS', 'Luxury D2C', 'Fintech'].map((tab) => (
                <button
                  key={tab}
                  className={`filter-pill-btn ${projectFilter === tab ? 'active' : ''}`}
                  onClick={() => setProjectFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Project Bento Showcase */}
          <div className="projects-showcase-grid">
            {filteredProjects.map((project, idx) => (
              <Link 
                to={`/project/${project.id}`} 
                key={project.id} 
                className={`obsidian-card project-card-item ${idx === 0 ? 'project-hero-item' : ''}`}
              >
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

                <div className="project-image-wrap">
                  <img src={project.image} alt={project.alt} className="project-img" loading="lazy" />
                  <div className="project-image-overlay" />
                  <div className="project-top-meta">
                    <span className="category-pill">{project.category}</span>
                    <span className="project-metric-pill">{project.metric}</span>
                  </div>
                </div>

                <div className="project-content-block">
                  <div className="project-client-name">{project.client}</div>
                  <h3 className="project-title-text">{project.name}</h3>
                  <p className="project-summary-text">{project.summary}</p>
                  <div className="project-link-action">
                    <span>View Architectural Deep-Dive</span>
                    <ArrowUpRight size={16} weight="Outline" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="work-view-all-row text-center">
            <Link to="/work" className="btn btn-secondary">
              <span>View Full Case Study Archive</span>
              <ArrowRight size={16} weight="Outline" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CORE ENGINEERING ARSENAL (CAPABILITIES BENTO)
          ===================================================================== */}
      <section id="services" className="section-padding capabilities-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="label-mono">
              <Code size={14} weight="Filled" />
              SPECIALIZED DISCIPLINES
            </span>
            <h2 className="heading-h2" style={{ marginTop: '10px' }}>
              Engineered For Direct <span className="editorial-serif">Commercial Impact.</span>
            </h2>
            <p className="text-body" style={{ maxWidth: '640px', margin: '14px auto 0' }}>
              We don't build generic brochureware. Every solution is custom-architected for maximum velocity and high-ticket customer conversion.
            </p>
          </div>

          <div className="capabilities-bento-grid">
            {/* Primary Featured Flagship Card */}
            {(() => {
              const card = ARSENAL_CARDS[0];
              const IconComp = card.icon;
              return (
                <div className="obsidian-card capability-bento-card featured-bento">
                  <div>
                    <div className="featured-bento-header">
                      <div className="capability-icon-wrap">
                        <IconComp size={26} weight="Outline" color="#ff3b00" />
                      </div>
                      <span className="sticker-badge">
                        <span className="badge-pulse-dot" style={{ backgroundColor: '#00e599' }} />
                        <span>PREMIER DISCIPLINE</span>
                      </span>
                    </div>

                    <span className="label-mono" style={{ marginTop: '22px', display: 'block' }}>{card.badge}</span>
                    <h3 className="capability-title" style={{ fontSize: '1.75rem', marginTop: '10px' }}>{card.title}</h3>
                    <p className="capability-desc" style={{ fontSize: '0.98rem', marginTop: '12px', maxWidth: '520px' }}>{card.desc}</p>
                    
                    {/* Live Blueprint Architecture Tag Cloud */}
                    <div className="featured-bento-blueprint">
                      <div className="blueprint-tag">REACT 19 SPA</div>
                      <div className="blueprint-tag">SUB-0.5s LCP</div>
                      <div className="blueprint-tag">EDGE ANYCAST</div>
                      <div className="blueprint-tag">FIGMA DESIGN TOKENS</div>
                    </div>
                  </div>

                  <div>
                    <div className="capability-metrics-list" style={{ marginTop: '24px' }}>
                      {card.metrics.map((m, idx) => (
                        <div key={idx} className="capability-metric-item">
                          <CheckCircle size={15} weight="Filled" color="#10b981" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={card.link} className="btn btn-secondary capability-featured-cta" style={{ marginTop: '28px', width: '100%' }}>
                      <span>Explore Flagship Methodology</span>
                      <ArrowUpRight size={16} weight="Outline" />
                    </Link>
                  </div>
                </div>
              );
            })()}

            {/* Secondary Companion Cards Column */}
            <div className="capabilities-bento-column">
              {ARSENAL_CARDS.slice(1).map((card, i) => {
                const IconComp = card.icon;
                return (
                  <div key={i} className="obsidian-card capability-bento-card">
                    <div className="capability-icon-wrap">
                      <IconComp size={24} weight="Outline" color="#ff3b00" />
                    </div>
                    <span className="label-mono" style={{ marginTop: '16px' }}>{card.badge}</span>
                    <h3 className="capability-title">{card.title}</h3>
                    <p className="capability-desc">{card.desc}</p>
                    
                    <div className="capability-metrics-list">
                      {card.metrics.map((m, idx) => (
                        <div key={idx} className="capability-metric-item">
                          <CheckCircle size={14} weight="Filled" color="#10b981" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={card.link} className="btn-link capability-explore-link">
                      <span>Explore Methodology</span>
                      <ArrowUpRight size={14} weight="Outline" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. ARCHITECTURAL COMPARISON: TRADITIONAL AGENCY VS WEBDEVGURU
          ===================================================================== */}
      <section id="comparison" className="section-padding comparison-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="label-mono">
              <ShieldCheck size={14} weight="Filled" />
              DIRECT COMPARISON
            </span>
            <h2 className="heading-h2" style={{ marginTop: '10px' }}>
              Traditional Agency Bureaucracy vs <span className="editorial-serif">WebDevGuru Precision.</span>
            </h2>
            <p className="text-body" style={{ maxWidth: '680px', margin: '14px auto 0' }}>
              Why high-growth founders and venture-backed operators choose our high-velocity engineering model over multi-tier corporate agencies.
            </p>
          </div>

          <div className="obsidian-card comparison-table-card">
            <div className="comparison-table-header">
              <div className="comparison-col-dim">Evaluation Factor</div>
              <div className="comparison-col-corp">Traditional Corporate Agency</div>
              <div className="comparison-col-guru">WebDevGuru Engineering</div>
            </div>

            <div className="comparison-table-body">
              {COMPARISON_ROWS.map((row, idx) => (
                <div key={idx} className="comparison-row">
                  <div className="comparison-dim-cell">{row.dimension}</div>
                  <div className="comparison-corp-cell">
                    <span className="corp-label-tag">Legacy:</span>
                    <p>{row.agency}</p>
                  </div>
                  <div className="comparison-guru-cell">
                    <div className="guru-check-icon">
                      <CheckCircle size={16} weight="Filled" color="#10b981" />
                    </div>
                    <p>{row.guru}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. SPRINT PIPELINE (21-DAY EXECUTION ROADMAP)
          ===================================================================== */}
      <section id="process" className="section-padding sprint-process-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="label-mono">
              <TrendUp size={14} weight="Filled" />
              VELOCITY IS STRATEGY
            </span>
            <h2 className="heading-h2" style={{ marginTop: '10px' }}>
              The 21-Day <span className="editorial-serif">Flagship Sprint.</span>
            </h2>
            <p className="text-body" style={{ maxWidth: '640px', margin: '14px auto 0' }}>
              A disciplined, milestone-driven execution cadence designed to get you to production DNS launch in three focused weeks.
            </p>
          </div>

          <div className="sprint-timeline-grid">
            {SPRINT_STAGES.map((stage, idx) => (
              <div key={idx} className="obsidian-card sprint-stage-card">
                <div className="sprint-stage-number">{stage.step}</div>
                <span className="label-mono sprint-stage-phase">{stage.phase}</span>
                <h3 className="sprint-stage-name">{stage.name}</h3>

                <ul className="sprint-deliverables-list">
                  {stage.deliverables.map((del, dIdx) => (
                    <li key={dIdx}>
                      <span className="sprint-bullet">•</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. INTERACTIVE ROI & REVENUE CALCULATOR
          ===================================================================== */}
      <section className="section-padding calculator-section">
        <div className="container">
          <div className="obsidian-card calculator-card">
            <div className="calculator-grid">
              <div className="calculator-controls">
                <span className="label-mono">
                  <Bolt size={14} weight="Filled" />
                  INTERACTIVE REVENUE SIMULATOR
                </span>
                <h3 className="heading-h2 calc-heading" style={{ marginTop: '8px' }}>
                  Calculate Your <span className="editorial-serif">Latency Dividend.</span>
                </h3>
                <p className="text-body" style={{ marginTop: '10px', fontSize: '0.92rem' }}>
                  Model the direct pipeline and revenue growth unlocked when your site eliminates bounce lag and elevates conversion rate.
                </p>

                <div className="calculator-sliders-wrap">
                  <div className="calc-slider-group">
                    <div className="calc-slider-meta">
                      <label htmlFor={visitorsInputId}>Monthly Visitors</label>
                      <span className="calc-slider-val">{monthlyVisitors.toLocaleString()}</span>
                    </div>
                    <input 
                      id={visitorsInputId}
                      type="range" 
                      min="5000" 
                      max="200000" 
                      step="5000"
                      value={monthlyVisitors} 
                      onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                      className="calc-range-input"
                    />
                  </div>

                  <div className="calc-slider-group">
                    <div className="calc-slider-meta">
                      <label htmlFor={conversionInputId}>Current Conversion Rate (%)</label>
                      <span className="calc-slider-val">{currentConversion}%</span>
                    </div>
                    <input 
                      id={conversionInputId}
                      type="range" 
                      min="0.5" 
                      max="5.0" 
                      step="0.1"
                      value={currentConversion} 
                      onChange={(e) => setCurrentConversion(Number(e.target.value))}
                      className="calc-range-input"
                    />
                  </div>

                  <div className="calc-slider-group">
                    <div className="calc-slider-meta">
                      <label htmlFor={orderValueInputId}>Average Order or Deal Value (₹)</label>
                      <span className="calc-slider-val">₹{averageOrderValue.toLocaleString()}</span>
                    </div>
                    <input 
                      id={orderValueInputId}
                      type="range" 
                      min="500" 
                      max="25000" 
                      step="500"
                      value={averageOrderValue} 
                      onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                      className="calc-range-input"
                    />
                  </div>
                </div>
              </div>

              {/* Output Display Card */}
              <div className="calculator-output-panel">
                <span className="label-mono">ESTIMATED REVENUE IMPACT</span>
                <div className="calc-gain-highlight">
                  <span className="calc-gain-prefix">+</span>
                  <span className="calc-gain-number">₹{monthlyRevenueGain.toLocaleString()}</span>
                  <span className="calc-gain-freq">/ month</span>
                </div>
                <p className="calc-gain-subtitle">
                  Projected conversion surge from <strong>{currentConversion}%</strong> to <strong>{projectedConversion}%</strong> with sub-second LCP.
                </p>

                <div className="calc-annual-breakdown">
                  <div className="calc-stat-chip">
                    <span className="calc-stat-label">Estimated Annual Lift</span>
                    <span className="calc-stat-val">₹{(monthlyRevenueGain * 12).toLocaleString()}</span>
                  </div>
                  <div className="calc-stat-chip">
                    <span className="calc-stat-label">Payback Timeline</span>
                    <span className="calc-stat-val good-val">Under 30 Days</span>
                  </div>
                </div>

                <button 
                  onClick={() => openModal(null)}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '24px' }}
                >
                  <span>Unlock This Revenue Model</span>
                  <ArrowUpRight size={18} weight="Outline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. FOUNDER & OPERATOR TESTIMONIALS
          ===================================================================== */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="label-mono">
              <Sparkles size={14} weight="Filled" />
              VERIFIED ENDORSEMENTS
            </span>
            <h2 className="heading-h2" style={{ marginTop: '10px' }}>
              Built For Founders Who Value <span className="editorial-serif">Commercial Speed.</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="obsidian-card testimonial-card">
                <span className="testimonial-metric-chip">{t.metric}</span>
                <p className="testimonial-quote-text">&ldquo;{t.quote}&rdquo;</p>
                
                <div className="testimonial-author-block">
                  <div className="author-avatar-initials">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{t.author}</span>
                    <span className="author-title">{t.role} &bull; {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. FREQUENTLY ASKED QUESTIONS
          ===================================================================== */}
      <section className="section-padding faqs-section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header text-center">
            <span className="label-mono">COMMON INQUIRIES</span>
            <h2 className="heading-h2" style={{ marginTop: '10px' }}>
              Frequently Asked <span className="editorial-serif">Questions.</span>
            </h2>
          </div>

          <div className="faq-accordions-list">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`obsidian-card faq-item-card ${activeFaq === idx ? 'expanded' : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-q-text">{faq.q}</h3>
                  <div className="faq-chevron-icon">
                    <ChevronDown size={18} weight="Outline" />
                  </div>
                </div>

                {activeFaq === idx && (
                  <div className="faq-answer-block">
                    <p className="text-body">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. GRAND FINALE INVITATION SECTION
          ===================================================================== */}
      <section className="finale-cta-section">
        <div className="finale-glow-orb" aria-hidden="true" />
        <div className="container finale-container text-center">
          <div className="sticker-badge mb-3">
            <span className="badge-pulse-dot" />
            <span>NOW BOOKING Q2/Q3 HIGH-IMPACT SPRINTS</span>
          </div>

          <h2 className="heading-display finale-headline">
            Ready to Build a Category-Defining <br />
            <span className="editorial-serif">Digital Flagship?</span>
          </h2>

          <p className="text-body-lg finale-sub">
            Let's review your current metrics, identify conversion bottlenecks, and engineer a sub-second architecture that converts at scale.
          </p>

          <div className="finale-action-row">
            <button 
              onClick={() => openModal(null)}
              className="btn btn-primary finale-cta-btn"
            >
              <span>Schedule Direct Founder Call</span>
              <ArrowUpRight size={20} weight="Outline" />
            </button>
          </div>

          <div className="finale-reassurance-row">
            <span>✓ Sub-second LCP SLA</span>
            <span>✓ 21-Day Launch Sprint</span>
            <span>✓ 100% Full IP Transfer</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
