import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink
import styles from "../assets/styles/Header.module.css";

function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      variant="dark"
      className={styles.customNavbar}
    >
      <Container fluid>
        <NavLink to="/" className="navbar-brand me-auto">
          Thomas
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>{" "}
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>{" "}
            <Nav.Link href="#link3">About</Nav.Link>
            <Nav.Link href="#link4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
