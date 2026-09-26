import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'reicon-react';
import { SITE_DOMAIN } from '../hooks/useSEO';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  const schemaList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href ? { "item": `${SITE_DOMAIN}${item.href.startsWith('/') ? item.href : `/${item.href}`}` } : {})
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumbs-nav ${className}`}>
      <script type="application/ld+json">
        {JSON.stringify(schemaList)}
      </script>
      <ol className="breadcrumbs-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {index > 0 && (
                <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
              )}
              {isLast || !item.href ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="breadcrumb-link" data-cursor="Navigate">
                  {isFirst && <Home size={12} className="breadcrumb-home-icon" />}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

