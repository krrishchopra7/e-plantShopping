import React from "react";
import "./App.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-hero">
        <h1>🌿 About Paradise Nursery</h1>
        <p className="about-tagline">Rooted in passion. Growing with purpose.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Paradise Nursery is a family-owned online plant shop dedicated to bringing
            the beauty of nature into every home and workspace. Founded in 2018, we have
            helped thousands of plant lovers across the country find their perfect green
            companions.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to make plant parenthood accessible, joyful, and
            sustainable. We carefully curate every plant we sell, ensuring that each one
            arrives healthy, thriving, and ready to transform your space.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-list">
            <li>🌱 100% healthy, hand-selected plants</li>
            <li>📦 Eco-friendly packaging</li>
            <li>🚚 Fast, reliable shipping nationwide</li>
            <li>💚 Expert care guides with every purchase</li>
            <li>🔄 30-day happiness guarantee</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <p>
            We believe in sustainability, community, and the transformative power of
            plants. Every purchase supports our reforestation initiative — we plant one
            tree for every order placed.
          </p>
        </section>

        <section className="about-section about-contact">
          <h2>Get in Touch</h2>
          <p>📧 hello@paradisenursery.com</p>
          <p>📞 (555) 123-4567</p>
          <p>🕐 Mon–Fri: 9am – 6pm EST</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
