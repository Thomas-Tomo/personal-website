import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Header.module.css";

function Header() {
  return (
    <Navbar expand="md" className={styles.header}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          Thomas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={styles.navLink}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
