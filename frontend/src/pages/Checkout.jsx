import React, { useState } from "react";
import { processOrder } from "../api";

const CheckoutPage = () => {
  const [cart] = useState([]); // Replace with actual cart data
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleOrder = async () => {
    try {
      const payment = { status: "success" }; // Replace with actual payment status
      const orderData = { cart, payment };
      const response = await processOrder(orderData);
      setPaymentStatus(response.message);
    } catch (error) {
      setPaymentStatus("Payment failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleOrder}>Place Order</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default CheckoutPage;
