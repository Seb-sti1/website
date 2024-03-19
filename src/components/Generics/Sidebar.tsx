import { FC, useState } from "react";
import { useDarkMode } from "./useDarkMode";
import { useTranslation } from "react-i18next";
import ToggleBtn from "../Inputs/ToggleBtn";
import Navbar from "./Navbar";

import { IoIosClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

import "./styles/sidebar.scss";

const Sidebar: FC = () => {
  const { isDark, setIsDark } = useDarkMode();
  const { t, i18n } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <CiMenuBurger
        className="burger"
        onClick={() => {
          setOpen(true);
        }}
      />
      <div className="panel" style={{ width: isOpen ? "245px" : "0" }}>
        <div className="close-btn">
          <IoIosClose
            width={35}
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
        <div className="toggle-buttons">
          <ToggleBtn
            className="lang"
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
          <ToggleBtn
            className="dark-mode"
            defaultValue={isDark}
            option1={"🔆"}
            option2={"🌙"}
            onChange={setIsDark}
            aria-label="Dark mode toggle"
          />
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Sidebar;
