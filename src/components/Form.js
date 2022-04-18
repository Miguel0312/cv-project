import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import Section from "./Section";
import uniqid from "uniqid";
import "../styles/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let i = 0; i < this.props.sections.length; i += 1) {
      const id = uniqid();
      const content = new Array(this.props.sections[i].informations.length).fill("");
      data.push([{ id, content }]);
    }
    this.state = { data };
  }

  updateFormData(sectionIndex, content) {
    const newData = this.state.data;
    newData[sectionIndex] = content;
    this.setState({ data: newData });
    this.props.updateApp(this.state.data);
  }

  printButton() {
    return (
      <button
        id="printButton"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Generate PDF
      </button>
    );
  }

  render() {
    const { sections } = this.props;
    return (
      <form>
        {sections.map((section, index) => {
          return <Section key={index} section={section} updateForm={this.updateFormData.bind(this, index)}></Section>;
        })}
        <ReactToPrint trigger={this.printButton} content={() => this.props.cvRef.current}></ReactToPrint>
      </form>
    );
  }
}

export default Form;
