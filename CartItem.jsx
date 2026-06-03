import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartTotalCount,
} from "./CartSlice";
import { Navbar } from "./ProductList";
import "./App.css";

function CartItem({ navigateTo }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // calculateTotalAmount — sums item.quantity * item.price for all items
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const handleIncrease = (id, currentQty) => {
    dispatch(updateQuantity({ id, quantity: currentQty + 1 }));
  };

  const handleDecrease = (id, currentQty) => {
    if (currentQty > 1) {
      dispatch(updateQuantity({ id, quantity: currentQty - 1 }));
    } else {
      dispatch(removeItem(id));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("🛒 Coming Soon! Our checkout is under construction. Check back soon!");
  };

  const totalAmount = calculateTotalAmount();

  return (
    <>
      <Navbar navigateTo={navigateTo} />
      <div className="cart-page">
        <h1>🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty 🌿</p>
            <button
              className="continue-btn"
              onClick={() => navigateTo("products")}
              style={{ marginTop: "1.5rem" }}
            >
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-unit-price">
                    Unit price: ${item.price.toFixed(2)}
                  </p>
                  <p className="cart-item-total">
                    Total: ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="cart-item-controls">
                  <button
                    className="qty-btn"
                    onClick={() => handleDecrease(item.id, item.quantity)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleIncrease(item.id, item.quantity)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                    aria-label="Remove item"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="cart-summary">
              <p className="cart-total">
                Total Amount: ${totalAmount.toFixed(2)}
              </p>
              <div className="cart-actions">
                <button
                  className="continue-btn"
                  onClick={() => navigateTo("products")}
                >
                  ← Continue Shopping
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartItem;
