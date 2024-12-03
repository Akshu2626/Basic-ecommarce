import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the Product interface, including the quantity
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity?: number; // Optional field, because it won't be in the initial product data
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to manage cart state and localStorage
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    // Retrieve cart from localStorage when the app loads
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product: Product) => {
    let updatedCart = [...cart];
    // Check if product already exists in the cart
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If product exists, increment the quantity
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      // Add new product if it's not already in the cart, with quantity = 1
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    // Update localStorage with the new cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
