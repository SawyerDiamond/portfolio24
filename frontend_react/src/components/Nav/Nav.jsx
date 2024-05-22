import React from "react";

import "./Nav.scss";
import { images, icons } from "../../constants";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useDeviceDetect from "../../hooks/useDeviceDetect";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { isMobile, isTablet, isDesktop } = useDeviceDetect();
  return (
    <nav>
      <div className={`navbar flex--spaced ${isMobile ? "hidden" : ""}`}>
        <div className="navbar__logo flex">
          <img src={images.logo} alt="logo" />
          <h3>SAWYER</h3>
        </div>
        <ul className="navbar__links flex--spaced">
          {["Home", "Skills", "Projects", "Experience"].map((item) => (
            <li className="navbar__button flex--v" key={`link-${item}`}>
              <img
                className="navbar__button-icon"
                src={icons[item]}
                alt="icon"
              />
              <a
                className={`navbar__button-label ${isDesktop ? "" : "hidden"}`}
                href={`#${item}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a className="navbar__contact flex--v" href="#contact-point">
          <img src={icons.Contact} alt="Contact" />
          <h3>Contact</h3>
        </a>
      </div>
      <div
        className={`mobile-container ${isMobile ? "" : "hidden"}`}
        aria-label="mobile-container">
        <div className="navbar-mobile flex--spaced">
          <img src={images.logo} className="navbar-mobile__logo" alt="logo" />
          {/*Mobile hamburger menu icon*/}
          <HiMenuAlt3
            onClick={() => {
              console.log("Hamburger menu icon clicked");
              setToggle(true);
            }}
            className="navbar-mobile__icon"
            color="white"
          />
        </div>

        {/*Main mobile menu, followed by a close button*/}
        {toggle && (
          <motion.div
            animate={{ x: toggle ? 0 : 400 }}
            transition={{ duration: 0.6 }}
            className="mobile-container">
            <div className="mobile__menu">
              {["Home", "Skills", "Projects", "Experience"].map((item) => (
                <ul className="mobile__menu-item">
                  <li key={`link-${item}`}>
                    <img
                      className="mobile__menu-item--icon"
                      src={icons[item]}
                      alt="icon"
                    />
                  </li>
                </ul>
              ))}
            </div>

            <IoClose
              onClick={() => setToggle(!toggle)}
              className="mobile__menu-close"
              size={36}
              color="white"
            />
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
