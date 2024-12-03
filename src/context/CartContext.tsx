import React, { createContext, useState, useContext } from 'react';

// Define CartItem interface for cart items
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// Define the shape of the context
interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

// Create the CartContext
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Define props for CartProvider, especially `children`
interface CartProviderProps {
  children: React.ReactNode;
}

// CartProvider with children typed properly
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
