import React from "react";
import { useStyles } from "./styles";

function Card(props) {
  const classes = useStyles();
  return (
    <div
      className={
        props.padding ? classes.container + " isPadding" : classes.container
      }
    >
      {props.children}
    </div>
  );
}

export default Card;
