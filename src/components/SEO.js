// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, url, article }) => {
  const defaultTitle = 'Passionfruit Media';
  const defaultDescription = 'Revolutionizing media for reformative change.';
  const defaultImage = '/images/default-og-image.jpg';
  const defaultUrl = 'https://yourwebsite.com';

  const structuredDataArticle = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        url: url,
        datePublished: article.date,
        author: {
          '@type': 'Person',
          name: article.author,
        },
      }
    : null;

  return (
    <Helmet>
      <title>{title ? `${title} - Passionfruit Media` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <link rel="canonical" href={url || defaultUrl} />
      {article && (
        <script type="application/ld+json">
          {JSON.stringify(structuredDataArticle)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
