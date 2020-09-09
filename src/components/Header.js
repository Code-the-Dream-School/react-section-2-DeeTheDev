import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <nav>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <NavLink
                        exact
                        to="/"
                        activeClassName="activeLink"
                        className="nav-link"
                    >
                        Home
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/profile"
                        className="nav-link"
                        activeClassName="activeLink"
                    >
                        Profile
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/project"
                        className="nav-link"
                        activeClassName="activeLink"
                    >
                        Projects
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/contact"
                        className="nav-link"
                        activeClassName="activeLink"
                    >
                        Contact
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/about"
                        className="nav-link"
                        activeClassName="activeLink"
                    >
                        About
                    </NavLink>
                </Nav.Item>
            </Nav>
        </nav>
    );
};

export default Header;
