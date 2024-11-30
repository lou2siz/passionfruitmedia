// src/components/SocialShare.js
import React from 'react';
import { IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const SocialShare = ({ url, title }) => {
  return (
    <div>
      <IconButton
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </IconButton>
      <IconButton
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </IconButton>
      <IconButton
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </IconButton>
    </div>
  );
};

export default SocialShare;
