// src/components/InitiativeCard.js
import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const InitiativeCard = ({ title, description, link }) => {
  return (
    <Card elevation={3}>
      <CardActionArea component={Link} to={link}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InitiativeCard;
