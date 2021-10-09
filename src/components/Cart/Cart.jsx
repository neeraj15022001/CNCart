import React from "react";
import CartItem from "../CartItem/CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 100,
          title: "Coffee",
          quantity: 0,
          img: "https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          price: 200,
          title: "Frappe",
          quantity: 0,
          img: "https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          price: 300,
          title: "Mocha",
          quantity: 0,
          img: "https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.products.map((item, index) => (
          <CartItem product={item} key={index} />
        ))}
      </div>
    );
  }
}

export default Cart;
