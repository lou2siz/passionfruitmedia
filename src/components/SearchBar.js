// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="small"
        sx={{ width: { xs: '100%', sm: '300px' } }}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;
