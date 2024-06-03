import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import styles from "./App.module.css";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid className={styles.appContainer}>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
}

export default App;
