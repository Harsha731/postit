import { Card, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          “Our lives begin to end the day we become silent about things that matter.”
          <br />  — Martin Luther King Jr.
        </Typography>
      </Card>
    </Box>
  );
};

export default Footer;
