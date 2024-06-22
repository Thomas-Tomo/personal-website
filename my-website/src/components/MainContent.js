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
          className={`order-md-2 d-flex align-items-center justify-content-center ${styles.image}`} // Image column
        >
          <img src={image} alt="Example" className="img-fluid" />
        </Col>
        <Col
          md={6}
          className={`order-md-1 d-flex flex-column justify-content-center align-items-center ${styles.text}`} // Text column
        >
          <p className="text-center">
            I'm Thomas-Tomo Domitrovic, Full Stack Software Developer
          </p>
          <h2 className="text-center">
            Unlocking the power of technology to drive your business forward is
            my mission.
          </h2>
          <Link to="/contact">
            <Button variant="outline-light" className={styles.contact}>
              Contact Me
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
