import React, { Component } from "react";

import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Snow from "../src/components/Snow";
import data from "./data.json";
import NavigationMenu from "./sections/NavigationMenu";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color_first: "#F67E7D",
      color_second: "#ffb997",
      color_third: "#0b032d",
      background_first: "#0b032d",
      background_second: "#74546a",
      background_third: "#843b62",
      counter: 0,
    };
  }
  changeColor1 = () => {
    let rang1 = ["#cb0000", "#d4dde1", "#c4dfe6", "#F67E7D"];
    let rang2 = ["#cb0000", "white", "#c4dfe6", "#ffb997"];
    let rang3 = ["#f67e7d", "#d4dde1", "#c4dfe6", "#0b032d"];
    let zamine1 = ["#50312f", "#335252", "#07575b", "#0b032d"];
    let zamine2 = ["#e4ea8c", "#2d3033", "#07575b", "#74546a"];
    let zamine3 = ["#3f6c45", "#aa4b41", "#07575b", "#843b62"];
    if (this.state.counter > 3) {
      this.setState({
        counter: 0,
        color_first: "#e6df44",
        color_second:"#e6df44",
        color_third: "#e6df44",
        background_first: " #063852",
        background_second: " #063852",
        background_third: " #063852",
      });
    } else
      this.setState({
        color_first: rang1[this.state.counter],
        color_second: rang2[this.state.counter],
        color_third : rang3[this.state.counter],
        background_first: zamine1[this.state.counter],
        background_second: zamine2[this.state.counter],
        background_third: zamine3[this.state.counter],
        counter: this.state.counter + 1,
      });
    console.log(this.state.counter);
  };
  render() {
    return (
      <div className="App">
        <NavigationMenu />
        <img
          className="ChangeColor"
          src={data.fun.magic}
          onClick={this.changeColor1}
        />
        <Snow followMouse="off" snowStick="off" />

        <TitlesAndIcons
          color={this.state.color_first}
          background={this.state.background_first}
        />

        <AboutSection
          color={this.state.color_second}
          background={this.state.background_second}
        />

        <SkillSection
        color={this.state.color_third}
        background={this.state.background_third}
        />
      </div>
    );
  }
}

export default App;
