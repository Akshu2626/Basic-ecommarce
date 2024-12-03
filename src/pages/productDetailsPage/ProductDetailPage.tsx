import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/api";
import { useCart } from "../../context/CartContext";
import "./ProductDetailPage.css";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(Number(id));
      setProduct(data);
    };
    loadProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    
    addToCart(product);
  };

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.title} className="product-img" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart} className="custom-btn btn-12">
        <span> Add to Cart! </span>
      </button>
    </div>
  );
};

export default ProductDetailPage;
