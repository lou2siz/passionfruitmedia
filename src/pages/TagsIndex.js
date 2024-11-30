// src/pages/TagsIndex.js
import React from 'react';
import { Container, Typography, Chip, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../utils/articles';
import SEO from '../components/SEO';

const TagsIndex = () => {
  const articles = getAllArticles();
  const tagsSet = new Set();
  articles.forEach((article) => {
    article.tags.forEach((tag) => tagsSet.add(tag));
  });
  const tags = Array.from(tagsSet).sort();

  return (
    <>
      <SEO
        title="All Tags"
        description="Browse all tags used in our articles."
        url="https://yourwebsite.com/tags"
      />
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          All Tags
        </Typography>
        <Box sx={{ mt: 2 }}>
          {tags.map((tag, index) => (
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
      </Container>
    </>
  );
};

export default TagsIndex;
