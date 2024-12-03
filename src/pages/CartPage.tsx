import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/cartItem/CartItem";

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity || 1}
            onRemove={removeFromCart}
          />
        ))
      )}
    </div>
  );
};

export default CartPage;
export {};
