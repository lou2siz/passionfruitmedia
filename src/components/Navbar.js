// src/components/LiberalReformative.js
import React from "react";
import { Typography, Box, Card, CardContent, Container } from "@mui/material";

const LiberalReformative = () => {
  return (
    <Box style={{ marginTop: "60px" }}>
      <Container maxWidth="md">
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Liberal Reformative Initiative: Mission Statement
            </Typography>
            <Typography variant="h5" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1" paragraph>
              We are a proud California Community College startup, rooted in the values of equity, integrity, and justice. Founded at MiraCosta Community College, we are a team of dedicated lawyers and journalists—each a product of the California Community College system. We aim to demonstrate that excellence in advocacy and journalism can come from accessible education and progressive values.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Our Commitment to Justice
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Ethical Excellence:</strong> We pay all our lawyers and journalists at least 25% above fair market rates to ensure integrity and professionalism.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Uncovering Oppression:</strong> Our mission is to expose and litigate against systems of oppression that impact everyday people through investigative journalism, public records requests, and strategic litigation.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Our Core Values
            </Typography>
            <ul>
              <Typography component="li" variant="body1" paragraph>
                <strong>Integrity:</strong> Upholding truth and transparency in all our work.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                <strong>Inclusivity:</strong> Amplifying marginalized voices, especially in the LGBTQ+ community.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                <strong>Zero Tolerance for Hate:</strong> We treat all offenses seriously to promote equity.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                <strong>LGBTQ+ Advocacy:</strong> Promoting self-love, equal treatment, and social acceptance.
              </Typography>
            </ul>
            <Typography variant="body1" paragraph>
              <strong>A Message of Hope:</strong> By promoting LGBTQ+ rights and exposing systemic oppression, we aim to inspire a more equitable world.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LiberalReformative;
