// src/pages/Testimonials.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
  {
    name: 'Dr. Emily Smith',
    title: 'Professor of Media Studies',
    quote: 'Passionfruit Media is leading the way in social advocacy through media.',
  },
  // Add more testimonials
];

const Testimonials = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  - {testimonial.name}, {testimonial.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
