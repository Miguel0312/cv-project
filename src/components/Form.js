import React, { Component } from "react";
import Section from "./Section";
import uniqid from "uniqid";
import "../styles/Form.css"

class Form extends Component {
  render() {
    const { sections } = this.props;
    return (
      <form>
        {sections.map((section) => {
          const id = uniqid();
          return <Section key={id} section={section}></Section>;
        })}
      </form>
    );
  }
}

export default Form;
