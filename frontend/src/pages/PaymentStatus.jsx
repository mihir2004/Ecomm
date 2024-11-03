import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

function PaymentStatus() {
  const location = useLocation();
  const isSuccess = location.state?.success;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h4">
        {isSuccess ? "Payment Successful!" : "Payment Failed"}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/products"
        sx={{ marginTop: "1rem" }}
      >
        Back to Products
      </Button>
    </div>
  );
}

export default PaymentStatus;
