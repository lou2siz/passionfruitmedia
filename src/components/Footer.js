// src/components/Footer.js

import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerLinks = [
  { text: 'Privacy Policy', link: '/privacy-policy' },
  { text: 'Terms of Service', link: '/terms-of-service' },
  { text: 'Contact Us', link: '/contact' },
  { text: 'Donate', link: '/donate' },
  { text: 'Blog', link: '/blog' },
  { text: 'Careers', link: '/careers' },
  // Add more links as needed
];

const socialMedia = [
  { icon: <FacebookIcon />, link: 'https://facebook.com' },
  { icon: <TwitterIcon />, link: 'https://twitter.com' },
  { icon: <InstagramIcon />, link: 'https://instagram.com' },
  { icon: <LinkedInIcon />, link: 'https://linkedin.com' },
  // Add more social media links as needed
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Passionfruit Media
            </Typography>
            <Typography variant="body2" gutterBottom>
              © {new Date().getFullYear()} Passionfruit Media. All rights reserved.
            </Typography>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box>
              {footerLinks.map((item, index) => (
                <MuiLink
                  key={index}
                  component={Link}
                  to={item.link}
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'block', mb: 1 }}
                >
                  {item.text}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box>
              {socialMedia.map((item, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
