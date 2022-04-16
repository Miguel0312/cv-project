import React, { Component } from "react";
import uniqid from "uniqid";
import "../styles/Form.css";

class Section extends Component {
  render() {
    const { title, informations } = this.props.section;
    return (
      <div className="section">
        <h2 className="title">{title}</h2>
        {informations.map((info) => {
          const id = uniqid();
          return <input key={id} type={info.type} placeholder={info.name}></input>;
        })}
      </div>
    );
  }
}

export default Section;
