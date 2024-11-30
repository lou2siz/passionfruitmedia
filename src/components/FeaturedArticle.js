// src/components/FeaturedArticle.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const FeaturedArticle = ({ article }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '300px', md: '500px' },
        backgroundImage: `url(${article.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mb: 4,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          p: 2,
        }}
      >
        <Typography variant="h4" component={Link} to={`/blog/${article.slug}`} sx={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          {article.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {article.excerpt}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to={`/blog/${article.slug}`}
          sx={{ mt: 2 }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedArticle;
