// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import LiberalReformative from '../components/LiberalReformative';
import InitiativeCard from '../components/InitiativeCard';
import { Container, Typography, Grid } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Hero />
      <Container maxWidth="lg" style={{ marginTop: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Featured Initiatives
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <InitiativeCard
              title="AI Ethics"
              description="Exploring ethical AI practices."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <InitiativeCard
              title="Music Advocacy"
              description="Empowering artists worldwide."
            />
          </Grid>
          {/* Add more cards as needed */}
        </Grid>
        <LiberalReformative />
      </Container>
    </div>
  );
};

export default Home;
