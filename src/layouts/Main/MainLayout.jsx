import React, { useContext, useEffect } from "react";
import { useStyles } from "./styles";
import NavBar from "../../components/NavBar";
import { AuthContext } from "../../context/auth/Auth";
import backend from "../../clients/backemd.client";
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
