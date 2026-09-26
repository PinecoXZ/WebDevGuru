import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, DocumentText, CardReceive, Cookie } from 'reicon-react';
import type { ComponentType } from 'react';

interface LegalDocTab {
  id: 'privacy' | 'terms' | 'refund' | 'cookies';
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; weight?: 'Outline' | 'Filled'; color?: string; className?: string }>;
}

const LEGAL_DOCS: LegalDocTab[] = [
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy', icon: ShieldCheck },
  { id: 'terms', label: 'Terms of Service', href: '/terms-of-service', icon: DocumentText },
  { id: 'refund', label: 'Refund Policy', href: '/refund', icon: CardReceive },
  { id: 'cookies', label: 'Cookie Policy', href: '/cookies', icon: Cookie },
];

interface LegalNavProps {
  activeDoc: 'privacy' | 'terms' | 'refund' | 'cookies';
}

const LegalNav = ({ activeDoc }: LegalNavProps) => {
  const location = useLocation();

  return (
    <nav className="legal-nav-tabs-wrap" role="navigation" aria-label="Legal documents directory">
      {LEGAL_DOCS.map((doc) => {
        const isActive = activeDoc === doc.id || location.pathname === doc.href;
        const IconComponent = doc.icon;

        return (
          <Link
            key={doc.id}
            to={doc.href}
            className={`legal-nav-tab ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <IconComponent 
              size={16} 
              weight={isActive ? "Filled" : "Outline"} 
              color={isActive ? "#ffffff" : "currentColor"} 
            />
            <span>{doc.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default LegalNav;
