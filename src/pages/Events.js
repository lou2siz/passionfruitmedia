// src/pages/Events.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const events = [
  {
    date: 'August 25, 2024',
    title: 'AI Ethics Webinar',
    description: 'An online webinar discussing the ethical implications of AI.',
    link: '/events/ai-ethics-webinar',
  },
  // Add more events
];

const Events = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Upcoming Events
      </Typography>
      <List>
        {events.map((event, index) => (
          <ListItem button component="a" href={event.link} key={index}>
            <ListItemText primary={event.title} secondary={`${event.date} - ${event.description}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Events;
