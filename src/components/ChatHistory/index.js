import React, { createContext, useContext, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { useSpring, animated } from "react-spring";
import { Portal } from "../Portal";
import ChatHeader from "../ChatHeader";
import { SocketContext } from "../../context/socket/SocketProvider";
import ChatConversation from "../ChatConversation";
import { List } from "@material-ui/core";

import uniqid from "uniqid";
import Search from "../Search";

function ChatHistory(props) {
  const classes = useStyles();
  const { chats } = useContext(SocketContext);

  return (
    <div style={{ height: "290px", overflowY: "scroll" }}>
      <ChatHeader toggleModal={props.toggleModal} show={props.show} />
      <div className={classes.searchContainer}>
        <Search />
      </div>

      <List>
        {" "}
        {Object.keys(chats).map((chat) => (
          <ChatConversation chat={chats[chat]} key={uniqid()} />
        ))}
      </List>
    </div>
  );
}

export default ChatHistory;
