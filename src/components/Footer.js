// src/components/Footer.js
import React from 'react';
import { Typography, Box, Link as MuiLink, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(8),
}));

const FooterLinks = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <FooterLinks container spacing={4} justifyContent="center">
          <Grid item>
            <MuiLink component={Link} to="/privacy-policy" color="inherit">
              Privacy Policy
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink component={Link} to="/terms-of-service" color="inherit">
              Terms of Service
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink component={Link} to="/contact" color="inherit">
              Contact Us
            </MuiLink>
          </Grid>
        </FooterLinks>
        <Typography variant="body2" align="center" color="textSecondary">
          © {new Date().getFullYear()} Passionfruit Media. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
