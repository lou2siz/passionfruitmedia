// src/pages/Category.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../utils/articles';
import SEO from '../components/SEO';

const Category = () => {
  const { category } = useParams();
  const articles = getAllArticles().filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <SEO
        title={`${category} Articles`}
        description={`Read the latest articles in ${category}.`}
        url={`https://yourwebsite.com/category/${category}`}
      />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {category}
        </Typography>
        {articles.length > 0 ? (
          <Grid container spacing={4}>
            {articles.map((article) => (
              <Grid item xs={12} sm={6} md={4} key={article.slug}>
                <ArticleCard article={article} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No articles found in this category.</Typography>
        )}
      </Container>
    </>
  );
};

export default Category;
