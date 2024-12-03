import React from "react";
import "./CartItem.css";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  quantity,
  onRemove,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-details">
        <h3>{title}</h3>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="cart-actions">
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
