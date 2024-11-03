export const processOrder = (req, res) => {
  const { cart, payment } = req.body;

  // Simulate payment processing
  const isPaymentSuccessful = payment.status === "success";

  if (isPaymentSuccessful) {
    res.status(200).json({ message: "Order processed successfully!" });
  } else {
    res.status(400).json({ message: "Payment failed. Please try again." });
  }
};
