import React from 'react';
import "../styles/NavBar.css"
import logo from "../images/profile.webp"
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo"><img 
          src={logo} /*se rodea con llaves xq es codigo de javascript*/ 
          className="nav_logo"
          /></a>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler"><i className="menu-line"></i></label>
      <div className="menu">
        <ul className="list">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
