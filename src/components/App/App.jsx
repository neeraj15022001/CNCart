import React from "react";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }
  componentDidMount() {
    const getDocuments = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "products"));
      let products = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        products.push(doc.data());
      });
      this.setState({ products, loading: false });
    };
    const getDocumentsRealtime = async () => {
      const db = getFirestore();
      const q = query(collection(db, "products"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });
        this.setState({ products, loading: false });
      });
    };
    getDocumentsRealtime();
  }
  addDataToDB = async () => {
    const db = getFirestore();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "products", "2"), {
      price: 500,
      title: "Cappauccinio2",
      quantity: 0,
      img: "https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-jumbo.jpg",
      id: 5,
    });
  };
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
  };
  handleDelete = (id) => {
    const { products } = this.state;
    const newProducts = products.filter((item) => item.id !== id);
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
        <button onClick={this.addDataToDB}>Add Product</button>
        {this.state.loading && <h1>Loading Products...</h1>}
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
