import React from "react";
import "./CartItem.css";
import { PlusLg, DashLg, TrashFill } from "react-bootstrap-icons";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 100,
      title: "Coffee",
      quantity: 0,
      img: "https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    };
  }
  deleteItem = () => {
    console.log(this.state);
  };
  increaseQuantity = () => {
    this.setState((prevState) => {
      return {
        quantity: prevState.quantity + 1,
      };
    });
    console.log(this.state);
  };
  decreaseQuantity = () => {
    if (this.state.quantity > 0) {
      this.setState((prevState) => {
        return {
          quantity: prevState.quantity - 1,
        };
      });
    }

    console.log(this.state);
  };
  render() {
    const { price, title, quantity, img } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-image">
            <div
              className="image"
              style={{
                background: `url(${img}) no-repeat center center`,
                backgroundSize: "cover",
              }}
            ></div>
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
            onClick={this.increaseQuantity}
          >
            <PlusLg color="black" />
          </button>
          <button
            className="card-actions-button"
            onClick={this.decreaseQuantity}
          >
            <DashLg color="black" />
          </button>
          <button className="card-actions-button" onClick={this.deleteItem}>
            <TrashFill color="white" />
          </button>
        </div>
      </div>
    );
  }
}

export default CartItem;
