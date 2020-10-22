import React from "react";
import SitewideNavbar from "./components/NavbarComponent";
import Main from "./components/MainComponent";
import "./App.css";

function App() {
  return (
    <div className="nav">
      <SitewideNavbar />
      <Main />
    </div>
  );
}

export default App;
