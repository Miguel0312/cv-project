import React, { Component } from "react";
import uniqid from "uniqid";

class Informations extends Component {
  constructor(props) {
    super(props);
    const data = new Array(props.informations.length);
    for (let i = 0; i < data.length; i++) {
      data[i] = { id: uniqid(), text: "" };
    }
    this.state = { data };
  }

  updateData(e, index) {
    e.preventDefault();
    const tempData = this.state.data;
    tempData[index].text = e.target.value;
    this.setState({
      data: tempData,
    });
  }

  render() {
    const { data } = this.state;
    const { informations } = this.props;
    return (
      <div>
        {informations.map((info, index) => {
          return (
            <input
              key={data[index].id}
              type={info.type}
              placeholder={info.name}
              value={data[index].text}
              onChange={(e) => this.updateData(e, index)}
            ></input>
          );
        })}
      </div>
    );
  }
}

export default Informations;
