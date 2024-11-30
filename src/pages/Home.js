// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, CircularProgress, Box } from '@mui/material';
import ArticleCard from '../components/ArticleCard';
import FeaturedArticle from '../components/FeaturedArticle';
import LiberalReformative from '../components/LiberalReformative'; // Ensure this component is correctly implemented
import SEO from '../components/SEO';
import { getAllArticles } from '../utils/articles';

const Home = () => {
  // State variables to manage articles, loading state, and errors
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch articles when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Determine the featured article and other articles
  const featuredArticle = articles.length > 0 ? articles[0] : null;
  const otherArticles = articles.length > 1 ? articles.slice(1) : [];

  // Render loading state
  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading articles...
        </Typography>
      </Container>
    );
  }

  // Render error state
  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h6" color="error" gutterBottom>
          {error}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Please check back later or contact support if the issue persists.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <>
      {/* SEO Component for better search engine optimization */}
      <SEO
        title="Home - Passionfruit Media"
        description="Passionfruit Media - Empowering Change through insightful articles and initiatives."
        url="https://yourwebsite.com"
      />

      {/* Featured Article Section */}
      {featuredArticle ? (
        <FeaturedArticle article={featuredArticle} />
      ) : (
        <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h6">No featured article available.</Typography>
        </Container>
      )}

      {/* Latest News Section */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Latest News
        </Typography>
        <Grid container spacing={4}>
          {otherArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.slug}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
        {/* LiberalReformative Component */}
        <Box sx={{ mt: 8 }}>
          <LiberalReformative />
        </Box>
      </Container>
    </>
  );
};

export default Home;
