import React from "react";
import "./Navbar.css";

function Navbar({totalItemsInCart}) {
  return (
    <nav className="navbar">
      <div className="icon-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
          alt="cart"
          className="icon"
        />
        <span className="cart-count">{totalItemsInCart()}</span>
      </div>
    </nav>
  );
}

export default Navbar;
