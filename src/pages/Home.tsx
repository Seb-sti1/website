import { FC } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import "./home.css";
import { Trans } from "react-i18next";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <div className="centered">
        <Trans>
          <p>
            Hello, I'm Sébastien Kerbourc'h.
            <br />
            <br />I am a engineering student, currently completing a double
            degree at <a href="https://www.dtu.dk/english/">DTU</a> after two
            years at <a href="https://www.ensta-paris.fr/">ENSTA Paris</a>.
            <br />I am passionate about robotics and computer science.
          </p>
        </Trans>
      </div>
      <Contact />
    </>
  );
};

export default Home;
