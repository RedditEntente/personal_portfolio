import React from 'react';
import './navigation_bar.styles.scss'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Your Logo</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
