import React from "react";
import SitewideNavbar from "./components/NavbarComponent";
import Main from "./components/MainComponent";
import About from "./components/AboutComponent";
import Experience from "./components/ExpComponent";
import Portfolio from "./components/PortfolioComponent";
import Contact from "./components/ContactComponent";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
          <SitewideNavbar />
        </div>
        <body>
          <div className="lander" id="main">
            <br />
            <br />
            <br />
            <Main />
          </div>
          <div className="about" id="about">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <About />
          </div>
          <div className="experience" id="experience">
            <br />
            <br />
            <br />
            <Experience />
          </div>
          <div className="portf" id="portfolio">
            <br />
            <br />
            <br />
            <Portfolio />
          </div>
          <div className="contactdiv" id="contact">
            <br />
            <br />
            <br />
            <Contact />
          </div>
        </body>
      </div>
    </Router>
  );
}

export default App;

