import React, { Component } from "react";
import data from "../data.json";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
          <div className="skill-title-wrapper">
            <h4>{skill.content.title}</h4>
          </div>
          <div className="image-wrapper">
          <img src={skill.content.image} height="100px" />
        </div>
        <div>
          <h6>{skill.content.time}</h6>
        </div>
      </div>
    );
  }
}
export default SkillCard;
