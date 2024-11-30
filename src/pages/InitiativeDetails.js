// src/pages/InitiativeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const initiativeDetails = {
  'ai-ethics': {
    title: 'AI Ethics',
    content: 'Detailed information about AI Ethics initiative...',
  },
  'music-advocacy': {
    title: 'Music Advocacy',
    content: 'Detailed information about Music Advocacy initiative...',
  },
  // Add more initiatives
};

const InitiativeDetails = () => {
  const { initiativeId } = useParams();
  const initiative = initiativeDetails[initiativeId];

  if (!initiative) {
    return <Typography variant="h5">Initiative not found.</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        {initiative.title}
      </Typography>
      <Typography variant="body1">
        {initiative.content}
      </Typography>
    </Container>
  );
};

export default InitiativeDetails;
