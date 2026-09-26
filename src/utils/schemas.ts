import { SITE_DOMAIN } from '../hooks/useSEO';

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_DOMAIN}/#organization`,
  "name": "WebDevGuru",
  "alternateName": "WebDevGuru Digital Studio",
  "url": SITE_DOMAIN,
  "logo": `${SITE_DOMAIN}/favicon.svg`,
  "image": `${SITE_DOMAIN}/og-image.svg`,
  "description": "Elite digital studio engineering ultra-high-converting websites, SaaS landing pages, and headless Shopify D2C digital storefronts.",
  "priceRange": "$$$$",
  "telephone": "+1-800-555-GURU",
  "email": "hello@webdevguru.tech",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Innovation Way, Suite 400",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.7937",
    "longitude": "-122.3965"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://twitter.com/webdevguru",
    "https://linkedin.com/company/webdevguru",
    "https://github.com/webdevguru"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Converting Websites",
          "url": `${SITE_DOMAIN}/services/conversion-websites`,
          "description": "Full-stack bespoke web platforms engineered for maximum commercial conversion and sub-second load times."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SaaS Landing Pages",
          "url": `${SITE_DOMAIN}/services/saas-landing-pages`,
          "description": "Narrative-driven positioning and high-velocity landing pages for venture-backed and growth-stage SaaS."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shopify D2C Storefronts",
          "url": `${SITE_DOMAIN}/services/d2c-shopify`,
          "description": "Headless Shopify e-commerce experiences with instant checkout and maximized average order value."
        }
      }
    ]
  }
});

export const orgSchema = getLocalBusinessSchema();

export const getServiceSchema = (
  name: string, 
  description: string, 
  serviceType: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "serviceType": serviceType,
  "description": description,
  "provider": {
    "@type": "ProfessionalService",
    "name": "WebDevGuru",
    "url": SITE_DOMAIN
  },
  "url": url,
  "areaServed": "Global"
});

export const getConversionWebsitesSchema = () => getServiceSchema(
  "High-Conversion Enterprise Websites",
  "Full-stack bespoke web platforms engineered for maximum commercial conversion, sub-second load times, and market authority.",
  "Web Development & Conversion Architecture",
  `${SITE_DOMAIN}/services/conversion-websites`
);

export const getSaaSLandingPagesSchema = () => getServiceSchema(
  "High-Impact SaaS Landing Pages",
  "Precision-engineered landing pages and growth funnels turning cold traffic into recurring revenue for venture-backed SaaS.",
  "SaaS Growth & CRO Engineering",
  `${SITE_DOMAIN}/services/saas-landing-pages`
);

export const getD2CShopifySchema = () => getServiceSchema(
  "Custom Shopify & Headless D2C Stores",
  "Custom Shopify stores and headless e-commerce architectures built for scale, speed, brand prestige, and maximum average order value.",
  "E-Commerce Architecture & Shopify Engineering",
  `${SITE_DOMAIN}/services/d2c-shopify`
);
