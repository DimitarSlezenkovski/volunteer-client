import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import LoginMenu from "./LoginMenu";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        fixed="top"
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
        style={{ background: "white", display: "flex" }}
      >
        <NavbarBrand tag={Link} to="/">
          ВолонтирајМК
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse
          className="d-sm-inline-flex flex-sm-row"
          isOpen={isOpen}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                Почетна
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                Линк 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                Линк 2
              </NavLink>
            </NavItem>
          </ul>
        </Collapse>
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={isOpen}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <LoginMenu isOpen={isOpen}></LoginMenu>
          </ul>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
