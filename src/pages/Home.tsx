import { FC } from "react";

import Sidebar from "../components/Generics/Sidebar";
import Footer from "../components/Generics/Footer";
import BigContact from "../components/Generics/BigContact";

const Home: FC = () => {
  return (
    <>
      <Sidebar />
      <div className="body">
        <div className="content">
          <p>Hello, I'm Sébastien Kerbourc'h!</p>
          <p>I like building robots and coding things.</p>

          <p>
            I'm a member of the <a href="https://cdroms.fr">CDROMS</a> robotics
            team, participating at the{" "}
            <a href="https://www.coupederobotique.fr/">
              Coupe de France de Robotique
            </a>
            . In my free time, I code on projects like{" "}
            <a href="https://github.com/Seb-sti1/rmtree">rmtree</a> to convert{" "}
            <a href="https://remarkable.com/">reMarkable</a> documents and{" "}
            <a href="https://github.com/Seb-sti1/juracoffeemachine">
              juracoffeemachine
            </a>{" "}
            to control a Jura coffee machine via UART.
          </p>

          <p>
            I currently work as a research engineer in robotics at{" "}
            <a href="http://u2is.ensta-paris.fr/">
              U2IS (ENSTA - campus Paris)
            </a>{" "}
            on autonomous navigation in complex outdoor environments. I'm part
            of the <a href="https://github.com/LARIAD">LARIAD</a>.
          </p>

          <p>
            I studied at ENSTA Paris (Computer Science) and the Technical
            University of Denmark (MSc in Autonomous Systems), after a CPGE
            (MPSI/MP).
          </p>
        </div>
        <div className="centered">
          <BigContact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
