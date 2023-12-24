import { FC } from "react";
import ToggleBtn from "../Inputs/ToggleBtn";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

import "./styles/topbar.scss";

const Topbar: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="topbar">
        <ToggleBtn
          defaultValue={i18n.language === "fr"}
          option1={t("lang.en")}
          option2={t("lang.fr")}
          onChange={(value) => {
            if (value) {
              i18n.changeLanguage("fr");
            } else {
              i18n.changeLanguage("en");
            }
          }}
        />
        <Navbar />
      </div>
    </>
  );
};

export default Topbar;
