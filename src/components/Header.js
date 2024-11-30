// src/components/Header.js
import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled('div')(({ theme, backgroundImage }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  padding: theme.spacing(10, 0),
  textAlign: 'center',
}));

const Header = ({ title, subtitle, backgroundImage }) => {
  return (
    <HeaderContainer backgroundImage={backgroundImage}>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h5" gutterBottom>
            {subtitle}
          </Typography>
        )}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
