import React from "react";

import { About, Contact, Header, Skills, Work } from "./container";
import { Nav } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div classname="app">
      <Nav />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
