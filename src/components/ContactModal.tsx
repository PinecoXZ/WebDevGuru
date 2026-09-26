import { useState, type FormEvent } from 'react';
import { CloseCircle, CheckCircle, ArrowRight } from 'reicon-react';
import { useModal } from '../hooks/useModal';
import { track } from '../utils/analytics';
import './ContactModal.css';

const BUILD_SERVICES = [
  "Bespoke Flagship Website",
  "SaaS Landing Page & Growth Engine",
  "Headless Shopify D2C Storefront",
  "Sub-Second React 19 Overhaul"
];

const BUDGET_TIERS = [
  "₹1.5L – ₹3.5L (MVP Sprint)",
  "₹3.5L – ₹7.5L (Growth Flagship)",
  "₹7.5L+ (Enterprise Custom)"
];

const TIMELINE_TIERS = [
  "Fast Sprint (2-3 Weeks)",
  "Full Build (4-6 Weeks)",
  "Flexible / Next Quarter"
];

const ContactModal = () => {
  const { isOpen, closeModal } = useModal();
  const [service, setService] = useState(BUILD_SERVICES[0]);
  const [budget, setBudget] = useState(BUDGET_TIERS[1]);
  const [timeline, setTimeline] = useState(TIMELINE_TIERS[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [projectGoals, setProjectGoals] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    track('project_inquiry_submitted', {
      service,
      budget,
      timeline,
      websiteUrl
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    closeModal();
  };

  return (
    <div className="studio-modal-backdrop" onClick={closeModal}>
      <div 
        className="studio-modal-container" 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true"
      >
        <button 
          className="studio-modal-close" 
          onClick={closeModal}
          aria-label="Close modal"
        >
          <CloseCircle size={22} weight="Outline" />
        </button>

        {isSubmitted ? (
          <div className="studio-modal-success text-center">
            <div className="studio-success-icon-wrap">
              <CheckCircle size={48} weight="Filled" color="#10b981" />
            </div>

            <div className="sticker-badge mb-3">
              <span className="badge-pulse-dot" />
              <span>PROJECT BRIEF RECEIVED</span>
            </div>

            <h3 className="heading-h2" style={{ marginTop: '14px', fontSize: '1.8rem' }}>
              Your Project Brief Has Been <span className="gradient-text">Confirmed.</span>
            </h3>

            <p className="text-body" style={{ marginTop: '12px', color: '#cbd5e1' }}>
              Thank you, <strong style={{ color: '#fff' }}>{name || 'there'}</strong>. We received your requirements for <strong style={{ color: 'var(--accent-vermilion)' }}>{service}</strong>.
            </p>

            <p className="text-body" style={{ marginTop: '10px', fontSize: '0.88rem', color: '#94a3b8' }}>
              Our Principal Engineering team will benchmark your current presence and respond with a tailored architectural blueprint and timeline within 24 hours.
            </p>

            <div style={{ marginTop: '32px' }}>
              <button onClick={handleResetAndClose} className="btn btn-primary" style={{ width: '100%' }}>
                <span>Return to WebDevGuru</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="studio-modal-form-content">
            <div className="studio-modal-header">
              <div className="sticker-badge mb-2">
                <span className="badge-pulse-dot" />
                <span>DIRECT FOUNDER CONSULTATION</span>
              </div>
              <h2 className="studio-modal-title">
                Initiate Your <span className="gradient-text">Flagship Build.</span>
              </h2>
              <p className="studio-modal-sub">
                Tell us about your brand and commercial targets. We respond with a dedicated architecture plan within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="studio-modal-form">
              {/* Service Selection */}
              <div className="form-group">
                <label className="form-label">Select Core Capability</label>
                <div className="pill-selector-grid">
                  {BUILD_SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`pill-option ${service === s ? 'selected' : ''}`}
                      onClick={() => setService(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="form-group">
                <label className="form-label">Estimated Investment Scope</label>
                <div className="pill-selector-row">
                  {BUDGET_TIERS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`pill-option ${budget === b ? 'selected' : ''}`}
                      onClick={() => setBudget(b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="form-group">
                <label className="form-label">Target Launch Velocity</label>
                <div className="pill-selector-row">
                  {TIMELINE_TIERS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`pill-option ${timeline === t ? 'selected' : ''}`}
                      onClick={() => setTimeline(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two Column Contact Fields */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Maya Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="studio-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Work Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="maya@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="studio-input"
                  />
                </div>
              </div>

              {/* Website URL */}
              <div className="form-group">
                <label htmlFor="contact-website" className="form-label">Current Website or Figma URL (Optional)</label>
                <input
                  id="contact-website"
                  type="text"
                  placeholder="https://yourcompany.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="studio-input"
                />
              </div>

              {/* Objectives */}
              <div className="form-group">
                <label htmlFor="contact-goals" className="form-label">Project Objectives &amp; Vision</label>
                <textarea
                  id="contact-goals"
                  rows={3}
                  placeholder="Briefly describe what you're looking to achieve (e.g. increase demo conversions, launch custom brand flagship, sub-second LCP overhaul)..."
                  value={projectGoals}
                  onChange={(e) => setProjectGoals(e.target.value)}
                  className="studio-input studio-textarea"
                />
              </div>

              {/* Submit CTA */}
              <div className="form-actions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary studio-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Synthesizing Scope...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <ArrowRight size={18} weight="Outline" />
                    </>
                  )}
                </button>
                <p className="privacy-microcopy">
                  🔒 Strictly confidential. 100% intellectual property transfer upon project launch.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
