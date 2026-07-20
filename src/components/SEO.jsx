import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, ogImage, ogUrl, canonical, jsonLd }) {
  const defaultTitle = 'Kapoor Dyes & Chemicals Company | Synthetic Dyestuffs & Pigments Manufacturer';
  const defaultDescription = 'Incepted in 1966, Kapoor Dyes & Chemicals Co. is an ISO 9001:2015 certified manufacturer and global exporter of high-purity Reactive Dyes, Acid Dyes, Direct Dyes, Disperse Dyes, Naphthols, and Pigments for Textile, Leather, Paper, and Polymer industries.';
  const defaultKeywords = 'Kapoor Dyes, Kapoor Dyes & Chemicals, KDC Dyes, Dyestuff Manufacturer India, Reactive Dyes Manufacturer, Acid Dyes Exporter, Direct Dyes Supplier, Disperse Dyes, Naphthols Fast Bases, Organic Pigments, Ahmedabad Chemical Company, Vatva GIDC Dyes Plant, Kanpur Dyes Supplier, ISO 9001:2015 Dyes Manufacturer, Textile Dyes Manufacturer';
  const defaultOgImage = 'https://kapoordyes.com/images/ISO-KDCPL.jpg';
  const defaultUrl = 'https://kapoordyes.com/';

  const siteTitle = title ? `${title} | Kapoor Dyes & Chemicals` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteKeywords = keywords || defaultKeywords;
  const siteOgImage = ogImage || defaultOgImage;
  const siteCanonical = canonical || ogUrl || defaultUrl;

  return (
    <Helmet>
      {/* Primary Page Title & Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content="Kapoor Dyes & Chemicals Company" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={siteCanonical} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kapoor Dyes & Chemicals Company" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteOgImage} />
      <meta property="og:url" content={siteCanonical} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteOgImage} />

      {/* Page-Specific JSON-LD Schema.org Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
