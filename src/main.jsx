import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/cursor";

// import "./styles/global/global.css"; // uncomment this to re-enable the new global styling system

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
);
