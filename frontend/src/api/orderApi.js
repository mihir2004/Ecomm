import axios from "axios";

export const submitOrder = async (orderData) => {
  const response = await axios.post("/api/orders", orderData);
  return response.data;
};
