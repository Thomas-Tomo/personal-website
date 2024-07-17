import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import routes from "./routes";

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Container fluid className={styles.appContainer}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
