// src/pages/ArticlePage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getArticleBySlug } from '../utils/articles';
import { Typography, Container } from '@mui/material';
import SEO from '../components/SEO';

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null); // Article data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    getArticleBySlug(slug)
      .then((data) => {
        if (data) {
          setArticle(data);
        } else {
          setError('Article not found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
        setError('Error fetching article');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h6" align="center">
          Loading article...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h6" align="center" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        url={`https://yourwebsite.com/articles/${article.slug}`}
      />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {new Date(article.date).toLocaleDateString()}
        </Typography>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </Container>
    </>
  );
};

export default ArticlePage;
