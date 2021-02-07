import React from "react";
import { useStyles } from "./styles";
import NavBar from "../components/NavBar";
function MainLayout(props) {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.container}>{props.children}</div>
    </>
  );
}

export default MainLayout;
