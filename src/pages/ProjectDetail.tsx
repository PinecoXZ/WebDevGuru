import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, Layers, Bolt, TrendUp } from 'reicon-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { useModal } from '../hooks/useModal';
import { ALL_PROJECTS, LEGACY_PROJECT_ID_MAP } from '../data/projects';
import './ProjectDetail.css';

interface ProjectDetailData {
  challenge: string;
  solution: string;
  architecture: string[];
  metricsBreakdown: { label: string; value: string; detail: string }[];
  gallery: { url: string; caption: string }[];
}

const PROJECT_DETAILS_MAP: Record<string, ProjectDetailData> = {
  'lumina-ai': {
    challenge: "Lumina AI was losing high-intent enterprise pipeline due to 4.5-second initial bundle load times and dense, confusing technical product documentation.",
    solution: "We re-architected their entire digital presence with sub-second React 19, interactive live model playground previews, and friction-free enterprise demo funnels.",
    architecture: ["React 19 + Vite", "Edge Cloudflare CDN", "Interactive Model Canvas", "Sub-0.5s Global LCP", "PostHog Analytics Suite"],
    metricsBreakdown: [
      { label: "Pipeline Velocity", value: "+380%", detail: "Qualified enterprise demo requests surged within 30 days" },
      { label: "Global LCP", value: "0.38s", detail: "Perfect 100/100 Core Web Vitals score across all regions" },
      { label: "Trial Completion", value: "88%", detail: "+42% increase in developer onboarding velocity" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        caption: "Lumina AI flagship enterprise interface with instantaneous feature tours."
      },
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        caption: "Sub-second model preview canvas with zero rendering lag."
      }
    ]
  },
  'verve-commerce': {
    challenge: "Verve Atelier's luxury customers were dropping off during checkout due to slow 5-second Shopify theme loads, multi-step forms, and lack of visual prestige.",
    solution: "Engineered an ultra-fast headless React storefront with sub-second transitions, interactive 3D lookbooks, and 1-click Apple Pay & multi-currency checkout.",
    architecture: ["Headless Shopify Storefront API", "React 19 SPA", "Dynamic Bundle Engine", "Edge Caching Architecture", "Tailored Luxury Micro-Interactions"],
    metricsBreakdown: [
      { label: "Checkout Velocity", value: "+290%", detail: "Completed purchase rate jumped from 1.8% to 5.2%" },
      { label: "Mobile Dwell Time", value: "5m 12s", detail: "Deep collector immersion in editorial lookbooks" },
      { label: "Cart Abandonment", value: "-48%", detail: "Instant drawer cart eliminated purchase hesitation" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
        caption: "Verve Haute Commerce digital salon showcasing editorial collections."
      },
      {
        url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
        caption: "Instant slide-over checkout with single-tap express payments."
      }
    ]
  },
  'chronos-terminal': {
    challenge: "Chronos Capital needed an institutional trading terminal that converted both professional asset managers and retail power users without lag.",
    solution: "Crafted an obsidian dark workspace with real-time streaming WebSocket charts, zero layout shift, and sub-350ms edge response times.",
    architecture: ["Vite + React 19", "Lightweight Canvas 2D Charts", "WebSocket Realtime Feed", "Space Mono Data Typography", "Zero-JS Tracking Pixels"],
    metricsBreakdown: [
      { label: "Trade Latency", value: "0.32s", detail: "Zero client-side chart lag during peak market volatility" },
      { label: "Active Daily Traders", value: "+280%", detail: "User retention improved 3.4x over previous web app" },
      { label: "Session Duration", value: "8m 45s", detail: "Highest retention benchmark in the fintech sector" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        caption: "Chronos Capital trading terminal showing real-time market depth."
      },
      {
        url: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1200",
        caption: "Real-time analytics workspace with instant keyboard shortcuts."
      }
    ]
  },
  'synthetix-health': {
    challenge: "Synthetix Health was bleeding paid traffic because mobile visitors bounced off confusing supplement dosage charts and slow 6-step cart funnels.",
    solution: "Re-engineered the buyer journey into an intuitive regimen builder with instant biomarker breakdowns and 0.8s checkout transitions.",
    architecture: ["Shopify Liquid + React Island", "Modern Design Tokens", "Optimized WebP Delivery", "Instant Subscription Engine"],
    metricsBreakdown: [
      { label: "Subscription MRR", value: "+340%", detail: "Monthly recurring regimen volume surged rapidly" },
      { label: "Mobile Page Speed", value: "0.8s", detail: "Sub-second mobile landing page load across 4G networks" },
      { label: "Paid ROAS", value: "4.8x", detail: "Blended customer acquisition costs plummeted by 42%" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
        caption: "Synthetix Health custom regimen stack builder with instant price recalculation."
      },
      {
        url: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200",
        caption: "Mobile-first single-tap subscription checkout."
      }
    ]
  },
  'kinetix-os': {
    challenge: "Kinetix needed a cinematic spatial computing product launch page capable of handling millions of global impressions on launch day without slowdown.",
    solution: "Engineered a silky scroll-driven spatial hardware showcase with 60fps canvas animations, modular section reveals, and frictionless pre-order funnels.",
    architecture: ["React 19", "Scroll-Driven CSS & Canvas", "Global Anycast Edge CDN", "Interactive 3D Exploded Views"],
    metricsBreakdown: [
      { label: "Launch Views", value: "14.2M", detail: "Over 14 million impressions during launch week with 0 server drops" },
      { label: "Pre-Order Conversion", value: "6.4%", detail: "Exceeded initial forecast by 240%" },
      { label: "Page Weight", value: "220 KB", detail: "95% lighter than standard Webflow/3D launch sites" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200",
        caption: "Kinetix Spatial OS hardware breakdown preview."
      },
      {
        url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1200",
        caption: "Frictionless pre-order funnel converting paid launch traffic."
      }
    ]
  },
  'zenith-horology': {
    challenge: "Zenith Horology needed an ultra-luxury digital salon to connect with next-gen private collectors without diluting heritage prestige.",
    solution: "Crafted an obsidian dark showcase with high-res macro details, interactive horological movement displays, and private concierge bookings.",
    architecture: ["React 19", "Web Audio Haptics", "Private Concierge Scheduling", "Edge Hosting"],
    metricsBreakdown: [
      { label: "VIP Inquiries", value: "4.8x", detail: "Over ₹15Cr in high-ticket collector private requests" },
      { label: "Avg Dwell Time", value: "6m 20s", detail: "Deep collector immersion in horology storytelling" },
      { label: "Mobile Bounce", value: "-52%", detail: "Instantaneous image loading eliminated visitor drop-off" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
        caption: "Zenith Chrono bespoke catalog showcase with high-fidelity detail."
      },
      {
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200",
        caption: "Private concierge consultation booking interface."
      }
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { openModal } = useModal();

  const isLegacy = id ? LEGACY_PROJECT_ID_MAP[id] : undefined;
  const canonicalId = isLegacy || id;
  const project = ALL_PROJECTS.find(p => p.id === canonicalId);
  const details = canonicalId ? PROJECT_DETAILS_MAP[canonicalId] : undefined;

  const seoProps = useSEO({
    title: project ? `${project.name} Case Study — WebDevGuru Architecture` : "Case Study — WebDevGuru",
    description: project ? project.summary : "Bespoke digital architecture case study by WebDevGuru studio.",
    schema: project ? {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": `${project.name} Architecture Case Study`,
      "headline": `${project.name} — ${project.metric}`,
      "author": {
        "@type": "Organization",
        "name": "WebDevGuru"
      },
      "description": project.summary,
      "image": project.image
    } : undefined
  });

  // Handle legacy slug redirect for backwards compatibility
  if (isLegacy) {
    return <Navigate to={`/project/${isLegacy}`} replace />;
  }

  // Strict 404 routing when project is not found
  if (!project || !details) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = ALL_PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = ALL_PROJECTS[(currentIndex + 1) % ALL_PROJECTS.length];

  return (
    <div className="project-detail-page">
      <SEO {...seoProps} />

      <section className="detail-hero-section">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Signature Builds', href: '/work' },
            { label: project.name }
          ]} />

          <div className="detail-hero-top">
            <Link to="/work" className="back-to-work-btn btn-link">
              <ArrowLeft size={16} weight="Outline" />
              <span>Back to All Builds</span>
            </Link>
            <div className="category-pill">{project.category} &bull; {project.year}</div>
          </div>

          <h1 className="heading-display detail-title" style={{ marginTop: '16px' }}>
            {project.name} — <span className="gradient-text">{project.metric}</span>
          </h1>

          <p className="text-body-lg" style={{ marginTop: '16px', maxWidth: '780px', color: 'var(--text-secondary)' }}>
            {project.summary}
          </p>

          <div className="detail-client-meta">
            <div>
              <span className="label-mono">CLIENT / PARTNER</span>
              <p style={{ color: '#fff', fontWeight: 700, marginTop: '4px' }}>{project.client}</p>
            </div>
            <div>
              <span className="label-mono">DISCIPLINE</span>
              <p style={{ color: '#fff', fontWeight: 700, marginTop: '4px' }}>{project.category} Engineering</p>
            </div>
            <div>
              <span className="label-mono">CORE RESULT</span>
              <p style={{ color: 'var(--accent-emerald-light)', fontWeight: 700, marginTop: '4px' }}>{project.metric}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="detail-cover-section">
        <div className="container">
          <div className="detail-cover-wrapper obsidian-card">
            <img 
              src={project.image} 
              alt={project.alt} 
              className="detail-cover-image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="detail-metrics-section">
        <div className="container">
          <div className="detail-metrics-grid grid-3">
            {details.metricsBreakdown.map((m, idx) => (
              <div key={idx} className="metric-box obsidian-card">
                <div className="metric-big">{m.value}</div>
                <div className="metric-name label-mono" style={{ marginTop: '8px' }}>{m.label}</div>
                <p className="text-body" style={{ fontSize: '0.88rem', marginTop: '6px' }}>
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive: Challenge & Strategy */}
      <section className="section-padding detail-deepdive-section">
        <div className="container">
          <div className="deepdive-grid grid-2">
            <div className="deepdive-block obsidian-card">
              <div className="label-mono">
                <Bolt size={14} weight="Filled" />
                <span>THE BOTTLENECK &amp; CHALLENGE</span>
              </div>
              <h2 className="heading-h3" style={{ marginTop: '12px' }}>
                Where Traffic Was Being Lost
              </h2>
              <p className="text-body" style={{ marginTop: '14px', lineHeight: '1.75' }}>
                {details.challenge}
              </p>
            </div>

            <div className="deepdive-block obsidian-card">
              <div className="label-mono">
                <TrendUp size={14} weight="Filled" />
                <span>THE ENGINEERING BLUEPRINT</span>
              </div>
              <h2 className="heading-h3" style={{ marginTop: '12px' }}>
                How We Engineered The Flagship
              </h2>
              <p className="text-body" style={{ marginTop: '14px', lineHeight: '1.75' }}>
                {details.solution}
              </p>
            </div>
          </div>

          {/* Architecture Stack */}
          <div className="architecture-stack-box obsidian-card" style={{ marginTop: '32px' }}>
            <div className="label-mono" style={{ marginBottom: '16px' }}>
              <Layers size={14} weight="Outline" />
              <span>PRODUCTION TECHNICAL STACK</span>
            </div>
            <div className="tech-stack-pills">
              {details.architecture.map((tech, i) => (
                <div key={i} className="tech-pill">
                  <CheckCircle size={14} weight="Filled" color="#10b981" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcases */}
      <section className="detail-gallery-section">
        <div className="container">
          <div className="gallery-stack">
            {details.gallery.map((item, idx) => (
              <figure key={idx} className="gallery-figure obsidian-card">
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="gallery-image"
                  loading="lazy"
                />
                <figcaption className="gallery-caption text-muted">
                  &bull; {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project & Scope Call Footer */}
      <section className="section-padding detail-footer-section">
        <div className="container">
          <div className="detail-next-card obsidian-card text-center">
            <span className="label-mono">NEXT PRODUCTION BLUEPRINT</span>
            <h3 className="heading-h2" style={{ marginTop: '10px' }}>
              {nextProject.name} — <span className="gradient-text">{nextProject.metric}</span>
            </h3>
            <p className="text-body" style={{ marginTop: '10px', maxWidth: '540px', marginInline: 'auto' }}>
              {nextProject.summary}
            </p>
            <div className="next-actions" style={{ marginTop: '28px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to={`/project/${nextProject.id}`} className="btn btn-secondary">
                <span>View Next Blueprint</span>
                <ArrowRight size={16} weight="Outline" />
              </Link>
              <button 
                onClick={() => {
                  openModal(null);
                }}
                className="btn btn-primary"
              >
                <span>Initiate Your Project Sprint</span>
                <ArrowUpRight size={18} weight="Outline" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
