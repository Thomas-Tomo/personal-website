import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../assets/styles/About.module.css";

const cvUrl = "/CV.pdf";

const About = () => {
  const handleViewCV = () => {
    window.open(cvUrl, "_blank"); // Open CV.pdf in a new tab
  };

  const skills = [
    "JavaScript",
    "Python",
    "React.js",
    "Django",
    "Django REST",
    "Bootstrap",
    "HTML",
    "CSS",
    "PostgreSQL",
    "Git",
  ];

  const aboutMe = `
    Junior Full Stack Software Developer with a diploma in Full-Stack Software Development
    (Advanced Frontend) from Code Institute. Skilled in Full Stack Development, modern technologies, and problem-solving.
    Eager to transition into a Software Development career, contributing to impactful projects and
    enhancing expertise in Full Stack Development.
  `;

  return (
    <Container className={styles.container}>
      <Helmet>
        <link rel="canonical" href="https://www.thomasdomitrovic.com/about" />
      </Helmet>
      <h1 className={styles.heading}>About Me</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <p className={styles.aboutText}>{aboutMe}</p>
          <Button
            variant="outline-light"
            className={styles.button}
            onClick={handleViewCV}
          >
            View / Download CV
          </Button>
        </Col>
      </Row>
      <h2 className={styles.subHeading}>Top Skills</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col key={index} xs={6} md={3} className={styles.skillCard}>
            <Card className={styles.card}>
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.skillTitle}>{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
