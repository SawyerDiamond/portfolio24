import React from "react";

import "./Nav.scss";
import { images, icons } from "../../constants";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="navbar flex--spaced">
        <div className="navbar__logo flex">
          <img src={images.logo} alt="logo" />
          <h2>SAWYER</h2>
        </div>
        <ul className="navbar__links flex--spaced">
          {["Home", "Skills", "Projects", "Experience"].map((item) => (
            <li className="navbar__button flex--h" key={"link-${item}"}>
              <img
                className="navbar__button-icon"
                src={icons[item]}
                alt="icon"
              />
              <a className="navbar__button-label" href={`#${item}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a className="navbar__contact flex--h" href="#contact-point">
          <img src={icons.Contact} alt="Contact" />
          <h3>Contact</h3>
        </a>
      </div>
      <div className="mobile-container" aria-label="mobile-container">
        <div className="navbar-mobile flex--spaced">
          <img src={images.logo} className="navbar-mobile__logo" alt="logo" />
          <HiMenuAlt3
            onClick={() => setToggle(true)}
            className="navbar-mobile__icon"
            color="white"
          />
        </div>

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeIn" }}
            className="mobile__menu">
            <IoClose onClick={() => setToggle(false)} color="white" />
            {["Home", "Skills", "Projects", "Experience"].map((item) => (
              <ul>
                <li key={"link-${item}"}>
                  <img
                    className="mobile__menu-icon"
                    src={icons[item]}
                    alt="icon"
                  />
                  <a
                    className="mobile__menu-label"
                    href={`#${item}`}
                    onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
