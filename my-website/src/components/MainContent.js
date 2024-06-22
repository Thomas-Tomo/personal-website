import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../assets/styles/MainContent.module.css";
import image from "../assets/images/me.png";

function MainContent() {
  return (
    <Container>
      <Row className={styles.mainContent}>
        <Col
          md={6}
          className={`order-md-2 d-flex align-items-center justify-content-center ${styles.image}`}
        >
          <img src={image} alt="Example" className="img-fluid" />
        </Col>
        <Col
          md={6}
          className={`order-md-1 d-flex flex-column justify-content-center align-items-center ${styles.text}`}
        >
          <p className="text-center">
            I'm Thomas-Tomo Domitrovic, Full Stack Software Developer
          </p>
          <h2 className="text-center">
            Unlocking the power of technology to drive your business forward is
            my mission.
          </h2>
          <Link to="/contact" className={styles.buttonLink}>
            <Button variant="outline-light" className={`${styles.contact} ${styles.button}`}>
              Contact Me
            </Button>
          </Link>
          <Button
            variant="outline-success"
            className={`${styles.contact} ${styles.button}`}
            onClick={() =>
              window.open("https://wa.me/3530879735102", "_blank")
            }
          >
            Send WhatsApp Message
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
