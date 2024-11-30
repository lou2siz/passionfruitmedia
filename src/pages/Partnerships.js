// src/pages/Partnerships.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import SEO from '../components/SEO';

const partnerships = [
  {
    name: 'Company A',
    description: 'A leading firm in AI technology.',
    image: '/images/company-a-logo.png',
    link: 'https://www.company-a.com',
  },
  {
    name: 'Organization B',
    description: 'Non-profit organization focusing on social reform.',
    image: '/images/organization-b-logo.png',
    link: 'https://www.organization-b.org',
  },
  // Add more partners as needed
];

const Partnerships = () => {
  return (
    <>
      <SEO
        title="Partnerships"
        description="Our collaborations with industry leaders."
        url="https://yourwebsite.com/partnerships"
      />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Our Partnerships
        </Typography>
        <Typography variant="h6" gutterBottom align="center" color="textSecondary" sx={{ mb: 4 }}>
          Collaborating with leaders to make a global impact.
        </Typography>
        <Grid container spacing={4}>
          {partnerships.map((partner, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image={partner.image}
                  alt={partner.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {partner.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {partner.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Partnerships;
