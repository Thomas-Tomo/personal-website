import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styles from "./App.module.css";
import MainContent from "./components/MainContent";
import Projects from "./components/Projects"; // Import Projects component
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Container fluid className={styles.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
