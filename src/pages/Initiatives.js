// src/pages/Initiatives.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import InitiativeCard from '../components/InitiativeCard';

const Initiatives = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>
        Our Initiatives
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
        {/* Add more initiatives as needed */}
      </Grid>
    </Container>
  );
};

export default Initiatives;
