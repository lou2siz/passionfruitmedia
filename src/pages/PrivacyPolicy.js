// src/pages/PrivacyPolicy.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        [Your privacy policy content here...]
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
