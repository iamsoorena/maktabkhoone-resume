import React, { Component } from "react";

import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <TitlesSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
