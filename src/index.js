// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Optional: Import CSS resets or global styles
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline /> {/* Provides a consistent baseline for styling */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
