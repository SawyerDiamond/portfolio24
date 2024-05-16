import React from "react";

import "./Hero.scss";
import { images, icons } from "../../constants";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="hero">
      <div className="hero__container flex--around">
        <motion.div
          whileInView={{ x: [-500, 0], opacity: [0, 1] }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="hero__left">
          <h1 className="hero__intro">
            <span>Hi.</span>
            <span>I'm</span>
            <span>Sawyer,</span>
          </h1>
          <h2 className="hero__desc">a Frontend Developer & UI Designer. </h2>
        </motion.div>

        <motion.div
          whileInView={{ x: [300, 0], opacity: [0, 1] }}
          transition={{ stiffness: 0, duration: 0.6 }}
          className="hero__right">
          <img src={images.logo} className="hero__image" alt="logo" />
          <ul className="hero__shelf">
            {["LinkedIn", "GitHub", "Resume"].map((item) => (
              <li className="hero__shelf--item" key={item}>
                <img src={icons[item]} alt={item} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <img src={images.hero_bg} className="hero__bg" alt="hero background" />
    </div>
  );
};

export default Header;
