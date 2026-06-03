import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, selectCartTotalCount } from "./CartSlice";
import "./App.css";

// ── Plant Data ─────────────────────────────────────────────────────────────

const categories = [
  {
    name: "🌵 Succulents & Cacti",
    plants: [
      {
        id: "s1",
        name: "Echeveria",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80",
        price: 8.99,
        description: "Rosette-shaped beauty with pastel hues. Perfect for beginners.",
      },
      {
        id: "s2",
        name: "Golden Barrel Cactus",
        image: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=400&q=80",
        price: 12.99,
        description: "Round, sculptural cactus with striking golden spines.",
      },
      {
        id: "s3",
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c76ea6?w=400&q=80",
        price: 10.99,
        description: "Soothing gel in each leaf. Low-maintenance and useful.",
      },
      {
        id: "s4",
        name: "Jade Plant",
        image: "https://images.unsplash.com/photo-1520302630591-fd1f539e2c5a?w=400&q=80",
        price: 14.99,
        description: "Glossy oval leaves on sturdy woody stems. Brings good luck!",
      },
      {
        id: "s5",
        name: "String of Pearls",
        image: "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=400&q=80",
        price: 11.99,
        description: "Cascading chains of tiny spheres. Stunning in hanging baskets.",
      },
      {
        id: "s6",
        name: "Haworthia",
        image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80",
        price: 7.99,
        description: "Compact zebra-patterned succulent. Loves indirect light.",
      },
    ],
  },
  {
    name: "🌿 Tropical Foliage",
    plants: [
      {
        id: "t1",
        name: "Monstera Deliciosa",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80",
        price: 24.99,
        description: "Iconic split leaves that make a bold statement in any room.",
      },
      {
        id: "t2",
        name: "Bird of Paradise",
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&q=80",
        price: 34.99,
        description: "Dramatic broad leaves that mimic the tropical forest canopy.",
      },
      {
        id: "t3",
        name: "Fiddle Leaf Fig",
        image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&q=80",
        price: 29.99,
        description: "Large, wavy leaves on an elegant tree-form trunk.",
      },
      {
        id: "t4",
        name: "Peace Lily",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80",
        price: 15.99,
        description: "White blooms and glossy leaves. Excellent air purifier.",
      },
      {
        id: "t5",
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80",
        price: 18.99,
        description: "Architectural upright leaves with golden edges. Nearly indestructible.",
      },
      {
        id: "t6",
        name: "Pothos",
        image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=400&q=80",
        price: 9.99,
        description: "Trailing vines with heart-shaped leaves. The perfect starter plant.",
      },
    ],
  },
  {
    name: "🌺 Flowering Plants",
    plants: [
      {
        id: "f1",
        name: "Orchid",
        image: "https://images.unsplash.com/photo-1566907225472-514215c9e6a9?w=400&q=80",
        price: 22.99,
        description: "Elegant blooms in a rainbow of colors. A timeless classic.",
      },
      {
        id: "f2",
        name: "African Violet",
        image: "https://images.unsplash.com/photo-1490750967868-88df5691cc43?w=400&q=80",
        price: 9.99,
        description: "Velvety purple blooms that thrive indoors all year long.",
      },
      {
        id: "f3",
        name: "Anthurium",
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&q=80",
        price: 19.99,
        description: "Waxy heart-shaped spathes in vivid red and pink tones.",
      },
      {
        id: "f4",
        name: "Begonia",
        image: "https://images.unsplash.com/photo-1562610843-3a6736a6b6be?w=400&q=80",
        price: 12.99,
        description: "Masses of cheerful blooms with lush ornamental foliage.",
      },
      {
        id: "f5",
        name: "Bromeliads",
        image: "https://images.unsplash.com/photo-1585467602044-80e61c4f90bb?w=400&q=80",
        price: 16.99,
        description: "Exotic rosette plant with a stunning central flower spike.",
      },
      {
        id: "f6",
        name: "Kalanchoe",
        image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=400&q=80",
        price: 10.99,
        description: "Clusters of tiny flowers above waxy green leaves. Long-lasting.",
      },
    ],
  },
];

// ── Navbar Component ────────────────────────────────────────────────────────

function Navbar({ navigateTo }) {
  const totalCount = useSelector(selectCartTotalCount);

  return (
    <nav className="navbar">
      <a className="navbar-brand" onClick={() => navigateTo("landing")} style={{ cursor: "pointer" }}>
        🌿 Paradise Nursery
      </a>
      <ul className="navbar-links">
        <li>
          <a onClick={() => navigateTo("landing")} style={{ cursor: "pointer" }}>
            Home
          </a>
        </li>
        <li>
          <a onClick={() => navigateTo("products")} style={{ cursor: "pointer" }}>
            Plants
          </a>
        </li>
        <li>
          <a
            className="cart-icon-wrapper"
            onClick={() => navigateTo("cart")}
            style={{ cursor: "pointer" }}
          >
            🛒
            {totalCount > 0 && (
              <span className="cart-count">{totalCount}</span>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
}

// ── ProductList Component ───────────────────────────────────────────────────

function ProductList({ navigateTo }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Track which plant IDs have been added (to disable button)
  const addedIds = new Set(cartItems.map((item) => item.id));

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Navbar navigateTo={navigateTo} />
      <div className="product-list-page">
        <h1 className="page-title">Our Plants</h1>
        <p className="page-subtitle">Handpicked greenery for every space</p>

        {categories.map((category) => (
          <section key={category.name} className="category-section">
            <h2 className="category-title">{category.name}</h2>
            <div className="plant-grid">
              {category.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="plant-card-body">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedIds.has(plant.id)}
                    >
                      {addedIds.has(plant.id) ? "✔ Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default ProductList;
export { Navbar };
