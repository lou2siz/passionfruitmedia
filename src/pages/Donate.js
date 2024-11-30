// src/pages/Donate.js

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import SEO from '../components/SEO';
import { styled } from '@mui/system';

// Styled component for the background image
const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/donate-background.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(8, 0),
  color: '#fff',
}));

const Donate = () => {
  // State to manage custom donation amount
  const [customAmount, setCustomAmount] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customAmount || isNaN(customAmount) || Number(customAmount) <= 0) {
      setError('Please enter a valid donation amount.');
      setSuccess(false);
      return;
    }
    // Simulate donation process
    console.log(`Donated Amount: $${customAmount}`);
    setSuccess(true);
    setError('');
    setCustomAmount('');
  };

  return (
    <>
      <SEO
        title="Donate"
        description="Support our mission by making a donation."
        url="https://yourwebsite.com/donate"
      />
      <BackgroundBox>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Support Our Mission
          </Typography>
          <Typography variant="h6" align="center">
            Your contributions help us continue our work towards equity, integrity, and justice.
          </Typography>
        </Container>
      </BackgroundBox>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Make a Donation
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Choose a donation amount or enter a custom value below to support our initiatives.
                </Typography>
                {/* Predefined Donation Buttons from PayPal */}
                <Box sx={{ mt: 2 }}>
                  {/* Replace the below iframe src with your PayPal Donate button link */}
                  <iframe
                    title="Donate with PayPal"
                    src="https://www.paypal.com/donate/buttons/"
                    width="100%"
                    height="150"
                    style={{ border: 'none' }}
                    scrolling="no"
                  ></iframe>
                </Box>
                {/* Alternatively, use a form for custom donations */}
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ mt: 4 }}
                  noValidate
                >
                  <Typography variant="h6" gutterBottom>
                    Custom Donation
                  </Typography>
                  {success && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                      Thank you for your generous donation!
                    </Alert>
                  )}
                  {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {error}
                    </Alert>
                  )}
                  <TextField
                    label="Donation Amount (USD)"
                    variant="outlined"
                    fullWidth
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    required
                    type="number"
                    inputProps={{ min: "1", step: "any" }}
                    sx={{ mb: 2 }}
                  />
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Donate Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Why Donate?
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Your donations enable us to:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>
                    <Typography variant="body1">Support investigative journalism and advocacy.</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Empower marginalized communities, especially the LGBTQ+ community.</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Promote equity, integrity, and justice through various initiatives.</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Conduct strategic litigation against oppressive systems.</Typography>
                  </li>
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Your support makes a tangible difference in our efforts to create a more equitable and just society.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Testimonials Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            What Our Donors Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Example Testimonial */}
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Jane Smith
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    "Supporting this organization has been incredibly fulfilling. Their dedication to justice and equity is inspiring."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Add more testimonials as needed */}
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Michael Johnson
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    "Their work in uncovering oppression and advocating for marginalized communities is commendable."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Emily Davis
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    "I'm proud to support an organization that stands for integrity and justice."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Donate;
