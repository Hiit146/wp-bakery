import React from 'react';
import './headfoot.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        
        <div className="logo">
        <a href="/bakeryhome.html">
            <img src={'https://www.demel.com/cdn/shop/files/text-media-logo.png?v=1654590323&width=195'}alt="logo" />
            </a>
        </div>
        <div className='logo-text'>
          <a href="/bakeryhome.html">
          <h1>DEMEL</h1>
          </a>
        </div>
        <nav className="nav-menu">
          <ul>
            
            <li><a href="/bakeryhome.html">Home</a></li>
            
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/checkout">Checkout</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;