import { useLocation } from 'react-router-dom';

export const SITE_DOMAIN = 'https://webdevguru.tech';
export const DEFAULT_OG_IMAGE = `${SITE_DOMAIN}/og-image.svg`;

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  schema?: Record<string, unknown>;
}

export const useSEO = ({ 
  title, 
  description, 
  ogImage = DEFAULT_OG_IMAGE, 
  canonicalUrl,
  noindex = false,
  schema
}: SEOProps) => {
  const location = useLocation();
  
  // Clean canonical path (remove trailing slash except for root)
  const cleanPath = location.pathname === '/' ? '' : location.pathname.replace(/\/$/, '');
  const currentUrl = canonicalUrl || `${SITE_DOMAIN}${cleanPath || '/'}`;

  return {
    title,
    description,
    ogImage,
    currentUrl,
    noindex,
    schema
  };
};
