// src/pages/Initiatives.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import InitiativeCard from '../components/InitiativeCard';

const initiatives = [
  {
    title: 'AI Ethics',
    description: 'Promoting ethical standards in AI.',
    link: '/initiatives/ai-ethics',
  },
  {
    title: 'Music Advocacy',
    description: 'Empowering artists worldwide.',
    link: '/initiatives/music-advocacy',
  },
  // Add more initiatives
];

const Initiatives = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Our Initiatives
      </Typography>
      <Grid container spacing={4}>
        {initiatives.map((initiative, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <InitiativeCard
              title={initiative.title}
              description={initiative.description}
              link={initiative.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Initiatives;
