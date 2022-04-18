import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { content } = this.props.data[0];
    console.log(this.props.imgURL);
    return (
      <div id="contact">
        <div id="imgContainer">
          <img src={this.props.imgURL} alt="" />
        </div>
        <h2>Personal Details</h2>
        <h3>Address</h3>
        <p>{content[3]}</p>
        <h3>Phone Number</h3>
        <p>{content[4]}</p>
        <h3>Email</h3>
        <p>{content[5]}</p>
      </div>
    );
  }
}

export default Contact;
