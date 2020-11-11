import React, { Component } from "react";
import data from "../data.json";

const DownIcon =(props) => {

  
   return(
    <div
    onClick = {props.onClick}
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "-34px",
      transform: "translateY(-51px)",
    }}
  >
    <div
      style={{
        maxWidth: "30px",
      }}
    >
      <img src={props.icons} />
    </div>
  </div>
   )
    }
export default DownIcon;
