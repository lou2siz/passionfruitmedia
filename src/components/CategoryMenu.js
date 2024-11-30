// src/components/CategoryMenu.js
import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  { text: 'Politics & Policy', link: '/category/politics' },
  { text: 'Environment', link: '/category/environment' },
  { text: 'Economy', link: '/category/economy' },
  { text: 'Rights & Justice', link: '/category/rights' },
  { text: 'More', link: '/category/more' },
];

const CategoryMenu = () => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', my: 2 }}>
      {categories.map((category, index) => (
        <Button
          key={index}
          component={Link}
          to={category.link}
          sx={{ mr: 2, flexShrink: 0 }}
        >
          {category.text}
        </Button>
      ))}
    </Box>
  );
};

export default CategoryMenu;
