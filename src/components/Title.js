import React, { Component } from "react";

class Title extends Component {
  render() {
    const { content } = this.props.data[0];
    return (
      <div id="Title">
        <p id="name">{content[0] + " " + content[1]}</p>
        <p id="position">{content[2]}</p>
      </div>
    );
  }
}

export default Title;
