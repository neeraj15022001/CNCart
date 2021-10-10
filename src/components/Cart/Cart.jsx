import React from "react";
import CartItem from "../CartItem/CartItem";

function Cart({
  products,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleDelete,
}) {
  return (
    <div>
      {products.map((item, index) => (
        <CartItem
          product={item}
          increaseQuantity={handleIncreaseQuantity}
          decreaseQuantity={handleDecreaseQuantity}
          onDelete={handleDelete}
          key={index}
        />
      ))}
    </div>
  );
}

export default Cart;
