import React from "react";

import "./Skills.scss";
import { images, icons, links } from "../../constants";
import { motion } from "framer-motion";
import useDeviceDetect from "../../hooks/useDeviceDetect";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__header">
        <img src={images.lightning} alt="Header Icon" />
        <h2>Skills</h2>
      </div>
      <div className="skills__container"></div>
    </section>
  );
};

export default Skills;
