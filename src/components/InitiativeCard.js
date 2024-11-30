// src/components/InitiativeCard.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
} from "@mui/material";

const InitiativeCard = ({ title, description, imageUrl }) => {
  return (
    <Card elevation={3}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InitiativeCard;
