import React, { Component } from "react";

class Education extends Component {
  render() {
    const { data } = this.props;
    return (
      <div id="education">
        <h2>Education</h2>
        {data.map((e) => {
          const { content } = e;
          return (
            <div className="edu" key={e.id + "exp"}>
              <p key={e.id + "date"} className="date">
                {content[4] + " - " + content[5]}
              </p>
              <p key={e.id + "uni"} className="university">
                {content[0] + ", " + content[1]}
              </p>
              <p key={e.id + "deg"} className="degree">
                Degree: {content[2]}
              </p>
              <p key={e.id + "sub"} className="subject">
                Subject: {content[3]}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
