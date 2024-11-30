// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const NavLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'About Us', link: '/about' },
    { text: 'Initiatives', link: '/initiatives' },
    { text: 'Leadership', link: '/leadership' },
    { text: 'Blog', link: '/blog' },
    { text: 'Events', link: '/events' },
    { text: 'Careers', link: '/careers' },
    { text: 'Donate', link: '/donate' },
    { text: 'Contact', link: '/contact' },
  ];

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <StyledToolbar>
        <Logo component={Link} to="/">
          Passionfruit Media
        </Logo>
        <NavLinks>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.link}
              color="inherit"
              sx={{ fontWeight: 'bold' }}
            >
              {item.text}
            </Button>
          ))}
        </NavLinks>
        <MobileMenuIcon
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </MobileMenuIcon>
      </StyledToolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMobileMenuClose}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={item.link}
            onClick={handleMobileMenuClose}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
