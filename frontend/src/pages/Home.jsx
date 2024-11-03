import React from "react";
import { Typography } from "@mui/material";

function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h4" component="h1">
        Welcome to Our eCommerce Site
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Find the best products at amazing prices.
      </Typography>
    </div>
  );
}

export default Home;
