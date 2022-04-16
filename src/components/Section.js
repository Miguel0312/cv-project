import React, { Component } from "react";
import "../styles/Form.css";
import Informations from "./Informations";
import uniqid from "uniqid";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoIds: [uniqid()],
    };
  }

  addInfo(e) {
    e.preventDefault();
    this.setState({
      infoIds: this.state.infoIds.concat(uniqid()),
    });
  }

  deleteInfo(e, id) {
    e.preventDefault();
    const newInfo = this.state.infoIds.filter((e) => e !== id);
    this.setState({
      infoIds: newInfo,
    });
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
        {this.state.infoIds.map((id) => {
          return (
            <div key={id + "div"}>
              <Informations informations={informations} key={id} id={id}></Informations>
              {this.createDeleteButton(dynamic, id)}
            </div>
          );
        })}
        {this.createAddButton(dynamic)}
      </div>
    );
  }
}

export default Section;
