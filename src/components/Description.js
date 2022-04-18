import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div id="description">
        <h2>Description</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Description;
