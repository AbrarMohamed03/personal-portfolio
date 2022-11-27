import React from "react";
import "./index.css";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Experience from "./components/experience/Experience.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
