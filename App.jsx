import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import "./App.css";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function AppContent() {
  // 'landing' | 'products' | 'cart'
  const [currentPage, setCurrentPage] = useState("landing");

  const navigateTo = (page) => setCurrentPage(page);

  if (currentPage === "products") {
    return <ProductList navigateTo={navigateTo} />;
  }

  if (currentPage === "cart") {
    return <CartItem navigateTo={navigateTo} />;
  }

  // Landing Page
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p className="tagline">Where Every Home Blossoms</p>
        <button
          className="get-started-btn"
          onClick={() => navigateTo("products")}
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
