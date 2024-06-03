import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import styles from "./App.module.css";

function App() {
  return (
    <Container fluid className={styles.appContainer}>
      <Header />
    </Container>
  );
}

export default App;
