import React, { useContext, useEffect } from "react";
import { useStyles } from "./styles";
import NavBar from "../../components/NavBar";
import { AuthContext } from "../../context/auth/Auth";
import backend from "../../clients/backemd.client";
import AnimatedMessengerModal from "../../components/ChatHistory";
import ChatPortal from "../../components/Portal";
function MainLayout(props) {
  const classes = useStyles();
  console.log("renders Mainlayout");
  return (
    <>
      <NavBar />
      <div className={classes.container}>{props.children}</div>
      {/*<ChatHistory />*/}
    </>
  );
}

export default MainLayout;
