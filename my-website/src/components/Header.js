import React, { useState, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../assets/styles/Header.module.css";
import useClickOutside from "../hooks/useClickOutside";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  useClickOutside(navRef, handleClose, expanded);

  return (
    <Navbar
      expand="md"
      sticky="top"
      variant="dark"
      expanded={expanded}
      onToggle={handleToggle}
      ref={navRef}
      className={styles.customNavbar}
    >
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/" className="navbar-brand" onClick={handleClose}>
            Thomas-Tomo Domitrovic
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ml-auto"
            onClick={handleToggle}
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink to="/" className="nav-link" onClick={handleClose}>
              Home
            </NavLink>
            <NavLink to="/projects" className="nav-link" onClick={handleClose}>
              Projects
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={handleClose}>
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={handleClose}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
