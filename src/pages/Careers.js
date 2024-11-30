// src/pages/Careers.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const careersList = [
  {
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    description:
      'We are looking for a skilled frontend developer with experience in React and Material-UI to join our team.',
    link: '/careers/senior-frontend-developer',
  },
  {
    title: 'Content Writer',
    location: 'Remote',
    type: 'Contract',
    description:
      'Passionate about storytelling and social advocacy? Join us as a content writer to create impactful articles.',
    link: '/careers/content-writer',
  },
  {
    title: 'Graphic Designer',
    location: 'Los Angeles, CA',
    type: 'Full-Time',
    description:
      'We are seeking a creative graphic designer to develop visual concepts that inspire and captivate our audience.',
    link: '/careers/graphic-designer',
  },
  // Add more job listings as needed
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const Careers = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" gutterBottom align="center">
        Careers at Passionfruit Media
      </Typography>
      <Typography variant="h6" gutterBottom align="center" color="textSecondary" sx={{ mb: 4 }}>
        Join our team and help revolutionize media for reformative change.
      </Typography>
      <Grid container spacing={4}>
        {careersList.map((career, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard elevation={3}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {career.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  {career.location} | {career.type}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {career.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href={career.link}
                  sx={{ fontWeight: 'bold' }}
                >
                  View Details
                </Button>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Careers;
