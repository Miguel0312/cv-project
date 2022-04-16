import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import Form from "./components/Form";

var personalInformation = require("./assets/personalInformation.json");
var experience = require("./assets/experience.json");
var education = require("./assets/education.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.sections = [personalInformation, experience, education];
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Form sections={this.sections}/>
      </div>
    );
  }
}

export default App;
