import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink
import styles from "../assets/styles/Header.module.css";

function Header() {
  return (
    <Navbar
      expand="md"
      sticky="top"
      variant="dark"
      className={styles.customNavbar}
    >
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/" className="navbar-brand">
            Thomas-Tomo Domitrovic
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
