import React, { Component } from "react";
import SnowStorm from "react-snowstorm";

const Snow = (props) => {
  return (
    <div followMouse={props.followMouse} snowStick={props.snowStick}>
      <SnowStorm followMouse={props.followMouse} snowStick={props.snowStick} />
    </div>
  );
};

export default Snow;
