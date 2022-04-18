import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import Form from "./components/Form";
import CV from "./components/CV";

var personalInformation = require("./assets/personalInformation.json");
var experience = require("./assets/experience.json");
var education = require("./assets/education.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.sections = [personalInformation, experience, education];
    const data = [];
    for (let i = 0; i < this.sections.length; i += 1) {
      data.push([{ content: new Array(this.sections[i].informations.length).fill("") }]);
    }

    this.state = { data };
    this.cvRef = React.createRef();
  }

  updateAppData(data) {
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id="content">
          <Form sections={this.sections} updateApp={this.updateAppData.bind(this)} cvRef={this.cvRef} />
          <CV data={this.state.data} ref={this.cvRef} />
        </div>
      </div>
    );
  }
}

export default App;
