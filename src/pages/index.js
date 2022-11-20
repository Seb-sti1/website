import React from "react";
import "./index.css";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Maintenance from "../errors/maintenance";

const maintenance = false;

function WebsiteRouter() {
  if (maintenance) {
    return <Maintenance />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

// TODO exact path does not work

export default WebsiteRouter;
