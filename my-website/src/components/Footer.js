import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../assets/styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.row}>
          <Col>
            <a
              href="https://www.linkedin.com/in/thomasdomitrovic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/Thomas-Tomo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
