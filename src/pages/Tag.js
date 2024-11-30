// src/pages/Tag.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../utils/articles';
import SEO from '../components/SEO';

const Tag = () => {
  const { tag } = useParams();
  const articles = getAllArticles().filter((article) =>
    article.tags.includes(tag)
  );

  return (
    <>
      <SEO
        title={`Articles tagged with "${tag}"`}
        description={`Explore articles related to ${tag}.`}
        url={`https://yourwebsite.com/tags/${tag}`}
      />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Articles tagged with "{tag}"
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
          <Typography variant="body1">No articles found for this tag.</Typography>
        )}
      </Container>
    </>
  );
};

export default Tag;
