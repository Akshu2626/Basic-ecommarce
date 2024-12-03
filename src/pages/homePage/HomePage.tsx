import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { fetchProducts } from "../../services/api";
import "./HomePage.css"

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const allProducts = await fetchProducts(); 

      const filteredProducts = searchQuery
        ? allProducts.filter((product: any) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : allProducts;

      setProducts(filteredProducts);
      setLoading(false);
    };

    loadProducts();
  }, [searchQuery]);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="homepage">
      <h1>Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
