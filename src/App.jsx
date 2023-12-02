import React, { useRef } from "react";
import Header from "./components/Header";
import Affiliate from "./components/Affiliate";
import Services from "./components/Services";
import "./App.css";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="">
      <Header />
      <Services />
      <Affiliate />
      <Pricing />
    </div>
  );
};

export default App;
