import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, ogImage, ogUrl }) {
  const defaultTitle = 'Kapoor Dyes & Chemicals Company | Premium B2B Dyestuff Manufacturer';
  const defaultDescription = 'Incepted in 1966, Kapoor Dyes & Chemicals Co. is an ISO 9001:2015 certified manufacturer and exporter of high-quality Reactive, Acid, Direct, Disperse Dyes, Naphthols, and Pigments for Textile, Leather, Paper, and Carpet industries.';
  const defaultKeywords = 'Kapoor Dyes, KDC, Dyestuff Manufacturer, Acid Dyes, Reactive Dyes, Direct Dyes, Disperse Dyes, Naphthols, Pigments, Ahmedabad Chemical Company, Vatva GIDC, B2B Chemicals';
  
  const siteTitle = title ? `${title} | Kapoor Dyes` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteKeywords = keywords || defaultKeywords;
  
  return (
    <Helmet>
      {/* Title */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Standard Meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Kapoor Dyes & Chemicals Company" />
    </Helmet>
  );
}
