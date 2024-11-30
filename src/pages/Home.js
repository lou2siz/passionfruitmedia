// src/pages/Home.js

import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ArticleCard from '../components/ArticleCard';
import FeaturedArticle from '../components/FeaturedArticle';
import LiberalReformative from '../components/LiberalReformative'; // Import the component
import SEO from '../components/SEO';
import { getAllArticles } from '../utils/articles';

const Home = () => {
  const articles = getAllArticles();
  const featuredArticle = articles[0]; // Assume the first article is featured
  const otherArticles = articles.slice(1);

  return (
    <>
      <SEO
        title="Home"
        description="Passionfruit Media - Empowering Change"
        url="https://yourwebsite.com"
      />
      <FeaturedArticle article={featuredArticle} />
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
          Latest News
        </Typography>
        <Grid container spacing={4}>
          {otherArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.slug}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
        {/* Include the LiberalReformative component below the articles */}
        <LiberalReformative />
      </Container>
    </>
  );
};

export default Home;
