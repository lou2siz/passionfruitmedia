// src/components/NewsletterSignup.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const NewsletterSignup = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        color: '#fff',
        py: 4,
        mt: 8,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Stay Informed
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Sign up for our newsletter to receive the latest news.
      </Typography>
      <Box
        component="form"
        sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          size="small"
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default NewsletterSignup;
