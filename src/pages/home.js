import React from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="centered">
        <p>Hello, I'm Sébastien</p>
      </div>

      <Contact />
    </>
  );
};

export default Home;
