import {FC} from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements";

const Navbar: FC = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
