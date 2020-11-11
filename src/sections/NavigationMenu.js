import React, { Component } from "react";
import data from "../data.json";
import "./NavigationMenu.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class NavigationMenu extends Component {

  render() {
    return (
      <div>
        <div id="navbar">
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={50}
            duration={300}
            onSetActive={this.handleSetActive}
          >
            <div>
              <a href="#news">Skills</a>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={50}
            duration={300}
            onSetActive={this.handleSetActive}
          >
            <div>
              <a href="">Aboutme</a>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="homee"
            spy={true}
            smooth={true}
            offset={50}
            duration={300}
            onSetActive={this.handleSetActive}
          >
            <div>
              <a href="">Home</a>
            </div>
          </Link>

        </div>
      </div>
    );
  }
}
export default NavigationMenu;
