import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    navigate(`/?search=${encodeURIComponent(value)}`); 
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        MyShop
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <input
          type="search"
          className="nav-search"
          placeholder="Search product"
          value={searchQuery}
          onChange={handleSearchChange} 
        />
        <div className="cart-box">
          <Link to="/cart">
            <i className="ri-shopping-cart-line cart-icon"></i>
            <div className="cart-circle">{cart.length}</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
