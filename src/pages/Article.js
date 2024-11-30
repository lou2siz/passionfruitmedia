// src/pages/Article.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Chip,
  Box,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { styled } from '@mui/system';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { getArticleBySlug } from '../utils/articles';
import SocialShare from '../components/SocialShare';

const ArticleImage = styled('img')({
  width: '100%',
  height: 'auto',
  marginBottom: '20px',
});

const Article = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Article Not Found
        </Typography>
        <Typography variant="body1">
          The article you are looking for does not exist or has been moved.
        </Typography>
        <MuiLink component={Link} to="/" sx={{ mt: 2, display: 'inline-block' }}>
          Return to Home
        </MuiLink>
      </Container>
    );
  }

  const articleUrl = `https://yourwebsite.com/blog/${article.slug}`;

  // Structured data for SEO
  const structuredDataArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    url: articleUrl,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    keywords: article.tags.join(', '),
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        image={article.image}
        url={articleUrl}
        article={article}
      />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <MuiLink component={Link} to="/" color="inherit">
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            to={`/category/${article.category.toLowerCase()}`}
            color="inherit"
          >
            {article.category}
          </MuiLink>
          <Typography color="textPrimary">{article.title}</Typography>
        </Breadcrumbs>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          {article.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary">
          By {article.author} | {new Date(article.date).toLocaleDateString()}
        </Typography>
        <Box sx={{ my: 2 }}>
          <Chip
            label={article.category}
            component={Link}
            to={`/category/${article.category.toLowerCase()}`}
            clickable
            color="secondary"
            sx={{ mr: 1, mb: 1 }}
          />
          {article.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              component={Link}
              to={`/tags/${tag}`}
              clickable
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>
        <SocialShare url={articleUrl} title={article.title} />
        {article.image && (
          <ArticleImage src={article.image} alt={article.title} />
        )}
        <Box sx={{ mt: 4 }}>
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  style={{ maxWidth: '100%' }}
                  alt={props.alt || 'Article Image'}
                />
              ),
              h1: ({ node, ...props }) => (
                <Typography variant="h4" sx={{ mt: 4, mb: 2 }} {...props} />
              ),
              h2: ({ node, ...props }) => (
                <Typography variant="h5" sx={{ mt: 3, mb: 2 }} {...props} />
              ),
              p: ({ node, ...props }) => (
                <Typography variant="body1" sx={{ mb: 2 }} {...props} />
              ),
              a: ({ node, ...props }) => (
                <MuiLink {...props} target="_blank" rel="noopener noreferrer" />
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </Box>
      </Container>
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataArticle)}
      </script>
    </>
  );
};

export default Article;
