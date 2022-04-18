import React, { Component } from "react";
import "../styles/CV.css";
import Title from "./Title";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Education from "./Education";

class CV extends Component {
  render() {
    return (
      <div id="CV">
        <Title data={this.props.data[0]} />
        <Contact data={this.props.data[0]} />
        <Experiences data={this.props.data[1]} />
        <Education data={this.props.data[2]} />
      </div>
    );
  }
}

export default CV;
