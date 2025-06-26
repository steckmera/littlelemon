import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Little Lemon Logo" />
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'rotate-top' : ''}`}></span>
        <span className={`bar ${isOpen ? 'fade' : ''}`}></span>
        <span className={`bar ${isOpen ? 'rotate-bottom' : ''}`}></span>
      </div>
    </nav>
  );
}

export default Nav;
