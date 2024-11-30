// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar'; // Ensure you have a SearchBar component

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Blog', link: '/blog' },
  { text: 'Donate', link: '/donate' },
  { text: 'Contact', link: '/contact' },
  // Add more items as needed
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Toggle drawer state
  const toggleDrawer = (open) => (event) => {
    // Close drawer on key press or mouse click outside
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // List inside the drawer
  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.link}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        {/* Optionally, include the SearchBar inside the drawer */}
        <ListItem>
          <SearchBar />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar>
        {/* Logo or Brand Name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          Passionfruit Media
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.link}
              color="inherit"
              sx={{ marginLeft: 2 }}
            >
              {item.text}
            </Button>
          ))}
          {/* Include SearchBar on desktop */}
          <Box sx={{ marginLeft: 3 }}>
            <SearchBar />
          </Box>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile Menu */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
