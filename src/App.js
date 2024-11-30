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
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

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

// Fallback component for lazy loading
const Loading = () => (
  <Container sx={{ mt: 8, textAlign: 'center' }}>
    <Typography variant="h6">Loading...</Typography>
  </Container>
);

// NotFound Component for undefined routes
const NotFound = () => (
  <Container sx={{ mt: 8, mb: 8, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography variant="body1" gutterBottom>
      The page you are looking for does not exist.
    </Typography>
    <Button variant="contained" color="primary" component={Link} to="/">
      Go to Home
    </Button>
  </Container>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Normalize CSS across browsers */}
      <CssBaseline />

      <Router>
        {/* Navigation Bar */}
        <Navbar />

        {/* Category Menu - assuming it's a persistent component across pages */}
        <CategoryMenu />

        {/* Error Boundary to catch unforeseen errors */}
        <ErrorBoundary>
          {/* Suspense handles the lazy-loaded components' fallback */}
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<Home />} />

              {/* About Page */}
              <Route path="/about" element={<About />} />

              {/* Blog Listing Page */}
              <Route path="/blog" element={<Blog />} />

              {/* Individual Article Page */}
              <Route path="/blog/:slug" element={<Article />} />

              {/* Contact Page */}
              <Route path="/contact" element={<Contact />} />

              {/* Careers Page */}
              <Route path="/careers" element={<Careers />} />

              {/* Events Page */}
              <Route path="/events" element={<Events />} />

              {/* Donate Page */}
              <Route path="/donate" element={<Donate />} />

              {/* Testimonials Page */}
              <Route path="/testimonials" element={<Testimonials />} />

              {/* Press Page */}
              <Route path="/press" element={<Press />} />

              {/* Leadership Page */}
              <Route path="/leadership" element={<Leadership />} />

              {/* Initiatives Page */}
              <Route path="/initiatives" element={<Initiatives />} />

              {/* Partnerships Page */}
              <Route path="/partnerships" element={<Partnerships />} />

              {/* Privacy Policy Page */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* Terms of Service Page */}
              <Route path="/terms-of-service" element={<TermsOfService />} />

              {/* Tags Index Page */}
              <Route path="/tags" element={<TagsIndex />} />

              {/* Individual Tag Page */}
              <Route path="/tags/:tag" element={<Tag />} />

              {/* Category Page */}
              <Route path="/category/:category" element={<Category />} />

              {/* Search Results Page */}
              <Route path="/search" element={<SearchResults />} />

              {/* Fallback Route for Undefined Paths */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>

        {/* Footer */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
