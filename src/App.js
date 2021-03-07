import React, { Component } from "react";
import Header from "./components/Header";
import Personal from "./components/Personal";
import EducationalExp from "./components/EducationalExp";
import './App.css';
import WorkHistory from "./components/WorkHistory";

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Personal />
        <EducationalExp />
        <WorkHistory />
      </div>
    );
  };
};

export default App;
