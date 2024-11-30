// src/pages/Leadership.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const leadershipTeam = [
  {
    name: 'Alex Johnson',
    position: 'Founder & CEO',
    bio: 'Alex brings over 15 years of experience in media and social advocacy...',
    image: '/images/alex-johnson.jpg',
  },
  // Add more team members
];

const Leadership = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h3" gutterBottom align="center">
        Leadership Team
      </Typography>
      <Grid container spacing={4}>
        {leadershipTeam.map((leader, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  src={leader.image}
                  alt={leader.name}
                  sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6">{leader.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {leader.position}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {leader.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Leadership;
