// src/components/LiberalReformative.js

import React from "react";
import { Typography, Box, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";

const LiberalReformative = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#F3F4F6", marginTop: "40px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Liberal Reformative Initiative: Mission Statement
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Who We Are
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are a proud California Community College startup, rooted in the values of equity,
            integrity, and justice. Founded at MiraCosta Community College, we are a team of dedicated
            lawyers and journalists—each a product of the California Community College system. We aim
            to demonstrate that excellence in advocacy and journalism can come from accessible education
            and progressive values.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Our Commitment to Justice
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Ethical Excellence:</strong> We pay all our lawyers and journalists at least 25% above fair
            market rates to ensure integrity and professionalism.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Uncovering Oppression:</strong> Our mission is to expose and litigate against systems of
            oppression that impact everyday people through investigative journalism, public records
            requests, and strategic litigation.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Our Core Values
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <strong>Integrity:</strong> Upholding truth and transparency in all our work.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <strong>Inclusivity:</strong> Amplifying marginalized voices, especially in the LGBTQ+ community.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <strong>Zero Tolerance for Hate:</strong> We treat all offenses seriously to promote equity.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <strong>LGBTQ+ Advocacy:</strong> Promoting self-love, equal treatment, and social acceptance.
                  </>
                }
              />
            </ListItem>
          </List>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            <strong>A Message of Hope:</strong> By promoting LGBTQ+ rights and exposing systemic oppression, we
            aim to inspire a more equitable world.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LiberalReformative;
