import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky-header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-text">KoinX</span>
          <span className="logo-tm">TM</span>
        </Link>
        
        <nav className="desktop-nav">
          <Link to="/crypto-taxes" className="nav-link">Crypto Taxes</Link>
          <Link to="/free-tools" className="nav-link">Free Tools</Link>
          <Link to="/resource-center" className="nav-link">Resource Center</Link>
        </nav>

        <div className="nav-actions">
          <button className="get-started-btn desktop-only">Get Started</button>
          <button className="menu-btn mobile-only" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link to="/crypto-taxes" className="mobile-nav-link" onClick={closeMenu}>Crypto Taxes</Link>
              <Link to="/free-tools" className="mobile-nav-link" onClick={closeMenu}>Free Tools</Link>
              <Link to="/resource-center" className="mobile-nav-link" onClick={closeMenu}>Resource Center</Link>
              <button className="get-started-btn mobile-get-started" onClick={closeMenu}>Get Started</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
