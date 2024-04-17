import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">My Logo</a>
      </div>
      <div className={`nav-menu ${isNavOpen ? 'show' : ''}`}>
        <ul className="nav-list">
          <li>
            
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
           <NavLink to="/contact">Contact</NavLink>
          </li>
         
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleNav}>
        <span className="icon"></span>
      </div>
    </nav>
  );
};

export default Header;