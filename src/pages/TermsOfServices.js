// src/pages/TermsOfService.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Passionfruit Media. Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Passionfruit Media website (the "Service") operated by Passionfruit Media ("us", "we", or "our").
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        2. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        The Service and its original content, features, and functionality are and will remain the exclusive property of Passionfruit Media and its licensors.
      </Typography>
      {/* Add more sections as needed */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        3. Termination
      </Typography>
      <Typography variant="body1" paragraph>
        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        4. Changes to Terms
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        5. Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about these Terms, please contact us at <a href="mailto:info@passionfruitmedia.com">info@passionfruitmedia.com</a>.
      </Typography>
    </Container>
  );
};

export default TermsOfService;
