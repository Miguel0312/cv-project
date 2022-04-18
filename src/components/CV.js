import React, { Component } from "react";
import "../styles/CV.css";
import Title from "./Title";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Education from "./Education";
import Description from "./Description"

class CV extends Component {
  render() {
    return (
      <div id="CV">
        <Title data={this.props.data[0]} />
        <Contact data={this.props.data[0]} imgURL={this.props.imgURL} />
        <Description description={this.props.description}></Description>
        <Experiences data={this.props.data[1]} />
        <Education data={this.props.data[2]} />
      </div>
    );
  }
}

export default CV;
