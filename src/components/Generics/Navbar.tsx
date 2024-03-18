import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./styles/nabar.scss";

const Navbar: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar">
        <NavLink className="link" to="/">
          {t("nav.home")}
        </NavLink>
        <NavLink className="link" to="/education">
          {t("nav.education")}
        </NavLink>
        <NavLink className="link" to="/projects">
          {t("nav.projects")}
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
