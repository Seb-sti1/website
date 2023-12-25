import { FC } from "react";

import "./styles/home.css";
import { Trans, useTranslation } from "react-i18next";
import Topbar from "../components/Generics/Topbar";
import Footer from "../components/Generics/Footer";

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
      <Footer />
    </>
  );
};

export default Home;
