import React, { Component } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

import "./custom.css";

const App = () => {
  return (
    <>
      <div> 
        <Routes />
      </div>
    </>
  );
};

export default App;
