import { FC } from "react";

import { Trans, useTranslation } from "react-i18next";
import Sidebar from "../components/Generics/Sidebar";
import Footer from "../components/Generics/Footer";
import BigContact from "../components/Generics/BigContact";

const Home: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Sidebar />
      <div className="body">
        <div className="centered content">
          <p>
            <Trans
              t={t}
              i18nKey="home.short-description"
              components={{
                dtu: <a href="https://www.dtu.dk/english/">DTU</a>,
                ensta: (
                  <a
                    href={
                      i18n.language === "fr"
                        ? "https://www.ensta-paris.fr"
                        : "https://www.ensta-paris.fr/en"
                    }
                  >
                    ENSTA Paris
                  </a>
                ),
              }}
            />
            <BigContact />
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
