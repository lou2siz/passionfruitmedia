// src/pages/About.js
import React from 'react';
import Header from '../components/Header';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <>
      <Header
        title="About Us"
        subtitle="Learn more about Passionfruit Media"
        backgroundImage="/images/about-header.jpg"
      />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="body1" paragraph>
          {/* About Us content */}
        </Typography>
      </Container>
    </>
  );
};

export default About;
