import React, { createContext, useContext, useState, ReactNode } from "react";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity?: number; 
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product: Product) => {
    let updatedCart = [...cart];
    
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
