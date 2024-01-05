import { FC } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: center;
  padding: 0.2rem calc((100vw - 1200px) / 2);
  z-index: 12;
`;

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Julius Sans One", sans-serif;

  &.active {
    text-decoration: underline solid white 2px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">{t("nav.home")}</NavLink>
          <NavLink to="/education">{t("nav.education")}</NavLink>
          <NavLink to="/projects">{t("nav.projects")}</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
