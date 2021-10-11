import React from "react";
import "./CartItem.css";
import { PlusLg, DashLg, TrashFill } from "react-bootstrap-icons";

const CartItem = ({
  product,
  increaseQuantity,
  decreaseQuantity,
  onDelete,
}) => {
  const { price, title, quantity, img } = product;
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-image">
          <div className="image" style={getStyle(img)}></div>
        </div>
        <div className="card-description">
          <p>
            <strong>Name: </strong>
            {title}
          </p>
          <p>
            <strong>Price: </strong>Rs{price}
          </p>
          <p>
            <strong>Quantity: </strong>
            {quantity}
          </p>
        </div>
      </div>
      <div className="card-actions">
        <button
          className="card-actions-button"
          onClick={() => increaseQuantity(product)}
        >
          <PlusLg color="black" />
        </button>
        <button
          className="card-actions-button"
          onClick={() => decreaseQuantity(product)}
        >
          <DashLg color="black" />
        </button>
        <button
          className="card-actions-button"
          onClick={() => onDelete(product.id)}
        >
          <TrashFill color="white" />
        </button>
      </div>
    </div>
  );
};
const getStyle = (img) => {
  const style = {
    backgroundColor: "#fff",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return style;
};

export default CartItem;
