import React from "react";
import SitewideNavbar from "./components/NavbarComponent";
import Main from "./components/MainComponent";
import About from "./components/AboutComponent";
import Experience from "./components/ExpComponent";
import Portfolio from "./components/PortfolioComponent";
import Contact from "./components/ContactComponent";
import "./App.css";

function App() {
  return (
    <div>
      <div className="nav">
        <SitewideNavbar />
      </div>
      <div className="lander">
        <Main />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="experience">
        <Experience />
      </div>
      <div className="portf">
        <Portfolio />
      </div>
      <div className="contactdiv">
        <Contact />
      </div>
    </div>
  );
}

export default App;
