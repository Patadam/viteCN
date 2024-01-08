import { useState } from "react";
import "./styles/App.css";
import Rules from "./pages/Rules";
import { Routes, Route } from "react-router-dom";
import AnimatedCursor from "./components/cursor";
import Header from "./pages/Header";
import Ssp from "./pages/ssp";
import Coc from "./pages/coc";
import About from "./pages/About";
import Agm from "./pages/Agm";
import Event from "./pages/Events";

import Patrick from "./pages/Patrick";

function App() {
  return (
    <main>
      <section className="auto-margin App">
        <AnimatedCursor />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/ssp" element={<Ssp />} />
          <Route path="/coc" element={<Coc />} />
          <Route path="/agm" element={<Agm />} />
          {/* <Route path="/patrick" element={<Patrick />} /> */}
          <Route path="/events" element={<Event />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
