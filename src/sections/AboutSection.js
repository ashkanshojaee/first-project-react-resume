import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import DownIcon from "../components/DownIcon";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class AboutSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{background: this.props.background}}>
        <Fullpage className=" second">
          <h3 className="aboutme" style={{ color: this.props.color }}>{data.sections[0].title}</h3>
          <div className="paragraphs">
            {data.sections[0].items.map((p) => {
              return <p style={{ color: this.props.color }} className="contentabout">{p.content}</p>;
            })}
          </div>
          <div className="paragraphs1">
            {data.sections[0].items.map((p) => {
              return <p className="descabout" style={{ color: this.props.color }}>{p.desc}</p>;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={50}
          duration={300}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icons={data.icons.down} />
        </Link>
        <Element name="skill" className="element" />
      </div>
    );
  }
}
export default AboutSection;
