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

  updateImg(e) {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      this.props.updateFormImg(URL.createObjectURL(file));
      return;
    }
    this.props.updateFormImg("");
  }

  updateDescription(e) {
    this.props.updateFormDescription(e.target.value);
  }

  createAdditionalInformation(dynamic) {
    if (!dynamic)
      return (
        <div>
          <label>
            Photo
            <input
              type="file"
              id="photo"
              accept="image/png, image/jpg, image/jpeg"
              onChange={this.updateImg.bind(this)}
            ></input>
          </label>
          <textarea rows="5" placeholder="Description" onChange={this.updateDescription.bind(this)}></textarea>
        </div>
      );
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
              {this.createAdditionalInformation(dynamic)}
            </div>
          );
        })}
        {this.createAddButton(dynamic)}
      </div>
    );
  }
}

export default Section;
