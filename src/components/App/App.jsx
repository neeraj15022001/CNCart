import React from "react";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import {
  collection,
  getFirestore,
  query,
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.snapshotListener = null;
  }
  componentDidMount() {
    const getDocumentsRealtime = async () => {
      const db = getFirestore();
      const q = query(collection(db, "products"));
      this.snapshotListener = onSnapshot(q, (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });
        this.setState({ products, loading: false });
      });
    };
    getDocumentsRealtime();
  }
  componentWillUnmount() {
    this.snapshotListener();
  }
  addDataToDB = async () => {
    const db = getFirestore();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "products", "5"), {
      price: 500,
      title: "Coffee",
      quantity: 0,
      img: "https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-jumbo.jpg",
      id: 5,
    });
  };
  handleIncreaseQuantity = async (product) => {
    const db = getFirestore();
    const docRef = doc(db, "products", `${product.id}`);
    await updateDoc(docRef, {
      quantity: product.quantity + 1,
    });
  };

  handleDecreaseQuantity = async (product) => {
    const db = getFirestore();
    const docRef = doc(db, "products", `${product.id}`);
    if (product.quantity > 0) {
      await updateDoc(docRef, {
        quantity: product.quantity - 1,
      });
    }
  };
  handleDelete = async (id) => {
    const db = getFirestore();
    await deleteDoc(doc(db, "products", `${id}`));
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
