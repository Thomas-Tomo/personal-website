import React from "react";
import { Container } from "react-bootstrap";
import styles from "../assets/styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/thomasdomitrovic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Thomas-Tomo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
