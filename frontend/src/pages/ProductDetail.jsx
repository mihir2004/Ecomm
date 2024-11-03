import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../api/productApi";
import { Typography, Button, Card, CardContent } from "@mui/material";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Card sx={{ maxWidth: 600, margin: "2rem auto" }}>
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ marginTop: 2 }}
        >
          {product.description}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/checkout"
          sx={{ marginTop: 2 }}
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductDetail;
