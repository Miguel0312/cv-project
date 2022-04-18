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

    this.state = { data, imgURL: "", description: "" };
    this.cvRef = React.createRef();
  }

  updateAppData(data) {
    this.setState({ data });
  }

  updateAppImg(imgURL) {
    this.setState({ imgURL });
  }

  updateAppDescription(text) {
    this.setState({ description: text });
  }

  render() {
    console.log(this.state.description);
    return (
      <div>
        <Navbar />
        <div id="content">
          <Form
            sections={this.sections}
            updateApp={this.updateAppData.bind(this)}
            cvRef={this.cvRef}
            updateAppImg={this.updateAppImg.bind(this)}
            updateAppDescription={this.updateAppDescription.bind(this)}
          />
          <CV data={this.state.data} ref={this.cvRef} imgURL={this.state.imgURL} description={this.state.description} />
        </div>
      </div>
    );
  }
}

export default App;
