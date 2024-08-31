import { useState } from 'react';
import { Link } from "react-router-dom";
import './nav.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav-bar">
      <div className="nav-intro">
        <img src="logo.png" alt="" className="logo" />
        <h1 className="h1">Clavder</h1>
      </div>
      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className="nav-l">
          <p className="nav-Link" onClick={toggleMenu}> <Link to={"/"}>Home</Link></p>
          <p className="nav-Link" onClick={toggleMenu}> <Link to={"/Product"}>Product</Link></p>
          <p className="nav-Link" onClick={toggleMenu}> <Link to={"/Service"}>Service  & Contact</Link></p>

        </div>
        <div className="togle">
          <p className="togles" onClick={toggleMenu}>ENG  <i className="fa-solid fa-sort-down"></i></p>
          <p className="togles" onClick={toggleMenu}>RS  <i className="fa-solid fa-sort-down"></i></p>
        </div>

      </nav>


      <div className="nav-icon">
        <i className="fa-regular fa-heart fa"></i>
        <i className="fa-solid fa-circle-user "></i>
        <i className="fa-solid fa-bag-shopping fa"></i>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

    </nav>
  )
}

export default Navbar