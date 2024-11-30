// src/pages/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../utils/articles';
import SEO from '../components/SEO';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const articles = getAllArticles().filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO
        title={`Search results for "${searchTerm}"`}
        description={`Articles matching your search query.`}
        url={`https://yourwebsite.com/search?q=${encodeURIComponent(searchTerm)}`}
      />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Search Results for "{searchTerm}"
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
          <Typography variant="body1">No articles found matching your search.</Typography>
        )}
      </Container>
    </>
  );
};

export default SearchResults;
