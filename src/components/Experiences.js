import React, { Component } from "react";

class Experiences extends Component {
  render() {
    const { data } = this.props;
    return (
      <div id="experiences">
        <h2>Experience</h2>
        {data.map((e) => {
          const { content } = e;
          return (
            <div className="exp" key={e.id + "exp"}>
              <p key={e.id + "date"} className="date">
                {content[3] + " - " + content[4]}
              </p>
              <p key={e.id + "pos"} className="position">
                {content[0]}
              </p>
              <p key={e.id + "comp"} className="company">
                {content[1] + ", " + content[2]}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experiences;
