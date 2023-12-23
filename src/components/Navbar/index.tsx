import { FC } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
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
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/education">Education & Internships</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
