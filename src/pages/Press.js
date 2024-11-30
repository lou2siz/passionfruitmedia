// src/pages/Press.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const pressReleases = [
  {
    date: 'July 15, 2024',
    title: 'Passionfruit Media Announces New AI Ethics Initiative',
    link: '/press/ai-ethics-initiative',
  },
  // Add more press releases
];

const Press = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Press & Media
      </Typography>
      <List>
        {pressReleases.map((press, index) => (
          <ListItem button component="a" href={press.link} key={index}>
            <ListItemText primary={press.title} secondary={press.date} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Press;
