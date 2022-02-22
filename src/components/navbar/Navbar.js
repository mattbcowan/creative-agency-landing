import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import "./Navbar.css";

const variants = {
  visible: {
    opacity: 1,
    x: "0",
    ease: "easeIn",
    duration: 0.3,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    x: "200%",
    ease: "easeIn",
    duration: 0.4,
    transition: {
      when: "afterChildren",
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="navbar--hamburger-container">
          <Hamburger color="#979797" toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
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
    </nav>
  );
};

export default Navbar;
