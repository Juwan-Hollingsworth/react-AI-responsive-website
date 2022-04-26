import React from "react";

import {
  Footer,
  Blog,
  Possibilities,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Possibilities />
      <CTA />
      <WhatGPT3 />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
