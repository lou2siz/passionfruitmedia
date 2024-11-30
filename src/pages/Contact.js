// src/pages/Contact.js

import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';
import SEO from '../components/SEO';

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State to manage form submission status
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Basic form validation
  const validate = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      return 'All fields are required.';
    }
    // Simple email regex for validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setSubmitted(false);
      return;
    }
    // Simulate form submission (e.g., API call)
    console.log('Form Data:', formData);
    setSubmitted(true);
    setError('');
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Passionfruit Media. We'd love to hear from you."
        url="https://yourwebsite.com/contact"
      />
      <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Have questions, suggestions, or just want to say hello? Fill out the form below, and we'll get back to you as soon as possible.
        </Typography>

        {/* Display success message */}
        {submitted && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Thank you for contacting us! We will get back to you shortly.
          </Alert>
        )}

        {/* Display error message */}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 4 }}
        >
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            required
            multiline
            rows={6}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
