import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../assets/styles/Header.module.css";

function Header() {
  return (
    <Navbar expand="lg" sticky="top" data-bs-theme="dark" className={styles.customNavbar}>
      <Container fluid>
        <Navbar.Brand href="#home" className="me-auto">
          Thomas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home1">Home</Nav.Link>
            <Nav.Link href="#link2">Projects</Nav.Link>
            <Nav.Link href="#link3">About</Nav.Link>
            <Nav.Link href="#link4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
