import React from "react";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 100,
          title: "Coffee",
          quantity: 0,
          img: "https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 1,
        },
        {
          price: 200,
          title: "Frappe",
          quantity: 0,
          img: "https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 2,
        },
        {
          price: 300,
          title: "Mocha",
          quantity: 0,
          img: "https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].quantity += 1;
    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].quantity !== 0) {
      products[index].quantity -= 1;
    }
    this.setState({
      products,
    });
  };
  handleDelete = (id) => {
    const { products } = this.state;
    const newProducts = products.filter((item) => item.id !== id);
    this.setState({
      products: newProducts,
    });
  };
  totalItemsInCart = () => {
    let totalItems = 0;
    this.state.products.forEach((item) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };
  totalPrice = () => {
    let totalPrice = 0;
    this.state.products.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };
  render() {
    return (
      <div>
        <Navbar totalItemsInCart={this.totalItemsInCart} />
        <Cart
          products={this.state.products}
          handleIncreaseQuantity={this.handleIncreaseQuantity}
          handleDecreaseQuantity={this.handleDecreaseQuantity}
          handleDelete={this.handleDelete}
        />
        <div>
          <span>
            <strong>Total Price: </strong>
            {this.totalPrice()}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
