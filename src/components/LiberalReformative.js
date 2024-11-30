import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";

const LiberalReformative = () => {
  return (
    <Box style={{ padding: "20px", background: "#F3F4F6", marginTop: "40px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Liberal Reformative Initiative: Mission Statement
          </Typography>
          <Typography variant="h6" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are a proud California Community College startup, rooted in the values of equity,
            integrity, and justice. Founded at MiraCosta Community College, we are a team of dedicated
            lawyers and journalists—each a product of the California Community College system. We aim
            to demonstrate that excellence in advocacy and journalism can come from accessible education
            and progressive values.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our Commitment to Justice
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Ethical Excellence:</b> We pay all our lawyers and journalists at least 25% above fair
            market rates to ensure integrity and professionalism.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Uncovering Oppression:</b> Our mission is to expose and litigate against systems of
            oppression that impact everyday people through investigative journalism, public records
            requests, and strategic litigation.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our Core Values
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li><b>Integrity:</b> Upholding truth and transparency in all our work.</li>
              <li><b>Inclusivity:</b> Amplifying marginalized voices, especially in the LGBTQ+ community.</li>
              <li><b>Zero Tolerance for Hate:</b> We treat all offenses seriously to promote equity.</li>
              <li><b>LGBTQ+ Advocacy:</b> Promoting self-love, equal treatment, and social acceptance.</li>
            </ul>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>A Message of Hope:</b> By promoting LGBTQ+ rights and exposing systemic oppression, we
            aim to inspire a more equitable world.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LiberalReformative;
