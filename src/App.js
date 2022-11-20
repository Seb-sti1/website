import React from "react";
import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";

import ServiceUnavailable from "./errors/503";
import CustomError from "./errors";
import NotFound from "./errors/404";
import Maintenance from "./errors/maintenance";

const maintenance = true;

function App() {
  var errors = (
    <>
      <Route path="/503" element={<ServiceUnavailable />} />
      <Route path="/error/:reason" element={<CustomError />} />
      <Route path="/404" element={<NotFound />} />
    </>
  );

  if (maintenance) {
    return (
      <Router>
        <Routes>
          {errors}
          <Route path="*" element={<Maintenance />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        {errors}
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
