import React from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: "center", padding: "50px", background: "#FFE5D9" }}
    >
      <Typography variant="h3" gutterBottom>
        Revolutionizing Media for Reformative Change
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Join us in promoting self-love and social advocacy.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </motion.div>
  );
};

export default Hero;
