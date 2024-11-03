import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} eCommerce. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
