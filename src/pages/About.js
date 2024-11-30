// src/pages/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Passionfruit Media and our mission."
        url="https://yourwebsite.com/about"
      />
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Passionfruit Media is dedicated to promoting reformative self-love and social advocacy...
        </Typography>
        {/* Add more content as needed */}
      </Container>
    </>
  );
};

export default About;
