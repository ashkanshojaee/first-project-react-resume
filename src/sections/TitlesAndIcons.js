import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import NavigationMenu from "./NavigationMenu";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class TitlesAndIcons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{background: this.props.background}} >
        <Element name="homee" className="element" />

        <Fullpage className=" first"  >
          <h1 className="title"  style={{ color: this.props.color }}>{data.title}</h1>

          <div>
            <h2  style={{ color: this.props.color }}>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            <div className="icons-wrapper github">
              <SocialIcon url={data.links.github} />
            </div>
            <div className="icons-wrapper linkedin">
              <SocialIcon url={data.links.linkedin} />
            </div>
            <div className="icons-wrapper email">
              <SocialIcon url={data.links.email} />
            </div>
            <div className="icons-wrapper instagram">
              <SocialIcon url={data.links.instagram} />
            </div>
            <div className="icons-wrapper whatsapp">
              <SocialIcon url={data.links.whatsapp} />
            </div>
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={50}
          duration={300}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icons={data.icons.down} />
        </Link>
        <Element name="aboutme" className="element" />
      </div>
    );
  }
}
export default TitlesAndIcons;
