import React from 'react';
import "../styles/NavBar.css"
import logo from "../images/profile.webp"
function Navbar() {
  return (
    <nav className="navbar">
      <a href="https://drive.google.com/drive/u/2/folders/10wl-6KICemaxRby7yWX0MDvcSucArUKv" className="logo"><img alt='logo'
          src={logo} /*se rodea con llaves xq es codigo de javascript*/ 
          className="nav_logo"
          /></a>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler"><i className="menu-line"></i></label>
      <div className="menu">
        <ul className="list">
          <li className='NavBarbtn'><a href="#home">HOME</a></li>
          <li className='NavBarbtn'><a href="#projects">PROJECTS</a></li>
          <li className='NavBarbtn'><a href="#social">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
