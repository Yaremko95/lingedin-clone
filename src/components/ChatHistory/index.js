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
import { AuthContext } from "../../context/auth/Auth";
import { socket } from "../../context/socket/sockets";

function ChatHistory(props) {
  const classes = useStyles();
  const { chats, setChatOpen, openedChats, socket } = useContext(SocketContext);
  const { user } = useContext(AuthContext);
  const handleChatOpen = (id) => {
    console.log(id);
    const chatExists = Object.keys(chats).find(
      (chatId) => chats[chatId].userId === id
    );
    if (!chats[chatExists]) {
      console.log("create new chat");
      const participants = [id, user.id];
      socket.emit("join", { parts: participants });
      socket.on("roomId", (data) => {
        console.log(data);
        setChatOpen(data.id);
      });
    } else if (!openedChats.find((chatId) => chatId === chats[chatExists].id)) {
      setChatOpen(chats[chatExists].id);
    }
  };
  return (
    <div style={{ height: "290px", overflowY: "scroll" }}>
      <ChatHeader toggleModal={props.toggleModal} show={props.show} />
      <div className={classes.searchContainer}>
        <Search handleChatOpen={handleChatOpen} />
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
