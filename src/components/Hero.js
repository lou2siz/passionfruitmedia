// src/components/Hero.js
import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        paddingTop: '150px',
        paddingBottom: '150px',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Revolutionizing Media for Reformative Change
        </Typography>
        <Typography variant="h5" gutterBottom>
          Join us in promoting self-love and social advocacy.
        </Typography>
        <Button
          component={Link}
          to="/about"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4 }}
        >
          Learn More
        </Button>
      </Container>
    </motion.div>
  );
};

export default Hero;
