// src/components/InitiativeCard.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const InitiativeCard = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InitiativeCard;
