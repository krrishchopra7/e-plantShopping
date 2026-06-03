import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import "./App.css";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function AppContent() {
  // State variable to control which page is shown
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const navigateTo = (page) => {
    setShowProductList(page === "products");
    setShowCart(page === "cart");
  };

  if (showCart) {
    return <CartItem navigateTo={navigateTo} />;
  }

  if (showProductList) {
    return <ProductList navigateTo={navigateTo} />;
  }

  // Landing Page
  return (
    <div className="landing-page background-image">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p className="tagline">Where Every Home Blossoms</p>
        <button
          className="get-started-btn"
          onClick={() => setShowProductList(true)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
