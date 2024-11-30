// src/components/ArticleCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Chip, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <Card elevation={0} sx={{ borderRadius: 0 }}>
      <CardActionArea component={Link} to={`/blog/${article.slug}`}>
        <CardMedia
          component="img"
          height="200"
          image={article.image}
          alt={article.title}
        />
        <CardContent>
          <Typography variant="body2" color="secondary" sx={{ fontWeight: 'bold', mb: 1 }}>
            {article.category}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {article.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
