import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar--logo-container">
        <img
          className="navbar--logo"
          src="/assets/desktop/logo.svg"
          alt="Create Logo"
        />
      </div>
      <div className="navbar--hamburger-container">
        <button onClick={toggleMenu} type="button">
          {isOpen ? (
            <img src="/assets/mobile/icon-cross.svg" alt="hamburger icon" />
          ) : (
            <img src="/assets/mobile/icon-hamburger.svg" alt="hamburger icon" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
