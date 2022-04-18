import React, { Component } from "react";
import "../styles/Form.css";
import Informations from "./Informations";
import uniqid from "uniqid";

class Section extends Component {
  constructor(props) {
    super(props);
    const id = uniqid();
    this.state = {
      data: [{ id: id, content: new Array(this.props.section.informations.length).fill("") }],
    };
  }

  addInfo(e) {
    e.preventDefault();
    const id = uniqid();
    this.setState(
      {
        data: this.state.data.concat({ id: id, content: new Array(this.props.section.informations.length).fill("") }),
      },
      () => {
        this.props.updateForm(this.state.data);
      }
    );
  }

  deleteInfo(e, id) {
    e.preventDefault();
    const newInfo = this.state.data.filter((e) => e.id !== id);
    this.setState(
      {
        data: newInfo,
      },
      () => {
        this.props.updateForm(this.state.data);
      }
    );
  }

  updateSectionData(id, text, index) {
    const newData = this.state.data.map((e) => {
      if (e.id === id) {
        e.content[index] = text;
      }
      return e;
    });
    this.setState({
      data: newData,
    });
    this.props.updateForm(this.state.data);
  }

  createDeleteButton(dynamic, id) {
    if (dynamic)
      return (
        <button onClick={(e) => this.deleteInfo(e, id)} key={id + "d"}>
          Delete
        </button>
      );
    return;
  }

  createAddButton(dynamic) {
    if (dynamic) return <button onClick={(e) => this.addInfo(e)}>Add</button>;
    return;
  }

  render() {
    const { title, dynamic, informations } = this.props.section;
    return (
      <div className="section">
        <h2 className="title">{title}</h2>
        {this.state.data.map((d) => {
          return (
            <div key={d.id + "div"}>
              <Informations
                informations={informations}
                key={d.id}
                updateSection={this.updateSectionData.bind(this, d.id)}
              ></Informations>
              {this.createDeleteButton(dynamic, d.id)}
            </div>
          );
        })}
        {this.createAddButton(dynamic)}
      </div>
    );
  }
}

export default Section;
