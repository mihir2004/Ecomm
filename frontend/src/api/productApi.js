import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("/api/products");
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`/api/products/${id}`);
  return response.data;
};
