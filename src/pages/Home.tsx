import { FC } from "react";

import { Trans, useTranslation } from "react-i18next";
import Topbar from "../components/Generics/Topbar";
import Sidebar from "../components/Generics/Sidebar";
import Footer from "../components/Generics/Footer";

const Home: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Sidebar />
      <div className="body">
        <Topbar />
        <div className="centered content">
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
      </div>
    </>
  );
};

export default Home;
