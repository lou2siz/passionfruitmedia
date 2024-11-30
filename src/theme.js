// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333', // Dark Gray
    },
    secondary: {
      main: '#990000', // Dark Red
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
