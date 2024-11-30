// src/components/Footer.js
import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      style={{
        textAlign: "center",
        padding: "20px",
        background: "#333",
        color: "#fff",
        marginTop: "40px",
      }}
    >
      <Typography variant="body2" gutterBottom>
        © 2024 Passionfruit Media. All rights reserved.
      </Typography>
      <div>
        <IconButton color="inherit" href="https://facebook.com">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com">
          <Instagram />
        </IconButton>
      </div>
    </Box>
  );
};

export default Footer;
