import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";

class AboutSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{background: this.props.background}}>
      <Fullpage className=" third" >
        <h3 style={{color: this.props.color}}>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map((eachSkill) => {
            return (
                <SkillCard skill = {eachSkill} />
            );
          })}
        </div>
      </Fullpage>
      </div>
    );
  }
}
export default AboutSection;
