// src/pages/Blog.js

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../utils/articles';

const Blog = () => {
  const articles = getAllArticles();

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for category filter
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Extract unique categories from articles
  const categories = ['All', ...new Set(articles.map((article) => article.category))];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter
  };

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  // Filter articles based on search query and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === 'All' ? true : article.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  return (
    <>
      <SEO
        title="Blog"
        description="Explore our latest articles and insights."
        url="https://yourwebsite.com/blog"
      />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Blog
        </Typography>

        {/* Search and Filter Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
            gap: 2,
          }}
        >
          {/* Search Bar */}
          <TextField
            variant="outlined"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={handleSearchChange}
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Category Filter */}
          <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
            <InputLabel id="category-filter-label">Category</InputLabel>
            <Select
              labelId="category-filter-label"
              value={categoryFilter}
              onChange={handleCategoryChange}
              label="Category"
            >
              {categories.map((category, index) => (
                <MenuItem value={category} key={index}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <>
            <Grid container spacing={4}>
              {currentArticles.map((article) => (
                <Grid item xs={12} sm={6} md={4} key={article.slug}>
                  <ArticleCard article={article} />
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            )}
          </>
        ) : (
          <Typography variant="h6" align="center">
            No articles found matching your criteria.
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Blog;
