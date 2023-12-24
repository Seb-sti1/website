import { FC } from "react";

import Contact from "../components/Contact";
import "./home.css";
import { Trans, useTranslation } from "react-i18next";
import Topbar from "../components/Generics/Topbar";

const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Topbar />
      <div className="centered">
        <p>
          <Trans
            t={t}
            i18nKey="home.short-description"
            components={{
              dtu: <a href="https://www.dtu.dk/english/">DTU</a>,
              ensta: <a href="https://www.ensta-paris.fr/en">ENSTA Paris</a>,
            }}
          />
        </p>
      </div>
      <Contact />
    </>
  );
};

export default Home;
