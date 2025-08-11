// src/components/MultiPageApp.js
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

const navStyle = {
  padding: '10px',
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  fontFamily: 'Arial, sans-serif'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold'
};

const activeStyle = {
  color: 'blue',
  borderBottom: '2px solid blue'
};

const pageStyle = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  padding: '20px'
};

// Các trang
const Home = () => (
  <div style={pageStyle}>
    <h2>🏠 Home Page</h2>
    <p>Welcome to our website! You are now at the Home page.</p>
  </div>
);

const About = () => (
  <div style={pageStyle}>
    <h2>ℹ️ About Us</h2>
    <p>This is the About page. Here you can learn more about us.</p>
  </div>
);

const Contact = () => (
  <div style={pageStyle}>
    <h2>📞 Contact</h2>
    <p>Contact us at: contact@example.com</p>
  </div>
);

function MultiPageApp() {
  return (
    <div>
      {/* Menu điều hướng */}
      <nav style={navStyle}>
        <NavLink
          to="home"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Contact
        </NavLink>
      </nav>

      {/* Các route */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default MultiPageApp;
