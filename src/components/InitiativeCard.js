// src/components/InitiativeCard.js
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const InitiativeCard = ({ title, description, slug }) => (
  <Card sx={{ maxWidth: 345, margin: '20px' }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" component={Link} to={`/articles/${slug}`}>
        Read More
      </Button>
    </CardActions>
  </Card>
);

export default InitiativeCard;
