import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../assets/styles/About.module.css"; // Import your CSS styles for About section

function About() {
  // Define your skills and about yourself
  const skills = [
    "JavaScript",
    "Python",
    "Bootstrap",
    "React.js",
    "Django",
    "Django REST",
    "HTML",
    "CSS",
    "Postgres",
    "Git",
  ];

  const aboutMe = `I am a passionate Full Stack Software Developer with expertise in building web applications using modern technologies.`;

  return (
    <Container className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <p className={styles.aboutText}>{aboutMe}</p>
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
}

export default About;
