// src/App.js

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Container, Button } from '@mui/material'; // Imported Typography, Container, Button

// Import the custom theme
import theme from './theme';

// Import reusable components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CategoryMenu from './components/CategoryMenu';

// Lazy load page components for performance optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Article = lazy(() => import('./pages/Article'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Events = lazy(() => import('./pages/Events'));
const Donate = lazy(() => import('./pages/Donate'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Press = lazy(() => import('./pages/Press'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Initiatives = lazy(() => import('./pages/Initiatives'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Tag = lazy(() => import('./pages/Tag'));
const TagsIndex = lazy(() => import('./pages/TagsIndex'));
const Category = lazy(() => import('./pages/Category'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

// Removed LiberalReformative import since it's not used in App.js
// const LiberalReformative = lazy(() => import('./components/LiberalReformative'));

// Fallback component for lazy loading
const Loading = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <Typography variant="h6">Loading...</Typography>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS across browsers */}
      <Router>
        <Navbar />
        <CategoryMenu />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/press" element={<Press />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/tags" element={<TagsIndex />} />
            <Route path="/tags/:tag" element={<Tag />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/search" element={<SearchResults />} />
            {/* Add more routes as needed */}
            {/* Fallback route for undefined paths */}
            <Route
              path="*"
              element={
                <Container sx={{ mt: 8, mb: 8, textAlign: 'center' }}>
                  <Typography variant="h4" gutterBottom>
                    404 - Page Not Found
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    The page you are looking for does not exist.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/"
                  >
                    Go to Home
                  </Button>
                </Container>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
