import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import "./Navbar.css";
import useWindowSize from "../../hooks/useWindowSize";

const variants = {
  visible: {
    opacity: 1,
    ease: "ease",
    duration: 0.1,
  },
  hidden: {
    opacity: 0,
    ease: "ease",
    overflow: "hidden",
    duration: 0.1,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useWindowSize();

  return (
    <nav className="navbar">
      <div className="navbar--container">
        <div className="navbar--logo-container">
          <img
            className="navbar--logo"
            src="/assets/desktop/logo.svg"
            alt="Create Logo"
          />
        </div>
        {screenSize.width < 768 && (
          <div className="navbar--hamburger-container">
            <Hamburger color="#979797" toggled={isOpen} toggle={setIsOpen} />
          </div>
        )}
      </div>
      {screenSize.width < 768 ? (
        <motion.div
          className="navbar--dropdown"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={variants}
        >
          <ul>
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
            <li className="navbar--important-button">Schedule a Call</li>
          </ul>
        </motion.div>
      ) : (
        <div className="navbar--full-width">
          <ul>
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
            <li className="navbar--important-button">Schedule a Call</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
