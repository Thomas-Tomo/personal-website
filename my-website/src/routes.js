import React from "react";
import MainContent from "./components/MainContent";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const routes = [
  { path: "/", element: <MainContent /> },
  { path: "/projects", element: <Projects /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
