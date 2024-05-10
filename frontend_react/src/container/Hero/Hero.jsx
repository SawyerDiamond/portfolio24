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
          transition={{ duration: 1.5 }}
          className="hero-left">
          <h1>SAWYER</h1>
        </motion.div>

        <motion.div
          whileInView={{ x: [500, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="hero-right">
          <h1>SAWYER</h1>
        </motion.div>
      </div>
      <img src={images.hero_bg} className="hero__bg" alt="hero background" />
    </div>
  );
};

export default Header;
